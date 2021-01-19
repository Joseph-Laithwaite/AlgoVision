<template>
    <div>
        <h3>Solution Table</h3>
            <table class="table table-bordered border-primary">
            <thead>
                <tr>
                    <th>
                        index
                    </th>
                    <th v-for="(item,index) in table" :key="'i'+index" scope="col" class="text-center" 
                    :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }">
                        {{index}}
                    </th>
                </tr>
                <tr v-if="headingTable!==null">
                    <th>
                        
                    </th>
                    <th v-for="(item,index) in headingTable" :key="'i'+index" scope="col" class="text-center" 
                    :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }">
                        {{item}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>table[index]</th>
                    <th v-for="(item, index) in table" :key="index+','+item" scope="col" class="text-center"
                    :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
                    >
                        {{(item||item===true||item===false)?item:'null'}}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'tabulation-table',
    props:{
        table:{type:Array},
        headingTable:{default:null},
        rightPointer:{type:Number},
        leftPointer:{type:Number},
    }
}
</script>

<style>

</style>