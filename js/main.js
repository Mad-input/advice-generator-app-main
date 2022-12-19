import getAdvice from "./API.js";

const advice = await getAdvice();
const title = document.getElementById("title");
const content = document.getElementById("content");

let newAdvice = advice[Math.round(Math.random() * advice.length)];
title.innerText = `ADVICE #${newAdvice.id}`;
content.innerText = `"${newAdvice.content}"`;

const btnGenerate = document.getElementById("btnGenerate");

btnGenerate.addEventListener("click", () => {
  let newAdvice = advice[Math.round(Math.random() * advice.length)];
  title.innerText = `ADVICE #${newAdvice.id}`;
  content.innerText = `"${newAdvice.content}"`;
});
