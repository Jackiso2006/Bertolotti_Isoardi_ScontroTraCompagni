let character = [
    {
        name: "Gabibbo",
        description: "Non c'è molto da dire per questo personaggio, è la mascotte ufficiale di striscia la notizia, ha dalla sua parte tutto il popolo di striscia ma gli basterà la tifoseria per vincere?",
        value: "gabibbo"
    },
    {
        name: "Timmy De Pizza",
        description: "Sembra un innoquo tiktoker, ma quando incrocia il tuo sguardo rimani come paralizzato. Il suo maestro Pietro Storti gli ha insegnato quest'arte, sarà capace di applicarla in queste sfide?",
        value: "timmy"
    },
    {
        name: "Gerry Scotty",
        description: "Non si conoscono bene le sue origini, se arrivi dalla terra o da qualche pianeta alieno, ma Gerry è una delle persone più famose in italia, gli sarà utile in questo gioco?",
        value: "gerry"
    },
    {
        name: "Trevor",
        description: "Arriva direttamente da GTA V, ha chiesto un permesso alla rockstar per poter partecipare a questo gioco, ma sarà in grado di superare questa missione?",
        value: "trevor"
    },
    {
        name: "Sarim Akhtar",
        description: "Non molti lo conoscono ma lui è molto famoso nel web per la sua delusione, probabilmente la sua squadra di cricket ha perso la finale, ma lui non perderà questa sfida",
        value: "sarim"
    }
];

let abilities = [
    [
        {
            name: "C#",
            description: "Linguaggio molto usato che potrebbe permettere al tuo personaggio di cancellare definitivamente l'avversario con un semplice <b style='color: #3d8553;'>Console</b>.<bstyle='color: #c3ca8b;'>Clear</b><b style='color: #99a19a;'>()</b> al posto giusto",
            value: "cSharp"
        },
        {
            name: "Fuoco",
            description: "La prima difesa della storia, ha permesso l'evoluzione di tutta l'umanità, sembra una cosa innocua ma in questo gioco ha un'effetto negativo, sull'avversario ovviamente",
            value: "fire"
        },
        {
            name: "Granata",
            description: "Un'arma di distruzione di massa, spesso vista solo nei film ma oggi può essere tua. E no, non siamo in una pubblicità in america, puoi usarla veramente amche qua",
            value: "grenade"
        },
        {
            name: "YO!",
            description: "Si conoscono solo poche leggende riguardo a questa mossa, si narra che sia stata inventata da Pietro Storti e dalla sua squadra di football, sarà utile in questa sfida?",
            value: "yo"
        },
    ],
    [
        {
            name: "Laser",
            description: "Hai capito bene, non ci fanno solo le spade con questo materiale, puoi avere dalla tua parte decine di spari laser che danno una grande mano nelle battaglie",
            value: "laser"
        },
        {
            name: "Rocket",
            description: "É uscito direttamente dall'arena di Clash Royale per poter essere l'arma più utlizzata in questa sfida, vuoi realizzare il sogno della sua vita e lanciarne qualcuno contro il tuo avversario?",
            value: "rocket"
        }
    ]
];

let cards = document.getElementsByClassName("card");
let section = document.querySelector("section");
let allInput = section.querySelectorAll("input");
let span = section.querySelector("span");
let buttons = document.querySelectorAll("section > button");
//Contatore di sezioni
let currentSection = 1;
//Indice del personaggio selezionato
let selectedCharacter;
//Indici delle abilità selezionate
let selectedAbilities1, selectedAbilities2;
//Nomi giocatori
let pl1 = localStorage.getItem("player1");
let pl2 = localStorage.getItem("player2");

span.textContent = pl1;


if (window.innerWidth < 769) {
    selectedCharacter = 0;
    selectedAbilities1 = 0;
    selectedAbilities2 = 0;
} else {
    selectedCharacter = -1;
    selectedAbilities1 = -1;
    selectedAbilities2 = -1;
}

function resetCharacter(index) {
    let label = section.querySelector("label");
    label.id = character[index].value;
    label.querySelector("h3").textContent = character[index].name;
    label.querySelector("p").innerHTML = character[index].description;
    label.querySelector("img").src = "./img/" + character[index].value + ".png";
}

function resetAbility(number, index) {

    let label;

    if (number == 0)
        //PRENDO LE ABILITA' NUMERO 1
        label = section.querySelector("div > div:first-child > label");
    else
        //PRENDO LE ABILITA' NUMERO 2
        label = section.querySelector("div > div:last-child > label");

    label.id = abilities[number][index].value;
    label.querySelector("h3").textContent = abilities[number][index].name;
    label.querySelector(".description > p").innerHTML = abilities[number][index].description;
    label.querySelector("img").src = "./img/" + abilities[number][index].value + ".png";
}

