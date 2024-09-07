let mouseX: number = -1000;
let mouseY: number = -1000;

window.onmousemove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  if(mouseX===window.innerWidth || mouseX===0) mouseX=-1000;
  if(mouseY>=window.innerHeight-10 || mouseY===0) mouseY=-1000;
};

class Circle {
  x: number = 500;
  y: number = 500;
  dx: number = 1;
  dy: number = 1;
  radius: number = 50;
  context: any = 0;
  color: string = "#000000";
  minRadius: number = 2;

  constructor(
    radius: number,
    dx: number,
    dy: number,
    x: number,
    y: number,
    context: any,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.context = context;
    this.color = color;
    this.minRadius = radius;
  }

  draw = () => {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;
    this.context.stroke();
    this.context.fill();
  };

  move = () => {
    if (this.x > window.innerWidth - this.radius) this.dx *= -1;
    if (this.x < this.radius) this.dx *= -1;
    if (this.y > window.innerHeight - this.radius) this.dy *= -1;
    if (this.y < this.radius) this.dy *= -1;
    this.x += this.dx;
    this.y += this.dy;
    
    this.draw();
  };
}

export default Circle;
