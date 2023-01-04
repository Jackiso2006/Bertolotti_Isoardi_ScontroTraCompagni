var animation1 = assegnazioneAbilita(first_ability_1);
var animation2 = assegnazioneAbilita(first_ability_2);


//aggiungo la classe così setta in automatica 
//larghezza altezze animazioni (ABILITA')ecc...
function settaggio(element, classe) {
    element.forEach(val => {
        val.classList.add(classe)
    });
}

//ASSEGNAZIONE CLASSE E ANIMAZIONE IN BASE
//ALL'ABILITA' SCELTA
function assegnazioneAbilita(ability) {

    var animation;
    
    switch (ability.src) {
        case endsWith("grenade.png"):
            settaggio(ability, "grenade");
            animation = "grenade" + player;
            break;

        case endsWith("yo.png"):
            settaggio(ability, "yo");
            animation = "fire" + player;
            break;

        case endsWith("fire.png"):
            settaggio(ability, "fire");
            animation = "fire" + player;
            break;

        case endsWith("laser.png"):
            settaggio(ability, "laser");
            animation = "laser" + player;
            break;

        case endsWith("cs.png"):
            settaggio(ability, "c_sharp");
            animation = "cs" + player;
            break;

        case endsWith("cosa_vuoi.png"):
            settaggio(ability, "cosa_vuoi");
            break;

        default:
            break;
    }

    return animation;

}