function Ball (canvas,posX,posY,height,width,color){
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY;
    this.direction = "up-right";
    this.height = height;
    this.width = width;
    this.color = color;
    this.radius = 30;
}

Ball.prototype.drawBall = function (){
    this.ctx.beginPath();
    this.ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI)
    this.ctx.fillStyle = this.color;
    this.ctx.closePath();
    this.ctx.fill()
}



Ball.prototype.updateBall = function (){
    if (this.direction == "up-right") {
        this.posX +=1;
        this.posY -=1;
    }
    else if (this.direction == "up-left" ){
        this.posX -=1;
        this.posY -=1;
    }
    else if (this.direction == "down-right" ){
        this.posX +=1;
        this.posY +=1;
    }
    else if (this.direction == "down-left" ){
        this.posX -=1;
        this.posY +=1;
    }
    return
}

Ball.prototype.clearBall = function (){
    this.ctx.clearRect(this.posX - this.radius-1,this.posY-this.radius-1,this.radius * 2 +2, this.radius*2+2)
}

Ball.prototype.checkCollision = function (){
 
}

