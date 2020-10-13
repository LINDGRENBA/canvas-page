let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c stands for context
let c = canvas.getContext('2d');
c.fillStyle = '#333';
// c.fillRect(50, 100, 300, 300);
// c.fillStyle = '#000';
// c.fillRect(200, 150, 300, 300);
// console.log(canvas);

// Line
// c.beginPath(); // separates this line from the rect above
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(349, 450);
// c.strokeStyle = "#fff";
// c.stroke();

// Arc / Circle
// startAngle = at what angle would we like to start drawing our arc (radian value)
// endAngle = how long would we like the arc angle to go on for (radian value)
// .arc(x, y, radius, startAngle, endAngle, drawCounterClockwise:Bool)
// c.beginPath(); //separates this circle from line above
// c.arc(250, 200, 30, 0, Math.PI*2, false);
// c.stroke();

for(let i = 0; i < 20; i++){
  //use Math.random() to randomize coordinants;
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI*2, false);
  c.strokeStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
  c.stroke();
}