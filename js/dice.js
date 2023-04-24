// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "dice" + randomNumber1 + ".png"; 

// var randomImageSource = "../img/" + randomDiceImage; 

// var image1 = document.querySelectorAll("img")[0]; 

// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "../image/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


/*
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "../img/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "../img/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);





//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Spiller 1 Vant!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Spiller 2 Vant! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Uavgjort!";
}
*/

function myFunction() {
 
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.


  if (randomNumber1 == randomNumber2) {
      document.querySelector("h1").innerHTML = "Uavgjort!";
  } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩  " + "Spiller 1 vinner!";
  } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Spiller 2 vinner!" + "  🚩";
  }

  // Use DOM to target Player 1's dice image. Set attribute by concactonating with randomNumber1.
  document.getElementById("img1").setAttribute("src", "../img/dice" + randomNumber1 + ".png");

  // Use DOM to target Player 2's dice image. Set attribute by concactonating with randomNumber2.
  document.getElementById("img2").setAttribute("src", "../img/dice" + randomNumber2 + ".png");
}

// Triggered by a clicking event, run myFunction() and change the h1 according to the outcome. 
document.getElementById("buttonDice").addEventListener("click", myFunction);






//Kart
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 59.21837755219902, lng: 10.942165061484642 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;


