<template>
  <div >
      <b-input-group>
        <label for="itemToAdd">Add Item:</label>
        <b-input v-model.number="input" type="number" @keyup.enter="addItem(input)" id="itemToAdd"></b-input>
    </b-input-group>
    <b-button @click="removeMin">Remove Min</b-button>
    <br/>
    <ultimate-table 
        :table="arrayHeap" 
        :twoDArray="false"
        :hasRowHeadings="false" 
        :addEmptyCorner="false" 
        :editable="false" 
        :showIndex="true"
    ></ultimate-table> 

    <graph :graph="tree"></graph>
  </div>
</template>

<script>
import MinHeapMixin from '../mixins/MinHeapMixin.js';
import UltimateTable from '../components/UltimateTable.vue';
// import graph from '../components/Graphs/SVGGraph.vue'
import graph from '../components/Graphs/Graph.vue'

export default {
    mixins:[MinHeapMixin],
    components: {
        UltimateTable, 
        graph,
        },
    data() {
        return{
            input:'',
            tree:{
                node:"Parent",
                children:[
                {
                    node:"Left Child",
                    children:[
                    {
                        node:"Left Child",
                        children:[]
                    },
                    {
                        node:"Right Child",
                        children:[]
                    }
                    ]
                },
                {
                    node:"Right Child",
                    children:[
                        {
                            node:"Left Child",
                            children:[]
                        },
                        {
                            node:"Right Child",
                            children:[]
                        }
                    ]
                }
                ]
            },
        }
    }
}
</script>

<style>

</style>