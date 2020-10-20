let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c stands for context
let c = canvas.getContext('2d');
// c.fillStyle = 'lightgrey';
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
// startAngle = at what angle would we like to start drawing our arc (radian value) && endAngle = how long would we like the arc angle to go on for (radian value)
// .arc(x, y, radius, startAngle, endAngle, drawCounterClockwise:Bool)
// c.beginPath(); //separates this circle from line above
// c.arc(250, 200, 30, 0, Math.PI*2, false);
// c.stroke();


// OOP
function Circle(x, y, dx, dy, radius, red, green, blue){
  this.red = red,
  this.green = green,
  this.blue = blue,
  this.x = x,
  this.y = y,
  this.dx = dx,
  this.dy = dy,
  this.radius = radius,
  //DRAW
  this.draw = function(){
    c.beginPath(); //separates this circle from line above
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.strokeStyle = 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
    c.stroke();
    c.fill();
  },
  //UPDATE
  this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx; //x velocity is 4px
    this.y += this.dy; //y velocity is 4px

    this.draw(); //calling the draw function here
    console.log('blurp');
  }
}


// circle.update();
let circleArray = [];

for(let i = 0; i < 50; i++){
  let radius = 30;
  let x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius);
  var dx = (Math.random() - 0.5) * 5;
  let y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
  let dy = (Math.random() - 0.5) * 5;
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  circleArray.push(new Circle(x, y, dx, dy, radius, red, green, blue));
}

// ANIMATE CIRCLE

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for(let i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}
// animate();