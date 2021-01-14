<template>
  <div>
    <h3>Best Sum</h3>
    <h4>Optimisation Problem ie. return bet combination</h4>

    <p>
        Return the smallest combination of the given numbers={{availableNums}} which can sum to the target sum={{target}}.<br>
        Numbers can be used multiple times and can be presumed all target and sum numbers are positive.
    </p>
    <h4>Numbers Available</h4>
    <label for="target">Target Sum:</label>
    <input v-model="target" type="number" id="target" v-on:keyup.enter="callBestSum" v-on:input="bestSumOutput=''"/>
    <br>
    <h4>Numbers Available</h4>
    <table class="table" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
        <tbody>
            <th scope="row">Available Numbers</th>
            <th v-for="(item, index) in availableNums" :key="index+','+item" scope="col" class="text-center">
                {{item}}
            </th>
            <th scope="col" style="width:10%;" v-if="showRemoveItems" >
            <input v-on:keyup.enter="apendList"  v-model="newAvailableNumber" type="number" class="form-control" id="arrayItemInput" >
          </th>
        </tbody>
        <tfoot v-if="showRemoveItems" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
            <th>
            <button @click="availableNums=[]" type="button" class="btn">
                    Remove All
            </button>
            </th>
            <th v-for="(item,index) in availableNums" :key="'i'+index" scope="col" class="text-center" >
                <button @click="availableNums.splice(index,1)" type="button" class="btn">
                X
                </button>
            </th>
        </tfoot>
    </table>
    <h3>Solution Table</h3>
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th>index</th>
          <th v-for="(item,index) in table" :key="'i'+index" scope="col" class="text-center" 
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }">
              {{index}}
          </th>
          <th scope="col" style="width:10%;" v-if="showRemoveItems" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
            {{table.length}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>table[index]</th>
          <th v-for="(item, index) in table" :key="index+','+item" scope="col" class="text-center"
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
          >
            {{item||'null'}}
          </th>
        </tr>
      </tbody>
    </table>
    <br>
    
    <!-- <p>{{(bestSumOutput=="[object Promise]"||bestSumOutput.length===0)?'':bestSumOutput}}</p> -->
  </div>
</template>

<script> 
export default {
    data(){
        return{
            availableNums:[5,3,4,7],
            target:7,
            bestSumOutput:[],
            table:[],
            leftPointer:0,
            rightPointer:0,
            newAvailableNumber:'',
            showRemoveItems:false,
        }
    },
    methods:{
        callBestSum(){
            this.bestSumOutput= '';
            // this.bestSumOutput = this.recursiveBestSum(this.target, this.availableNums) || 'Sum not possible';
            // this.bestSumOutput = this.optimisedRecursiveBestSum(this.target, this.availableNums) || 'Sum not possible';
            this.bestSumOutput = this.tabularBestSum();
        },

        //m=target sum
        //n=numbers.listLength
        //brute force
        //time: O(n^m * m)  //branching up to n times at each node on m layers (m^n) plus copying array up to of up to m
        //space: O(m^2)     //m stack frames and up to m shortest combo array
        recursiveBestSum(target = this.target, numbers=this.availableNums){// , numbers = this.availableNums){
            if(target===0) return [];
            if(target<0) return null;

            let shortestCombo = null;   //worst case m in length
            for(let number of numbers){
                const diff = target-number;
                const remainderCombination = this.recursiveBestSum(diff, numbers);
                if(remainderCombination !== null){
                    const combo = [...remainderCombination, number ];   //copying array causes time up to m (m 1s)
                    //if combo shorter than current shortest.
                    if(shortestCombo==null||(combo.length < shortestCombo.length)){
                        shortestCombo = combo;
                    }
                }
            }
            return shortestCombo;
        },
        //Optimised
        //time: O(m^2*n)    //have up to m keys we'll ever store in memo and branch at each node n times (m*n) *m for copying over array
        //space: O(m^2)     //one m per stack frames and up to m shortest combo array
        optimisedRecursiveBestSum(target = this.target, numbers=this.availableNums, memo = {}){      
            if(target in memo) return memo[target];
            if(target===0) return [];
            if(target<0) return null;

            let shortestCombo = null;   //worst case m in length
            for(let number of numbers){
                const diff = target-number;
                const remainderCombination = this.optimisedRecursiveBestSum(diff, numbers, memo);
                if(remainderCombination !== null){
                    const combo = [...remainderCombination, number ];   //copying array causes time up to m (m 1s)
                    //if combo shorter than current shortest.
                    if(shortestCombo==null||(combo.length < shortestCombo.length)){
                        shortestCombo = combo;
                    }
                }
            }
            memo[target] = shortestCombo;
            return shortestCombo;
        },

        async delay(ms = this.delayMs) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
        //Tabularised
        //time: O(m^2 * n)
        //space: O(m^2)
        async tabularBestSum(){
            this.table = new Array(parseInt(this.target)+1).fill(null);
            this.table[0]=[];
            for(this.leftPointer=0; this.leftPointer<=this.target; this.leftPointer++){
                console.log('left pointer:' + this.leftPointer);
                console.log(this.table[this.leftPointer]);
                if(this.table[this.leftPointer] !== null){
                    for(let number of this.availableNums){
                        this.rightPointer = this.leftPointer + number;
                        if(this.rightPointer<=this.target){
                            let currentCombo = [ ... this.table[this.leftPointer], number ];
                            if(!this.table[this.leftPointer + number] || this.table[this.leftPointer + number].length >currentCombo.length){
                                this.table[this.leftPointer + number] = currentCombo;
                            // }else if(this.table[this.leftPointer + number].length > this.table[this.leftPointer]+1){
                                // this.table[this.leftPointer + number] = currentCombo;
                            }
                            await this.delay(500);
                        }
                    }
                }
            }
            return this.table[this.target];
        },
    }


}
</script> 

<style>

</style>