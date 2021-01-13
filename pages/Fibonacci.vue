<template>
  <div>
    <h3>Fibonacci Sequence</h3>
    <p>
        n = 0,1,2,3,4,5,6,7,8,9,10
        fib(n)=1,1,2,3,5,7,13,20
    </p>
    <label for="nInput">Input number n</label>
    <input v-model="n" type="number" id="nInput" v-on:keyup.enter="callFib"/>
    <p>{{fibOutput}}</p>
    <!-- <p v-for="(value, key) in fibSeq" :key="key">{{value}}</p> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            n:0,
            fibOutput:0,
            fibSeq:{},
        }
    },
    methods:{
        callFib(){
            this.fibOutput = this.optimisedRecursiveFib(this.n, this.fibSeq);
            // this.fibOutput = this.iterativeFib();
        },
        RecursiveFib(n = this.n){
            if(n<=2){
                return this.fibOutput =  1;
            }
            return this.fibOutput = this.fib(n-1)+this.fib(n-2);
        },
        optimisedRecursiveFib(n, memo = {}){
            console.log(memo);
            if (memo[n]) return memo[n];
            if (n<=2) return 1;
            memo[n] = this.optimisedRecursiveFib(n-1,memo) + this.optimisedRecursiveFib(n-2, memo);
            return memo[n];
        },
        iterativeFib(){
            for(let i=1; i<=this.n; i++){
                let currFib = 1;
                if(i>2){
                    currFib=this.fibSeq[i-1] + this.fibSeq[i-2];
                }
                // if(!this.fibSeq[n]){
                    this.fibSeq[i]=currFib;
                // }
            }
            return this.fibSeq[this.n];
        },
    }


}
</script>

<style>

</style>