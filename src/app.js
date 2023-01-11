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
  let opinion = [" and I hate it.", ". I actually love it.", ". It was neat."];
  let excuse =
    who[Math.round(Math.floor(Math.random() * who.length))] +
    " " +
    action[Math.round(Math.floor(Math.random() * action.length))] +
    " " +
    what[Math.round(Math.floor(Math.random() * what.length))] +
    " " +
    when[Math.round(Math.floor(Math.random() * when.length))] +
    opinion[Math.round(Math.floor(Math.random() * opinion.length))];

  document.querySelector("#excuse").innerHTML = excuse;

  //Cosas para el segundo ID
  let who2 = ["Hector", "Jesus", "God"];
  let how = ["asked for", "ordered for", "begged for"];
  let what2 = [
    "more coke.",
    "a bit of patience.",
    "our understanding.",
    "another text."
  ];
  let face = [
    '<i class="bi bi-emoji-smile-fill"></i>',
    '<i class="bi bi-emoji-wink-fill"></i>',
    '<i class="bi bi-heartbreak-fill"></i>'
  ];

  let extra =
    who2[Math.round(Math.floor(Math.random() * who2.length))] +
    " " +
    how[Math.round(Math.floor(Math.random() * how.length))] +
    " " +
    what2[Math.round(Math.floor(Math.random() * what2.length))] +
    " " +
    face[Math.round(Math.floor(Math.random() * face.length))];
  document.querySelector("#extra").innerHTML = extra;
};
