<template>
  <div>
    <h3>Grid Traveler</h3>
    <h4> </h4>
    <p>
        
    </p>
    <h4></h4>
    <label for="xAxis">grid size x axis</label>
    <input v-model="xAxis" type="number" id="xAxis" v-on:input="gridTravelerOutput=''"/>
    <label for="yAxis">grid size y axis</label>
    <input v-model="yAxis" type="number" id="yAxis" v-on:input="gridTravelerOutput=''"/>
    <button @click="setGrid">Set Grid</button>
    <button @click="callGridTraveler">Run</button>
    <br>
    <table class="table">
        <thead>
            <tr>
                <th scope="col" ></th>
                <th scope="col" v-for="(_, colIndex) in grid[0]" :key="colIndex+','+colIndex" class="text-center">{{colIndex}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in grid" :key="'row,'+rowIndex" scope="col" class="text-center">
                <th scope="row">{{rowIndex}}</th>
                <td v-for="(cell, colIndex) in row" :key="rowIndex+','+colIndex" scope="col" class="text-center">{{cell}}</td>
            </tr>
        </tbody>
    </table>

    <p>{{gridTravelerOutput}}</p>
    <!-- <p v-for="(value, key) in gridTravelerSeq" :key="key">{{value}}</p> -->
  </div>
</template>

<script> 
export default {
    data(){
        return{
            availableNums:[5,3,4,7],
            target:7,
            grid:[],
            xAxis:3,
            yAxis:3,
            gridTravelerOutput:Boolean,
            gridTravelerSeq:{},
        }
    },
    methods:{
        setGrid(){
            this.grid= new Array(parseInt(this.yAxis)+1)
                .fill()
                .map( () => Array(parseInt(this.xAxis)+1).fill(0));
            this.grid[1][1]=1;
            // this.grid=[];
            // console.log('setting up grid');
            // for(let i=0; i<=this.yAxis; i++){
            //     console.log('i:'+i);
            //     let xRow=[]
            //     for(let j=0; j<=this.xAxis; j++){
            //         xRow.push(0);
            //     }
            //     console.log(xRow);
            //     this.grid.push(xRow);
            // }
            // this.grid[1][1]=1;
        },
        callGridTraveler(){
            this.gridTravelerOutput= '';
            // this.gridTravelerOutput = this.recursiveGridTraveler(this.target, this.availableNums);
            // this.gridTravelerOutput = this.optimisedRecursiveGridTraveler(this.target, this.availableNums);
            this.gridTravelerOutput = this.tabularGridTraveler();
        },
        //m = 
        //n = 
        //BruteForce
        //time: O(
        //space: O(
        recursiveGridTraveler(target = this.target, numbers=this.availableNums){
        },

        //optimised
        //time: O(mn)
        //space: O(mn)
        optimisedRecursiveGridTraveler(target = this.target, numbers=this.availableNums, memo = {}){  
        },
        tabularGridTraveler(){
            for(let y = 0; y<=this.yAxis; y++){
                for(let x = 0; x<=this.xAxis; x++){
                    let curr = this.grid[y][x];
                    if(x+1 <= this.xAxis) this.grid[y][x+1] += curr;
                    if(y+1 <= this.yAxis) this.grid[y+1][x] += curr;
                }
            }
            return this.grid[this.yAxis][this.xAxis];
        },
    }


}
</script>

<style>

</style>