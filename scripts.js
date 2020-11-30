const jump = document.querySelector('#dino');

// document.body.keydown = function(e){
//     if(e.keyCode == 32){
//         //your code

//         jump.classList.add('jump');

        

//     }
// }
function test (){
window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32){
        e.preventDefault();
        jump.classList.add('jump');
        console.log('jumped');

    }
});
}

test();
