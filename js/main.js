var canvas;
$(document).ready(function(){
    canvas = document.getElementById("board")
    var myGame = new Game (canvas);
    myGame.board.drawBoard();
    myGame.player1.drawPaddle();
    myGame.player2.drawPaddle();    
})



