let randomNum1 = Math.floor(Math.random() * 6 + 1);
let randomNum2 = Math.floor(Math.random() * 6 + 1);

document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${randomNum1}.png`);

document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${randomNum2}.png`);

let title = document.querySelector("h1");

if (randomNum1 > randomNum2) {
  title.textContent = "🚩Player 1 wins!";
} else if (randomNum1 === randomNum2) {
  title.textContent = "Draw!";
} else {
  title.textContent = "Player 2 wins!🚩";
}
