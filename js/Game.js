function Game (canvas){
    this.board = new Board(canvas,600,1200)
    this.player1 = new Paddle (canvas,10,300,50,20,"red");
    this.player2 = new Paddle (canvas,880,300,50,20,"green");
    this.ball1 = new Ball(300,450,1,0,20,20,"black");
}