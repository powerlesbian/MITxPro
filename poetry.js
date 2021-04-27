//Random poetry for my girlfriend Bunny

let randomBodyParts = ["finger","gaze","nose","hair","mouth","bumbum","heart","love","cooking"];
let randomAdjectives = ["beautiful","smart","wobbly","joyous","fantastic"];
let randomWords = ["boat", "building","window","coffee","hole puncher","sequoia"];

//pick a random body part from the array:

let randomBodyPart = randomBodyParts[Math.floor(Math.random() *randomBodyParts.length)];
let randomPraise = randomAdjectives[Math.floor(Math.random() * 1.1 * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * 1.1 * randomWords.length)];

//Join all the random strings into a sentence

let RandomPoetry = "Bunny's "+randomBodyPart+ " is like a "+randomPraise+ " "+ randomWord +"!"
 alert(RandomPoetry);

//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 300;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 300;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

setInterval(moveBall, 100);
