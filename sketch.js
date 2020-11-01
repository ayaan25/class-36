var ball;
var position, db;
var car1, car2, car3, car4, cars ; 
var gameState=0, playerCount, allPlayers, distance =0 ; 
var form, player, game ; 

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    if(gameState === 1){
        game.play();
    }
    if (gameState === 2){
        game.End();
    }
}

