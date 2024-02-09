//Lagrer fargene på knappene i en variabel
var buttonColors = ["red", "blue", "green", "yellow"];

//Lagrer mønsteret som spilles av
var gamePattern = [];

//variabel for hvilken knapp som bruker trykker på
var userClickPattern = [];

//Status på om spillet har startet
var started = false;

//Hvilken level man er på, skal økes med en hver gang man trykker riktig
var level = 0;

//en funksjon som starter spillet når man trykker på en knapp
$(document).keypress(function() {
    if (!started) {
        $("#level.title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");

    userClickPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickPattern.length-1);
});

function checkAnswer(currentLevel1) {
    if(gamePattern[currentLevel1] === userClickPattern[currentLevel1]){
        console.log("success");

        if(userClickPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else{

        console.log("wrong");
        
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Du kom til level " + level + ", Trykk På En Knapp For Å Prøve På Nytt!");

        startOver();
    }
}

function nextSequence(){

    userClickPattern = [];

    level++;

    $("#level-title").text("Level " + level)

    var randomNumber = Math.floor(Math.random() *4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    
}
function playSound(name){
    var audio = new Audio("../sounds/" + name + ".mp3");
    audio.play();

}
function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");

setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
}, 100);
}
function startOver(){
    level = 0;
    gamePattern =[];
    started = false;
}


