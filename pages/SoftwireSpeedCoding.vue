<template>
<div>
    <b-input type=number v-model.number="size" @keyup.enter="caluclateOutput"></b-input>
    <div>
        <span v-for((line, index) in output) :key="index">
            {{line}}
        </span>
    </div>
</div>
</template>
<!--    size 5  *****    size 6  ***   ***    size 7  *******    size 8  ****   ****
                *   *            *       *            *     *            *         *
                * * *            * *   * *            * *** *            * **   ** *
                                                                         * *     * *
                *   *            * *   * *            * * * *            
                *****            *       *            * *** *            * *     * *
                                 ***   ***            *     *            * **   ** *
                                                      *******            *         *
                                                                         ****   **** -->

<script>
export default {
    data(){
        return{
            size:5,
            output:[]
        }
    },
    methods:{
        caluclateOutput(){
            let firstAndLast = '*'.repeat(this.size);
            output.push(firstAndLast);
            for(let i=0; i<this.size/2; i++){
                let start='* ', end=' *'
                if(i===0 || i ===this.size-2) row = row + '*'.repeat(this.size-4) + end
            }
            output.push(firstAndLast);
        }
    }
}
</script>

<style>

</style>