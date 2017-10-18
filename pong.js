const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');



class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Rect {
    constructor(x = 0, y = 0) {
        this.pos = new Vec(0,0);
        this.size = new Vec(x, y);
    }
    get left() {
        return this.pos.x - this.size.x / 2;
    }
    get right() {
        return this.pos.x + this.size.x / 2;
    }
}

class Ball extends Rect {
    constructor () {
        super(10, 10);
        this.vel = new Vec;
    }
}

const ball = new Ball;

let lastTime;
function callback (millis) {
    if (lastTime) {
        update((millis - lastTime) / 1000);
    }
    lastTime = millis;
    requestAnimationFrame(callback);
}

ball.vel.y = 50;
function update(dt) {
    ball.pos.x += ball.vel.x * dt;
    ball.pos.y += ball.vel.y * dt;

    if(ball.left < 0 || ball.right > canvas.width) ball.vel.x *= -1;

    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#fff';
    context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y)
}

callback();