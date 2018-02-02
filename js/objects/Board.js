function Board (canvas,height,width){
    this.height = height;
    this.width = width;
    this.ctx = canvas ;
    this.image = new Image();
    this.image.src = "images/fondo.png";
    //Con esta funcion auto-ejecutamos drawBoard()
    this.image.addEventListener("load",this.drawBoard.bind(this) )
}

Board.prototype.drawBoard = function (){
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height)
    myGame.player1.drawPaddle();
    myGame.player2.drawPaddle();
    myGame.ball1.drawBall();
}

Board.prototype.clearBoard = function (){
    this.ctx.clearRect(0,0,this.width,this.height)
}
Board.prototype.checkCollisions = function (){
    
}