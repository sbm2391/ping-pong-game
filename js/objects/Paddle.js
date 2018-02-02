function Paddle (canvas,posX,posY,height,width,color){
    this.ctx = canvas;
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

Paddle.prototype.moveUp = function (){
    if(this.posY > 0){
        this.posY -= 3;
    }else{ 
        console.log("detente!")
        return;
    }
}
Paddle.prototype.moveDown = function (){
    if(this.posY <600){
        this.posY += 3;    
    }else{
        return;
    }
}
Paddle.prototype.checkBorders = function (){
    
}