function findSelected(number) {
    let labels;
    let i = -1;

    if (number == 0)
        //PRENDO I PERSONAGGI
        labels = section.querySelectorAll("label");
    else if (number == 1)
        //PRENDO LE ABILITA' NUMERO 1
        labels = section.querySelectorAll("div > div:first-child > label");
    else
        //PRENDO LE ABILITA' NUMERO 2
        labels = section.querySelectorAll("div > div:last-child > label");

    do
        i++;
    while (i < labels.length && !labels[i].classList.contains("checked"));

    if (i == labels.length)
        i = -1;

    return i;
}

//freccia indietro personaggi
document.getElementsByClassName("freccia")[0].addEventListener("click", function () {
    if (selectedCharacter != 0) {
        selectedCharacter--;
        resetCharacter(selectedCharacter);
    }
});

//freccia avanti personaggi
document.getElementsByClassName("freccia")[1].addEventListener("click", function () {
    if (selectedCharacter != character.length - 1) {
        selectedCharacter++;
        resetCharacter(selectedCharacter);
    }
});

//freccia indietro abilità 1
document.getElementsByClassName("freccia")[2].addEventListener("click", function () {
    if (selectedAbilities1 != 0) {
        selectedAbilities1--;
        resetAbility(0, selectedAbilities1);
    }
});

//freccia avanti abilità 1
document.getElementsByClassName("freccia")[3].addEventListener("click", function () {
    if (selectedAbilities1 != abilities[0].length - 1) {
        selectedAbilities1++;
        resetAbility(0, selectedAbilities1);
    }
});

//freccia indietro abilità 2
document.getElementsByClassName("freccia")[4].addEventListener("click", function () {
    if (selectedAbilities2 != 0) {
        selectedAbilities2--;
        resetAbility(1, selectedAbilities2);
    }
});

//freccia avanti abilità 2
document.getElementsByClassName("freccia")[5].addEventListener("click", function () {
    if (selectedAbilities2 != abilities[1].length - 1) {
        selectedAbilities2++;
        resetAbility(1, selectedAbilities2);
    }
});

document.getElementById("close").addEventListener("click", function () {
    this.parentElement.remove();
});


//larghezza scehrmo precedente
let previousWidth = window.innerWidth;

