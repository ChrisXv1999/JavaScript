import { Square } from "../Square";
import PageConfig from "./SquareConfig"
import $ from 'jquery'
import { IViewer } from "../types";
export class SquarePageViewer implements IViewer {
    private isRemove:Boolean=false
    private dom?:JQuery<HTMLElement>
    constructor(private _square: Square, private _container: JQuery<HTMLElement>){

    }
    show(): void {
        if(!this.dom){
            this.dom = $("<div>").css({
                position: 'absolute',
                ...PageConfig.SquareSize,
                border: "1px solid #ccc",
                boxSizing: "border-box"
            }).appendTo(this._container)
        }
        this.dom.css({
            left: this._square.point.x * PageConfig.SquareSize.width,
            top: this._square.point.y * PageConfig.SquareSize.height,
            background: this._square.color
        })
    }
    remove(): void {
        if(this.isRemove) return;
        this.isRemove = true;
        this.dom?.remove();
    }
}