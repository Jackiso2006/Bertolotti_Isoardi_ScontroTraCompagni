var closeBtn = document.getElementById("closeBtn");
var closeMobile = document.getElementById("anchorMobile");
const anchor = document.querySelectorAll(".anchor");

var url = document.URL.split("?")[1];

var gamePage = document.URL.slice(-10);
var background = document.URL.slice(-25).slice(4, -11);

if (gamePage == "ver=Sijava") {
    closeBtn.href = "../game/game.html?" + url.slice(0, -11);
    closeMobile.href = "../game/game.html?" + url.slice(0, -11);
    document.querySelector("body").style.backgroundImage = "url('../img/" + background + ".jpg')";

} else if (gamePage == "ver=Nojava") {
    closeBtn.href = "../game/NOJAVA.html?" + url.slice(0, -11);
    closeMobile.href = "../game/NOJAVA.html?" + url.slice(0, -11);
}
else if (gamePage == "ver=Homepg"){
    closeBtn.href = "../home/index.html";
    closeMobile.href = "../home/index.html";
    document.querySelector("body").style.backgroundImage = "url('../img/" + background + ".jpg')";
}
else {
    closeBtn.href = "../home/scelta.html";
    closeMobile.href = "../home/scelta.html";
    document.querySelector("body").style.backgroundImage = "url('../img/" + background + ".jpg')";
}

anchor.forEach(val => {
    val.href = val.href + "?" + url;
})