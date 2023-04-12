/* 
la prima volta che è stata caricata la pagina non assegno nulla e dopo la assegno
così quando riesegue il controllo vede che è già stata assegnata e non
riproduce l'animazione iniziale
*/

if (sessionStorage.alreadyLoaded == undefined) {
    sessionStorage.alreadyLoaded = "true";
} else {
    document.getElementById("sectionAnimation").remove();
    tutorial.remove();
    azzera();
}


document.querySelectorAll("div.name")[0].textContent = player1Name;
document.querySelectorAll("div.name")[1].textContent = player2Name;

/* document.getElementById("resumeBtn").href = "./game.html?ver=gamePg"*/

pauseBtn.addEventListener("click", function () {

    let menu = document.createElement("div");
    menu.id = "menu";
    menu.innerHTML = `<div><span class="material-symbols-rounded">pause</span><span>PAUSA</span></div><div><a id="resumeBtn">Riprendi</a><a id="optionAnchor">Opzioni</a><a href="./index.html">Home</a><a href="./punteggi.html">Classifica</a></div>`;
    document.body.appendChild(menu);

    let optionAnchor = document.getElementById("optionAnchor");
    settingsBtn.href = "./settings/crediti.html?&ver=gamePg";
    optionAnchor.href = "./settings/crediti.html?&ver=gamePg";

    document.body.style.backgroundBlendMode = "darken";
    let main = document.querySelector("main");
    main.style.opacity = "0.5";

    document.getElementById("resumeBtn").addEventListener("click", function () {
        menu.remove();

        document.body.style.backgroundBlendMode = "";
        main.style.opacity = "";
    });
});

theme.addEventListener("click", function () {
    if (icon.textContent.includes("light")) {

        icon.textContent = "dark_mode";

        for (let i = 0; i < allType.length; i++)
            allType[i].classList.replace("lightMode", "darkMode");

        joystick[0].classList.replace("lightMode", "darkMode");
        joystick[1].classList.replace("lightMode", "darkMode");

        header.classList.replace("lightHeader", "darkHeader");

    } else {
        icon.textContent = "light_mode";

        for (let i = 0; i < allType.length; i++)
            allType[i].classList.replace("darkMode", "lightMode");

        joystick[0].classList.replace("darkMode", "lightMode");
        joystick[1].classList.replace("darkMode", "lightMode");

        header.classList.replace("darkHeader", "lightHeader");
    }
});