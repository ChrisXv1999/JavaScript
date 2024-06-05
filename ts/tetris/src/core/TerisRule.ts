import { Point, Shape, MoveDirction } from "./types";
import GameConfig from './GameConfig'
import { SquareGroup } from "./SquareGroup";
import { Square } from "./Square";
export class TerisRule {
    static moveEnable(shape: Shape, targetPoint: Point,exists:Square[]):boolean{
        const targetSquarePoint: Point[] = shape.map(({x,y})=>{
            return {
                x:x + targetPoint.x,
                y:y + targetPoint.y
            }
        })
        const res = targetSquarePoint.some(({x,y})=>{
            return x >= GameConfig.panelSize.width || x <0 || y >= GameConfig.panelSize.height || y < -1
        })
        if(res) return false
        return !targetSquarePoint.some(({x,y})=>exists.some(sq=>sq.point.x === x && sq.point.y === y))
    }
    static moveDirectly(teris: SquareGroup, direction: MoveDirction,exists:Square[]){
        let centerPoint:Point;
        if(direction === MoveDirction.DOWN) {
            centerPoint = {
                x: teris.centerPoint.x,
                y: teris.centerPoint.y
            }
            while(this.moveEnable(teris.shape,{x:centerPoint.x,y:centerPoint.y+1},exists)){
                centerPoint = {
                    x: centerPoint.x,
                    y: centerPoint.y+1
                }
            }
            teris.centerPoint = centerPoint;
        }
    }

    static move(teris: SquareGroup, direction: MoveDirction,exists:Square[]){
        let centerPoint:Point;
        if(direction === MoveDirction.DOWN) {
            centerPoint = {
                x: teris.centerPoint.x,
                y: teris.centerPoint.y + 1
            }
        }else if(direction === MoveDirction.LEFT) {
            centerPoint = {
                x: teris.centerPoint.x -1,
                y: teris.centerPoint.y
            }
        }else {
            centerPoint = {
                x: teris.centerPoint.x + 1,
                y: teris.centerPoint.y
            }
        }

        if(this.moveEnable(teris.shape,centerPoint,exists)){
            teris.centerPoint = centerPoint;
            return true
        }
        return false
    }

    static rotate(teris:SquareGroup,exists:Square[]){
        const nShape = teris.getRotateShape();
        if(this.moveEnable(nShape,teris.centerPoint,exists)){
            teris.rotateShape();
        }
    }
}