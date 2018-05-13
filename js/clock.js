var clock = document.getElementById('clock');
var clockCan = clock.getContext('2d');
var time = new Date();
var hours = time.getHours();//获取时
var minutes = time.getMinutes();//获取分
var seconds = time.getSeconds();//获取秒

// 画时钟样式
// 外圈
clockCan.beginPath();
clockCan.lineWidth = 1;
clockCan.arc(200,200,100,0,Math.PI*2,true);
clockCan.closePath();
clockCan.stroke();
// 时针
clockCan.moveTo(200,200);
clockCan.lineWidth = 3;
clockCan.lineTo(200,150);
clockCan.stroke();
// // 分针
// clockCan.moveTo(200,200);
// clockCan.lineWidth = 2;
// clockCan.lineTo(210,130);
// clockCan.stroke();
// // 秒针
// clockCan.moveTo(200,200);
// clockCan.lineWidth = 1;
// clockCan.lineTo(200,110);
// clockCan.stroke();