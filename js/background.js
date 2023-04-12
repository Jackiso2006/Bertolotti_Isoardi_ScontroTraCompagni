let closeBtn = document.getElementById("closeBtn");
let closeMobile = document.getElementById("anchorMobile");

let gamePage = document.URL.slice(-10);


if (gamePage == "ver=gamePg") {
    closeBtn.href = "../game.html";
    closeMobile.href = "../game.html";
    document.body.style.backgroundImage = "url('../img/" + localStorage.getItem("bkg") + ".jpg')";
} else if (gamePage == "ver=homePg") {
    closeBtn.href = "../index.html";
    closeMobile.href = "../index.html";

} else if (gamePage == "ver=scelta") {
    closeBtn.href = "../scelta.html";
    closeMobile.href = "../scelta.html";
} else {
    closeBtn.href = "../punteggi.html";
    closeMobile.href = "../punteggi.html";
}