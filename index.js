
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       var buttonInnerhtml= this.innerHTML;
makesound(buttonInnerhtml);
    })
}
document.addEventListener("keypress",function(event){
    makesound(event.key)
})
function makesound(key){
    switch (key) {
        case "w":
            var snare=new Audio('tom-1.mp3');
            snare.play();
            break;
            case "a":
                var kick=new Audio('tom-2.mp3');
                kick.play();
                break;
                case "s":
                    var crash=new Audio('tom-3.mp3');
                    crash.play();
                    break;
                    case "d":
                        var tom=new Audio('snare.mp3');
                        tom.play();
                        break;
                        case "j":
                            var local=new Audio('tom-4.mp3');
                            local.play();
                            break;
                            case "k":
                                var sound=new Audio('crash.mp3');
                                sound.play();
                                break;
                                case "i":
                                    var drum=new Audio('kick-bass.mp3');
                                    drum.play();
                                    break;   
                                    default:
                                        break;
                                }
                                } 


