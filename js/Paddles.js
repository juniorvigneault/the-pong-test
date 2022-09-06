class Paddles {
  constructor(px,py, cx,cy, w,h) {
    this.paddle = {
      playerX: px,
      playerY: py,
      computerX: cx,
      computerY: cy,
      speed : 8,
      w: w,
      h: h,
      color: {
        r: 20,
        b: 100,
        g: 200
      }
    }

    this.changeDirection;
  }

  // This method will draw the paddle
  update() {
    push();
    noStroke();
    rectMode(CENTER);
    fill(this.paddle.color.r, this.paddle.color.g, this.paddle.color.b)
    rect(this.paddle.playerX, this.paddle.playerY, this.paddle.w, this.paddle.h);
    rect(this.paddle.computerX, this.paddle.computerY, this.paddle.w, this.paddle.h);

    pop();

    this.movePlayer();
    this.moveComputer();
  }

  // move the player paddle up and down
  movePlayer() {
    // if player presses up arrow, player paddle goes up
    // if player presses down arrow, player paddle goes down
    // paddle position is contrained to the dimensions of the canvas
    this.paddle.playerY = constrain(this.paddle.playerY, this.paddle.h/2, canvasSize.h - this.paddle.h/2)
    if (keyIsDown(UP_ARROW)) {
    this.paddle.playerY -= this.paddle.speed;

    } else if (keyIsDown(DOWN_ARROW)) {
      this.paddle.playerY += this.paddle.speed;
    }
  }

  moveComputer(){
    this.paddle.computerY = constrain(this.paddle.computerY, this.paddle.h/2, canvasSize.h - this.paddle.h/2)
}
}
