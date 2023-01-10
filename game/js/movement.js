/* SETTAGGIO IMMAGINI E ABILITA' IN BASE ALLE INFORMAZIONI DELL' URL */
var buttonImg1 = document.getElementById("img1");
var buttonImg2 = document.getElementById("img2");

var url = document.URL;
url = url.slice(url.search("html?"));
url = url.slice(5);

document.getElementById("resumeBtn").href = "./game.html?" + url;

/*var player1 = String(url.split("&", 1));
url = url.slice(player1.length + 1);

var name1 = String(url.split("&", 1));
url = url.slice(name1.length + 1);

var name2 = String(url.split("&", 1));
url = url.slice(name2.length + 1);

var player2 = String(url.split("&", 1));
url = url.slice(player2.length + 1);

var name3 = String(url.split("&", 1));
url = url.slice(name3.length + 1);

var name4 = String(url.split("&", 1));
url = url.slice(name4.length + 1);

var background = url.slice(4);
document.querySelector('body').style.backgroundImage = "url('../img/" + background + ".jpg')";

player1 = player1.slice(4);
player2 = player2.slice(4);

buttonImg1.src = window.location.pathname.split(`game.html`)[0] + "img/" + player1 + ".png";
buttonImg2.src = window.location.pathname.split(`game.html`)[0] + "img/" + player2 + ".png";

name1 = name1.slice(4);
name2 = name2.slice(4);
name3 = name3.slice(4);
name4 = name4.slice(4); */

name1 = "fire";
name2 = "rocket";
name3 = "grenade";
name4 = "laser";

var image1 = document.getElementById("player1");
var image2 = document.getElementById("player2");

var separator = document.getElementById("separator");

var ability1 = document.querySelectorAll('.ability1');
var ability2 = document.querySelectorAll('.ability2');
var ability3 = document.querySelectorAll('.ability3');
var ability4 = document.querySelectorAll('.ability4');

var abilityBtn1 = document.getElementById('abilityBtn1');
var abilityBtn2 = document.getElementById('abilityBtn2');
var abilityBtn3 = document.getElementById('abilityBtn3');
var abilityBtn4 = document.getElementById('abilityBtn4');

/*
Queste variabili consentono di resettare
lo style delle abilità finite le animazioni
in modo da poter riavviare un animazione
*/
var stop1, stop2, stop3, stop4;

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
image1.style.top = "40%";
image2.style.top = "40%";

image1.style.rotate = "0deg";
image2.style.rotate = "0deg";

image1.style.left = "10%";
image2.style.right = "10%";

//SETTI ANIMAZIONI E NOME ABILITA'

/* name è IL NOME DELL' ABILITA' */
var animation1 = assegna(ability1, name1, abilityBtn1, 1);
var animation2 = assegna(ability2, name2, abilityBtn2, 1);
var animation3 = assegna(ability3, name3, abilityBtn3, 2);
var animation4 = assegna(ability4, name4, abilityBtn4, 2);

function assegna(ability, name, abilityBtn, player) {

    var name, animation;

    ability.forEach(val => {
        val.src = window.location.pathname.split(`/game/game.html`)[0] + "/img/" + name + ".png";
    });

    abilityBtn.src = window.location.pathname.split(`/game/game.html`)[0] + "/img/" + name + "_ability.png";

    switch (true) {
        case name == "yo":

            animation = "yo" + player + " 1.7s linear 1";
            break;

        case name == "fire":

            animation = "fire" + player + " 1.7s linear 1";
            break;

        case name == "grenade":

            animation = "grenade" + player + " 2s linear 1";
            break;

        case name == "laser":

            animation = "laser" + player + " 1.7s linear 1";

            break;

        case name == "cSharp":

            animation = "cSharp" + player + " 1.7s linear 1";
            break;

        case name == "rocket":

            animation = "rocket" + player + " 8s linear 1";
            break;

        default:
            break;
    }

    return animation;

}


function move(player, type) {

    /* tolgo la sbarra di metà campo se non è ancora stata tolta */
    if (parseInt(separator.style.top) != 100) {
        separator.style.display = "none";
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
                setAbility(ability1, 1, name1, image);
            else
                setAbility(ability3, 2, name3, image);

            break;

        case 20:
            //ABILITA' 2 oppure ABILITA' 4

            if (player == 1)
                setAbility(ability2, 1, name2, image);
            else
                setAbility(ability4, 2, name4, image);

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
function setAbility(abilityArray, player, name, image) {

    var source = abilityArray[0].src;

    switch (name) {

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

            if (player == 1) {

                abilityArray.forEach(val => {
                    val.style.animation = animation2;
                })

                stop2 = setTimeout(ability2Reset, 8000);

            } else {

                abilityArray.forEach(val => {
                    val.style.animation = animation4;
                })

                stop4 = setTimeout(ability4Reset, 8000);
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
    clearTimeout(stop1);
}

function ability2Reset() {
    for (let i = 0; i < 4; i++)
        ability2[i].style.animation = null;

    clearTimeout(stop2);
}

function ability3Reset() {
    for (let i = 0; i < 4; i++)
        ability3[i].style.animation = null;
    clearTimeout(stop3);
}

function ability4Reset() {
    for (let i = 0; i < 4; i++)
        ability4[i].style.animation = null;
    clearTimeout(stop4);
}


