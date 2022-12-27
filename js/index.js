const canvas = document.querySelector("#game");

const ctx = canvas.getContext("2d");

const ground = new Image();

ground.src = "/img/field.png";

const foodImg = new Image();

foodImg.src = "/img/food.png";

let box = 32;

let score = 0;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};
let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

function drawGame() {
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage();
}

let game = setInterval(drawGame, 100);
