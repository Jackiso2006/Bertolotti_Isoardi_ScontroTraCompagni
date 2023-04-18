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
    separator.remove();
    azzera();

    /* 180 secondi ==> 3 minuti */
    resumeTimer(actualTimer);

    let minutues = Math.floor(actualTimer / 60);
    let seconds = actualTimer % 60;

    if (seconds > 11)
        timerDiv.textContent = minutues + ":" + seconds;
    else
        timerDiv.textContent = minutues + ":0" + seconds;

}

document.querySelectorAll("div.name")[0].textContent = player1Name;
document.querySelectorAll("div.name")[1].textContent = player2Name;

/* document.getElementById("resumeBtn").href = "./game.html?ver=gamePg"*/

pauseBtn.addEventListener("click", function () {
    
    if (!document.querySelector("body > #menu")) {
        actualTimer = stopTimer();

        let menu = document.createElement("div");
        menu.id = "menu";
        menu.innerHTML = `<div><span class="material-symbols-rounded">pause</span><span>PAUSA</span></div><div><button id="resumeBtn">Riprendi</button><a href="./settings/crediti.html?ver=gamePg" id="optionAnchor">Opzioni</a><button id="homeBtn">Home</button><button id="leaderboardBtn">Classifica</button></div>`;
        document.body.appendChild(menu);

        menu.querySelector("#optionAnchor").addEventListener("click", function () {
            localStorage.setItem("timer", actualTimer);
        });

        document.body.style.backgroundBlendMode = "darken";
        let main = document.querySelector("main");
        main.style.opacity = "0.5";

        menu.querySelector("#resumeBtn").addEventListener("click", function () {
            if (actualTimer != 0 && !document.querySelector("body > #tutorial"))
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
                window.open("./punteggi.html", "_parent");
            }
        });

        menu.querySelector("#homeBtn").addEventListener("click", function () {

            if (confirm("Se vai alla pagina home la partita terminerà,\ncontinuare?")) {
                localStorage.setItem("score1", score1);
                localStorage.setItem("score2", score2);
                localStorage.clear("timer");
                window.open("./index.html", "_parent");
            }
        });
    }
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


function stopTimer() {
    /* STOPPO IL TIMER */
    clearInterval(timerIstance);

    let remainingMin = parseInt(timerDiv.textContent.split(":")[0]);
    let remainingSec = parseInt(timerDiv.textContent.split(":")[1]);

    return ((remainingMin * 60) + remainingSec);
}

function resumeTimer(timeInSeconds) {
    /* RIPRESA DEL TIMER */

    timerIstance = setInterval(() => {
        timeInSeconds--;

        let minutues = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;

        if (seconds > 9) {
            timerDiv.textContent = minutues + ":" + seconds;
        } else {
            timerDiv.textContent = minutues + ":0" + seconds;

            if (timeInSeconds == 0) {
                clearInterval(timerIstance);
                alert("time scaduto!");
            }
        }
    }, 1000);
}