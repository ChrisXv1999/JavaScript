//@ts-ignore
const codeRain: HTMLCanvasElement = document.querySelector('#code-rain');

const fillText: string[] = ['x', 'v'];
const screenWidth: number = document.body.clientWidth;
const screenHeight: number = document.body.clientHeight;
codeRain.width = screenWidth;
codeRain.height = screenHeight;

//@ts-ignore
const ctx: CanvasRenderingContext2D = codeRain.getContext('2d');
const pipeList: number[] = Array.from({ length: Math.ceil(screenWidth / 10) }).fill(0) as number[];
function rain(ctx: CanvasRenderingContext2D, randerText: string[], pipeList: number[]): void {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
ctx.fillRect(0, 0, screenWidth, screenHeight);
    ctx.fillStyle = Math.random() > 0.5 ? 'rgb(255,0,0)' : 'rgb(0,255,0)'
    pipeList.forEach((item: number, idx: number) => {
        ctx.fillText(randerText[Math.floor(randerText.length * Math.random())], idx * 10, item + 10);
        pipeList[idx] = item > screenHeight || Math.random() > 0.9 ? 0 : item + 10;
    })
}
setInterval(() => rain(ctx, fillText, pipeList), 100)

