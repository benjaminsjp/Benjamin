//Lager en funkdjon som starter når kast terning knappen blir trykket på
function diceeFunksjon() {
 
  //Lagrer ett tilfeldig tall fra 1 til 6 i randomNumber1 og 2
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.

 //If sjekker om randomNumber1 og 2 er like og endrer på h1 til uavgjort hvis de er like
  if (randomNumber1 == randomNumber2) {
      document.querySelector("h1").innerHTML = "Uavgjort!";
    //else if randomNumber1 er høyere verdi enn randomNumber2 og endrer på h1 til Spiller 1 vinner hvis det stemmer
  } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩  " + "Spiller 1 vinner!";
  } else {
      document.querySelector("h1").innerHTML = "Spiller 2 vinner!" + "  🚩";
  }

  // Use DOM to target Player 1's dice image. Set attribute by concactonating with randomNumber1.
  document.getElementById("img1").setAttribute("src", "../img/dice" + randomNumber1 + ".png");

  // Use DOM to target Player 2's dice image. Set attribute by concactonating with randomNumber2.
  document.getElementById("img2").setAttribute("src", "../img/dice" + randomNumber2 + ".png");
}

// Triggered by a clicking event, run diceeFunksjon() and change the h1 according to the outcome. 
document.getElementById("buttonDice").addEventListener("click", diceeFunksjon);









