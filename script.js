let player = "X";
let gameOver = false;
let counter = 0;
let click = new Audio("click.mp3");
let win = new Audio("win.mp3");
let draw = new Audio("draw.mp3");
let start = 0;

// start.play();
const changePlayer = () => {
  // start.play();
  return player === "X" ? "O" : "X";
};

const checkWon = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winPos.forEach((ele) => {
    if (
      boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
      boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText &&
      boxTexts[ele[0]].innerText !== ""
    ) {
      document.getElementById("status").innerText =
        "Player " + boxTexts[ele[0]].innerText + " wins !!";
      win.play();
      gameOver = true;
    }
  });
};

let boxes = document.getElementsByClassName("box");

// console.log(boxes);
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxText");

  box.addEventListener("click", () => {
    click.play();
    if (boxText.innerText === "" && !gameOver) {
      boxText.innerText = player;
      counter++;
      //   console.log(counter);
      player = changePlayer();
      checkWon();
      document.getElementsByClassName("player")[0].innerText = player;
      if (counter == 9 && !gameOver) {
        document.getElementById("status").innerText = "Game Draw!";
        draw.play();
      }
    }
  });
});

let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", () => {
  start.currentTime = 0;
  let boxTexts = document.querySelectorAll(".boxText");
  boxTexts.forEach((boxText) => {
    boxText.innerText = "";
  });
  player = "X";
  gameOver = false;
  counter = 0;
  document.getElementById("status").innerText = " ";
});
