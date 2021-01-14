<template>
  <div>
    <h3>Can Sum</h3>
    <h4> Decision Problem ie. return boolean</h4>
    <p>
        Return whether the target sum={{target}} can be made with the given numbers={{availableNums}}.<br>
        Numbers can be used multiple times and can be predumes all target and sum numbers are positive.
    </p>
    <h4>Numbers Available</h4>
    <table class="table" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
        <tbody>
            <th scope="row">Available Numbers</th>
            <th v-for="(item, index) in availableNums" :key="index+','+item" scope="col" class="text-center">
                {{item}}
            </th>
            <th scope="col" style="width:10%;" v-if="showRemoveItems" >
            <input v-on:keyup.enter="apendList"  v-model="newItemForList" type="text" class="form-control" id="arrayItemInput" >
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
    <label for="target">Target Sum:</label>
    <input v-model="target" type="number" id="target" v-on:keyup.enter="callCanSum" v-on:input="canSumOutput=''"/>

    <br>
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th>index</th>
          <th v-for="(item,index) in canSumSeq" :key="'i'+index" scope="col" class="text-center" 
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }">
              {{index}}
          </th>
          <th scope="col" style="width:10%;" v-if="showRemoveItems" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
            {{canSumSeq.length}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>canSumSeq[index]</th>
          <th v-for="(item, index) in canSumSeq" :key="index+','+item" scope="col" class="text-center"
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
          >
            {{item}}
          </th>
        </tr>
      </tbody>
    </table>
    <br>


    <p>{{canSumOutput=="[object Promise]"?'':canSumOutput}}</p>
    <!-- <p v-for="(value, key) in canSumSeq" :key="key">{{value}}</p> -->
  </div>
</template>

<script> 
export default {
    data(){
        return{
            availableNums:[3,4,5,7],
            target:7,
            canSumOutput:Boolean,
            canSumSeq:[],
            leftPointer:0,
            rightPointer:0,
            newItemForList:'',
            showRemoveItems:false,
        }
    },
    methods:{
        apendList(){
            this.availableNums.push(this.newItemForList);
            this.newItemForList = '';
        },
        callCanSum(){
            this.canSumOutput= '';
            // this.canSumOutput = this.recursiveCanSum(this.target, this.availableNums);
            // this.canSumOutput = this.optimisedRecursiveCanSum(this.target, this.availableNums);
            this.canSumOutput = this.tabularCanSum();
        },
        //m = targetSum
        //n = numbers.length
        //BruteForce
        //time: O(n^m)  //go down up to m levels (eg. every item 1) at every level branch up to n times
        //space: O(m)   //Only have to store stack frames in use to it's max depth m
        recursiveCanSum(target = this.target, numbers=this.availableNums){
            console.log('Target: '+target);
            if(target===0) return true;
            if(target<0) return false;

            for(let number of numbers){
                let diff = target - number;
                console.log('For target:'+target+', num: '+number+', call can sum for new target: '+ diff);
                if(this.recursiveCanSum(diff, numbers) === true){
                    return true;
                }
            }
            console.log('Target: '+target+' cannot be made');
            return false;
            
        },

        //optimised
        //time: O(m*n)   //still have to branch n at each node but only will make up to m memo keys
        //space: O(m)   //store up to m memo keys
        optimisedRecursiveCanSum(target = this.target, numbers=this.availableNums, memo = {}){  
            // console.log('Target: '+target);
            if(memo[target]) return memo[target];
            if(target===0) return true;
            if(target<0) return false;

            for(let number of numbers){
                let diff = target - number;
                // console.log('For target:'+target+', num: '+number+', call can sum for new target: '+ diff);
                if(this.optimisedRecursiveCanSum(diff, numbers, memo) === true){
                    memo[target] = true;
                    return true;
                }
            }
            console.log('Target: '+target+' cannot be made');
            memo[target] =false;
            return false
        },
        async delay(ms = this.delayMs) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
        //Tabular
        //time: O(mn)
        //space: O(m)
        async tabularCanSum(){
            this.canSumSeq = new Array(parseInt(this.target)+1).fill(false);
            this.canSumSeq[0]=true;
            for(this.leftPointer=0; this.leftPointer<=this.target; this.leftPointer++){
                if(this.canSumSeq[this.leftPointer] === true){
                    for(let number of this.availableNums){
                        this.rightPointer = this.leftPointer + number;
                        if(this.rightPointer<=this.target){
                            this.canSumSeq[this.rightPointer]=true;
                            await this.delay(1000);
                        }else{
                            await this.delay(500);
                        }
                    }
                }else{
                    await this.delay(500);
                }
            }
            this.canSumOutput=this.canSumSeq[this.target];
            // return this.canSumSeq[this.target];
        },
    }


}
</script>

<style>

</style>