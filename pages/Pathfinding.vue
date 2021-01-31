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
                    <b-form-select-option value="Dijkstra">Dijkstra</b-form-select-option>
                    <b-form-select-option value="A Star">A Star</b-form-select-option>
                    <b-form-select-option value="DFS">Depth First Search</b-form-select-option>
                </b-form-select>
            </b-input-group>
          </li>
          <li>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div>
            <table>
                <tr v-for="(y,rowIndex) in grid" :key="'y:'+rowIndex">
                    <td v-for="(pos,colIndex) in y" 
                        :key="rowIndex+','+colIndex" 
                        :class="{
                            'visited' : pos.visited && !pos.isStart && !pos.isEnd && !pos.shortestRoute,
                            'wallPoint' : pos.isWall,
                            'startPoint' : pos.isStart, 
                            'endPoint' : pos.isEnd,
                            'shortestRoute' : pos.shortestRoute,
                            }"
                        @mousedown="manageMouseDown(pos)"
                        @mouseup="manageMouseUp(pos)"
                        @mouseover="manageHover(pos)"
                    >    
                        {{pos.distanceFromStart===Infinity ? '' : pos.distanceFromStart}}
                    </td>
                </tr>
            </table>
        </div>
        <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
        </div>
      </div>
  </div>
  
</template>

<script>
class Position {
    constructor(y=1, x=1){
        this.y = y;
        this.x = x;
        this.distanceFromStart = Infinity;
        this.visited = false;   
        this.isEnd = false; 
        this.isStart = false;   
        this.isWall = false;    
        this.previousPos = null;    
        this.shortestRoute = false; 
        this.totalDistance = Infinity;  //aStar
    }
}
import DelayMixin from '../mixins/DelayMixin.js';
import DijkstraAlgorithm from '../mixins/DijkstraAlgorithm.js';
import AStarAlgorithm from '../mixins/AStarAlgorithm.js';
import DepthFirstSearch from '../mixins/DepthFirstSearch.js';


export default {
    name:'PathFindingVisualiser',
    mixins:[DelayMixin, DijkstraAlgorithm, AStarAlgorithm, DepthFirstSearch],
    data(){
        return{
            gridWidth:20,
            gridHeight:19,
            grid:[],
            univisitedPositions:[],
            startPos: null,
            endPos: null,
            setWall:false,
            gridSize:15,
            inProgress:false,
            paused:true,
            algoComplete:false,
            gridReady:false,
            algorithm:'Dijkstra',
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
                case 'Dijkstra': 
                    await this.stepDijkstra()
                    break;
                case 'A Star': 
                    if(!this.inProgress){
                        this.univisitedPositions = this.getAllPositions();
                        this.inProgress=true;
                    }
                    pass = await this.aStar();
                    if(pass === true){
                        await this.drawShortestRoute();
                        this.inProgress = false;
                        this.algoComplete = true;
                        this.paused = true;
                    }else if(pass === false){
                        this.inProgress = false;
                        this.algoComplete = true;
                        this.paused = true;
                    }
                break;
                case 'DFS': 
                    if(!this.inProgress){
                        this.univisitedPositions = this.getAllPositions();
                        this.inProgress=true;
                    }
                    pass = await this.dfs();
                    if(pass === true){
                        await this.drawShortestRoute();
                        this.inProgress = false;
                        this.algoComplete = true;
                        this.paused = true;
                    }else if(pass === false){
                        this.inProgress = false;
                        this.algoComplete = true;
                        this.paused = true;
                    }
                break;

            }
        },

        async drawShortestRoute(){
            let drawShortestLine = this.endPos;
            while(drawShortestLine !== this.startPos){
                drawShortestLine.shortestRoute = true;
                drawShortestLine = drawShortestLine.previousPos;
                await this.delay();
            }
        },
        getAllPositions(){
            let positions = [];
            for (let row of this.grid){
                for (let pos of row){
                    positions.push(pos);
                }
            }
            return positions;
        },
        resetAlgorithm(){
            this.algoComplete=false;
            this.inProgress=false;
            this.paused=true;
            let start,end;
            if(this.startPos)
                start = this.startPos;
            if(this.endPos){
                end = this.endPos;
                end.shortestRoute= false;
            }
            this.setGrid();
            if(start)
                this.grid[start.y][start.x] = start;
            if(end)
                this.grid[end.y][end.x] = end;
        },
        resetGrid(){
            this.gridReady=false;   //Start and end not set
            this.startPos=null;
            this.endPos=null;
            this.algoComplete=false;
            this.inProgress=false;
            this.paused=true;
            this.setGrid();
        },
        setGrid(){
            this.grid=[];
            for(let i=0; i<=this.gridHeight; i++){
                let xRow=[]
                for(let j=0; j<=this.gridWidth; j++){
                    let currPos = new Position(i,j);
                    xRow.push(currPos);
                }
                this.grid.push(xRow);
            }
        },
        manageMouseUp(pos){
            if(this.setWall === true){
                this.setWall = false;
            }
        },
        manageHover(pos){
            if(this.setWall === true){
                pos.isWall = !pos.isWall;
            }
        },
        manageMouseDown(pos){
            if(!this.startPos && pos!==this.endPos){
                //Set start if no start set and clicked position is not the end
                pos.isStart = true;
                pos.isEnd = false;
                pos.distanceFromStart = 0;
                if(this.endPos){
                    pos.totalDistance = this.getCartesianDistance(pos,this.endPos);
                }
                this.startPos = pos;
            }else if(!this.endPos && pos!==this.startPos){
                //Set end if no end set and clicked position is not the start
                pos.isEnd = true;
                pos.isStart = false;
                pos.distanceFromStart = Infinity;
                if(this.startPos){
                    this.startPos.totalDistance = this.getCartesianDistance(this.startPos,pos);
                }
                this.endPos=pos;
            }else if(this.startPos == pos){
                pos.distanceFromStart = Infinity;
                pos.totalDistance = Infinity;
                pos.isStart = false;
                this.startPos=null;
            }else if(this.endPos == pos){
                this.endPos = null;
                pos.distanceFromStart = Infinity;
                this.startPos.totalDistance = Infinity;
                pos.isEnd = false;
            }
            else{
                this.setWall = true;
                pos.isWall = !pos.isWall;
            }
        },
    },
    mounted(){
        this.setGrid();
    },
    watch: {
        gridHeight: function (val) {
            this.resetGrid();
        },
        gridWidth: function (val) {
            this.resetGrid();
        },
        startPos: function(){
            if(this.startPos!==null && this.endPos!==null){
                this.gridReady=true;
            }else{
                this.gridReady=false;
            }
        },
        endPos: function(){
            if(this.startPos!==null && this.endPos!==null){
                this.gridReady=true;
            }else{
                this.gridReady=false;
            }
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
    width: 30px;
    height: 30px;
    border: 1px solid black;
    text-align: center;
    vertical-align: center;
}

.startPoint{
    background-color:red;
}
.endPoint{
    background-color:black;
}
.wallPoint{
    background-color:green;
}
.visited{
    background-color:yellow;
}
.shortestRoute{
    background-color:black;
}

</style>