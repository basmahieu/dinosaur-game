const dino = document.querySelector('#dino');
const audio = document.querySelector('#audio');
const cactus = document.querySelector('#cactus');


function jump() {

    if (dino.classList != "jump"){
        dino.classList.add('jump');
        audio.play();   

        setTimeout(function(){
            dino.classList.remove('jump');
        }, 300)
    }
}   


let isAlive = setInterval(() => {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
 
    // Detect collision
    if (cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140){
    // alert ("You lose!");
    } 
        
    


}, 10);


document.addEventListener('keydown', function(e) {
    if(e.keyCode == 32){
        jump();
    }
    
});


// Score
const score = document.querySelector('.score');
let seconds = 0;

function stopWatch(){
    let finalScore = seconds++;
    score.innerHTML = `<h2>Score: ${finalScore} </h2>`;
}

window.setInterval(stopWatch, 100);




