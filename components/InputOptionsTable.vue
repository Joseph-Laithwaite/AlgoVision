<template>
    <div>
        <h4>{{title}}</h4>
        <table class="table" @mouseenter="mouseHover=true" @mouseleave="mouseHover=false">
            <tbody>
                <th scope="row">{{title}}</th>
                <th v-for="(item, index) in table" :key="index+','+item" scope="col" class="text-center">
                    {{item}}
                </th>
                <th scope="col" style="width:10%;" v-if="mouseHover" >
                <input v-on:keyup.enter="apendTable"  v-model="newElem" :type="elemType" class="form-control" id="arrayItemInput" >
            </th>
            </tbody>
            <tfoot v-if="mouseHover" @mouseenter="mouseHover=true" @mouseleave="mouseHover=false">
                <th>
                <button @click="table=[]" type="button" class="btn">
                        Remove All
                </button>
                </th>
                <th v-for="(item,index) in table" :key="'i'+index" scope="col" class="text-center" >
                    <button @click="table.splice(index,1)" type="button" class="btn">
                    X
                    </button>
                </th>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    name:'input-options-table',
    props:{
        title:{
            default:'Available Elements'
        },
        table:{
            type:Array
        },
        elemType:{
            default:'text'
        }
    },
    data() {
        return{
            mouseHover:false,
            newElem:''
        }
    },
    methods:{
        apendTable(){
            this.table.push(this.newElem);
            this.newElem='';
        }
    }

}
</script>

<style>

</style>