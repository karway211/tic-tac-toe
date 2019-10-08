class TicTacToe {
    constructor() {
        this.squares = [[ null, null , null],
                        [ null, null, null],
                        [ null, null, null]];
        this.currentPlayerSymbol;
        this.move = 0;
        this.winner = null;
    }

    checkWin() {
        let winSquare = [[this.squares[0][0], this.squares[0][1], this.squares[0][2]],
                        [this.squares[1][0], this.squares[1][1], this.squares[1][2]],
                        [this.squares[2][0], this.squares[2][1], this.squares[2][2]],
                        [this.squares[0][0], this.squares[1][0], this.squares[2][0]],
                        [this.squares[0][1], this.squares[1][1], this.squares[2][1]],
                        [this.squares[0][2], this.squares[1][2], this.squares[2][2]],
                        [this.squares[0][0], this.squares[1][1], this.squares[2][2]],
                        [this.squares[0][2], this.squares[1][1], this.squares[2][0]] ];

        for(let i = 0; i< winSquare.length; i++){
            if (winSquare[i][0]===winSquare[i][1]&&
                winSquare[i][1]===winSquare[i][2]&&
                winSquare[i][0]==='x'){ 
                  this.winner = 'x';
                  break;
            
            }
            if (winSquare[i][0]===winSquare[i][1]&&
                winSquare[i][1]===winSquare[i][2]&&
                winSquare[i][0]==='o'){ 
                  this.winner = 'o';
                  break;
          
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol === 'x' ? 'o' : 'x';
    }
    
    nextTurn(rowIndex, columnIndex) {
        
          if(this.squares[rowIndex][columnIndex] !== null){return}
              if(this.move%2 === 0){
                  this.currentPlayerSymbol = 'x';
                  this.squares[rowIndex][columnIndex] = this.currentPlayerSymbol;
                } 
                
                if(this.move%2){
                    this.currentPlayerSymbol = 'o';
                    this.squares[rowIndex][columnIndex] = this.currentPlayerSymbol;
                }
                this.squares[rowIndex][columnIndex] = this.currentPlayerSymbol;
                this.move++;
                this.checkWin();        
         
    }
    
    isFinished() {
       return this.move === 9 || this.winner!== null
    }
    
    getWinner() {
       return this.winner;
    } 

    noMoreTurns() {
       return this.move === 9;
    }

    isDraw() {
        if(this.move === 9 && this.winner === null) {
            return true
        } else {
            return false;
        }
    }
    
    getFieldValue(rowIndex, colIndex) {
        let fieldValue = this.squares[rowIndex][colIndex];
        if (fieldValue !== null){
            return fieldValue === 'x' ? 'x' : 'o';
        } else {
            return fieldValue;
        }
    }
}

module.exports = TicTacToe;
