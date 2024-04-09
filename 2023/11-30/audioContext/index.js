const audio = document.getElementsByTagName('audio')[0];
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const {height:canvasHeight,width:canvasWidth} = canvas;
let requestAnimationId;
audio.onplay = ()=>{
    init();
    draw()
}
audio.onpause = ()=> {
    cancelAnimationFrame(requestAnimationId)
}
let analyser;
let dataArray = new Uint8Array(512);
function init(){
    if(analyser)return;
    const audioCtx =  new AudioContext();
    const source = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
}
function draw(){
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    ctx.fillStyle = '#f99';
    const len = dataArray.length/6;
    const barWidth = canvasWidth / len / 2;
    for(let i=0;i<len; i++){
       const data = dataArray[i];
       const barHeight = (data / 255) * canvasHeight;
       const x1 = i * barWidth + canvasWidth/2;
       const x2 = canvasWidth/2 - (i+1)*barWidth;
       const y = canvasHeight - barHeight;
       ctx.fillRect(x1,y,barWidth-2,barHeight)
       ctx.fillRect(x2,y,barWidth-2,barHeight)
    }
    requestAnimationId = requestAnimationFrame(draw)
}