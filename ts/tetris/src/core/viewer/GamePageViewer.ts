import { Game } from "../Game";
import GameConfig from "../GameConfig";
import { Square } from "../Square";
import { SquareGroup } from "../SquareGroup";
import { GameViewer, MoveDirction } from "../types";
import SquareConfig from "./SquareConfig";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from 'jquery';
export class GamePageViewer implements GameViewer {
    constructor(private _panelDom: JQuery<HTMLElement>, private _nextDom: JQuery<HTMLElement>,private _scoreDom:JQuery<HTMLElement>) {}
    init(game:Game){
        this._panelDom.css({
            width: GameConfig.panelSize.width * SquareConfig.SquareSize.width,
            height: GameConfig.panelSize.height * SquareConfig.SquareSize.height
        })
        this._nextDom.css({
            width: GameConfig.nextSize.width * SquareConfig.SquareSize.width,
            height: GameConfig.nextSize.height * SquareConfig.SquareSize.height
        })
        $(document).on('keydown',(e:JQuery.KeyDownEvent)=>{
            if(e.which === 32){
                game.swtichGameStatus()
            }
            
            if(e.which === 37){
                game.move(MoveDirction.LEFT)
            }
            if(e.which === 38){
                game.rotate()
            }
            if(e.which === 39) {
                game.move(MoveDirction.RIGHT)
            }
            if(e.which === 40){
                game.down()
            }
            
        })
    }
    showNext(teris: SquareGroup): void {
        teris.squares.forEach(sq => { 
            sq.viewer = new SquarePageViewer(sq, this._nextDom) 
        })
    }
    swap(nextTeris:SquareGroup,curTeris:SquareGroup): void {
        curTeris.squares.forEach(sq=>{
            sq.viewer?.remove();
        })
        nextTeris.squares.forEach(sq=>{
            sq.viewer = new SquarePageViewer(sq, this._nextDom);
        })
        curTeris.squares.forEach(sq=>{
            sq.viewer = new SquarePageViewer(sq, this._panelDom);
        })
    }
    showScore(score: number): void {
        this._scoreDom.text(score);
    }
}