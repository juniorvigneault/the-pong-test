class Ball {
  constructor() {
    // ball object
    this.ball = {
      x: canvasSize.w / 2,
      y: canvasSize.h / 2,
      vx: 2,
      vy: 4,
      d: 75,
      color: {
        r: 0,
        b: 0,
        g: 200
      }
    };
    // cocentric rectangles object
    this.rectangles = {
      x: undefined,
      y: undefined,
      w: 100,
      h: 100,
      color: 255,
      num: 20,
      drawn: 0
    }

    this.ballApear = true;
    setInterval(() => {
      this.ballApear = false;
    }, 500);
    setInterval(() => {
      this.ballApear = true;
    }, 1000);
  };
  // This method will draw the ball
  update() {
    // move, bounce ball
    if (gameStart) {
      this.move();
      this.displayBall();
      this.fancyRectangles();
    } else {
      if (this.ballApear) {
        this.displayBall();
      }
    }
  };


  // draw ball
  displayBall() {
    push();
    noStroke();
    fill(this.ball.color.r, this.ball.color.g, this.ball.color.b);
    ellipse(this.ball.x, this.ball.y, this.ball.d);
    pop();
    // change ball color accordingly to its y position
    this.ball.color.r = map(this.ball.y, 800, 0, 0, 255);
  }

  move() {
    // ball bounces on walls, changes background color everytime and adds one point when
    // ball leaves opposite screen
    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    if (this.ball.x > width - this.ball.d / 2) {
      score.playerScore += 1;
      gameStart = false;
      this.ball.x = width/2;
      this.ball.y = height/2;
      setTimeout(() => {
        gameStart = true;
      }, 2000);


    } else if (this.ball.x + 100 < this.ball.d / 2) {
      score.computerScore += 1;
      gameStart = false;
      this.ball.x = width/2;
      this.ball.y = height/2;
      setTimeout(() => {
        gameStart = true;
      }, 2000);
    };

    if (this.ball.y > height - this.ball.d / 2) {
      this.ball.vy = -this.ball.vy;
      randomColors();
    } else if (this.ball.y < this.ball.d / 2) {
      this.ball.vy = -this.ball.vy;
      randomColors();
    };
  };

  // draw cocentric rectangles
  fancyRectangles() {
    // while(this.rectangles.drawn < this.rectangles.num){
    this.rectangles.w = 100;
    this.rectangles.h = 100;
    this.rectangles.color = 0;
    for (let i = 0; i < 20; i++) {
      push();
      rectMode(CENTER);
      stroke(this.rectangles.color,this.rectangles.color,this.rectangles.color,this.rectangles.color)
      fill(0, 0, 0, 0);
      rect(this.ball.x, this.ball.y, this.rectangles.w, this.rectangles.h);
      this.rectangles.w += 100;
      this.rectangles.h += 100;
      this.rectangles.color = random(0,255);
      pop();
      //  }
    }
  }
};
