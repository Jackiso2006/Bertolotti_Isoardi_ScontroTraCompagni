var step = 0;
var tutorial = document.querySelector(".tutorial");
var message = document.querySelector(".message");
var separetor = document.querySelector(".separetor");
var nextBtn = document.querySelector(".next");


/*  AZZERA LO STILE IMPOSTATO NEL JAVASCRIPT E RIASSEGNA QUELLO DEL CSS  */
function azzera(){

    document.querySelector('header').style.backgroundColor = null;
    document.querySelector('#header_btn').style.color = null;
    document.querySelector('#header_btn').style.borderColor = null;
    separetor.style.height = null;
    separetor.style.top = null;
}

separetor.style.transition = "top 0.7s linear 2s , height 0.7s linear 2s";
separetor.style.height = 100 + "%";
separetor.style.top = 0 + "%";

next();

function next() {

    if(step==6)
        skip();
    
    nextBtn.textContent = "Prossimo (" + (5-step) + ")";

    switch (step) {
        case 0:
            /*  pt.1
            ogni volta che viene schiacciato "Prossimo" step aumenta e cambia
            il messaggio e lo stile della finestra .tutorial  */
            message.innerHTML = "Se provi a puntare il cursore verso la parte alta dello schermo (in giallo) puoi uscire e tornare alla home.";
            tutorial.style.top = 5 + "%";
            tutorial.style.left = 65 + "%";
            document.querySelector('header').style.backgroundColor = "yellow" ;
            document.querySelector('#header_btn').style.color = "black";
            document.querySelector('#header_btn').style.borderColor = "black";
            break;

        case 1:
            azzera();
            message.innerHTML = "Questi sono i pulsanti che userai per controllare e muovere il tuo personaggio.";
            tutorial.style.top = 60 + "%";
            tutorial.style.left = 30 + "%";
            break;

        case 2:
            message.innerHTML = "Questi invece sono i pulsanti che permettono al tuo personaggio di attaccare e di usare le mosse speciali.";
            tutorial.style.top = 60 + "%";
            tutorial.style.left = 5 + "%";
            break;

        case 3:
            message.innerHTML = "Questa è la barra della vita, durante il gioco ti rappresenterà quanta vita ti resta prima di morire.";
            tutorial.style.top = 7 + "%";
            tutorial.style.left = 15 + "%";
            break;

        case 4:
            message.innerHTML = "Questa barra separa lo schermo tra i giocatori. Quando ci sarà lo scontro scomparirà in modo da combattere!";
            tutorial.style.top = 40 + "%";
            tutorial.style.left = 52 + "%";
            separetor.style.height = "0%";
            separetor.style.top = "100%";
            break;

        case 5:
            /*  pt.2  */
            azzera();
            message.innerHTML = "Bene ora avete completato il tutorial. <span>Siete pronti per combattere!</span>";
            nextBtn.textContent = "GIOCA!";
        default:
            break;
    }
    
    step++;

}

/*  la finestra del tutorial scompare  */
function skip(){
    azzera();
    separetor.style.height = "0%";
    separetor.style.top = "100%";
    tutorial.style.display = "none";
    tutorial.style.top = null;
    tutorial.style.left = null;
}