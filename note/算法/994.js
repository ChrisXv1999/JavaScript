const ex = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
function orangesRotting(grid) {
    const rows = grid.length,
        clos = grid[0].length;
    let n = 0
    while (++n) {
        const queue = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < clos; j++) {
                if (grid[i][j] === 2) {
                    if(grid[i] && grid[i][j+1] === 1){
                        queue.push([i, j+1])
                    }
                    if(grid[i] && grid[i][j-1] === 1){
                        queue.push([i, j-1])
                    }
                    if(grid[i-1] && grid[i-1][j] === 1){
                        queue.push([i-1, j])
                    }
                    if(grid[i+1] && grid[i+1][j] === 1){
                        queue.push([i+1, j])
                    }
                }
            }
        }
        if(queue.length === 0) break;
        for (let i = 0; i < queue.length; i++) {
            const [x, y] = queue[i];
            grid[x][y] = 2;
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < clos; j++) {
            if (grid[i][j] === 1) return -1;
        }
    }
    return n -1;
}
console.log(orangesRotting(ex))