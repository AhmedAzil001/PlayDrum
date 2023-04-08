var numberOfDrums=document.querySelectorAll("button").length;

for(var i=0;i<numberOfDrums;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        var choice= this.innerHTML;
        makeSound(choice);
        keyAnimation(choice);
     });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    keyAnimation(event.key);
});

function makeSound(choice){
    switch (choice) {
        case "w":
            var drum1=new Audio("sounds/tom-1.mp3");
            drum1.play();
            break;
        case "a":
            var drum2=new Audio("sounds/tom-2.mp3");
            drum2.play();
            break;
        case "s":
            var drum3=new Audio("sounds/tom-3.mp3");
            drum3.play();
            break;
        case "d":
            var drum4=new Audio("sounds/tom-4.mp3");
            drum4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(choice);
            break;
    }
}


function keyAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");

    },100);
}
