let device = window.matchMedia("(max-width: 769px)");

device.addListener(changePosition);

//verifico se il device è telefono o pc e attribuiscono le posizioni
function changePosition(device) {

    if (device.matches) {
        //TELEFONO
        separator.style.height = "5px";
        separator.style.top = "49.8%";
        separator.style.width = "100%";
        separator.style.left = "0%";

        switch (tutStep) {
            case -1:
                separator.style.transition = "width 0.7s linear 1s, left 0.7s linear 1s";
                separator.style.width = "0%";
                separator.style.left = "100%";
                break;

            case 0:
                tutorial.style.top = 10 + "%";
                tutorial.style.left = 0 + "%";
                break;

            case 1:
                tutorial.style.top = 60 + "%";
                tutorial.style.left = 35 + "%";
                break;

            case 2:
                tutorial.style.top = 60 + "%";
                tutorial.style.left = 5 + "%";
                break;

            case 3:
                tutorial.style.top = 20 + "%";
                tutorial.style.left = 30 + "%";
                break;

            case 4:
                tutorial.style.top = 40 + "%";
                tutorial.style.left = 20 + "%";
                break;

            case 5:
                separator.style.width = 100 + "%";
                separator.style.left = 0 + "%";
                tutorial.style.top = 40 + "%";
                tutorial.style.left = 15 + "%";
        }

    } else {

        //PC

        separator.style.width = "5px";
        separator.style.height = "100%";
        separator.style.top = "0%";
        separator.style.left = "49.8%";

        switch (tutStep) {
            case -1:
                separator.style.transition = "top 0.7s linear 1s, height 0.7s linear 1s";
                separator.style.height = "0%";
                separator.style.top = "100%";
                break;

            case 0:
                tutorial.style.top = "5%";
                tutorial.style.left = "55%";
                break;

            case 1:
                tutorial.style.top = "45%";
                tutorial.style.bottom = "10%";
                tutorial.style.left = "30%";
                break;

            case 2:
                tutorial.style.top = "45%";
                tutorial.style.left = "5%";
                break;

            case 3:
                tutorial.style.top = "7%";
                tutorial.style.left = 15 + "%";
                break;

            case 4:
                tutorial.style.top = "40%";
                tutorial.style.left = "52%";
                break;

            case 5:
                tutorial.style.top = 40 + "%";
                tutorial.style.left = 52 + "%";
        }

    }
}

/*  AZZERA LO STILE IMPOSTATO NEL JAVASCRIPT E RIASSEGNA QUELLO DEL CSS  */
function azzera() {

    for (let i = 0; i < allType.length; i++)
        allType[i].style = null;

    header.style = null;
    separator.style = null;
}

next();

function next() {

    tutStep++;

    if (tutStep == 6)
        skip();

    nextBtn.textContent = "Prossimo (" + (5 - tutStep) + ")";

    switch (tutStep) {
        case 0:
            /*  pt.1
            ogni volta che viene schiacciato "Prossimo" tutStep aumenta e cambia
            il messaggio e lo stile della finestra .tutorial  */
            changePosition(device);
            message.innerHTML = "Se provi a puntare il cursore verso la parte alta dello schermo (in giallo) puoi uscire e tornare alla home.";

            header.style.backgroundImage = "none";
            header.style.backgroundColor = "yellow";

            allType.forEach(val => {
                val.style.backgroundColor = "transparent";
                val.style.borderColor = "black";
                val.style.color = "black";
            })
            break;

        case 1:
            azzera();
            changePosition(device);
            message.innerHTML = "Questi sono i pulsanti che userai per controllare e muovere il tuo personaggio.";
            break;

        case 2:
            changePosition(device);
            message.innerHTML = "Questi invece sono i pulsanti che permettono al tuo personaggio di attaccare e di usare le mosse speciali.";
            break;

        case 3:
            changePosition(device);
            message.innerHTML = "Questa è la barra del tuo score, durante il gioco ti rappresenterà quanti punti stai accumulando.";
            break;

        case 4:
            changePosition(device);
            message.innerHTML = "Questa barra separa lo schermo tra i giocatori. Quando ci sarà lo scontro scomparirà in modo da combattere!";
            break;

        case 5:
            /*  pt.2  */
            azzera();
            changePosition(device);
            message.innerHTML = "Bene ora avete completato il tutorial. <span>Siete pronti per combattere!</span>";
            nextBtn.textContent = "GIOCA!";
    }

}

document.getElementById("skip").onclick = skip;
nextBtn.onclick = next;

/*  la finestra del tutorial scompare  */
function skip() {

    azzera();
    tutStep = -1;
    changePosition(device);

    tutorial.remove();
    resumeTimer(actualTimer);
}
