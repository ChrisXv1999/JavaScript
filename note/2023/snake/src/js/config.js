const X_LEN = 30;
const Y_LEN = 30;

const SQUARE_WIDTH = 15;

const BASE_X_POINT = 200;
const BASE_Y_POINT = 100;
// SNAKE_INIT_X must be greater than or equal SNAKE_INIT_LEN
const SNAKE_INIT_X = 3;
const SNAKE_INIT_Y = 1;
const SNAKE_INIT_LEN = 3;
const DIRECTION_RIGHT = 0;
const DIRECTION_DOWN = 1;
const DIRECTION_UP = 2;
const DIRECTION_LEFT = 3;
const SNAKE_INIT_DIRECTION = DIRECTION_RIGHT;
//R DOWN L TOP
const DIRECTION_ENUM = [[1,0],[0,1],[0,-1],[-1,0]]
/** 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h
 * @returns object  
 */
function Square(x,y,w,h, viewContent){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.viewContent = viewContent || document.createElement('div');
}
//集合所有策略消息
const STRATEGY_ENUM = {
    move: 'MOVE',
    eat: 'EAT',
    die: 'DIE',
}
Square.prototype.touch = function(){
    return this.touch_type
}
Square.prototype.update = function(x,y){
    this.x = x;
    this.y = y;
    this.viewContent.style.top = y * SQUARE_WIDTH + 'px';
    this.viewContent.style.left = x * SQUARE_WIDTH + 'px';
}
const Floor = tool.extends(Square);
Floor.prototype.touch_type = STRATEGY_ENUM.move;

const Stone = tool.extends(Square);
Stone.prototype.touch_type = STRATEGY_ENUM.die;

const Food = tool.single(Square);
Food.prototype.touch_type = STRATEGY_ENUM.eat;

const SnakeHead = tool.single(Square);
const SnakeBody = tool.extends(Square);
SnakeBody.prototype.touch_type = STRATEGY_ENUM.die;

const Snake = tool.single();
const Ground = tool.single(Square);

const Game = tool.single();

