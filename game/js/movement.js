var image1 = document.querySelector(".player1");
var image2 = document.querySelector(".player2");

var separetor = document.querySelector(".separetor");

var laser1 = document.querySelectorAll('.laser1');
var laser2 = document.querySelectorAll('.laser2');

var ability1 = document.querySelectorAll('.ability1');
var ability2 = document.querySelectorAll('.ability2');
var ability3 = document.querySelectorAll('.ability3');
var ability4 = document.querySelectorAll('.ability4');

/*
Queste variabili consentono di resettare
lo style delle abilità finite le animazioni
in modo da poter riavviare un animazione
*/
var stop1, stop2, stop3, stop4;

var nameAbility1, nameAbility2, nameAbility3, nameAbility4;

/*
possibility1 è il vettore di tutte le PRIME POSSIBILII
    abilità di un giocatore

possibility2 è il vettore di tutte le SECONDE POSSIBILII
    abilità di un giocatore

*/
const possibility1 = ["yo", "fire", "cSharp", "grenade"];
const possibility2 = ["laser", "rocket"];

var animation1, animation2, animation3, animation4;

//SETTAGGIO POSIZIONI INIZIALI DEI GIOCATORI
image1.style.top = 40 + "%";
image2.style.top = 40 + "%";

image1.style.rotate = "0deg";
image2.style.rotate = "0deg";

image1.style.left = 40 + "%";
image2.style.right = 40 + "%";

//SETTI ANIMAZIONI E NOME ABILITA'
animation1 = assegnazioneAnimation(ability1, possibility1, animation1, 1);
animation2 = assegnazioneAnimation(ability2, possibility2, animation2, 1);
animation3 = assegnazioneAnimation(ability3, possibility1, animation3, 2);
animation4 = assegnazioneAnimation(ability4, possibility2, animation4, 2);

nameAbility1 = assegnazioneName(ability1, possibility1, nameAbility1, 1);
nameAbility2 = assegnazioneName(ability2, possibility2, nameAbility2, 1);
nameAbility3 = assegnazioneName(ability3, possibility1, nameAbility3, 2);
nameAbility4 = assegnazioneName(ability4, possibility2, nameAbility4, 2);


//ASSEGNAZIONE CLASSE E ANIMAZIONE IN BASE ALL'ABILITA' SCELTA
function assegnazioneAnimation(abilityArray, possibility, animation, player) {

    var source = abilityArray[0].src;

    //TRASFORMALO IN UNO CICLO WHILE!!
    for (let i = 0; i < possibility.length; i++) {
        if (source.includes(possibility[i])) {

            abilityArray.forEach(val => {
                val.classList.add(possibility[i]);

                //prende l'indirizzo del file e gli aggiunge il nome dell'immagine abilità
                //così setta quella come abilità
                val.src = window.location.pathname.split(`index.html`)[0] + "img/" + possibility[i] + ".png";

                /*.split(`index.html`)[0]
                .split(`index.html`) ===> prende l'indirizzo della carterra corrente
                                        e arriva fino a 'index.html'
        
                .split(`index.html`)[0] ===> quando c'è [0]
                                        prende il testo PRIMA di 'index.html'
        
                .split(`index.html`)[0] ===> quando c'è [1]
                                        prende il testo DOPO 'index.html'
                */
            });

            switch (possibility[i]) {
                case "grenade":
                    animation = "grenade" + player + " infinite 2s linear";
                    break;

                case "yo":
                    animation = "fire" + player + " 1.7s linear";
                    break;

                case "fire":
                    animation = "fire" + player + " 1.7s linear";
                    break;

                case "laser":
                    animation = "laser" + player + " 1.7s linear";
                    break;

                case "cSharp":
                    animation = "cSharp" + player + " 1.7s linear";
                    break;

                default:
                    break;
            }

        }
    }

    return animation;

}

//ASSEGNAZIONE NOME ABILITA'
function assegnazioneName(abilityArray, possibility, nameAbility, player) {

    var source = abilityArray[0].src;

    //TRASFORMALO IN UNO CICLO WHILE!!
    for (let i = 0; i < possibility.length; i++) {
        if (source.includes(possibility[i])) {

            switch (possibility[i]) {
                case "grenade":
                    nameAbility = "grenade";
                    break;

                case "yo":
                    nameAbility = "yo";
                    break;

                case "fire":
                    nameAbility = "fire";
                    break;

                case "laser":
                    nameAbility = "laser";
                    break;

                case "cSharp":
                    nameAbility = "cSharp";
                    break;

                default:
                    break;
            }

        }
    }

    return nameAbility;

}


function move(player, type) {

    /* tolgo la sbarra di metà campo se non è ancora stata tolta */
    if (parseInt(separetor.style.top) != 100) {
        separetor.style.height = "0%";
        separetor.style.top = "100%";
    }

    if (player == 1) {
        settingStyle(image1, type, 1);
    } else {
        settingStyle(image2, type, 2);
    }
}

