function Paddle (canvas,posX,posY,height,width,color){
    this.ctx = canvas.getContext('2d');
    this.posX = posX;
    this.posY = posY;
    this.velY = 0;
    this.height = height;
    this.width = width;
    this.color = color;
    this.score = 0;
}

Paddle.prototype.drawPaddle = function (){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.posX ,this.posY, this.width,this.height);
}
Paddle.prototype.updatePaddle = function (){
    
}
Paddle.prototype.modeUp = function (){
    
}
Paddle.prototype.moveDown = function (){
    
}
Paddle.prototype.checkBorders = function (){
    
}