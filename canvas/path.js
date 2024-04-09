//线
// CanvasRenderingContext2D.beginPath()：开始绘制路径。
// CanvasRenderingContext2D.closePath()：结束路径，返回到当前路径的起始点，会从当前点到起始点绘制一条直线。如果图形已经封闭，或者只有一个点，那么此方法不会产生任何效果。
// CanvasRenderingContext2D.moveTo()：设置路径的起点，即将一个新路径的起始点移动到(x，y)坐标。
// CanvasRenderingContext2D.lineTo()：使用直线从当前点连接到(x, y)坐标。
// CanvasRenderingContext2D.fill()：在路径内部填充颜色（默认为黑色）。
// CanvasRenderingContext2D.stroke()：路径线条着色（默认为黑色）。
// CanvasRenderingContext2D.fillStyle：指定路径填充的颜色和样式（默认为黑色）。
// CanvasRenderingContext2D.strokeStyle：指定路径线条的颜色和样式（默认为黑色）
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(600,0);
ctx.lineTo(600,600);
ctx.lineTo(0,600);
ctx.closePath();
setWidth(ctx,10);
ctx.setLineDash([15, 5]);
// setLineCap(ctx,'square')
ctx.stroke()
ctx.moveTo(60,10);
ctx.lineTo(120,60);
ctx.lineTo(10,60);
setWidth(ctx)
ctx.closePath();
ctx.strokeStyle = '#f99';
ctx.stroke();
//样式
// CanvasRenderingContext2D.lineWidth：指定线条的宽度，默认为1.0。
/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Number} [width=1] 
 */
function setWidth(ctx,width = 1){
    ctx.lineWidth = width;
}
// CanvasRenderingContext2D.lineCap：指定线条末端的样式，有三个可能的值：butt（默认值，末端为矩形）、round（末端为圆形）、square（末端为突出的矩形，矩形宽度不变，高度为线条宽度的一半）。
/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {'round' | 'butt' | 'square'} [type='butt']
 */
function setLineCap(ctx,type = 'butt'){
    ctx.lineCap = type;
}
// CanvasRenderingContext2D.lineJoin：指定线段交点的样式，有三个可能的值：round（交点为扇形）、bevel（交点为三角形底边）、miter（默认值，交点为菱形)。
// CanvasRenderingContext2D.miterLimit：指定交点菱形的长度，默认为10。该属性只在lineJoin属性的值等于miter时有效。
// CanvasRenderingContext2D.getLineDash()：返回一个数组，表示虚线里面线段和间距的长度。
// CanvasRenderingContext2D.setLineDash()：数组，用于指定虚线里面线段和间距的长度。

//矩形
// CanvasRenderingContext2D.rect()：绘制矩形路径。
// CanvasRenderingContext2D.fillRect()：填充一个矩形。
// CanvasRenderingContext2D.strokeRect()：绘制矩形边框。
// CanvasRenderingContext2D.clearRect()：指定矩形区域的像素都变成透明。
ctx.rect(200,200,50,50);
ctx.stroke();
ctx.fillRect(300,200,50,50)
//弧线
// CanvasRenderingContext2D.arc()：通过指定圆心和半径绘制弧形。
// CanvasRenderingContext2D.arcTo()：通过指定两根切线和半径绘制弧形。
ctx.moveTo(350,300);
ctx.arc(300,300,50,0,Math.PI * 2, true);
ctx.moveTo(550,550);
ctx.arcTo(500, 500, 550, 500, 25)
ctx.stroke();

//文本
// CanvasRenderingContext2D.fillText()：在指定位置绘制实心字符。
// CanvasRenderingContext2D.strokeText()：在指定位置绘制空心字符。
// CanvasRenderingContext2D.measureText()：返回一个 TextMetrics 对象。
// CanvasRenderingContext2D.font：指定字型大小和字体，默认值为10px sans-serif。
// CanvasRenderingContext2D.textAlign：文本的对齐方式，默认值为start。
// CanvasRenderingContext2D.direction：文本的方向，默认值为inherit。
// CanvasRenderingContext2D.textBaseline：文本的垂直位置，默认值为alphabetic。
ctx.font = '24px sans-serif'
ctx.strokeText('',280,300)
//渐变色和图像填充
// CanvasRenderingContext2D.createLinearGradient()：定义线性渐变样式。
// CanvasRenderingContext2D.createRadialGradient()：定义辐射渐变样式。
// CanvasRenderingContext2D.createPattern()：定义图像填充样式。
//阴影
// CanvasRenderingContext2D.shadowBlur：阴影的模糊程度，默认为0。
// CanvasRenderingContext2D.shadowColor：阴影的颜色，默认为black。
// CanvasRenderingContext2D.shadowOffsetX：阴影的水平位移，默认为0。
// CanvasRenderingContext2D.shadowOffsetY：阴影的垂直位移，默认为0

//API
//CanvasRenderingContext2D.drawImage()