function settingStyle(image, type, player) {

    switch (type) {

        case 7:
            /* ruota sinistra  */
            image.style.rotate = parseInt(image.style.rotate) - 20 + "deg";
            break;

        case 9:
            /*  ruota destra  */
            image.style.rotate = parseInt(image.style.rotate) + 20 + "deg";

            break;

        case 8:
            /*  up  */
            if (parseInt(image.style.top) != 0)
                image.style.top = parseInt(image.style.top) - 5 + "%";

            break;

        case 2:
            /*  down  */
            if (parseInt(image.style.top) != 100)
                image.style.top = parseInt(image.style.top) + 5 + "%";

            break;

        case 4:
            /*  left  */
            if (player == 1) {
                if (parseInt(image.style.left) != 0) {
                    image.style.left = parseInt(image.style.left) - 5 + "%";
                }
            } else {
                if (parseInt(image.style.right) != 85)/*85 se vuoi solo fino a metà schermo intero*/ {
                    image.style.right = parseInt(image.style.right) + 5 + "%";
                }
            }
            break;

        case 6:
            /*  right  */
            if (player == 1) {
                if (parseInt(image.style.left) != 85)/*85 se vuoi solo fino a metà schermo intero*/ {
                    image.style.left = parseInt(image.style.left) + 5 + "%";
                }
            } else {
                if (parseInt(image.style.right) != 0)
                    image.style.right = parseInt(image.style.right) - 5 + "%";
            }
            break;

        case 10:
            //ABILITA' 1 oppure ABILITA' 3

            if (player == 1)
                setAbility(ability1, 1, nameAbility1, image);
            else
                setAbility(ability3, 2, nameAbility3, image);

            break;

        case 20:
            //ABILITA' 2 oppure ABILITA' 4

            if (player == 1)
                setAbility(ability2, 1, nameAbility2, image);
            else
                setAbility(ability4, 2, nameAbility4, image);

            break;

        default:
            break;
    }

}

function firstAbility(abilityArray, player, image, time) {

    if (player == 1) {
        eseguiFor(abilityArray, "left", image, 10);

        abilityArray.forEach(val => {
            val.style.animation = animation1;
        })

        stop1 = setTimeout(ability1Reset, time);

    } else {
        eseguiFor(abilityArray, "right", image, 10);

        abilityArray.forEach(val => {
            val.style.animation = animation3;
        })

        stop3 = setTimeout(ability3Reset, time);
    }
}

// possibility1 e possibility2
function setAbility(abilityArray, player, nameAbility, image) {

    var source = abilityArray[0].src;

    switch (nameAbility) {

        case "grenade":

            eseguiFor(abilityArray, "top", image, 0);

            if (player == 1)
                firstAbility(abilityArray, 1, image, 2000);
            else
                firstAbility(abilityArray, 2, image, 2000);

            break;

        case "yo":

            eseguiFor(abilityArray, "top", image, 0);


            if (player == 1)
                firstAbility(abilityArray, 1, image, 1700);
            else
                firstAbility(abilityArray, 2, image, 1700);

            break;

        case "cSharp":

            eseguiFor(abilityArray, "top", image, 0);

            if (player == 1)
                firstAbility(abilityArray, 1, image, 1700);
            else
                firstAbility(abilityArray, 2, image, 1700);

            break;

        case "fire":

            eseguiFor(abilityArray, "top", image, 0);

            if (player == 1)
                firstAbility(abilityArray, 1, image, 1700);
            else
                firstAbility(abilityArray, 2, image, 1700);

            break;

        case "laser":

            if (player == 1) {

                abilityArray.forEach(val => {
                    val.style.top = Math.floor(Math.random() * 80) + 10 + "%";
                    val.style.left = Math.floor(Math.random() * 15) + 10 + "%";
                    val.style.animation = animation2;
                })

                //metti la durata del timeout uguale alla durata dell'animazione
                stop2 = setTimeout(ability2Reset, 1700);

            } else {

                abilityArray.forEach(val => {
                    val.style.top = Math.floor(Math.random() * 80) + 10 + "%";
                    val.style.right = Math.floor(Math.random() * 15) + 10 + "%";
                    val.style.animation = animation4;
                })

                //metti la durata del timeout uguale alla durata dell'animazione
                stop4 = setTimeout(ability4Reset, 1700);

            }

            break;

        case "rocket":
            break;

        default:
            break;
    }


}


function eseguiFor(array, stile, image, sfasamento) {

    switch (stile) {
        case "top":
            for (let i = 0; i < array.length; i++)
                array[i].style.top = parseInt(image.style.top) + (i * sfasamento) + "%";
            break;

        case "right":
            for (let i = 0; i < array.length; i++)
                array[i].style.right = parseInt(image.style.right) + (i * sfasamento) + "%";
            break;

        case "left":
            for (let i = 0; i < array.length; i++)
                array[i].style.left = parseInt(image.style.left) + (i * sfasamento) + "%";
            break;

        default:
            break;
    }
}

function ability1Reset() {
    for (let i = 0; i < 4; i++)
        ability1[i].style.animation = null;
    stopTimeout(stop1);
}

function ability3Reset() {
    for (let i = 0; i < 4; i++)
        ability3[i].style.animation = null;
    stopTimeout(stop2);
}

function ability2Reset() {
    ability2.forEach(val => {
        val.style.animation = null;
    });
    stopTimeout(stop3);
}

function ability4Reset() {
    ability4.forEach(val => {
        val.style.animation = null;
    });
    stopTimeout(stop4);
}

function stopTimeout(timeoutStop) {
    clearTimeout(timeoutStop);
}