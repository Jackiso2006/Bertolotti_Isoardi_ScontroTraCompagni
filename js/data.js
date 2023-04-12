/* VARIABILI ==> tutorial.js */
let tutStep = -1;
let tutorial = document.getElementById("tutorial");
let message = document.getElementById("messageTutorial");
let separator = document.getElementById("separator");
let nextBtn = document.getElementById("next");
let header = document.querySelector("header");

let pauseBtn = document.getElementById("pauseBtn");
let volumeBtn = document.getElementById("volumeBtn");
let volumeRange = document.getElementById("volumeRange");
let theme = document.getElementById("themeMode");
let settingsBtn = document.getElementById("settingsBtn");

let allType = [pauseBtn, volumeBtn, volumeRange, theme, settingsBtn];


/* VARIABILI ==> script.js */
let icon = document.getElementById("themeIcon");
let joystick = document.querySelectorAll(".joystick");
let player1Name = localStorage.getItem("player1");
let player2Name = localStorage.getItem("player2");

/* VARIABILI ==> movement.js */

let pl1 = localStorage.getItem("pl1");
let pl2 = localStorage.getItem("pl2");
let ab1 = localStorage.getItem("ab1");
let ab2 = localStorage.getItem("ab2");
let ab3 = localStorage.getItem("ab3");
let ab4 = localStorage.getItem("ab4");
let bkg = localStorage.getItem("bkg");