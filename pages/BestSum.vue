<template>
  <div>
    <h3>Best Sum</h3>
    <h4>Optimisation Problem ie. return bet combination</h4>

    <p>
        Return the smallest combination of the given numbers={{availableNums}} which can sum to the target sum={{target}}.<br>
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
    <input v-model="target" type="number" id="target" v-on:keyup.enter="callBestSum" v-on:input="bestSumOutput=''"/>

    <p>{{bestSumOutput}}</p>
  </div>
</template>

<script> 
export default {
    data(){
        return{
            availableNums:[5,3,4,7],
            target:7,
            bestSumOutput:[],
        }
    },
    methods:{
        callBestSum(){
            this.bestSumOutput= '';
            // this.bestSumOutput = this.recursiveBestSum(this.target, this.availableNums) || 'Sum not possible';
            this.bestSumOutput = this.optimisedRecursiveBestSum(this.target, this.availableNums) || 'Sum not possible';
            // this.bestSumOutput = this.iterativeBestSum();
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
        iterativeBestSum(){
        },
    }


}
</script> 

<style>

</style>