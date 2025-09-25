// Variables to track the actual scores
let homeScoreValue = 0;
let guestScoreValue = 0;

// Get references to the display elements
const homeScoreDisplay = document.getElementById('home-score');
const guestScoreDisplay = document.getElementById('guest-score');



function addScoreh1() {
  
    homeScoreValue += 1;
    homeScoreDisplay.textContent = homeScoreValue;
//    homeScore.textContent = parseInt(homeScore.textContent) + 1;
}

function addScoreh2() {

    homeScoreValue += 2;
    homeScoreDisplay.textContent = homeScoreValue;
}

function addScoreh3() {
    
    homeScoreValue += 3;
    homeScoreDisplay.textContent = homeScoreValue;
}

function addScoreg1() {
    guestScoreValue += 1;
    guestScoreDisplay.textContent = guestScoreValue;
}

function addScoreg2() {
    guestScoreValue += 2;
    guestScoreDisplay.textContent = guestScoreValue;
}

function addScoreg3() {
    guestScoreValue += 3;
    guestScoreDisplay.textContent = guestScoreValue;
}