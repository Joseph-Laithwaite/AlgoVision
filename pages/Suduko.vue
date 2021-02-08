<template>
  <div>
      <div>
        <ul class="nav justify-content-center">
          <li>
            <b-input-group size="sm">
                <label class="form-label x-4" for="delay">Delay</label>
                <input v-model="delayMs" min="1" max="400" type="range" class="form-range" id="delay" />
            </b-input-group>
          </li>
          <li>
            <b-button-group class="mx-1">
                <b-button @click="resetGrid" >Reset</b-button>
                <b-button @click="toggleRunAlgo" :disabled="algoComplete || !gridReady">{{paused||(!paused&&!inProgress)?'Run':'Pause'}}</b-button>
                <b-button @click="stepAlgo" :disabled="algoComplete || !gridReady">Step</b-button>
            </b-button-group>
          </li>
          <li>
            <b-input-group size="sm">
                <b-form-select v-model="algorithm" class="mx-1" placeholder="Select Algorithm" @change="resetAlgorithm">
                    <b-form-select-option value="solve">Solve w/ Backtrack</b-form-select-option>
                    <b-form-select-option value="generate">Generate Grid</b-form-select-option>
                </b-form-select>
            </b-input-group>
          </li>
        </ul>
      </div>
      <div>
        <div>
            <br/>
            <table>
                <tr>
                    <td v-for="(number) in [1,2,3,4,5,6,7,8,9]" 
                        :key="number" 
                        :class="{
                            'currentNumber' : currentNumber === number,
                        }"
                        @click="currentNumber = number"
                    >    
                        {{number}}
                    </td>
                </tr>
            </table>
            <br/>
            <table>
                <tr v-for="(y,rowIndex) in grid" :key="'y:'+rowIndex">
                    <td v-for="(pos,colIndex) in y" 
                        :key="rowIndex+','+colIndex" 
                        :class="{
                            'boldBorderBottom' : (rowIndex+1)%3 == 0,
                            'boldBorderRight' : (colIndex+1)%3 == 0,
                            'boldBorderTop' : rowIndex === 0,
                            'boldBorderLeft' : colIndex === 0,
                            'correctNumber' : initialGrid[rowIndex][colIndex] !== 0,
                            'currentNumber' : rowIndex === currentRow && colIndex === currentCol,
                            'searchNumber' : !(rowIndex === currentRow && colIndex === currentCol) 
                                                && initialGrid[rowIndex][colIndex] === 0
                                                && ((rowIndex <= squareEndRow && rowIndex >= squareStartRow 
                                                && colIndex <= squareEndCol && colIndex >= squareStartCol)
                                                || rowIndex === currentRow || colIndex === currentCol),
                            }"
                        @click="insertNumber(currentNumber, rowIndex, colIndex)"
                    >    
                        {{pos!==0 ? pos : ''}}
                    </td>
                </tr>
            </table>
        </div>
      </div>
  </div>
  
</template>

<script>

import DelayMixin from '../mixins/DelayMixin.js';
import SudukoBacktrackingAlgorithm from '../mixins/SudukoBacktrackingAlgorithm.js';

export default {
    name:'Suduko',
    mixins:[DelayMixin,SudukoBacktrackingAlgorithm],
    data(){
        return{
            currentNumber:1,
            gridWidth:9,
            gridHeight:9,
            grid:[],
            inProgress:false,
            paused:true,
            algoComplete:false,
            gridReady:false,
            algorithm:'solve',
            numberOfRemainingBacktracks: 5,
        }
    },
    methods:{
        async toggleRunAlgo(){
            this.paused=!this.paused;
            while(!this.paused && !this.algoComplete){
                await this.stepAlgo();
                await this.delay();
            }
        },
        async stepAlgo(){
            let pass;
            switch(this.algorithm){
                case 'generate': 
                    if(!this.inProgress){
                        //Algo first started
                        this.inProgress=true;
                        // this.currentRow=0;
                        await this.clearGrid();
                        pass = await this.fillGrid(this.grid);
                        if(pass){
                            this.initialGrid = this.grid;
                        }
                    }
                    else if (this.numberOfRemainingBacktracks>0){
                        console.log('numberOfRemainingBacktracks',this.numberOfRemainingBacktracks);
                        this.removeNumber();
                    } 
                break;
                case 'solve': 
                    if(!this.inProgress){
                        //Algo first started
                        this.inProgress=true;
                        this.currentRow=0;
                    }
                    if(this.backtrack === true){
                        this.currentCol--;
                        if(this.currentCol<0) {
                            this.currentRow--;
                            if(this.currentRow<0){
                                this.inProgress = false;
                                this.algoComplete = true;
                                return
                            }
                            this.currentCol = 8;
                        }
                        this.backtrackAlgo(this.grid, this.currentRow, this.currentCol);
                    }else{
                        this.currentCol++;
                        if(this.currentCol===9) {
                            this.currentRow++;
                            if(this.currentRow===9){
                                this.inProgress = false;
                                this.algoComplete = true;
                                return
                            }
                            this.currentCol = 0;
                        }
                        pass = await this.iterativeSuduko(this.grid, this.currentRow, this.currentCol);
                    }

                    if(pass===true){
                        //algorithm complete
                        this.inProgress = false;
                        this.algoComplete = true;
                    }else if(pass===false){
                        //Algo failed
                        this.inProgress = false;
                        this.algoComplete = true;
                    }
                break;
            }
        },

        manageMouseUp(pos){
        },
        manageHover(pos){
        },
        manageMouseDown(pos){
        },
    },
    mounted(){
        this.resetAlgorithm();
    },
    watch: {
        gridHeight: function (val) {
            this.resetGrid();
        },
        gridWidth: function (val) {
            this.resetGrid();
        },
    },
}
</script>

<style scoped>
table{
    margin-left: auto;
    margin-right: auto;
}

td{
    width: 50px;
    height: 50px;
    border: 1px solid black;
    text-align: center;
    vertical-align: center;
}

.boldBorderBottom{
    border-bottom: 3px solid black;
}
.boldBorderRight{
    border-right: 3px solid black;
}
.boldBorderTop{
    border-top: 3px solid black;
}
.boldBorderLeft{
    border-left: 3px solid black;
}
.incorrectNumber{
    background-color:red;
}
.correctNumber{
    font-weight: 500;
    background-color:palegreen;
}
.guessedNumber{
    background-color:orange;
}
.currentNumber{
    border: 3px solid blueviolet;
}
.searchNumber{
    background-color: yellow;
}

</style>