"use strict";

// Where is the sausage dog activity

// Canvas dimensions
let canvasSize = {
  w: 1000,
  h: 800
}

// ball object
let ball = {
  x: canvasSize.w / 2,
  y: canvasSize.h / 2,
  vx: 2,
  vy: 4,
  d: 100,
  color: {
    r: 0,
    b: 0,
    g: 200
  }
};

// add both paddles
let playerPaddle = {
  x: 20,
  y: 400,
  w: 50,
  h: 200
};
let computerPaddle = {
  x: 980,
  y: 400
};

// add both paddles
let paddles = new Paddles(playerPaddle.x, playerPaddle.y, computerPaddle.x, computerPaddle.y, playerPaddle.w, playerPaddle.h);

// score object
let score = {
  playerScore: 0,
  computerScore: 0,
  x: canvasSize.w / 2,
  y: canvasSize.h / 2 + 350,
  size: 50,
  color: 100,
};

// background colors
let bg = {
  r: 200,
  g: 0,
  b: 0
};

function setup() {
  // create canvas at the middle of screen
  createCanvas(canvasSize.w, canvasSize.h);
  // ball.ballSetup();
};

// update all the functions and methods of script and objects
function draw() {
  background(bg.r, bg.g, bg.b);
  paddles.update();
  points()
  // create ball
  push();
  noStroke();
  fill(ball.color.r, ball.color.g, ball.color.b);
  ellipse(ball.x, ball.y, ball.d);
  pop();

  // ball is moving
  ball.x += ball.vx;
  ball.y += ball.vy;
  // if ball bounces on the walls, inverse speed and change bg color
  // if ball hits computer side, add one point to computer
  if (ball.x > width - ball.d / 2) {
    ball.vx = -ball.vx;
    randomColors();
    score.computerScore += 1;
  }
  else if (ball.x < ball.d / 2) {
    ball.vx = -ball.vx;
    randomColors();
    score.playerScore += 1;

  };
  if (ball.y > height - ball.d / 2 || ball.y < ball.d / 2) {
    ball.vy = -ball.vy;
    randomColors();
  };
};


// generate random colors for the background
function randomColors() {
  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
};

// draw points on canvas
function points() {
  push();
  fill(score.color);
  textFont('Helvetica')
  textSize(score.size);
  textAlign(CENTER, CENTER);
  text(score.playerScore + ' - ' + score.computerScore, score.x, score.y);
  pop();
};
