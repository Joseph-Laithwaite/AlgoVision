<template>
<div>
  <h1>River Sizes</h1>
  <b-button  pill variant="primary" @click="runAlgorithm">Run</b-button>
  <ultimate-table
    :table="matrix"
    :rowIsObject="false"
    :showIndex="true"
    :addEmptyCorner="true"
    :twoDArray="true"
    :editable="editable"
    :hasRowHeadings="false"
    :showRowIndex="true"
    :indexPointer="row"
    :keyPointer="col"
    :highlightArray="visited"

  ></ultimate-table>
  <br>
  <!-- <div>
    <h3>Visited matrix</h3>
    <ultimate-table
        :table="visited"
        :rowIsObject="false"
        :showIndex="true"
        :addEmptyCorner="true"
        :twoDArray="true"
        :editable="false"
        :hasRowHeadings="false"
        :showRowIndex="true"
        :indexPointer="row"
        :keyPointer="col"
        
    ></ultimate-table>
  </div> -->
</div>
</template>

<script>

export default {
    name:'RiverSizes',
    data() {
        return{
            matrix:
            [
                [1, 0, 0, 1, 0],
                [1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [1, 0, 1, 0, 1],
                [1, 0, 1, 1, 0]
            ],
            sizes:[],
            visited:[],
            delayMs:1000,
            editable:true,
            row:0,
            col:0,
            currentRiverSize:0,
        }
    },
    methods:{
        async delay(ms = this.delayMs) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
        async runAlgorithm (){
            this.editable=false;
            this.initialiseAlgorithm();
            await this.delay();
            for(this.row = 0; this.row<this.matrix.length; this.row++){
                for(this.col = 0; this.col<this.matrix[this.row].length; this.col++){
                    if(this.visited[this.row][this.col]){
                        await this.delay(this.delayMs/2);
                    }else{
                        let row = this.row;
                        let col = this.col;

                        await this.delay();
                        await this.traverseNode();
                        this.row = row;
                        this.col = col;
                        await this.delay();
                    }
                }
            }
            this.editable=true;
        },
        async traverseNode(row = this.row, col = this.col, matrix = this.matrix, visited = this.visited,sizes = this.sizes){
            this.currentRiverSize=0;
            let nodesToExplore = [[row,col]];
            while(nodesToExplore.length>0){
                let currentNode = nodesToExplore.pop();
                this.row = currentNode[0];
                this.col = currentNode[1];
                console.log('current node exploring: ',this.row,',',this.col);
                await this.delay();
                if (this.visited[this.row][this.col]===false){
                    this.visited[this.row][this.col] = true;
                    if(this.matrix[this.row][this.col]===1){
                        this.currentRiverSize++;
                        let univisitedNeighbours = this.getUnivisitedNeighbours()
                        for(let neighbour of univisitedNeighbours){
                            nodesToExplore.push(neighbour);
                        }
                    }
                }
            }
            if(this.currentRiverSize>0){
                this.sizes.push(this.currentRiverSize);
            }
            this.currentRiverSize=0;
        },

        getUnivisitedNeighbours(row = this.row, col = this.col, matrix = this.matrix, visited = this.visited){
            let univisitedNeighbours=[]
            console.log(visited);
            console.log('row:',row,' col:',col);

            if(row>0 && visited[row-1][col]===false){
                console.log('Adding up pos');
                univisitedNeighbours.push([row-1,col]);
            }
            if(row<matrix.length-1 && visited[row+1][col]===false){
                console.log('Adding down pos');
                univisitedNeighbours.push([row+1,col]);
            }
            if(col>0 && visited[row][col-1]===false){
                console.log('Adding left pos');
                univisitedNeighbours.push([row,col-1]);
            }
            if(col<matrix[0].length-1 && visited[row][col+1]===false){
                console.log('Adding right pos');
                univisitedNeighbours.push([row,col+1]);
            }
            return univisitedNeighbours;
        },

        initialiseAlgorithm (){
            this.sizes=[];
            this.visited=new Array(this.matrix.length)
                            .fill()
                            .map( () => new Array(this.matrix[0].length).fill(false));
        }

    }
}
</script>

<style>

</style>