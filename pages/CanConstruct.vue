<template>
  <div>
    <h3>Can Construct</h3>
    <h4> Decision Problem ie. return boolean</h4>
    <p>
        Return whether the target string="{{target}}" can be made with the given the array of strings wordBank={{wordBank}}.<br>
        You can re-use elements of the WordBank as many times as required.
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
    <input v-model="target" type="word" id="target" v-on:keyup.enter="callCanConstruct" v-on:input="canConstructOutput=''"/>

    <p>{{canConstructOutput}}</p>
    <!-- <p v-for="(value, key) in canConstructSeq" :key="key">{{value}}</p> -->
  </div>
</template>

<script> 
export default {
    data(){
        return{
            // wordBank:["ab","abc",'cd',"def","abcd"],
            // target:"abcdef",
            wordBank:["e","ee",'eee',"eeee","eeeee","eeeeee","eeeeee"],
            target:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            canConstructOutput:Boolean,
            canConstructSeq:{},
        }
    },
    methods:{
        callCanConstruct(){
            this.canConstructOutput= '';
            // this.canConstructOutput = this.recursiveCanConstruct(this.target, this.wordBank);
            this.canConstructOutput = this.optimisedRecursiveCanConstruct(this.target, this.wordBank);
            // this.canConstructOutput = this.iterativeCanConstruct();
        },
        //m = target.length     == Height of worst case tree
        //n = wordBank.length   == Branching factor

        //BruteForce
        //time: O(n^m*m)      // branching factor ^ height power - copying array max length m with slice *m
        //space: O(m^2)       // height of tree is max call stack frames, each fram must store string of length m so m*m
        recursiveCanConstruct(target = this.target, words=this.wordBank){
            console.log('Target: ' +target+' is type ' +typeof target);
            // !!!BASE CASE!!!
            if(target==='') return true;

            //Dig down into tree using matching prefixes from the word bank to call can construct
            for(let word of words){
                //see if each word can act as a prefix, if so call canConstruct on the remainer
                if(target.indexOf(word) === 0 ){
                    let suffix = target.slice(word.length); //copying over part of string so iterate over, worst case max length m
                    if(this.recursiveCanConstruct(suffix,words)=== true){
                        return true;
                    }
                }
            }
            return false;
        },

        //m = target.length     == Height of worst case tree
        //n = wordBank.length   == Branching factor
        
        //optimised
        //time: O(n*m^2)   //explore every branch n but with maximum of m work as memo will save m subtrees. Still have slice *m
        //space: O(m^2)    //m stack frames and m string per frame
        optimisedRecursiveCanConstruct(target = this.target, words=this.wordBank, memo = {}){  
            // console.log('Target: ' +target+' is type ' +typeof target);
            //Memo Base case
            if(target in memo) return memo[target];
            // !!!BASE CASE!!!
            if(target==='') return true;

            //Dig down into tree using matching prefixes from the word bank to call can construct
            for(let word of words){
                //see if each word can act as a prefix, if so call canConstruct on the remainer
                if(target.indexOf(word) === 0 ){
                    let suffix = target.slice(word.length); //copying over part of string so iterate over, worst case max length m
                    if(this.optimisedRecursiveCanConstruct(suffix,words)=== true){
                        memo[target]=true
                        return true;
                    }
                }
            }
            memo[target]=false;
            return false;
        },
        iterativeCanConstruct(){

        },
    }


}
</script>

<style>

</style>