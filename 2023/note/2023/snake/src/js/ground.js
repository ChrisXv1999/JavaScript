const ground = new Ground(BASE_X_POINT, BASE_Y_POINT, X_LEN * SQUARE_WIDTH, Y_LEN * SQUARE_WIDTH);
ground.init = function (el) {
    this.viewContent.style.position = 'relative';
    this.viewContent.style.width = this.w + 'px';
    this.viewContent.style.height = this.h + 'px';
    this.viewContent.style.margin = '50px auto';
    el || (el = document.body);
    el.appendChild(this.viewContent);
    this.squareList = (() => {
        let list = [];
        for (let i = 0; i < Y_LEN; i++) {
            let row = [];
            for (let j = 0; j < X_LEN; j++) {
                if (i === 0 || j === 0 || i === Y_LEN - 1|| j === X_LEN - 1) {
                    const stone = SquareFactory.create('Stone',i,j)
                    row.push(stone);
                } else {
                    const floor = SquareFactory.create('Floor',i,j);
                    row.push(floor);
                }
            }
            list.push(row);
        }
        list.flat().forEach(s=> {
            this.viewContent.appendChild(s.viewContent)
        })
        return list;
    })();
}
ground.remove = function(x,y){
    let square = this.squareList[x][y];
    this.viewContent.removeChild(square.viewContent);
    this.squareList[x][y] = null;
}
ground.append = function(type,x,y){
    const square = SquareFactory.create(type,x,y);
    this.remove(x,y);
    this.viewContent.appendChild(square.viewContent);
    this.squareList[x][y] = square;
    return square
}
ground.getSquare = function(x,y){
    return this.squareList[x][y];
}