<template>
  <div>
    <h3>How Sum</h3>
    <h4> Combinatoric Problem ie. return combination</h4>

    <p>
        Return a combination of the given numbers={{availableNums}} which how sum to the target sum={{target}}.<br>
        Numbers may be used multiple times and how be presumed all target and sum numbers are positive.
    </p>
    <label for="target">Target Sum:</label>
    <input v-model="target" type="number" id="target" v-on:keyup.enter="callHowSum" v-on:input="howSumOutput=''"/>
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

    <p>{{(howSumOutput=="[object Promise]"||howSumOutput.length===0)?'':howSumOutput}}</p>
  </div>
</template>

<script> 
export default {
    data(){
        return{
            availableNums:[5,3,4,7],
            target:7,
            howSumOutput:[],
            table:[],
            leftPointer:0,
            rightPointer:0,
            newAvailableNumber:'',
            showRemoveItems:false,
        }
    },
    methods:{
        apendList(){
            this.availableNums.push(parseInt(this.newAvailableNumber));
            this.newAvailableNumber = '';
        },
        callHowSum(){
            this.howSumOutput= '';
            // this.howSumOutput = this.recursiveHowSum(this.target, this.availableNums) || 'Sum not possible';
            // this.howSumOutput = this.optimisedRecursiveHowSum(this.target, this.availableNums) || 'Sum not possible';
            this.howSumOutput = this.tabularHowSum();
        },
        //m= target
        //n = numbers.length
        //BruteForce
        //time: O(n^m * m) //branch n at every level up to m levels n^m + copying over the combination array of up to m length for each node
        //space: O(m)   //stack frames up to m in depth, with array up to m in length at each
        recursiveHowSum(target = this.target, numbers=this.availableNums){
            console.log('Target: '+target);
            if(target===0) return [];
            if(target<0) return null;

            for(let number of numbers){
                let diff = target - number;
                console.log('For target:'+target+', num: '+number+', call how sum for new target: '+ diff);
                let childHowSum = this.recursiveHowSum(diff, numbers);
                if(childHowSum !== null){
                    console.log('Child sum type: ' + typeof childHowSum);
                    return [ ...childHowSum, number];
                }
            }
            console.log('Target: '+target+' hownot be made');
            return null;
        },
        //Optimised
        //time: O(n*m^2)    //branch n at every m level (n*m) recursive calls copying over m array at each n*m*m
        //space: O(m^2)     //saving up to m items in memo each with ize up to m m*m
        optimisedRecursiveHowSum(target = this.target, numbers=this.availableNums, memo = {}){
            // console.log('Target: '+target);
            if(target in memo) return memo[target];
            if(target===0) return [];
            if(target<0) return null;

            for(let number of numbers){
                let diff = target - number;
                // console.log('For target:'+target+', num: '+number+', call how sum for new target: '+ diff);
                let childHowSum = this.optimisedRecursiveHowSum(diff, numbers, memo);
                if(childHowSum !== null){
                    memo[target] = [ ...childHowSum, number];
                    return memo[target];
                }
            }
            console.log('Target: '+target+' hownot be made');
            memo[target] = null;
            return null;
        },
        async delay(ms = this.delayMs) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
        //Tabular
        //time: O(m^2n)   //worst case copy over array of length m plus loop through m n times
        //space: O(m^2)   //Sub array max m for every m subarray
        async tabularHowSum(){
            this.table = new Array(parseInt(this.target)+1).fill(null);
            this.table[0]=[];
            for(this.leftPointer=0; this.leftPointer<=this.target; this.leftPointer++){
                if(this.table[this.leftPointer] !== null){
                    for(let number of this.availableNums){
                        this.rightPointer = this.leftPointer + number;
                        if(this.rightPointer<=this.target){
                            this.table[this.rightPointer]=[...this.table[this.leftPointer],number];
                            await this.delay(1000);
                        }else{
                            await this.delay(500);
                        }
                    }
                }else{
                    await this.delay(500);
                }
            }
            // this.howSumOutput=this.table[this.target];
            return this.table[this.target];
        },
    }


}
</script>

<style>

</style>