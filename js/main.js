var canvas;
var myGame;
var fps = 30;
$(document).ready(function(){
    $(".title").on("click", function(){
        canvas = document.getElementById("board").getContext('2d')
        myGame = new Game (canvas);
        keyListener();
        var a = setInterval(function(){
            myGame.board.clearBoard();
            myGame.ball1.clearBall();                        
            myGame.board.drawBoard();
            myGame.ball1.updateBall();
        },1000/fps)
    })

})

//Funcion para escuchar eventos del teclado
function keyListener(){
    document.addEventListener("keydown", function(e){
        switch (e.keyCode) {
            case 87: //w
               myGame.player1.moveUp()               
                break;
            case 83: //s
                myGame.player1.moveDown()
                break;
            case 38: //arrow up
                myGame.player2.moveUp()
                break;
            case 40: //arrow down
                myGame.player2.moveDown()
                break;
            default:
                break;
        }
    })
}