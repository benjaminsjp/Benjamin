// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "dice" + randomNumber1 + ".png"; 

// var randomImageSource = "../img/" + randomDiceImage; 

// var image1 = document.querySelectorAll("img")[0]; 

// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "../image/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


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


