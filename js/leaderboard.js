let leaderboard = [
    {
        name: "Schiappa 203",
        score: 4321,
        skin: "sarim",
    },
    {
        name: "name1",
        score: 3760,
        skin: "gabibbo",
    },
    {
        name: "name1",
        score: 3501,
        skin: "trevor",
    },
    {
        name: "name1",
        score: 3334,
        skin: "timmy",
    },
    {
        name: "name1",
        score: 3115,
        skin: "gerry",
    },
    {
        name: "name1",
        score: 2862,
        skin: "gerry",
    },
    {
        name: "name1",
        score: 2571,
        skin: "gabibbo",
    },
    {
        name: "name1",
        score: 2143,
        skin: "trevor",
    },
    {
        name: "name1",
        score: 1782,
        skin: "sarim",
    },
    {
        name: "name1",
        score: 1469,
        skin: "timmy",
    },
    {
        name: "name1",
        score: 1230,
        skin: "gabibbo",
    },
    {
        name: "name1",
        score: 905,
        skin: "gabibbo",
    },
    {
        name: "name1",
        score: 787,
        skin: "trevor",
    },
    {
        name: "ULTIMO",
        score: 659,
        skin: "sarim",
    },
];

let position = document.getElementById("position");
let player = document.getElementById("player");
let score = document.getElementById("score");
let skin = document.getElementById("skin");

let player1 = {
    name: localStorage.getItem("player1"),
    score: 3000,
    skin: localStorage.getItem("pl1")
}

let player2 = {
    name: localStorage.getItem("player2"),
    score: 1000,
    skin: localStorage.getItem("pl2")
}

findPosition(player1);
findPosition(player2);

function findPosition(pl) {
    let i = leaderboard.length - 1;

    do
        i--;
    while (i >= 0 && pl.score >= leaderboard[i].score);
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