//@ts-ignore
namespace ts {
  const canvas: HTMLCanvasElement = document.querySelector(
    "#canvas"
  ) as HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
  //globalAlpha  透明度
  //   ctx.globalAlpha = 0.1
  function drawPath(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 50);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.strokeStyle = "#0f0";
    ctx.stroke();
    ctx.fillStyle = "#f99";
    ctx.fill();
  }
  // drawPath(ctx);
  function drawCircle(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI, true);
    //arcTo
    ctx.closePath();
    ctx.stroke();
  }

  function drawRect(ctx: CanvasRenderingContext2D): void {
    //画笔颜色
    ctx.fillStyle = "#f99";
    //填充矩形 x y w h
    ctx.fillRect(0, 0, 100, 100);

    ctx.fillStyle = "#f33";
    //填充矩形 x y w h
    ctx.fillRect(200, 0, 100, 100);
    // ctx.fillStyle = '#000';
    // 描边
    // ctx.strokeRect(199,0,100,100)
    //clearRect 清除指定区域
    ctx.clearRect(201, 1, 98, 98);
  }

  function drawDashLine(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();

    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.setLineDash([10, 5]);
    // lineCap 线条末端样式 butt 方形 round 圆形 square 方形 增加一个方形区域 高度是线条宽度的一半
    //闭合线条是看不出来效果的 有虚线的除外
    ctx.lineCap = "square";
    // 拐点样式 round 圆角 bevel 平角 miter 默认
    // ctx.lineJoin = 'round'
    // console.log(ctx.getLineDash());
    ctx.stroke();
  }
  //   drawDashLine(ctx);
  function drawText(
    ctx: CanvasRenderingContext2D,
    text: string,
    type: "fillText" | "strokeText"
  ) {
    ctx.font = "50px 宋体";
    ctx[type](text, 50, 50);
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.direction = "ltr";
  }
  //   drawText(ctx,'chris','fillText')
  function drawImage(ctx: CanvasRenderingContext2D) {
    const img = new Image(200, 100);
    img.src = "./yoona.jpg";
    img.onload = () => {
      document.body.appendChild(img);
      /**
       * @param Image  x  y w h 切割的位置 x y w h
       * */
      //  移动canvas原点坐标
      //   ctx.save();
      //   ctx.rotate(Math.PI / 180 * 15)
      //   ctx.translate(100, 100);
      //   ctx.scale(0.5,0.5)
      //   transform  变形矩阵
      // globalCompositeOperation  重叠时如何显示
      // clip 裁剪
      ctx.drawImage(img, 0, 0, 200, 100);
      //   ctx.restore();
      ctx.beginPath();
      ctx.arc(20, 20, 10, 0, Math.PI * 2);
      ctx.clip();
    };
  }
  //   drawImage(ctx);

  init();

  function init() {
    draw(ctx);
  }

  function draw(ctx) {
    requestAnimationFrame(function step() {
      drawDial(ctx); //绘制表盘
      drawAllHands(ctx); //绘制时分秒针
      requestAnimationFrame(step);
    });
  }
  /*绘制时分秒针*/
  function drawAllHands(ctx) {
    let time = new Date();

    let s = time.getSeconds();
    let m = time.getMinutes();
    let h = time.getHours();

    let pi = Math.PI;
    let secondAngle = (pi / 180) * 6 * s; //计算出来s针的弧度
    let minuteAngle = (pi / 180) * 6 * m + secondAngle / 60; //计算出来分针的弧度
    let hourAngle = (pi / 180) * 30 * h + minuteAngle / 12; //计算出来时针的弧度

    drawHand(hourAngle, 60, 6, "red", ctx); //绘制时针
    drawHand(minuteAngle, 106, 4, "green", ctx); //绘制分针
    drawHand(secondAngle, 129, 2, "blue", ctx); //绘制秒针
  }
  /*绘制时针、或分针、或秒针
   * 参数1：要绘制的针的角度
   * 参数2：要绘制的针的长度
   * 参数3：要绘制的针的宽度
   * 参数4：要绘制的针的颜色
   * 参数4：ctx
   * */
  function drawHand(angle, len, width, color, ctx) {
    ctx.save();
    ctx.translate(150, 150); //把坐标轴的远点平移到原来的中心
    ctx.rotate(-Math.PI / 2 + angle); //旋转坐标轴。 x轴就是针的角度
    ctx.beginPath();
    ctx.moveTo(-4, 0);
    ctx.lineTo(len, 0); // 沿着x轴绘制针
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  /*绘制表盘*/
  function drawDial(ctx) {
    let pi = Math.PI;

    ctx.clearRect(0, 0, 300, 300); //清除所有内容
    ctx.save();

    ctx.translate(150, 150); //一定坐标原点到原来的中心
    ctx.beginPath();
    ctx.arc(0, 0, 148, 0, 2 * pi); //绘制圆周
    ctx.stroke();
    ctx.closePath();

    for (let i = 0; i < 60; i++) {
      //绘制刻度。
      ctx.save();
      ctx.rotate(-pi / 2 + (i * pi) / 30); //旋转坐标轴。坐标轴x的正方形从 向上开始算起
      ctx.beginPath();
      ctx.moveTo(110, 0);
      ctx.lineTo(140, 0);
      ctx.lineWidth = i % 5 ? 2 : 4;
      ctx.strokeStyle = i % 5 ? "blue" : "red";
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
    ctx.restore();
  }
}