window.addEventListener("resize", function () {
    if (previousWidth < 769 && window.innerWidth > 769) {
        // ESEGUITO QUANDO DA MOBILE VAI A PC

        if (section.id == "pl") {
            selectedCharacter = findSelected(0);
            resetCharacter(0);
        } else {
            selectedAbilities1 = findSelected(1);
            selectedAbilities2 = findSelected(2);
            resetAbility(0, 0);
        }
    }

    previousWidth = window.innerWidth;
});


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        let k;

        if (window.innerWidth > 769) {

            if (section.id == "pl") {
                k = i;
                selectedCharacter = k;
            } else {
                k = i - 5;
                if (k < 4)
                    selectedAbilities1 = k;
                else
                    selectedAbilities2 = k - 4;
            }

            for (let j = 0; j < cards.length; j++) {
                if (cards[j].querySelector("input").name == cards[k].querySelector("input").name)
                    cards[j].classList.remove("checked");
            }

            cards[k].classList.add("checked");

        } else {
            for (let j = 0; j < cards.length; j++)
                cards[j].classList.remove("checked");
        }
    });
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        if (section.id == "pl") {
            /* CONTROLLO GIOCATORI SELEZIONATI */
            if (window.innerWidth < 769 && selectedCharacter == -1)
                selectedCharacter = 0;

            if (selectedCharacter == -1) {
                alert("Seleziona un personaggio!");

            } else {
                if (currentSection == 1) {
                    //GIOCATORE E' STATO SELEZIONATO
                    span.textContent = pl2;


                    if (window.innerWidth < 769)
                        localStorage.setItem("pl1", section.querySelector("label").id);
                    else
                        localStorage.setItem("pl1", section.querySelector(".checked").id);

                    resetCharacter(0);

                    for (let j = 0; j < cards.length; j++)
                        cards[j].classList.remove("checked");

                    for (let j = 0; j < allInput.length; j++)
                        allInput[j].name = "pl2";

                } else if (currentSection == 2) {
                    /* CAMBIO DA SEZIONA PLAYER A SEZIONE ABILITA */

                    if (window.innerWidth < 769)
                        localStorage.setItem("pl2", section.querySelector("label").id);
                    else
                        localStorage.setItem("pl2", section.querySelector(".checked").id);

                    section.remove();
                    section = document.querySelector("section");
                    allInput = section.querySelectorAll("label > input");
                    span = section.querySelector("span");
                    span.textContent = pl1;

                    for (let j = 0; j < cards.length; j++)
                        cards[j].classList.remove("checked");
                }

                selectedCharacter = 0;
                currentSection++;
            }

        } else if (section.id == "ab") {

            if (window.innerWidth < 769 && (selectedAbilities1 == -1 || selectedAbilities2 == -1)) {
                selectedAbilities1 = 0;
                selectedAbilities2 = 0;
            }

            if (selectedAbilities1 == -1 && selectedAbilities2 == -1) {
                alert("Seleziona le abilità principali e secondarie!!");
            } else if (selectedAbilities1 == -1) {
                alert("Seleziona un'abilità principale!!");
            } else if (selectedAbilities2 == -1) {
                alert("Seleziona un'abilità secondaria!!");
            } else {
                /* ENTRAMBE LE ABILITA' SONO STATE SELEZIONATE */

                if (currentSection == 3) {
                    /* CAMBIO SEZIONE ABILITA' PLAYER 1 A PLAYER 2 */

                    if (window.innerWidth < 769) {
                        localStorage.setItem("ab1", section.querySelector("label").id);
                        localStorage.setItem("ab2", section.querySelector("div > div:last-child > label").id);
                    } else {
                        localStorage.setItem("ab1", section.querySelector(".checked").id);
                        localStorage.setItem("ab2", section.querySelectorAll(".checked")[1].id);
                    }


                    span.textContent = pl2;

                    for (let j = 0; j < cards.length; j++)
                        cards[j].classList.remove("checked");

                    for (let j = 0; j < allInput.length - 2; j++)
                        allInput[j].name = "ab3";

                    for (let j = 0; j < 2; j++)
                        allInput[allInput.length - 2 + j].name = "ab4";

                    resetAbility(0, 0);
                    resetAbility(1, 0);
                } else {
                    //FINITO ABILITA'

                    if (window.innerWidth < 769) {
                        localStorage.setItem("ab3", section.querySelector("label").id);
                        localStorage.setItem("ab4", section.querySelector("div > div:last-child > label").id);
                    } else {
                        localStorage.setItem("ab3", section.querySelector(".checked").id);
                        localStorage.setItem("ab4", section.querySelectorAll(".checked")[1].id);
                    }

                    section.remove();
                    section = document.querySelector("section");
                }

                selectedAbilities1 = 0;
                selectedAbilities2 = 0;
                currentSection++;
            }
        }
    });
}


let previewImg = document.querySelector("#containerLuogo > img");
let imgs = document.querySelectorAll("#demoLuoghi > label");
let selectedBackground = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function () {
        previewImg.src = this.querySelector("img").src;

        let input = this.querySelector("input");
        input.checked = true;

        localStorage.setItem("bkg", input.value);

        let j = -1;

        do
            j++;
        while (j < imgs.length && !imgs[j].classList.contains("checked"));

        imgs[j].classList.remove("checked");

        selectedBackground = i;
        imgs[selectedBackground].classList.add("checked");
    });
}

document.querySelectorAll("#containerLuogo > a")[0].addEventListener("click", function () {
    if (selectedBackground != 0) {
        imgs[selectedBackground].classList.remove("checked");

        selectedBackground--;
        
        let input = imgs[selectedBackground].querySelector("input");
        input.checked = true;

        previewImg.src = imgs[selectedBackground].querySelector("img").src;
        imgs[selectedBackground].classList.add("checked");

        localStorage.setItem("bkg", input.value);
    }
});

document.querySelectorAll("#containerLuogo > a")[1].addEventListener("click", function () {
    if (selectedBackground != imgs.length - 1) {
        imgs[selectedBackground].classList.remove("checked");

        selectedBackground++;

        let input = imgs[selectedBackground].querySelector("input");
        input.checked = true;

        previewImg.src = imgs[selectedBackground].querySelector("img").src;
        imgs[selectedBackground].classList.add("checked");

        localStorage.setItem("bkg", input.value);
    }
});

document.querySelector("#location > a").addEventListener("click", function(){
    if (!localStorage.getItem("bkg"))
        localStorage.setItem("bkg","backDesert");
        
    localStorage.setItem("timer", "180");
})