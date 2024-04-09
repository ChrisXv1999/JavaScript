const game = new Game();
game.timer = null;
game.speed = 300;
game.score = 0;
game.init = function(){
    ground.init();
    snake.init(ground);
    document.addEventListener('keydown',(e)=>{
        const keyDirectionMap = {
            ArrowRight: 0,
            ArrowDown: 1,
            ArrowUp: 2,
            ArrowLeft: 3,
        }
        if(keyDirectionMap[e.key] ^ snake.direction !== 3) {
            snake.direction = keyDirectionMap[e.key];
        }
        e.preventDefault();
    });
}
game.over = function(){
    clearInterval(game.timer);
}
game.start = function(){
    this.timer = setInterval(()=>{
        snake.move();
    },this.speed)
}
game.init()