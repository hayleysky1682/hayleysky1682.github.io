let doorImage1 = document.getElementById('door1');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
   
  }
};

let doorImage2 = document.getElementById('door2');
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

let doorImage3 = document.getElementById('door3');
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

let startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!'; 
  randomChoreDoorGenerator();
};

let startButton = document.getElementById('start');

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};

let gameOver = (status) => {
  currentlyPlaying = false;
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
};

let numClosedDoors = 3;

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
};

let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying = true;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let isBot = (door) => {
  if ( door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

let isClicked = (door) => {
  if (door.src === closedDoorPath ) {
    return false;
  } else {
    return true;
  }
};

let playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
  //currentlyPlaying = false;
};
startRound();
  


