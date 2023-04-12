document.body.style.backgroundImage = "url('./img/" + bkg + ".jpg')";

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

img1.src = "./img/" + pl1 + ".png";
img2.src = "./img/" + pl2 + ".png";

let ability1 = document.querySelectorAll('.ability1');
let ability2 = document.querySelectorAll('.ability2');
let ability3 = document.querySelectorAll('.ability3');
let ability4 = document.querySelectorAll('.ability4');

let abilityBtn1 = document.getElementById('abilityBtn1');
let abilityBtn2 = document.getElementById('abilityBtn2');
let abilityBtn3 = document.getElementById('abilityBtn3');
let abilityBtn4 = document.getElementById('abilityBtn4');

/*
possibility1 è il vettore di tutte le PRIME POSSIBILII
    abilità di un giocatore

possibility2 è il vettore di tutte le SECONDE POSSIBILII
    abilità di un giocatore
*/
let possibility1 = ["yo", "fire", "cSharp", "grenade"];
let possibility2 = ["laser", "rocket"];

//SETTAGGIO POSIZIONI INIZIALI DEI GIOCATORI
img1.style.top = "40%";
img2.style.top = "40%";

img1.style.rotate = "0deg";
img2.style.rotate = "0deg";

img1.style.left = "10%";
img2.style.right = "10%";

//SETTI ANIMAZIONI E NOME ABILITA'

/* name è IL NOME DELL' ABILITA' */
let animation1 = assegna(ability1, ab1, abilityBtn1, 1);
let animation2 = assegna(ability2, ab2, abilityBtn2, 1);
let animation3 = assegna(ability3, ab3, abilityBtn3, 2);
let animation4 = assegna(ability4, ab4, abilityBtn4, 2);

function assegna(ability, ab, abilityBtn, player) {

    let animation = ab + player + " ";

    for (let i = 0; i < ability.length; i++)
        ability[i].src = "./img/" + ab + ".png";
        

    abilityBtn.src = "./img/" + ab + "_ability.png";

    switch (ab) {

        case "laser":
        case "cSharp":
        case "yo":
        case "fire":
            animation += "1.7s linear 1";
            break;

        case "grenade":

            animation += "2s linear 1";
            break;

        case "rocket":

            animation += "8s linear 1";
            break;

        default:
            break;
    }

    return animation;
}


function move(player, type) {

    /* tolgo la sbarra di metà campo se non è ancora stata tolta */
    if (parseInt(separator.style.top) != 100)
        separator.style.display = "none";

    if (player == 1)
        settingStyle(img1, type, 1);
    else
        settingStyle(img2, type, 2);
}

/* funzione che permette lo spostamento tramite tasti */
document.onkeydown = function (e) {

    switch (e.key) {
        case "8":
            move(2, 8);
            break;

        case "5":
            move(2, 2);
            break;

        case "6":
            move(2, 6);
            break;

        case "4":
            move(2, 4);
            break;

        case "w":
            move(1, 8);
            break;

        case "s":
            move(1, 2);
            break;

        case "a":
            move(1, 4);
            break;

        case "d":
            move(1, 6);
            break;

        /* ruota sinistra player 1 */
        case "q":
            move(1, 7);
            break;

        /* ruota destra player 1 */
        case "e":
            move(1, 9);
            break;

        /* ruota sinistra player 2 */
        case "7":
            move(2, 7);
            break;

        /* ruota destra player 2 */
        case "9":
            move(2, 9);
            break;

        /* abilità 1 */
        case "z":
            move(1, 10);
            break;

        /* abilità 2 */
        case "c":
            move(1, 20);
            break;

        /* abilità 3 */
        case "1":
            move(2, 10);
            break;

        /* abilità 4 */
        case "3":
            move(2, 20);
            break;

        /* compare il menu */
        case "Escape":
            pauseBtn.focus();
            break;

        /* cambia tema */
        case String.fromCharCode(92):
            themeMode.click();
            break;
        default:
            break;
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
                if (parseInt(image.style.left) != 10)
                    image.style.left = parseInt(image.style.left) - 5 + "%";
            } else {
                if (parseInt(image.style.right) != 75)//85 se vuoi solo fino a metà schermo intero
                    image.style.right = parseInt(image.style.right) + 5 + "%";
            }
            break;

        case 6:
            /*  right  */
            if (player == 1) {
                if (parseInt(image.style.left) != 75)//85 se vuoi solo fino a metà schermo intero
                    image.style.left = parseInt(image.style.left) + 5 + "%";

            } else {
                if (parseInt(image.style.right) != 10)
                    image.style.right = parseInt(image.style.right) - 5 + "%";
            }
            break;

        case 10:
            //ABILITA' 1 oppure ABILITA' 3

            if (player == 1)
                setAbility(ability1, 1, ab1, image);
            else
                setAbility(ability3, 2, ab3, image);

            break;

        case 20:
            //ABILITA' 2 oppure ABILITA' 4

            if (player == 1)
                setAbility(ability2, 1, ab2, image);
            else
                setAbility(ability4, 2, ab4, image);

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
        });

        setTimeout(ability1Reset, time);

    } else {
        eseguiFor(abilityArray, "right", image, 10);

        abilityArray.forEach(val => {
            val.style.animation = animation3;
        });

        setTimeout(ability3Reset, time);
    }
}

// possibility1 e possibility2
function setAbility(abilityArray, player, ab, image) {

    switch (ab) {

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
                });

                //metti la durata del timeout uguale alla durata dell'animazione
                setTimeout(ability2Reset, 1700);

            } else {

                abilityArray.forEach(val => {
                    val.style.top = Math.floor(Math.random() * 80) + 10 + "%";
                    val.style.right = Math.floor(Math.random() * 15) + 10 + "%";
                    val.style.animation = animation4;
                });

                //metti la durata del timeout uguale alla durata dell'animazione
                setTimeout(ability4Reset, 1700);

            }

            break;

        case "rocket":

            if (player == 1) {

                abilityArray.forEach(val => {
                    val.style.animation = animation2;
                });

                setTimeout(ability2Reset, 8000);

            } else {

                abilityArray.forEach(val => {
                    val.style.animation = animation4;
                });

                setTimeout(ability4Reset, 8000);
            }

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
}

function ability2Reset() {
    for (let i = 0; i < 4; i++)
        ability2[i].style.animation = null;
}

function ability3Reset() {
    for (let i = 0; i < 4; i++)
        ability3[i].style.animation = null;
}

function ability4Reset() {
    for (let i = 0; i < 4; i++)
        ability4[i].style.animation = null;
}