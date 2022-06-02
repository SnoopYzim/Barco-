var barcostop, barcogo;
var sea,seaimagem;


//Função para load the files que vão ser usados
function preload(){
barcostop = loadAnimation("ship-1.png","ship-2.png");
sea = loadAnimation("sea.png");
}


//Função que vai ser executada only once
function setup(){
  createCanvas(400,400);
  
//creating the sprite e os configura
barcostop = createSprite()





}

function draw() {
  background("blue");
    drawSprites();

 
}
