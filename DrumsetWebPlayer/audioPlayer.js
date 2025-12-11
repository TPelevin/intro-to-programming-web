let kick = document.getElementById("kick");
kick.addEventListener('click', playKick);


function playKick() {
    let kick = new Audio("sounds/kick-bass.mp3");
	kick.play();
}

let snare = document.getElementById("snare");
snare.addEventListener('click', playSnare);


function playSnare() {
    let snare = new Audio("sounds/snare.mp3");
	snare.play();
}

let crash = document.getElementById("crash");
crash.addEventListener('click', playCrash);


function playCrash() {
    let crash = new Audio("sounds/crash.mp3");
	crash.play();
}

let tom1 = document.getElementById("tom1");
tom1.addEventListener('click', playTom1);


function playTom1() {
    let tom1 = new Audio("sounds/tom-1.mp3");
	tom1.play();
}

let tom2 = document.getElementById("tom2");
tom2.addEventListener('click', playTom2);


function playTom2() {
    let tom2 = new Audio("sounds/tom-2.mp3");
	tom2.play();
}