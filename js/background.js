var closeBtn = document.getElementById("closeBtn");
var closeMobile = document.getElementById("anchorMobile");
const anchor = document.querySelectorAll(".anchor");

var url = document.URL.split("?")[1];

var gamePage = document.URL.slice(-10);
var background = document.URL.slice(-25).slice(4, -11);

if (gamePage == "ver=Sijava") {
    closeBtn.href = "../game.html?" + url.slice(0, -11);
    closeMobile.href = "../game.html?" + url.slice(0, -11);
    document.querySelector("body").style.backgroundImage = "url('../img/" + background + ".jpg')";

} else if (gamePage == "ver=Nojava") {
    closeBtn.href = "../NOJAVA.html?" + url.slice(0, -11);
    closeMobile.href = "../NOJAVA.html?" + url.slice(0, -11);
}
else if (gamePage == "ver=Homepg"){
    closeBtn.href = "../index.html";
    closeMobile.href = "../index.html";
    document.querySelector("body").style.backgroundImage = "url('../img/" + background + ".jpg')";
}
else {
    closeBtn.href = "../scelta.html";
    closeMobile.href = "../scelta.html";
    document.querySelector("body").style.backgroundImage = "url('../img/" + background + ".jpg')";
}

anchor.forEach(val => {
    val.href = val.href + "?" + url;
})
