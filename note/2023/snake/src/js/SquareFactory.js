function SquareFactory() {

}
const SFInstance = new SquareFactory();
SquareFactory.prototype.init = function (square, color) {
    square.viewContent.style.position = 'absolute';
    square.viewContent.style.top = square.y * SQUARE_WIDTH + 'px';
    square.viewContent.style.left = square.x * SQUARE_WIDTH + 'px';
    square.viewContent.style.width = square.w + 'px';
    square.viewContent.style.height = square.h + 'px';
    square.viewContent.style.backgroundColor = color;
}
SquareFactory.create = function (type, x, y) {
    const newSquare = new SquareFactory.prototype[type](x, y);
    return newSquare
}
SquareFactory.prototype.Floor = function (x, y) {
    const floor = new Floor(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
    this.init(floor, '#f99');
    return floor;
}
SquareFactory.prototype.Floor.prototype = SFInstance;

SquareFactory.prototype.Stone = function (x, y) {
    const stone = new Stone(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
    this.init(stone, '#000');
    return stone;
}
SquareFactory.prototype.Stone.prototype = SFInstance;

SquareFactory.prototype.Food = function (x, y) {
    const food = new Food(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
    this.init(food, '#999');
    return food;
}
SquareFactory.prototype.Food.prototype = SFInstance;

SquareFactory.prototype.SnakeHead = function (x, y) {
    const snaleHead = new SnakeHead(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
    this.init(snaleHead, '#09f');
    snaleHead.update(x,y)
    return snaleHead;
}
SquareFactory.prototype.SnakeHead.prototype = SFInstance;
SquareFactory.prototype.SnakeBody = function (x, y) {
    const snaleBody = new SnakeBody(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
    this.init(snaleBody, '#099');
    return snaleBody;
}
SquareFactory.prototype.SnakeBody.prototype = SFInstance;