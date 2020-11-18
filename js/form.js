class Form{
    constructor(){
       //this.input = createInput("Name");
       this.button = createButton('Play');
       //this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        //this.greeting.hide();
        this.button.hide();
        //this.input.hide();
        this.title.hide();
    } 
    display() {
        this.title.html("Sars2 Covid-19 Virus");
        this.title.position(600, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        //this.input.position(700,300);
        //this.input.style('width', '200px');
        //this.input.style('height', '20px');
        //this.input.style('background', 'beige');

        this.button.position(750,400);
        this.button.style('width', '120px');
        this.button.style('height', '30px');
        this.button.style('background', 'DodgerBlue');

        this.reset.position(1270, 130);
        this.reset.style('width', '120px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'DodgerBlue');

        this.button.mousePressed(() => {
            //this.input.hide();
            this.button.hide();

            //player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            //this.greeting.html("Hello " + player.name)
            //this.greeting.position(400,250);
            //this.greeting.style('color', 'black');
            //this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            score = 0;
            score2 = 0;
            /*player1.x = 200;
            player1.y = 500;
            player2.x = 800;
            player2.y = 500;*/
            players.update();
            player1.hide();
            player2.hide();
        });

    }
}