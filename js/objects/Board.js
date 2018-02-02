function Board (canvas,height,width){
    this.height = height;
    this.width = width;
    this.ctx = canvas.getContext('2d');
    this.image = new Image();
    this.image.src = "images/fondo.png";
    this.image.addEventListener("load",this.drawBoard.bind(this) )
}

Board.prototype.drawBoard = function (){
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height)
}

Board.prototype.update = function (){
  
}
Board.prototype.checkCollisions = function (){
    
}