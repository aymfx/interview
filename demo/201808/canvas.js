let app = document.getElementById("app");

app.style.width = 400 + 'px';
app.style.height = 400 + 'px';


let ctx = app.getContext("2d");
app.setAttribute("height", app.clientHeight);
app.setAttribute("width", app.clientWidth);

console.log(ctx);

/* ctx.fillStyle = "#ff0000";

ctx.fillRect(10,10,50,50);

ctx.fillStyle = "rgba(0,0,255,.5)";

ctx.fillRect(30,30,50,50);

ctx.clearRect(40,40,10,10) */


/* arc(x, y, radius, startAngle, endAngle, counterclockwise) ：以 (x,y) 为圆心绘
制一条弧线，弧线半径为 radius ，起始和结束角度（用弧度表示）分别为 startAngle 和
endAngle 。最后一个参数表示 startAngle 和 endAngle 是否按逆时针方向计算，值为 false
表示按顺时针方向计算。 */

/* 
ctx.beginPath();
ctx.arc(100,100,100,0,2*Math.PI,false)

// moveTo(x, y) ：将绘图游标移动到 (x,y) ，不画线。
ctx.moveTo(190,100)
ctx.arc(100,100,90,0,2*Math.PI,false)
ctx.moveTo(100,100)
// lineTo(x, y) ：从上一点开始绘制一条直线，到 (x,y) 为止
ctx.lineTo(100,30)
ctx.moveTo(100,100)
ctx.lineTo(35,100)
ctx.stroke();
var fontSize = 18;
ctx.font =`bold ${fontSize}px Arial`;
ctx.textAlign = 'center';
ctx.textBaseline = 'top';

ctx.textAlign = 'center';
console.log(ctx.measureText('12').width)
while(ctx.measureText('12').width>16){
    fontSize--;
    ctx.font =`bold ${fontSize}px Arial`;
}
ctx.fillText('12',100,10)

ctx.strokeText("Font size is " + fontSize + "px", 30, 50); */

/* ctx.textAlign = 'start';
ctx.fillText('12',100,20)

ctx.textAlign = 'end';
ctx.fillText('12',100,40) */

// ctx.arc(100,100,100,0,2*Math.PI,false)

// moveTo(x, y) ：将绘图游标移动到 (x,y) ，不画线。
/* ctx.moveTo(190,100)
ctx.arc(100,100,90,0,2*Math.PI,false) */

//translate(x, y) ：将坐标原点移动到 (x,y) 。执行这个变换之后，坐标(0,0)会变成之前由 (x,y)表示的点。

// 变换原点
/* ctx.translate(100, 100);
ctx.rotate(3)
ctx.moveTo(0,0)

ctx.lineTo(0,-65)

ctx.moveTo(0,0)
ctx.lineTo(-20,0)
ctx.stroke() */

/* let img = new Image();

img.src = './a.jpg';
img.onload = ()=>{
    ctx.drawImage(img,10,10,100,100)
} */
/* ctx.shadowOffsetX = 5
ctx.shadowOffsetY = 5
ctx.shadowBlur=4;
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
ctx.fillStyle = '#f00';
ctx.fillRect(10,10,50,50) */
// let gradient = ctx.createLinearGradient(30,30,80,80)
// gradient.addColorStop(0,"white")
// gradient.addColorStop(1,"black")
// ctx.fillStyle = gradient;


/* var gradient2 = ctx.createRadialGradient(55, 55, 10, 55, 55, 30);
gradient2.addColorStop(0,"white")
gradient2.addColorStop(1,"black")
ctx.fillStyle = gradient2;
ctx.fillRect(30, 30, 50, 50); */

/* var img = document.images[0],
    imageData, data, i, len, average, red, green, blue, alpha;

ctx.drawImage(img,0, 0, 50, 50);

imageData = ctx.getImageData(0, 0, 50, 50);

data = imageData.data;

for (i = 0, len = data.length; i < len; i++) {
    red = data[i];
    console.log(red)
    green = data[i + 1];
    blue = data[i + 2];
    alpha = data[i + 3];
    //求得 rgb 平均值
    average = Math.floor((red + green + blue) / 3);
    //设置颜色值，透明度不变
    data[i] = average;
    data[i + 1] = average;
    data[i + 2] = average;
    imageData.data = data;
    ctx.putImageData(imageData,0,0)
} */


ctx.fillStyle = "#ff0000";
ctx.fillRect(10, 10, 50, 50);
//修改全局透明度
// ctx.globalAlpha = 0.5;

//设置合成操作
ctx.globalCompositeOperation = "lighter";
//绘制蓝色矩形
ctx.fillStyle = "rgba(0,0,255,1)";
ctx.fillRect(30, 30, 50, 50);

context.globalAlpha = 0;
















/* var imgURI = app.toDataURL("image/png");
// 显示图像
var image = document.createElement("img");
image.src = imgURI;
document.body.appendChild(image); */



// ctx.moveTo()






