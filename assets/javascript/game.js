var $targetNumber = $("#randomNumber");
var $wins = $("#wins");
var $losses = $("#losses");
var $winLose = $("#win-lose")
var $firstDiamond = $("#firstDiamond");
var $secondDiamond = $("#secondDiamond");
var $thirdDiamond = $("#thirdDiamond");
var $fourthDiamond = $("#fourthDiamond");

var $userTotal = $("#userTotal");

// Selects a random number to be shown at the start of the game
// Number hads to be between 19 - 120
var targetNumber = Math.floor(Math.random() * 101) + 19;

// Adding random number to the randomNumber id in the html doc
$('#randomNumber').text(targetNumber);
console.log(targetNumber)
//Setting up random numbers for each cyrstal
// Random number has to be between 1 - 12
var firstDiamond = Math.floor(Math.random() * 11 + 1);
var secondDiamond = Math.floor(Math.random() * 11 + 1);
var thirdDiamond = Math.floor(Math.random() * 11 + 1);
var fourthDiamond = Math.floor(Math.random() * 11 + 1);
console.log(firstDiamond);

// Decaring variables for keeping score
var wins = 0;
var losses = 0;
var userTotal = 0;

$('#wins').text(wins);
$('#losses').text(losses);
$("#userTotal").text(userTotal);

//resets the game
function reset() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $('#randomNumber').text(targetNumber);

    firstDiamond = Math.floor(Math.random() * 11 + 1);
    secondDiamond = Math.floor(Math.random() * 11 + 1);
    thirdDiamond = Math.floor(Math.random() * 11 + 1);
    fourthDiamond = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    
    // $("#firstDiamond").text(firstDiamond);
}
console.log(firstDiamond);
//click for crystals

$('#firstDiamond').on('click', function () {
    userTotal = userTotal + firstDiamond;
    runGame();
})
$('#secondDiamond').on('click', function () {
    userTotal = userTotal + secondDiamond;
    runGame();
})

$('#thirdDiamond').on('click', function () {
    userTotal = userTotal + thirdDiamond;
    runGame();
})

$('#fourthDiamond').on('click', function () {
    userTotal = userTotal + fourthDiamond;
    runGame();
})

function runGame(){
    console.log("New userTotal= " + userTotal);
    $("#userTotal").text(userTotal);
    
    
    //sets win/lose conditions
    if (userTotal === targetNumber) {
        wins++;
        $("#win-lose").html("<h3>Winner!</h3>");
        $('#wins').text(wins);
        reset();
    }
    else if (userTotal >= targetNumber) {
        losses++;
        $("#win-lose").html("<h3>Loser!</h3>");
        $('#losses').text(losses);
        reset();
    }
}


