function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `~${formattedMM} : ${formattedSS} : ${formattedMS}`;
}

let startTime ;
let elaspedTime = 0;
let timeInterval;

// Create function to modify innerHtml

function print(txt){
    document.getElementById("display").innerHTML = txt;
}

// Create "start" , "pause" and "rest" functions

function start(){
    startTime = Date.now() - elaspedTime ;
    timeInterval = setInterval(function printTime(){
        elaspedTime = Date.now() - startTime;
        print(timeToString(elaspedTime));
    },10);
    showButton("PAUSE");
}

function pause(){
    clearInterval(timeInterval);
    showButton("PLAY");
}

function rest(){
    clearInterval(timeInterval);
    print("00:00:00");
    elaspedTime = 0 ;
    showButton("PLAY");
}

// Create a Function to display buttons

function showButton(buttonKey){
    const buttonToShow = buttonKey ===
    "PLAY" ? playButton : pauseButton ;

    const buttonToHide = buttonKey ===
    "PLAY" ? pauseButton : playButton ;

    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";

}

// Create event listeners

let playButton  = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let restButton = document.getElementById("restButton");

playButton.addEventListener("click" , start);
pauseButton.addEventListener("click" , pause);
restButton.addEventListener("click" , rest);