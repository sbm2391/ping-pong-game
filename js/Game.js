function Game (canvas){
    this.board = new Board(canvas,600,1200)
    this.player1 = new Paddle (canvas,10,300,80,20,"red");
    this.player2 = new Paddle (canvas,1170,300,80,20,"green");
    this.ball1 = new Ball(canvas,600,300,20,20,"white");
}   