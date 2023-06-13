// Create your global variables below:
var tracklist = [
  "Let It Happen",
  "Nangs",
  "The Moment",
  "Yes I'm Changing",
  "Eventually",
  "Gossip",
  "The Less I Know The Better",
  "Past Life",
  "Disciples",
  "'Cause I'm A Man",
];
var volLevels = [];
//set the initial value of the volume to 3
var volScale = 3;
var play = true;

var secondsPassed = document.getElementById("player-time").value;
var numVal = Number(secondsPassed);

///initialize the array with 6 songs
var currentSong = 6;
var len = tracklist.length;

var interval;

function init() {
  // Your code goes here

  for (let i = 0; i < 6; i++) {
    volLevels.push(document.getElementById(`vl${i}`));
  }

  console.log(volLevels, "array");

  for (let i = 0; i < volScale; i++) {
    volLevels[i].style.backgroundColor = "#9f5cc4";
  }
}

function volUp() {
  // Your code goes here
  console.log("clicked");

  if (volScale < volLevels.length) {
    volLevels[volScale].style.backgroundColor = "#9f5cc4";
    volScale += 1;
  } else {
    volScale = volLevels.length - 1;
    console.log(volScale, "resetting1");
  }
}

function volDown() {
  // Your code goes here

  if (volScale > -1) {
    volLevels[volScale].style.removeProperty("background-color");
    volScale -= 1;
  } else {
    volScale = 0;
  }
}

function switchPlay() {
  // Your code goes here
  if (play) {
    interval = setInterval(
      function () {
        numVal += 1;

        var temp = `${numVal}`;
        console.log(temp);

        document.getElementById("player-time").stepUp(1);

        document.getElementById("time-elapsed").innerHTML = secondsToMs(temp);
      },

      1000
    );

    document.getElementById("play").innerHTML = "pause";

    play = false;
  } else {
    document.getElementById("play").innerHTML = "play_arrow";

    clearInterval(interval);

    play = true;
  }
}

function nextSong() {
  // Your code goes here

  if (currentSong < len - 1) {
    currentSong += 1;
    document.getElementById("player-song-name").innerHTML =
      tracklist[currentSong];
  } else {
    currentSong = 0;
    document.getElementById("player-song-name").innerHTML =
      tracklist[currentSong];
  }

  numVal = 0;
  document.getElementById("player-time").value = 0;
}

function prevSong() {
  // Your code goes here

  if (currentSong > 0) {
    currentSong -= 1;
    document.getElementById("player-song-name").innerHTML =
      tracklist[currentSong];
  } else {
    currentSong = len - 1;
    document.getElementById("player-song-name").innerHTML =
      tracklist[currentSong];
  }
  numVal = 0;
  document.getElementById("player-time").value = 0;
}

function secondsToMs(d) {
  d = Number(d);

  var min = Math.floor(d / 60);
  var sec = Math.floor(d % 60);

  return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
