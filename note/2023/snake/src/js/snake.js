const snake = new Snake();
snake.init = function (ground) {
    const snakeHead = ground.append('SnakeHead', SNAKE_INIT_X, SNAKE_INIT_Y);
    const snakeList = [snakeHead];
    for (let i = 1; i < SNAKE_INIT_LEN; i++) {
        const snakeBody = ground.append('SnakeBody', SNAKE_INIT_X - i, SNAKE_INIT_Y);
        snakeList.push(snakeBody);
    }
    snakeList.reduce((c, n) => c.next = n);
    snakeList.reduceRight((c, n) => c.previous = n);
    this.head = snakeHead;
    this.tail = snakeList.pop();
    this.direction = SNAKE_INIT_DIRECTION;
    this.ground = ground;
    return snakeHead
}
snake.strategies = {
    MOVE(snake,next,ground){
        const snakeBody = ground.append('SnakeBody',snake.head.x,snake.head.y);
        snakeBody.next = snake.head.next;
        snakeBody.next.previous = snakeBody;
        ground.append('Floor',snake.tail.x,snake.tail.y)
        snake.tail = snake.tail.previous;
        const snakeHead = ground.append('SnakeHead',next.x,next.y);
        snakeHead.next = snakeBody;
        snakeBody.previous = snakeHead;
        snake.head = snakeHead;
    },
    EAT(snake,next,ground){
        
    },
    DIE(snake,next,ground){
        clearInterval(game.timer)
        alert("game over")
    }
}
snake.move = function () {
    const [incrementX,incrementY] = DIRECTION_ENUM[this.direction];
    const next = this.ground.getSquare(this.head.x + incrementX, this.head.y + incrementY);
    this.strategies[next.touch()](this,next,this.ground);
}