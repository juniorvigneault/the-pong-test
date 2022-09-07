class Paddles {
  constructor(px, py, cx, cy, w, h) {
    this.paddle = {
      playerX: px,
      playerY: py,
      computerX: cx,
      computerY: cy,
      speed: 8,
      w: w,
      h: h,
      color: {
        r: 20,
        b: 100,
        g: 200
      },
      offset: 35
    };

    this.changeDirection;
  };

  // This method will draw the paddle
  update(ballOBJ) {
    // if game is started, only display the paddles but they don't move
    if (gameStart) {
      this.movePlayer();
      this.moveComputer();
      this.drawPaddles();
      this.checkCollision(ballOBJ);
      this.paddle.computerY = ballOBJ.ball.y;
    } else {
      this.drawPaddles();
    }

  };

  drawPaddles() {
    push();
    noStroke();
    rectMode(CENTER);
    fill(this.paddle.color.r, this.paddle.color.g, this.paddle.color.b)
    rect(this.paddle.playerX, this.paddle.playerY, this.paddle.w, this.paddle.h);
    rect(this.paddle.computerX, this.paddle.computerY, this.paddle.w, this.paddle.h);
    pop();
  }
  // move the player paddle up and down
  movePlayer() {
    // if player presses up arrow, player paddle goes up
    // if player presses down arrow, player paddle goes down
    // paddle position is contrained to the dimensions of the canvas
    this.paddle.playerY = constrain(this.paddle.playerY, this.paddle.h / 2, canvasSize.h - this.paddle.h / 2)
    if (keyIsDown(UP_ARROW)) {
      this.paddle.playerY -= this.paddle.speed;

    } else if (keyIsDown(DOWN_ARROW)) {
      this.paddle.playerY += this.paddle.speed;
    };
  };

  moveComputer() {
    this.paddle.computerY = constrain(this.paddle.computerY, this.paddle.h / 2, canvasSize.h - this.paddle.h / 2)
  };

  checkCollision(ballOBJ) {
    // check if ball collides with computer paddle
    if (ballOBJ.ball.x + this.paddle.offset > (this.paddle.computerX - this.paddle.w / 2) &&
      ballOBJ.ball.x + this.paddle.offset < (this.paddle.computerX + this.paddle.w / 2) &&
      ballOBJ.ball.y + this.paddle.offset > (this.paddle.computerY - this.paddle.h / 2) &&
      ballOBJ.ball.y + this.paddle.offset < (this.paddle.computerY + this.paddle.h / 2)) {
      ballOBJ.ball.vx = -ballOBJ.ball.vx;
      randomColors();
      // score.playerScore += 1;
    }
    // check if ball collides with player paddle
    if (ballOBJ.ball.x - this.paddle.offset > (this.paddle.playerX - this.paddle.w / 2) &&
      ballOBJ.ball.x - this.paddle.offset < (this.paddle.playerX + this.paddle.w / 2) &&
      ballOBJ.ball.y - this.paddle.offset > (this.paddle.playerY - this.paddle.h / 2) &&
      ballOBJ.ball.y - this.paddle.offset < (this.paddle.playerY + this.paddle.h / 2)) {
      ballOBJ.ball.vx = -ballOBJ.ball.vx;
      randomColors();
      // score.computerScore += 1;
    }
  }
};
