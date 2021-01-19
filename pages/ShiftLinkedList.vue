<template>
  <div>
      <label for="offset">Shift amount</label>
      <input id="offset" v-model="shiftAmount" type="number" v-on:keyup.enter="runShift"/>
      <ultimate-table 
            :table="linkedList.nodes"
            :rowIsObject="true"
            :editable="editable"
            :showIndex="false"
            :addEmptyCorner="false"
            :indexPointer="currentRow"
            :keyPointer="currentKey"
      />
      <div>
            <h3>Variables</h3>
            <table class="table">
                <thead>
                    <th scope="col">Variable</th>
                    <th scope="col">Value</th>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Head</th>
                        <td>{{linkedList.head}}</td>
                    </tr>
                    <tr>
                        <th scope="row">ListLength</th>
                        <td>{{listLength}}</td>
                    </tr>
                    <tr>
                        <th scope="row">ListTail</th>
                        <td>{{listTail}}</td>
                    </tr>
                    <tr>
                        <th scope="row">Offset</th>
                        <td>{{offset}}</td>
                    </tr>
                    <tr>
                        <th scope="row">NewTailPosition</th>
                        <td>{{newTailPosition}}</td>
                    </tr>
                    <tr>
                        <th scope="row">newHead</th>
                        <td>{{newHead}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
import UltimateTable from '~/components/UltimateTable.vue'

export default {
  components: {UltimateTable  },
    name:'ShiftLinkedList',
    data() {
        return{
            shiftAmount:2,
            linkedList:{
                head: 0,
                nodes: [
                    {id: 0, next: 1, value: 0},
                    {id: 1, next: 2, value: 1},
                    {id: 2, next: 3, value: 2},
                    {id: 3, next: 4, value: 3},
                    {id: 4, next: 5, value: 4},
                    {id: 5, next: null, value: 5}
                ]
            },
            editable:true,
            currentRow:0,
            currentKey:'id',
            listLength:0,
            listTail:{},
            offset:null,
            newTailPosition:null,
            newHead:null,
            delayMs:500,
        }
    },
    methods:{
        async delay(ms = this.delayMs) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },
        async runShift(){
            this.editable=false;
            this.currentKey='id';
            this.listLength=0;
            this.listTail={};
            this.offset=null;
            this.newTailPosition=null;
            this.newHead=null;
            this.delay();
            this.listLength = 1;
            this.listTail = this.linkedList.nodes[this.linkedList.head];
            this.currentRow=this.linkedList.head;
            this.currentKey='next';
            console.log(this.linkedList.nodes.length);
            while(this.listTail.next != null){
                console.log(this.listTail);
                await this.delay();
                this.listTail = this.linkedList.nodes[this.listTail.next];
                this.listLength++;
                this.currentRow = this.currentRow+1<this.linkedList.nodes.length ? this.currentRow+1 : 0;
            }

            this.offset = Math.abs(this.shiftAmount) % this.listLength;
            await this.delay();
            
            if(this.offset === 0) {
                alert("offset is equal to zero so no change required");
                return this.linkedList.head;
            }

            this.newTailPosition = this.shiftAmount>0 ? this.listLength - this.offset : this.offset;
            let newTail = this.linkedList.nodes[this.linkedList.head];
            this.currentRow=this.linkedList.head;
            for(let i = 1; i<this.newTailPosition; i++){
                console.log(newTail.next);
                newTail = this.linkedList.nodes[newTail.next];
                console.log(newTail);
                this.currentRow = this.currentRow+1<this.linkedList.nodes.length ? this.currentRow+1 : 0;
                await this.delay();
            }
            console.log(newTail);
            this.newHead = newTail.next;
            this.linkedList.nodes[newTail.id].next = null
            await this.delay();

            this.linkedList.nodes[this.listTail.id].next = this.linkedList.head;
            this.currentRow = this.listTail.id;
            await this.delay();

            this.linkedList.head = this.newHead;
            this.currentRow=this.newHead;
            this.currentKey='id';
            await this.delay();

            this.editable=true;
        }
    }

}


</script>

<style>

</style>