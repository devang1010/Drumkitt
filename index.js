let numberOfButtons = document.querySelectorAll(".drum").length;


// to play by click 
for(let i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

// to play by keyboard
document.addEventListener("keypress", function(Event) {
    makeSound(Event.key);
    buttonAnimation(Event.key);
});


function makeSound(key){
    switch(key){
        case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            case "j":
                let snar = new Audio('sounds/snare.mp3');
                snar.play();
                break;

            case "k":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "l":
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

            default:
                console.log 
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
