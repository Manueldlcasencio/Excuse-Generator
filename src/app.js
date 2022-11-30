/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse =
    who[Math.round(Math.round(Math.random() * 3))] +
    " " +
    action[Math.round(Math.round(Math.random() * 3))] +
    " " +
    what[Math.round(Math.round(Math.random() * 2))] +
    " " +
    when[Math.round(Math.round(Math.random() * 4))];

  document.querySelector("#excuse").innerHTML = excuse;
};
