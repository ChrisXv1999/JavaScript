import GameConfig from "./GameConfig";
import { Square } from "./Square";
import { SquareGroup } from "./SquareGroup";
import { createTeris } from "./Teris";
import { TerisRule } from "./TerisRule";
import { GameStatus, GameViewer, MoveDirction, Point } from "./types";

export class Game{
 private _status: GameStatus = GameStatus.INIT;
 private _curTeris?: SquareGroup
 private nextTeris!:SquareGroup
 private curPoint!:Point
 private nextPoint!:Point
 private _score:number = 0
 private _duration:number = 500
 private _timer?:any
 //是否可以使用weakset
 private _existSquareList:Square[] = [];
 //是否有必要
 private _yExistSquareList:Record<number,Square[]> = {};
 constructor(private _viwer:GameViewer){
    this.adjustPoint();
    this.nextTeris = createTeris(this.nextPoint);
    this._viwer.showNext(this.nextTeris)
 }
 start(){
    this._status = GameStatus.PLAYING;
    this.swap();
    this.autoFall();
 }
 stop(){
   this._status = GameStatus.PAUSE;
   clearInterval(this._timer);
 }
 adjustPoint(){
     this.nextPoint = {
        x: GameConfig.nextSize.width>>1,
        y: 1
     }
     this.curPoint = {
        x: GameConfig.panelSize.width>>1,
        y: 0
     }
 }
 swap(){
    if(!this._curTeris){
        this.nextTeris.centerPoint = this.curPoint;
        this._curTeris = this.nextTeris;
        this.nextTeris = createTeris(this.nextPoint);
        this._viwer.swap(this.nextTeris,this._curTeris);
    }
 }
 autoFall(){
    if(!this._curTeris || this._status !== GameStatus.PLAYING) return
    clearInterval(this._timer)
    this._timer = setInterval(()=>{
       const res = TerisRule.move(this._curTeris!,MoveDirction.DOWN,this._existSquareList)
       if(!res)this.hitBootom();
    },this._duration)
 }
 private hitBootom(){
   if(this.checkOver()){
      this.stop();
      alert('jieshu')
      return
   }
   this._existSquareList.push(...this._curTeris!.squares);
   this.distributeSquare();
   this.attemptDispel()
   this._curTeris = undefined;
   this.swap();
 }
 checkOver(){
   return this._curTeris?.squares.some(sq=>{
      return sq.point.y <= 0
   })
 }
 distributeSquare(){
   this._curTeris!.squares.forEach(sq => {
      const squareContainer =  this._yExistSquareList[sq.point.y] || (this._yExistSquareList[sq.point.y] = []);
      squareContainer.push(sq);
   });
 }
 attemptDispel(){
   const dispelY:number[] = this.canDispelSquare();
   if(dispelY.length=== 0)return;
   this.dispelSquare(dispelY);
   this.adjustExistSquare(dispelY);
   this._score +=dispelY.length;
   this._viwer.showScore(this._score);
 }
 adjustExistSquare(dispelY:number[]){
   const {length:len} = dispelY;
   const maxY = Math.max(...dispelY);
   this._existSquareList = this._existSquareList.filter(sq=>!dispelY.includes(sq.point.y)
)
   Object.keys(this._yExistSquareList).sort((a,b)=>+b-+a).forEach(y=>{
      if(+y < maxY){
         const cur:Square[] = this._yExistSquareList[+y];
         cur.forEach(sq=>{
            sq.point = {
               x: sq.point.x,
               y: sq.point.y + len
            }
         })
         this._yExistSquareList[+y+len] = cur;
         this._yExistSquareList[+y] = [];
      }
   })
   console.log(this._yExistSquareList);
   
 }
 dispelSquare(dispelY:number[]){
   dispelY.map(y=>this._yExistSquareList[y]).flat(1).forEach(sq=>{
      sq.viewer?.remove();
   })
 }
 canDispelSquare():number[]{
   const dispelY:number[]=[];
   const set:Set<number>=new Set();
   this._curTeris!.squares.forEach(sq=>{
      set.add(sq.point.y);
   })
   set.forEach(y=>{
      if(this._yExistSquareList[y].length === GameConfig.panelSize.width){
         dispelY.push(y)
      }
   })
   return dispelY
 }
 move(direction:MoveDirction){
   if(!this._curTeris)return;
   TerisRule.move(this._curTeris,direction,this._existSquareList)
 }
 down(){
   if(!this._curTeris)return;
   TerisRule.moveDirectly(this._curTeris,MoveDirction.DOWN,this._existSquareList)
 }
 rotate(){
   if(!this._curTeris)return;
   TerisRule.rotate(this._curTeris,this._existSquareList)
 }
 swtichGameStatus(){
   if(this._status === GameStatus.INIT || this._status === GameStatus.PAUSE){
      this.start()
   }else {
      this.stop();
   }
 }
}