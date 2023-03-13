//Fargene på knappene
var buttonColors = ["red", "blue", "green", "yellow"];

//Variabel for hvilken knapp som skal trykkes på
var gamePattern = [];

//variabel for hvilken knapp som bruker trykker på
var userClickPattern = [];

var started = false;

var level = 0;

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


