<template>
  <div>
    <h3>All Construct</h3>
    <h4> Decision Problem ie. return boolean</h4>
    <p>
        Return a 2D array containing <em>all of ways </em> the target string="{{target}}" can be made with the given the array of strings wordBank={{wordBank}}.<br>
        Each element of the 2D array will represent one combination that constructs the target/ <br>
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
    <input v-model="target" type="word" id="target" v-on:keyup.enter="callAllConstruct" v-on:input="allConstructOutput=''"/>

    <!-- <p>{{allConstructOutput}}</p> -->

    <p v-if="allConstructOutput.length==0">No combination found</p>
    <p v-for="(value, key) in allConstructOutput" :key="key">{{value}}</p>
  </div>
</template>

<script> 
export default {
    data(){
        return{
            // wordBank:["purp","p",'ur',"le","purpl"],
            // target:"purple",
            // wordBank:["ab","abc",'cd',"def","abcd"],
            // target:"abcdef",
            wordBank:["e","ee",'eee',"eeee","eeeee","eeeeee","eeeeee"],
            target:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
            allConstructOutput:[],
            allConstructSeq:{},
        }
    },
    methods:{
        callAllConstruct(){
            this.allConstructOutput= '';
            this.allConstructOutput = this.allConstruct(this.target, this.wordBank);
            // this.allConstructOutput = this.memorisedAllConstruct(this.target, this.wordBank);
            // this.allConstructOutput = this.iterativeAllConstruct();
        },
        
        allConstruct(target = this.target, words=this.wordBank){
            console.log('Target: ' +target+' is type ' +typeof target);
            // !!!BASE CASE!!!
            if(target==='') return [[]];

            //Dig down into tree using matching prefixes from the word bank to call all construct
            let successfulCombinations=[];
            for(let word of words){
                //see if each word can act as a prefix, if so call allConstruct on the remainer
                if(target.indexOf(word) === 0 ){
                    let suffix = target.slice(word.length); //copying over part of string so iterate over, worst case max length m
                    let suffixConstructions = this.allConstruct(suffix,words);
                    let targetConstructions = suffixConstructions.map(way => [word, ...way]);
                    successfulCombinations.push(...targetConstructions);
                }
            }
            return successfulCombinations;
        },

        
        memorisedAllConstruct(target = this.target, words=this.wordBank, memo = {}){  
            console.log('Target: ' +target+' is type ' +typeof target);
            if(target in memo) return memo[target];
            // !!!BASE CASE!!!
            if(target==='') return [[]];

            //Dig down into tree using matching prefixes from the word bank to call all construct
            let successfulCombinations=[];
            for(let word of words){
                //see if each word can act as a prefix, if so call allConstruct on the remainer
                if(target.indexOf(word) === 0 ){
                    let suffix = target.slice(word.length); //copying over part of string so iterate over, worst case max length m
                    let suffixConstructions = this.memorisedAllConstruct(suffix,words);
                    let targetConstructions = suffixConstructions.map(way => [word, ...way]);
                    successfulCombinations.push(...targetConstructions);
                }
            }
            memo[target] = successfulCombinations
            return memo[target];
        },
        iterativeAllConstruct(){

        },
    }


}
</script>

<style>

</style>