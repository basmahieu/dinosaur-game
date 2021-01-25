const dino = document.querySelector('.dino');
 
const cactus = document.querySelector('.cactus');

const buttonStart = document.querySelector('#start');
const buttonRestart = document.querySelector('#restart');

const backgroundpause = document.querySelector('.background-move-paused');

const initialScore = document.querySelector('.initial-score');
const gameOver = document.querySelector('#game-over');
const gameOverLayer = document.querySelector('.game');

const audio = document.querySelector('#audio');
const audioLose = document.querySelector('#audioLose');



// Start Button
const start = buttonStart.onclick = function (){
    initialScore.remove();
    cactus.classList.add('cactus-move');
    dino.classList.add('shake');
    window.setInterval(stopWatch, 100);
    buttonStart.remove();
    backgroundpause.classList.remove('background-move-paused');

    
};

// Restart Button
const restart = buttonRestart.onclick = function (){
    location.reload();
};

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        // code for enter
        restart();
      }
});


// Jump with space
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 32){
        jump();
        start();
    }
});


// Duck with arrow
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 40){
        duck();
     
    }
});

document.addEventListener('keyup', function(e) {
    if(e.keyCode == 40){
    
    dino.classList.remove('dino-duck');
    dino.classList.add('dino');
     
    }
});


// Dino Jump
function jump() {

    if (dino.classList != "jump"){
        dino.classList.add('jump');
        dino.classList.add('dino-jump');

        audio.play();   

        setTimeout(function(){
            dino.classList.remove('jump');
            dino.classList.remove('dino-jump');

        }, 300)
    }
}   


function duck() {
    dino.classList.remove('dino');
    dino.classList.add('dino-duck');
}   


// Check collision
let isAlive = setInterval(() => {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
 
    

    // Detect collision
    if (cactusLeft <50 && cactusLeft > 0 && dinoTop >= 130){
        
        
        gameOverLayer.classList.add('game-over');
        gameOverLayer.innerText = "Game over!";

        cactus.classList.add('cactus-move-paused');
        isPaused = true;

        audioLose.play();
    }

}, 10);






// Score
const score = document.querySelector('.score');
let seconds = 0;
let isPaused = false;

function stopWatch(){
    
    if(!isPaused) {
        let finalScore = seconds++;
        score.innerHTML = `<h2>Score: ${finalScore} </h2>`;
    }
}






