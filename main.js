x = 0;
y = 0;
screen_width=0;
screen_height=0;
to_number="";
speak_data="";
draw_apple = "";
synth = window.speechSynthesis;
var utterThis="";
apple="";
status1="";


  var SpeechRecognition=webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number=Number(content);
 console.log(to_number);
 if(Number.isInteger(to_number)){
   draw_apple="set";
    document.getElementById("status").innerHTML = "started drawing apple";
    status1="true";
 }
 else{
  document.getElementById("status").innerHTML = "The speech has not recognised a number";
 }
}

function preload() {
  apple=loadImage("apple.png");
}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 console.log(screen_width+","+ screen_height);
 canvas=createCanvas(screen_width,screen_height-150);
 canvas.position(0,150);
}

function draw() {
  
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    
    speak_data=to_number+" Apples drawn";
      speak();
    for(var i=0;i<to_number;i++){
      x=Math.floor(Math.random()*600);
      console.log("inForLoop");
      y=Math.floor(Math.random()*400);
      console.log(x+y);
      image(apple,x,y,50,50);
    }
    draw_apple="";
  }
}

function speak(){
    
  utterThis = new SpeechSynthesisUtterance(speak_data);
     
    
    synth.speak(utterThis);

  speak_data = "";
      
    
}



