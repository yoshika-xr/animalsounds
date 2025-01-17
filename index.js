
var numberofanim=document.querySelectorAll(".anim").length;

for(var i =0 ; i < numberofanim ;i++){
    document.querySelectorAll(".anim")[i].addEventListener("click", function (){
       var buttoninnerHTML=this.innerHTML;
        makesound(buttoninnerHTML);
        buttonanimaton(buttoninnerHTML);
    });
}

  document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimaton(event.key);
  });
  function makesound(key){
    switch(key){
        case "c":
            var cow=new Audio("./sound/cow.mp3");
            cow.play();
            break;
        case "a":
            var cat=new Audio("./sound/cat.mp3");
            cat.play();
            break;
        case "d":
            var dog=new Audio("./sound/dog.mp3");
            dog.play(); 
            break;
        case "l":
            var lion=new Audio("./sound/lion.mp3");
            lion.play(); 
            break;
        case "e":
            var elephant=new Audio("./sound/elephant.mp3");
            elephant.play();
            break;
        case "s":
            var sheep=new Audio("./sound/sheep.mp3");
            sheep.play();
            break;
        case "t":
            var tiger=new Audio("./sound/tiger.mp3");
            tiger.play();
            break;
            
            default:
                comsole.log(buttoninnerHTML);
            break;
       }


    }
    function buttonanimaton(currentkey){
        var activebutton=document.querySelector("."+currentkey);
        activebutton.classList.add("pressed");
        setTimeout(function(){
            activebutton.classList.remove("pressed");
        },100);
    }
