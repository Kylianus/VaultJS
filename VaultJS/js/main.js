var output = document.getElementById('output')
var blinklocked = document.getElementById("locked");
var blinkunlocked = document.getElementById("unlocked");
var unlockAudio = document.getElementById("unlockAudio");
var lockedAudio = document.getElementById("lockedAudio");
var numberButtons = document.getElementsByClassName('button');
var clickcounter = 0;
var numberone = "";
var numbertwo = "";
var numberthree = "";
var lostCounter = 0;
var winCounter = 0;
var intervalA;
var intervalB;

function blinkGreen() {
  (blinkunlocked).style.background = "LightGreen"
  intervalA = setTimeout("setblinkGreen()", 200);
}

function setblinkGreen() {
  (blinkunlocked).style.background = "DarkGreen"
  intervalB = setTimeout("blinkGreen()", 200);
}

function blinkRed() {
  (blinklocked).style.background = "Red"
  intervalA = setTimeout("setblinkRed()", 200);
}

function setblinkRed() {
  (blinklocked).style.background = "DarkRed"
  intervalB = setTimeout("blinkRed()", 200);
}

function disableButtons() {
  for (i = 0; i < numberButtons.length; i++) {
    numberButtons[i].setAttribute('disabled', 'disabled');
  }
}

function enableButtons() {

  for (i = 0; i < numberButtons.length; i++) {
    numberButtons[i].removeAttribute('disabled');
  }
}

function resetpopup() {
  var reset;
  if (confirm("Do you want to try again?")) {
    enableButtons();
    clickcounter = 0;
    numberone = "";
    numbertwo = "";
    numberthree = "";
    trueorfalse.innerHTML = "";
    output.innerHTML = "";
  } else {
    txt = "You cancelled.";
  }
}

function getValue(button) {
  clickcounter++;
  console.log(clickcounter);
  output.innerHTML += button.value;
  if (clickcounter == 1) {
    numberone = button.value;
  } else if (clickcounter == 2) {
    numbertwo = button.value;
  } else if (clickcounter == 3) {
    numberthree = button.value;
  }

  if (clickcounter == 3) {

    if (numberone == 1 && numbertwo == 2 && numberthree == 3) {
      trueorfalse.innerHTML += "You cracked the vault!";
      winCounter++;
      document.getElementById("counter").innerHTML = "Won: " + winCounter + " Lost:" + lostCounter;
      blinkGreen();
      winAnimation();
      setTimeout(function() {
        clearInterval(intervalA);
        clearInterval(intervalB);
      }, 3000);
      unlockAudio.play();
      disableButtons();
      setTimeout("resetpopup()", 3000);
    } else {
      trueorfalse.innerHTML += "Invalid code, try again.";
      lostCounter++;
      document.getElementById("counter").innerHTML = "Won: " + winCounter + " Lost:" + lostCounter;
      blinkRed();
      setTimeout(function() {
        clearInterval(intervalA);
        clearInterval(intervalB);
      }, 3000);
      lockedAudio.play();
      disableButtons();
      setTimeout("resetpopup()", 3000);
    }
  }
}
