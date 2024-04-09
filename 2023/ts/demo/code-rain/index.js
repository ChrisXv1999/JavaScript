//@ts-ignore
var codeRain = document.querySelector('#code-rain');
var fillText = ['x', 'v'];
var screenWidth = document.body.clientWidth;
var screenHeight = document.body.clientHeight;
codeRain.width = screenWidth;
codeRain.height = screenHeight;
//@ts-ignore
var ctx = codeRain.getContext('2d');
var pipeList = Array.from({ length: Math.ceil(screenWidth / 10) }).fill(0);
function rain(ctx, randerText, pipeList) {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, screenWidth, screenHeight);
    ctx.fillStyle = Math.random() > 0.5 ? 'rgb(255,0,0)' : 'rgb(0,255,0)';
    pipeList.forEach(function (item, idx) {
        ctx.fillText(randerText[Math.floor(randerText.length * Math.random())], idx * 10, item + 10);
        pipeList[idx] = item > screenHeight || Math.random() > 0.9 ? 0 : item + 10;
    });
}
setInterval(function () { return rain(ctx, fillText, pipeList); }, 100);
