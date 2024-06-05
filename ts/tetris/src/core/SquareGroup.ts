import { Square } from "./Square";
import { Point, Shape } from "./types";
export class SquareGroup {
    private _squares!: readonly Square[];
    protected rotateClockwise:boolean = true
    constructor(private _shape: Shape, private _centerPoint: Point, private _color:string = 'red'){
        this._squares = this._shape.map(({x,y})=>{
            return new Square({
                x: this._centerPoint.x + x,
                y: this._centerPoint.y + y
            },this._color);
        })
    }
    get squares(){
        return this._squares
    }
    get shape(){
        return this._shape
    }
    get centerPoint(){
        return this._centerPoint
    }
    set centerPoint(p:Point){
        this._centerPoint = p;
        this.centerPointerChange();
    }
    private centerPointerChange(){
        this._shape.forEach(({x,y},idx)=>{
            this._squares[idx].point = {
                x: this._centerPoint.x + x,
                y: this._centerPoint.y + y
            }
        })
    }
    getRotateShape():Shape{
        if(this.rotateClockwise){
            return this._shape.map(({x,y})=>({x:-y,y:x}))
         }else {
             return this._shape.map(({x,y})=>({x:y,y:-x}))
         }
    }
    rotateShape(){
        const shape:Shape = this.getRotateShape();
        this._shape = shape;
        this.centerPointerChange();
    }
}
type inputPoint = {
    x:number|string,
    y?:number|string
} | {
    x?:number|string,
    y:number|string
}
function formatPoint(oP:Point,newP:inputPoint){
    
}