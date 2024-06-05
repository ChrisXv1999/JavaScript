import { SquareGroup } from "./SquareGroup";
import { Point, Shape } from "./types";
import { getRandom } from "./util";
export class TMirrorShape extends SquareGroup {
    constructor(_centerPoint: Point, _color: string) {
        super([
            { x: -1, y: 0 },
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: -1 },
        ], _centerPoint, _color)
    }
}
export class LShape extends SquareGroup {
    constructor(_centerPoint: Point, _color: string) {
        super([
            { x: -2, y: 0 },
            { x: -1, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: -1 },
        ], _centerPoint, _color)
    }
}
export class SquareShape extends SquareGroup {
    constructor(_centerPoint: Point, _color: string) {
        super([
            { x: 0, y: 0 },
            { x: -1, y: 0 },
            { x: 0, y: -1 },
            { x: -1, y: -1 },
        ], _centerPoint, _color)
    }
    rotateShape(): void {
        
    }
}
export class SShape extends SquareGroup {
    constructor(_centerPoint: Point, _color: string) {
        super([
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: -1 },
            { x: -1, y: -1 },
        ], _centerPoint, _color)
    }
    rotateShape(): void {
        super.rotateShape();
        this.rotateClockwise = ! this.rotateClockwise;
    }
}
export class LineShape extends SquareGroup {
    constructor(_centerPoint: Point, _color: string) {
        super([
            { x: -1, y: 0 },
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
        ], _centerPoint, _color)
    }
    rotateShape(): void {
        super.rotateShape();
        this.rotateClockwise = !this.rotateClockwise;
    }
}
export const shapes = [
    SShape,
    TMirrorShape,
    LShape,
    LineShape,
    SquareShape,
]
export function createTeris(centerPoint: Point) {
    const idx = getRandom(shapes.length);
    const shape = shapes[idx];
    return new shape(centerPoint,'red')
}

