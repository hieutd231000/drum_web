var numberOfDrumButton = document.querySelectorAll("button").length;

for(var i=0; i<numberOfDrumButton; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
        buttonAnimation(buttonHtml);
    });
}

document.addEventListener('keypress',function(event){
    // console.log(event);
    // Get attribute key
    makeSound(event.key); 
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case 'j':
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case 'k':
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case 'l':
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+key).classList.remove("pressed");
      }, 100)
}