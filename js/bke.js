/************************************
 Hieronder staan alle globale variabelen
 **************************************/

// CONSTANTEN

var GAME_BUTTON_ELEMENT = document.getElementsByClassName('game-button')[0];
var GAME_FIELD_ELEMENT = document.getElementById('speelveld').getElementsByTagName('img');
var SCORE_PLAYER1_ELEMENT = document.getElementsByClassName('rounds-info')[0]
    .getElementsByTagName('td')[1];
var SCORE_PLAYER2_ELEMENT = document.getElementsByClassName('rounds-info')[0]
    .getElementsByTagName('td')[3];
var CURRENT_ROUND_ELEMENT = document.getElementsByClassName('rounds-info')[0]
    .getElementsByTagName('td')[5];
var TURN_PLAYERIMAGE_ELEMENT = document.getElementsByClassName('players-turn')[0]
    .getElementsByTagName('img')[0];
var TURN_PLAYERNUMBER_ELEMENT = document.getElementsByClassName('players-turn')[0]
    .getElementsByTagName('td')[2];
var PLAYER_IMAGES = ['img/empty.jpg', 'img/cross.jpg', 'img/circle.jpg'];
//                        Index 0             Index 1         Index 2

// VARIABLES

var score_player1 = 0;
var score_player2 = 0;
var current_round = 0;
var player_turn = 0;

/*********************************************************************
 Hieronder begint de code.
 **********************************************************************/

//Initialisatie
window.onload = function(){

    // 1. Button klikbaar maken.
    GAME_BUTTON_ELEMENT.onclick = buttonClickHandler;
    // 2. Scores resetten.
    score_player1 = 0;
    score_player2 = 0;
    current_round = 0;

    // 3. Beurt bepalen.
    player_turn = Math.round( Math.random() + 1);

    // 4. Speelveld leegmaken.
    clearGameField();
}; // Einde window.onload



/************************ Functions ***************************/
function clearGameField() {
    for (var celnum = 0; celnum < 9; celnum++) {
        GAME_FIELD_ELEMENT[celnum].src = PLAYER_IMAGES[0];
    }
} // Einde clearGameField

function buttonClickHandler() {
    // a) Tekst op de butten vervangen
    GAME_BUTTON_ELEMENT.innerHTML = 'Reset spel';

    //b) Speelveld (cellen) klikbaarmaken
    for(var celnum = 0; celnum <9; celnum++){
        GAME_FIELD_ELEMENT[celnum].onclick = cellClickHandler;
    }

    //c) Ronde verhogen en tonen
    current_round = current_round + 1;
    CURRENT_ROUND_ELEMENT.innerHTML = current_round;


}   // EINDE FUNCTION buttonClickHandler


function cellClickHandler(event_info) {
    if(event_info.target.src.search('empty') > -1) {

        // 1. Plaatje van de huidige speler tonen
        event_info.target.src = PLAYER_IMAGES[player_turn];

        // 2. Checken of iemand gewonnen heeft
        if(checkWinner(1)) {
            alert("Speler 1 wint");
            clearGameField();
            score_player1 ++;
            SCORE_PLAYER1_ELEMENT.innerHTML = score_player1;
            current_round ++;
            CURRENT_ROUND_ELEMENT.innerHTML = current_round;

            //Doe de dingen die nodig zijn als speler 1 heeft gewonnen
            // Score toekennen aan speler 1
        }
        if (checkWinner(2)) {
            alert("Speler 2 wint");
            clearGameField();
            score_player2 ++;
            SCORE_PLAYER2_ELEMENT.innerHTML = score_player2;
            current_round ++;
            CURRENT_ROUND_ELEMENT.innerHTML = current_round;}
        //Doe de dingen die nodig zijn als speler 2 heeft gewonnen
        //Score toekennen
        // Score tonen
        // Beurt geven aan de andere speler

        // 3. Beurt doorgeven
        if(player_turn == 1)
            player_turn = 2;
        else
            player_turn = 1;

        TURN_PLAYERNUMBER_ELEMENT.innerHTML = player_turn;
        TURN_PLAYERIMAGE_ELEMENT.src = PLAYER_IMAGES[player_turn];
    }
}

function checkWinner(player_num) {
    //rij 1 - 0, 1, 2
    if  (GAME_FIELD_ELEMENT[0].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[1].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[2].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    //rij 2 - 3, 4, 5
    if  (GAME_FIELD_ELEMENT[3].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[5].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    //rij 3 - 6, 7, 8
    if  (GAME_FIELD_ELEMENT[6].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[7].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[8].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    //verticale rij 1 - 0, 3, 6
    if  (GAME_FIELD_ELEMENT[0].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[3].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[6].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    //verticale rij 2 - 1, 4, 7
    if  (GAME_FIELD_ELEMENT[1].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[7].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    //verticale rij 3 - 2, 5, 8
    if  (GAME_FIELD_ELEMENT[2].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[5].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[8].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    //diagonale rij 1 - 0, 4,8
    if  (GAME_FIELD_ELEMENT[0].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[8].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    //diagonale rij 2 - 2, 4,6
    if  (GAME_FIELD_ELEMENT[2].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[player_num]) > -1 &&
        GAME_FIELD_ELEMENT[6].src.search(PLAYER_IMAGES[player_num]) > -1 )
        return true;

    return false;
}