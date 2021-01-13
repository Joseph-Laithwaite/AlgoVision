<template>
  <div>
    <h3>How Sum</h3>
    <p>
        Return a combination of the given numbers={{availableNums}} which can sum to the target sum={{target}}.<br>
        Numbers can be used multiple times and can be presumed all target and sum numbers are positive.
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
    <input v-model="target" type="number" id="target" v-on:keyup.enter="callHowSum" v-on:input="howSumOutput=''"/>

    <p>{{howSumOutput}}</p>
  </div>
</template>

<script> 
export default {
    data(){
        return{
            availableNums:[5,3,4,7],
            target:7,
            howSumOutput:[],
        }
    },
    methods:{
        callHowSum(){
            this.howSumOutput= '';
            // this.howSumOutput = this.recursiveHowSum(this.target, this.availableNums) || 'Sum not possible';
            this.howSumOutput = this.optimisedRecursiveHowSum(this.target, this.availableNums) || 'Sum not possible';
            // this.howSumOutput = this.iterativeHowSum();
        },
        recursiveHowSum(target = this.target, numbers=this.availableNums){// , numbers = this.availableNums){
            console.log('Target: '+target);
            if(target===0) return [];
            if(target<0) return null;

            for(let number of numbers){
                let diff = target - number;
                console.log('For target:'+target+', num: '+number+', call can sum for new target: '+ diff);
                let childHowSum = this.recursiveHowSum(diff, numbers);
                if(childHowSum !== null){
                    console.log('Child sum type: ' + typeof childHowSum);
                    return [ ...childHowSum, number];
                }
            }
            console.log('Target: '+target+' cannot be made');
            return null;
        },
        optimisedRecursiveHowSum(target = this.target, numbers=this.availableNums, memo = {}){
            // console.log('Target: '+target);
            if(target in memo) return memo[target];
            if(target===0) return [];
            if(target<0) return null;

            for(let number of numbers){
                let diff = target - number;
                // console.log('For target:'+target+', num: '+number+', call can sum for new target: '+ diff);
                let childHowSum = this.optimisedRecursiveHowSum(diff, numbers, memo);
                if(childHowSum !== null){
                    memo[target] = [ ...childHowSum, number];
                    return memo[target];
                }
            }
            console.log('Target: '+target+' cannot be made');
            memo[target] = null;
            return null;
        },
        iterativeHowSum(){
        },
    }


}
</script>

<style>

</style>