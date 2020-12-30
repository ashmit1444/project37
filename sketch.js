var car1image,car2image,car3image,car4image;
var RESET;
var car1,car2,car3,car4,cars;
var player,form,game;
var database;
var gameState = 0,playerCount ;
var allPlayers;

function preload()
{
  car1image = loadImage("car1.png");
  car2image = loadImage("car2.png");
  car3image = loadImage("car3.png");
  car4image = loadImage("car4.png");
}

function setup(){
   
    createCanvas(displayWidth,displayHeight);
    database = firebase.database()
   RESET = createButton ("RESET");
   RESET.position(200,200);
    game = new Game ()
   game.getState();
   game.start();
}
function draw(){
   
    if(playerCount === 4)
    {
        game.update(1);
    }
   if(gameState===1)
   {
       game.play();
   }
 RESET.mousePressed(function(){

   database.ref("/").update({
       playerCount:0,
       gameState:0,
       players:"",
   });

 });
 
 

}