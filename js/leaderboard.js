let leaderboard = [
    {
        name: "Schiappa 203",
        score: 4321,
        skin: "sarim",
    },
    {
        name: "Bart Simpson",
        score: 3334,
        skin: "timmy",
    },
    {
        name: "Di caprio",
        score: 3115,
        skin: "gerry",
    },
    {
        name: "Doreamon",
        score: 2862,
        skin: "gerry",
    },
    {
        name: "Carlo conti",
        score: 2571,
        skin: "gabibbo",
    },
    {
        name: "Freddie Mercury",
        score: 2143,
        skin: "trevor",
    },
    {
        name: "Mucca e pollo",
        score: 2046,
        skin: "timmy",
    },
    {
        name: "Winchester",
        score: 1924,
        skin: "sarim",
    },
    {
        name: "Pizzaiolo51",
        score: 1782,
        skin: "sarim",
    },
    {
        name: "Andrew Tate",
        score: 905,
        skin: "gabibbo",
    },
    {
        name: "Ayeye",
        score: 787,
        skin: "trevor",
    },
    {
        name: "Ezio Greggio",
        score: 659,
        skin: "gerry",
    },
    {
        name: "Pasticciere",
        score: 576,
        skin: "timmy",
    },
    {
        name: "Holly",
        score: 501,
        skin: "trevor",
    },
    {
        name: "Benji",
        score: 450,
        skin: "sarim",
    },
    {
        name: "Username",
        score: 363,
        skin: "gabibbo",
    },
];

let position = document.getElementById("position");
let player = document.getElementById("player");
let score = document.getElementById("score");
let skin = document.getElementById("skin");
let searchBtn = document.getElementById("searchBtn");
let top3Btn = document.getElementById("top3Btn");

let player1 = {
    name: localStorage.getItem("player1"),
    score: localStorage.getItem("score1"),
    skin: localStorage.getItem("pl1")
}

let player2 = {
    name: localStorage.getItem("player2"),
    score: localStorage.getItem("score2"),
    skin: localStorage.getItem("pl2")
}

findPosition(player1);
findPosition(player2);

function findPosition(pl) {
    let i = leaderboard.length;

    do
        i--;
    while (i >= 0 && pl.score >= leaderboard[i].score);

    /* aggiunge al vettore i due giocatori */
    leaderboard.splice((i + 1), 0, pl);
}


for (let i = 0; i < leaderboard.length; i++) {

    let index = document.createElement("div");
    index.textContent = i + 1;
    position.appendChild(index);

    let nameDiv = document.createElement("div");
    nameDiv.textContent = leaderboard[i].name;
    player.appendChild(nameDiv);

    let scoreDiv = document.createElement("div");
    scoreDiv.textContent = leaderboard[i].score;
    score.appendChild(scoreDiv);

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = "./img/" + leaderboard[i].skin + "Sm.png";
    div.appendChild(img);
    skin.appendChild(div);
}

top3Btn.addEventListener("click", function () {
    if (position.children[1].classList.contains("top1")) {
        for (let i = 1; i < 4; i++) {
            position.children[i].classList.remove("top" + i);
            player.children[i].classList.remove("top" + i);
            score.children[i].classList.remove("top" + i);
        }
    } else {
        for (let i = 1; i < 4; i++) {
            position.children[i].classList.add("top" + i);
            player.children[i].classList.add("top" + i);
            score.children[i].classList.add("top" + i);
        }
    }
});

searchBtn.addEventListener("click", function () {
    if (!document.querySelector("body > #search")) {
        /* SE NON C'E' LA FINESTRA DI RICERCA*/

        let div = document.createElement("div");
        div.id = "search";
        div.innerHTML = `<div>Cerca un giocatore...<span class="material-symbols-rounded">close</span></div><input type="text" placeholder="Cerca qui...">`
        document.body.appendChild(div);

        div.querySelector("span").addEventListener("click", function () {
            div.remove();
            for (let i = 1; i < leaderboard.length + 1; i++)
                if (player.children[i].classList.contains("ris"))
                    player.children[i].classList.remove("ris");
        });

        let input = div.querySelector("input");

        input.focus();

        input.addEventListener("input", function () {

            if (this.value != "") {
                for (let i = 1; i < leaderboard.length + 1; i++) {

                    if (player.children[i].textContent.toLowerCase().includes(this.value.toLowerCase()))
                        player.children[i].classList.add("ris");
                    else if (player.children[i].classList.contains("ris"))
                        player.children[i].classList.remove("ris");
                }
            }
        });
    } else {
        /* SE C'E' LA FINESTRA DI RICERCA*/
        document.querySelector("body > #search").remove();

        for (let i = 1; i < leaderboard.length + 1; i++)
            if (player.children[i].classList.contains("ris"))
                player.children[i].classList.remove("ris");
    }
});