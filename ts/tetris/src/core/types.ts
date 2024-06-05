import { SquareGroup } from "./SquareGroup";

export interface Point{
    readonly x:number,
    readonly y:number
}
export interface IViewer {
    //显示
    show():void
    //移除
    remove():void
}
export type Shape = Point[];
export enum MoveDirction  {
    LEFT,
    RIGHT,
    DOWN,
}


export enum GameStatus {
    INIT,
    PLAYING,
    PAUSE,
    OVER,
}

export interface GameViewer {
    swap(nextTeris:SquareGroup,curTeris:SquareGroup):void,
    showNext(teris:SquareGroup):void,
    showScore(score:number):void
}