/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardSuits = ["♦", "♥", "♠", "♣"];
const cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const suitColor = ["#FC0D1C", "#000000"];

window.onload = function() {
  const getRandomSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
  const getRandomCardNumber =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  const getRandomColor =
    suitColor[Math.floor(Math.random() * suitColor.length)];

  const randomCard = document.querySelectorAll(".suit");

  randomCard.forEach(
    drawSuit => (drawSuit.innerHTML = `<p>${getRandomSuit}</p>`)
  );
  randomCard.forEach(drawColor => (drawColor.style.color = getRandomColor));

  const cardValue = document.querySelectorAll(".card-value");

  cardValue.forEach(
    drawNumber => (drawNumber.innerHTML = `<h1>${getRandomCardNumber}</h1>`)
  );
};
