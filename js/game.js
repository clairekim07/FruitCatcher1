class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
        gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
        gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
        

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);

        var x =100;
        var y=200;
        var index =0;

        drawSprites();
        for(var plr in allPlayers){

            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
                     
            players[index -1].x = x;
            players[index - 1].y = y;
                       
        /*if(index === player.index){
                         
            fill("black");
            textSize(25);
            text(allPlayers[plr].name ,x,y);
                         
                         
    }*/
                    
        fill("white");
        textSize(35);
        

                 }

                
                 
                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 30
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 30
                    player.update();
                }
            
                 
                  if (player1 !== null) 
                  {
                     //fill code here, to destroy the objects.
                     if (player1 !== null) 
                     { 
                         for (var m = 0; m < maskGroup.length; m++) 
                         { 
                             if (maskGroup.get(m).isTouching(player1)) 
                             { 
                                maskGroup.get(m).destroy(); 
                                score++;
                                 
                             } 
                         } 
                         for (var i = 0; i < virusGroup.length; i++) 
                         { 
                             if (virusGroup.get(i).isTouching(player1)) 
                             { 
                                virusGroup.get(i).destroy(); 
                                score = score -1;
                                 
                             } 
                         } 
                     }


                  }
                  if (player2 !== null) 
                  {
                     //fill code here, to destroy the objects.
                     if (player2 !== null) 
                     { 
                         for (var m = 0; m < maskGroup.length; m++) 
                         { 
                             if (maskGroup.get(m).isTouching(player2)) 
                             { 
                                maskGroup.get(m).destroy(); 
                                score2++;
                                 
                             } 
                         } 
                         for (var i = 0; i < virusGroup.length; i++) 
                         { 
                             if (virusGroup.get(i).isTouching(player2)) 
                             { 
                                virusGroup.get(i).destroy(); 
                                score2 = score2 -1;
                                 
                             } 
                         } 
                     }


                  }

    }

    end(){
       console.log("Game Ended");
    }
    
}