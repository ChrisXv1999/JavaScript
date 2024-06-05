import { Point, IViewer } from "./types"
export class Square {
    constructor( private _point: Point, private _color: string){

    }
    private _viewer?: IViewer
    get viewer():IViewer|undefined{
        return this._viewer
    }
    set viewer(v:IViewer){
        this._viewer = v;
        this.pointHasChange();
    }

    get point():Point{
        return this._point
    }
    set point(point:Point){
        this._point = point;
        this.pointHasChange()
    }
    private pointHasChange(){
        this._viewer?.show();
    }
    get color():string{
        return this._color
    }
}