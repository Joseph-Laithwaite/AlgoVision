// import DelayMixin from '../mixins/DelayMixin.js';

export default {
    data(){ return{ 
        currentRow:-1, 
        currentCol:-1 , 
        initialGrid:[], 
        guessStack:[], 
        backtrack: false
    }},
    // mixins:[DelayMixin],
    methods:{
        async solveSuduko(grid){
            let row, col;
            for(let i = 0; i <82 ; i++){
                // await this.delay();
                row = this.currentRow = Math.floor(i/9);
                col = this.currentCol = i%9;
                let currPos = grid[this.currentRow][this.currentCol];
                console.log('grid[',this.currentRow,'][',this.currentCol,'] = ', currPos);
                if(currPos === 0){
                    console.log('Current position empty');
                    for(let tryVal = 1; tryVal<=9; tryVal++){
                        if(this.insertNumber(tryVal)){
                            if(this.checkGridComplete()){
                                console.log("Grid Complete and Checked");
                                return true;
                            }else {
                                console.log('grid not complete');
                                if(await this.solveSuduko(grid) == true){
                                    console.log('recursed function return true');
                                    return true;
                                }
                            }
                        }
                    }
                    // await this.delay();
                    break;  //Cannot use any numbers 1-9 so must be a mistake behind, so backtrack
                }
            }
            console.log("Backtrack");
            this.grid[row][col] = 0;
            this.grid[row][col] = 0;
        },

        async iterativeSuduko(grid, row, col){
            // console.log('grid[',row,'][',col,'] = ', grid[row][col]);
            if(grid[row][col] === 0){
                for(let tryVal = 1; tryVal<=9; tryVal++){
                    if(this.insertNumber(tryVal)){
                        this.guessStack.push({row:row, col:col, val:tryVal});
                        return
                    }
                }
                //Cannot use any numbers 1-9 so must be a mistake behind, so backtrack
                // console.log("Backtrack");
                this.backtrack = true;
            }
            return
        },
        async backtrackAlgo(grid, row, col){
            //If back track to original item ignore and continue backtrackinginitialGridinitialGrid
            if(grid[row][col] === this.initialGrid[row][col]) 
                return;    
            let lastGuess = this.guessStack.pop();
            // console.log('lastGuess',lastGuess);
            if(lastGuess.row !== row, lastGuess.col !== col) {
                //Current pos is not a guess so backtrack again
                grid[row][col] = 0; 
                return;
            }  
            for(let tryVal = lastGuess.val+1; tryVal<=9; tryVal++){
                if(this.insertNumber(tryVal)){
                    this.guessStack.push({row:row, col:col, val:tryVal});
                    this.backtrack=false;
                    return
                }
            }
            grid[row][col] = 0;
            return
        },
        checkGridComplete(grid = this.grid){
            for (let row = 0; row<=9; row++){
                for(let col = 0; col<=9; col++){
                    if (grid[col][row] == 0){
                        return false;
                    }
                }
            }
            return true 
        },
        rowHasVal(tryVal, row = this.currentRow){
            for(let i = 0; i<9; i++){
                if(this.grid[row][i] === tryVal){
                    return true;
                }
            }
            return false;
        },
        colHasVal(tryVal, col = this.currentCol){
            for(let i = 0; i<9; i++){
                if(this.grid[i][col] === tryVal){
                    return true;
                }
            }
            return false;
        },
        squareHasVal(tryVal, row = this.currentRow, col = this.currentCol){
            // console.log('current square is from (',this.squareStartCol,',',this.squareStartRow,') to (',this.squareEndCol,',',this.squareEndRow,')');
            
            let squareStartRow = Math.floor(row/3)*3;
            let squareStartCol = Math.floor(col/3)*3;
            let squareEndRow = squareStartRow + 2;
            let squareEndCol = squareStartCol + 2;
            // console.log('current square is from (',squareStartRow,',',squareStartCol,') to (',squareEndRow,',',squareEndCol,')');

            for(let i = squareStartCol; i<= squareEndCol; i++){
                for(let j = squareStartRow; j<= squareEndRow; j++){
                    // console.log('current pos in square is at (',j,',',i,') = ',this.grid[j][i]);
                    if(this.grid[j][i] === tryVal){
                        // console.log('square has', tryVal);
                        return true;
                    }
                }
            }
            return false;
            
        },
        resetAlgorithm(){
            this.currentRow=-1;
            this.currentCol=-1;
            this.algoComplete=false;
            this.inProgress=false;
            this.paused=true;
            this.gridReady=true;
            this.setGrid();

        },
        resetGrid(){
            this.currentRow=-1;
            this.currentCol=-1;
            this.setGrid();
            this.algoComplete=false;
            this.inProgress=false;
            this.paused=true;
            this.gridReady=true;
        },
        setGrid(){
            this.grid=[];
            this.grid.push([3, 0, 6, 5, 0, 8, 4, 0, 0])
            this.grid.push([5, 2, 0, 0, 0, 0, 0, 0, 0])
            this.grid.push([0, 8, 7, 0, 0, 0, 0, 3, 1])
            this.grid.push([0, 0, 3, 0, 1, 0, 0, 8, 0])
            this.grid.push([9, 0, 0, 8, 6, 3, 0, 0, 5])
            this.grid.push([0, 5, 0, 0, 9, 0, 6, 0, 0])
            this.grid.push([1, 3, 0, 0, 0, 0, 2, 5, 0])
            this.grid.push([0, 0, 0, 0, 0, 0, 0, 7, 4])
            this.grid.push([0, 0, 5, 2, 0, 6, 3, 0, 0])
            // this.grid.push([new Position(3, true), new Position(), new Position(6, true), new Position(5, true), new Position(), new Position(8, true), new Position(4, true), new Position(), new Position()]);
            // this.grid.push([new Position(5, true), new Position(2, true), new Position(), new Position(0), new Position(0), new Position(0), new Position(0), new Position(0), new Position(0)]);
            // this.grid.push([new Position(0), new Position(8, true), new Position(7, true), new Position(0), new Position(0), new Position(0), new Position(0), new Position(3, true), new Position(1, true)]);
            // this.grid.push([new Position(0), new Position(0), new Position(3, true), new Position(0), new Position(1, true), new Position(0), new Position(0), new Position(8, true), new Position(0)]);
            // this.grid.push([new Position(9, true), new Position(0), new Position(0), new Position(8, true), new Position(6, true), new Position(3, true), new Position(0), new Position(0), new Position(5, true)]);
            // this.grid.push([new Position(0), new Position(5, true), new Position(0), new Position(0), new Position(9, true), new Position(0), new Position(6, true), new Position(0), new Position(0)]);
            // this.grid.push([new Position(1, true), new Position(3, true), new Position(0), new Position(0), new Position(0), new Position(0), new Position(2, true), new Position(5, true), new Position(0)]);
            // this.grid.push([new Position(0), new Position(0), new Position(0), new Position(0), new Position(0), new Position(0), new Position(0), new Position(7, true), new Position(4, true)]);
            // this.grid.push([new Position(0), new Position(0), new Position(5, true), new Position(2, true), new Position(0), new Position(6, true), new Position(3, true), new Position(0), new Position(0)]);
            this.initialGrid = [];
            this.initialGrid.push([3, 0, 6, 5, 0, 8, 4, 0, 0])
            this.initialGrid.push([5, 2, 0, 0, 0, 0, 0, 0, 0])
            this.initialGrid.push([0, 8, 7, 0, 0, 0, 0, 3, 1])
            this.initialGrid.push([0, 0, 3, 0, 1, 0, 0, 8, 0])
            this.initialGrid.push([9, 0, 0, 8, 6, 3, 0, 0, 5])
            this.initialGrid.push([0, 5, 0, 0, 9, 0, 6, 0, 0])
            this.initialGrid.push([1, 3, 0, 0, 0, 0, 2, 5, 0])
            this.initialGrid.push([0, 0, 0, 0, 0, 0, 0, 7, 4])
            this.initialGrid.push([0, 0, 5, 2, 0, 6, 3, 0, 0])
        },
        insertNumber(val, row=this.currentRow, col = this.currentCol){
            if (this.grid[row][col] === val) {
                // Removes item if trying to insert the same number as currently in a position
                this.grid[row][col] = 0;
                return true;
            } else {
                if(!this.rowHasVal(val, row)){
                    if(!this.colHasVal(val, col)){
                        if(!this.squareHasVal(val, row, col)){
                            // console.log('Inserted', val, 'at (',col,',',row,')');
                            this.grid[row][col] = val;
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    },
    computed:{
        // currentSquare(){
        //     let row = [];
        //     row.push(this.grid.slice)
        //     return row;
        // },
        squareStartRow(){
            return Math.floor(this.currentRow/3)*3;
        },
        squareStartCol(){
            return Math.floor(this.currentCol/3)*3;
        },
        squareEndRow(){
            return this.squareStartRow + 2;
        },
        squareEndCol(){
            return this.squareStartCol + 2;
        }
    }
}