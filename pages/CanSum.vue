<template>
  <div>
    <h3>Can Sum</h3>
    <p>
        Return whether the target sum={{target}} can be made with the given numbers={{availableNums}}.<br>
        Numbers can be used multiple times and can be predumes all target and sum numbers are positive.
    </p>
    <h4>Numbers Available</h4>
    <table class="table">
        <tbody>
            <th v-for="(item, index) in availableNums" :key="index+','+item" scope="col" class="text-center">
                {{item}}
            </th>
            <!-- <th scope="col" style="width:10%;">
                <input v-on:keyup.enter="apendList"  v-model="newItemForList" type="text" class="form-control" id="arrayItemInput" >
            </th> -->
        </tbody>
    </table>
    <label for="target">Target Sum:</label>
    <input v-model="target" type="number" id="target" v-on:keyup.enter="callCanSum" v-on:input="canSumOutput=''"/>

    <p>{{canSumOutput}}</p>
    <!-- <p v-for="(value, key) in canSumSeq" :key="key">{{value}}</p> -->
  </div>
</template>

<script> 
export default {
    data(){
        return{
            availableNums:[5,3,4,7],
            target:7,
            canSumOutput:Boolean,
            canSumSeq:{},
        }
    },
    methods:{
        callCanSum(){
            this.canSumOutput= '';
            // this.canSumOutput = this.recursiveCanSum(this.target, this.availableNums);
            this.canSumOutput = this.optimisedRecursiveCanSum(this.target, this.availableNums);
            // this.canSumOutput = this.iterativeCanSum();
        },
        recursiveCanSum(target = this.target, numbers=this.availableNums){// , numbers = this.availableNums){
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
        iterativeCanSum(){
            // for(let i=1; i<=this.target; i++){
            //     let currCanSum = 1;
            //     if(i>2){
            //         currCanSum=this.canSumSeq[i-1] + this.canSumSeq[i-2];
            //     }
            //     // if(!this.canSumSeq[target]){
            //         this.canSumSeq[i]=currCanSum;
            //     // }
            // }
            // return this.canSumSeq[this.target];
        },
    }


}
</script>

<style>

</style>