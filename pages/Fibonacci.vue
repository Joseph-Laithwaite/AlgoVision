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
    <p>{{fibSeq}}</p>
    <!-- <p v-for="(value, key) in fibSeq" :key="key">{{value}}</p> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            n:0,
            fibOutput:0,
            fibSeq:[],
        }
    },
    methods:{
        callFib(){
            // this.fibOutput = this.memoisedRecursiveFib(this.n, this.fibSeq);
            this.fibOutput = this.tabulatedFib(this.n);
            // this.fibOutput = this.iterativeFib();
        },
        RecursiveFib(n = this.n){
            if(n<=2){
                return this.fibOutput =  1;
            }
            return this.fibOutput = this.fib(n-1)+this.fib(n-2);
        },
        memoisedRecursiveFib(n, memo = {}){
            console.log(memo);
            if (memo[n]) return memo[n];
            if (n<=2) return 1;
            memo[n] = this.memoisedRecursiveFib(n-1,memo) + this.memoisedRecursiveFib(n-2, memo);
            return memo[n];
        },
        //n: desired feb number
        //time: O(n)
        //space: O(n)
        tabulatedFib(n = this.n){
            const table = Array(parseInt(n) +1).fill(0);
            table[1]=1;
            for(let i = 0; i<=n; i++){
                table[i+1] += table[i];
                table[i+2] += table[i];
            }
            this.fibSeq=table.splice(0,table.length-2);
            return table[n];
        },
        iterativeFib(n){
            for(let i=0; i<=this.n; i++){
                let currFib = 0;
                if(i>1){
                    currFib=this.fibSeq[i-1] + this.fibSeq[i-2];
                }
                else if(i==1){
                    currFib=1
                }
                this.fibSeq[i]=currFib;
            }   
            return this.fibSeq[this.n];
        },
    }


}
</script>

<style>

</style>