/* 
la prima volta che è stata caricata la pagina non assegno nulla e dopo la assegno
così quando riesegue il controllo vede che è già stata assegnata e non
riproduce l'animazione iniziale
*/

if (sessionStorage.alreadyLoaded == undefined) {
    sessionStorage.alreadyLoaded = "true";
    localStorage.setItem("score1", "0");
    localStorage.setItem("score2", "0");
} else {
    document.getElementById("sectionAnimation").remove();
    tutorial.remove();
    separator.remove();
    azzera();

    score1Div.textContent = "Score : " + score1;
    score2Div.textContent = "Score : " + score2;

    if (actualTimer > 0) {
        resumeTimer(actualTimer);

        let minutues = Math.floor(actualTimer / 60);
        let seconds = actualTimer % 60;

        if (seconds > 9)
            timerDiv.textContent = minutues + ":" + seconds;
        else
            timerDiv.textContent = minutues + ":0" + seconds;

    } else {

        actualTimer = stopTimer();
        creaMenu("FINITO");

        let transformBtn = document.querySelector("body > #menu > div > button");
        transformBtn.textContent = "Rigioca";

        transformBtn.addEventListener("click", function () {
            localStorage.setItem("timer", "180");
            localStorage.setItem("score1", "0");
            localStorage.setItem("score2", "0");
            location.reload();
        });
    }
}

document.querySelector("div.name").textContent = player1Name;
document.querySelectorAll("div.name")[1].textContent = player2Name;

pauseBtn.addEventListener("click", function () {

    if (!document.querySelector("body > #menu"))
        creaMenu("PAUSA");
});

settingsBtn.addEventListener("click", function () {

    localStorage.setItem("timer", stopTimer());
});

themeMode.addEventListener("click", function () {
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

function creaMenu(msg) {
    actualTimer = stopTimer();

    let menu = document.createElement("div");
    menu.id = "menu";
    menu.innerHTML = `<div><span class="material-symbols-rounded">pause</span><span>` + msg + `</span></div><div><button id="resumeBtn">Riprendi</button><a href="./settings/crediti.html?ver=gamePg" id="optionAnchor">Opzioni</a><button id="homeBtn">Home</button><button id="leaderboardBtn">Classifica</button></div>`;
    document.body.appendChild(menu);

    menu.querySelector("#optionAnchor").addEventListener("click", function () {
        localStorage.setItem("timer", actualTimer);
    });

    document.body.style.backgroundBlendMode = "darken";
    let main = document.querySelector("main");
    main.style.opacity = "0.5";

    menu.querySelector("#resumeBtn").addEventListener("click", function () {

        if (actualTimer > 0 && !document.querySelector("body > #tutorial"))
            resumeTimer(actualTimer);

        menu.remove();

        document.body.style.backgroundBlendMode = "";
        main.style.opacity = "";
    });


    menu.querySelector("#leaderboardBtn").addEventListener("click", function () {

        if (confirm("Se vai alla classifica la partita terminerà,\ncontinuare?")) {
            localStorage.setItem("score1", score1);
            localStorage.setItem("score2", score2);
            localStorage.setItem("timer", "180");
            window.open("./punteggi.html", "_self");
        }
    });

    menu.querySelector("#homeBtn").addEventListener("click", function () {

        if (confirm("Se vai alla pagina home la partita terminerà,\ncontinuare?")) {
            localStorage.clear();
            window.open("./index.html", "_self");
        }
    });
}

function stopTimer() {
    /* STOPPO IL TIMER */
    clearInterval(timerIstance);

    let timeArray = timerDiv.textContent.split(":");

    let remainingMin = parseInt(timeArray[0]);
    let remainingSec = parseInt(timeArray[1]);

    return ((remainingMin * 60) + remainingSec);
}

function resumeTimer(timeInSeconds) {
    /* RIPRESA DEL TIMER */

    timerIstance = setInterval(function () {
        timeInSeconds--;

        let minutues = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;

        if (seconds > 9) {
            timerDiv.textContent = minutues + ":" + seconds;
        } else {
            timerDiv.textContent = minutues + ":0" + seconds;

            if (timeInSeconds == 0) {
                clearInterval(timerIstance)
                creaMenu("FINITO");

                localStorage.setItem("timer", "0");

                let transformBtn = document.querySelector("body > #menu > div > button");
                transformBtn.textContent = "Rigioca";

                transformBtn.addEventListener("click", function () {
                    localStorage.setItem("timer", "180");
                    localStorage.setItem("score1", "0");
                    localStorage.setItem("score2", "0");
                    location.reload();
                });
            }
        }
    }, 1000);
}

function checkCollision(ability, img, tipo, pl) {
    if (tocco(ability, img)) {

        switch (tipo) {
            case "cSharp":
            case "fire":
            case "grenade":
            case "yo":
                if (pl == 1) {
                    score1 += 400;
                    changeScore(score1Div, score1);
                } else {
                    score2 += 100;
                    changeScore(score2Div, score2);
                }
                break;

            case "rocket":
            case "laser":
                if (pl == 1) {
                    score1 += 400;
                    changeScore(score1Div, score1);
                }
                else {
                    score2 += 100;
                    changeScore(score2Div, score2);
                }
        }
    }
}

function tocco(oggetto1, oggetto2) {
    let obj1 = oggetto1.getBoundingClientRect();
    let obj2 = oggetto2.getBoundingClientRect();
    return (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
    );
}

function changeScore(scoreDiv, scorePoints) {

    scoreDiv.textContent = "Score : " + scorePoints;
    scoreDiv.classList.add("scoreChange");

    setTimeout(function () {
        scoreDiv.classList.remove("scoreChange");
    }, 300);
}

function verso(image, pl) {
    let dir = "";

    if (window.innerWidth >= 769)
        dir = image.style.top;
    else {
        if (pl == 1)
            dir = image.style.left;
        else
            dir = image.style.right;
    }

    return parseInt(dir);
}