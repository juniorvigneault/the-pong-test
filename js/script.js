"use strict";

// Canvas dimensions
let canvasSize = {
  w: 1000,
  h: 800
}
// add ball
let ball = new Ball();

let gameStart = false;

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
  color: 200,
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

  setTimeout(() => {
    gameStart = true;
  }, 3000);
};

// update all the functions and methods of script and objects
function draw() {
  background(bg.r, bg.g, bg.b);
  paddles.update(ball);
  points();
  ball.update();
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
  textFont('Helvetica');
  textSize(score.size);
  textAlign(CENTER, CENTER);
  text(score.playerScore + ' - ' + score.computerScore, score.x, score.y);
  pop();
};
