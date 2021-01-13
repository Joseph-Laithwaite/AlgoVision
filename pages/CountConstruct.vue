<template>
  <div>
    <h3>Count Construct</h3>
    <!-- <h4>Combinatoric Problem ie. return combination</h4> -->
    <p>
        Return the number of ways the target string="{{target}}" can be made with the given the array of strings wordBank={{wordBank}}.<br>
        You may re-use elements of the WordBank as many times as required.
    </p>
    <h4>Numbers Available</h4>
    <table class="table">
        <tbody>
            <th v-for="(item, index) in wordBank" :key="index+','+item" scope="col" class="text-center">
                {{item}}
            </th>
        </tbody>
    </table>
    <label for="target">Target Construct:</label>
    <input v-model="target" type="word" id="target" v-on:keyup.enter="callCountConstruct" v-on:input="countConstructOutput=''"/>

    <p>{{countConstructOutput}}</p>
    <!-- <p v-for="(value, key) in countConstructSeq" :key="key">{{value}}</p> -->
  </div>
</template>

<script> 
export default {
    data(){
        return{
            // wordBank:["ab","abc",'cd',"def","abcd"],
            // target:"abcdef",
            wordBank:["e","ee",'eee',"eeee","eeeee","eeeeee","eeeeee"],
            target:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
            countConstructOutput:Number,
            countConstructSeq:{},
        }
    },
    methods:{
        callCountConstruct(){
            this.countConstructOutput= '';
            // this.countConstructOutput = this.recursiveCountConstruct(this.target, this.wordBank);
            this.countConstructOutput = this.optimisedRecursiveCountConstruct(this.target, this.wordBank);
            // this.countConstructOutput = this.iterativeCountConstruct();
        },
        //m = target.length     == Height of worst case tree
        //n = wordBank.length   == Branching factor

        //BruteForce
        //time: O(n^m*m)      // branching factor ^ height power - copying array max length m with slice *m
        //space: O(m^2)       // height of tree is max call stack frames, each fram must store string of length m so m*m
        recursiveCountConstruct(target = this.target, words=this.wordBank){
            console.log('Target: ' +target+' is type ' +typeof target);
            // !!!BASE CASE!!!
            if(target==='') return 1;

            //Dig down into tree using matching prefixes from the word bank to call count construct
            let count=0;
            for(let word of words){
                //see if each word count act as a prefix, if so call countConstruct on the remainer
                if(target.indexOf(word) === 0 ){
                    let suffix = target.slice(word.length); //copying over part of string so iterate over, worst case max length m
                    let currCount = this.recursiveCountConstruct(suffix,words);
                    if(currCount > 0){
                        count+=currCount;
                    }
                }
            }
            return count;
        },

        //m = target.length     == Height of worst case tree
        //n = wordBank.length   == Branching factor
        
        //optimised
        //time: O(n*m^2)   //explore every branch n but with maximum of m work as memo will save m subtrees. Still have slice *m
        //space: O(m^2)    //m stack frames and m string per frame
        optimisedRecursiveCountConstruct(target = this.target, words=this.wordBank, memo = {}){  
            console.log('Target: ' +target+' is type ' +typeof target);
            //memo base case
            if(target in memo) return memo[target];
            // !!!BASE CASE!!!
            if(target==='') return 1;

            //Dig down into tree using matching prefixes from the word bank to call count construct
            let count=0;
            for(let word of words){
                //see if each word count act as a prefix, if so call countConstruct on the remainer
                if(target.indexOf(word) === 0 ){
                    let suffix = target.slice(word.length); //copying over part of string so iterate over, worst case max length m
                    let currCount = this.optimisedRecursiveCountConstruct(suffix,words,memo);
                    if(currCount > 0){
                        count+=currCount;
                    }
                }
            }
            memo[target]=count;
            return memo[target];
        },
        iterativeCountConstruct(){

        },
    }


}
</script>

<style>

</style>