<template>
    <div>
        <table class="table table-bordered border-primary" @mouseenter="mouseHover=editable ? true: false" @mouseleave="mouseHover=false">
            <thead>
                <tr v-if="showIndex">
                    <th v-if="hasRowHeadings">
                        index
                    </th>
                    <th v-if="addEmptyCorner"> </th>
                    <th v-for="(item,index) in table" :key="'i'+index" scope="col" class="text-center" 
                    :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }">
                        {{index}}
                    </th>
                </tr>
                <tr v-if="headingTable!==null">
                    <th v-if="addEmptyCorner"> </th>
                    <th v-for="(item,index) in headingTable" :key="'i'+index" scope="col" class="text-center" 
                    :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }">
                        {{item}}
                    </th>
                </tr>
                <tr v-if="rowIsObject===true">
                    <th v-if="addEmptyCorner"> </th>
                    <th v-for="(_,name) in table[0]" :key="name" scope="col" class="text-center" 
                    :class="{ 'table-primary': rightPointer===name, 'table-secondary':leftPointer===name }">
                        {{name}}
                    </th>
                </tr>
            </thead>
            <tbody v-if="twoDArray===false">
                <tr>
                    <th v-for="(item, index) in table" :key="index+','+item" scope="col" class="text-center"
                    :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
                    >
                        {{(item||item===true||item===false)?item:'null'}}
                    </th>
                </tr>
            </tbody>
            <tbody v-if="twoDArray===true">
                <tr v-for="(item, index) in table" :key="'row'+index" class="text-center" 
                >
                    <th scope="row" v-if="showRowIndex">{{index}}</th>
                    <td v-for="(value, name) in item" :key="index+','+name"  class="text-center"
                        :class="{ 
                         'table-secondary': highlightArray!=null && highlightArray.length!==0 && highlightArray[index][name]===true ,
                         'table-primary': indexPointer===index && keyPointer==name,
                         }"
                    >
                        <span v-if="!editable">
                            {{(value||value===true||value===false||value==0)?value:'null'}}
                        </span>
                        <span v-if="editable">
                            <input v-model.number="table[index][name]" placeholder="null" class="form-control">
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:{
        table:{},
        headingTable:{default:null},
        rightPointer:{type:Number},
        leftPointer:{type:Number},
        indexPointer:{default:null},
        keyPointer:{default:null},
        showIndex:{type:Boolean,default:true},
        editable:{default:true},
        rowIsObject:{default:false},
        twoDArray:{default:false},
        addEmptyCorner:{default:true},
        hasRowHeadings:{default:true},
        showRowIndex:{default:false},
        highlightArray:{default:null}
    },
    data() {
        return{
            mouseHover:false,

        }
    }
}
</script>

<style>

</style>