<template>
  <div>
    <h3 class="subtitle">
      Longest Increasing Substring
    </h3>
    <p>
      This is a classic dynamic programming problem asking 
      for the longest subsequence (a selection of characters but not necessarily contiguouse) 
      and has 3 main variations:
    </p>
    <ul>
      <li>
        Longest increasing subsequence
      </li>
      <li>
        Longest non-decreasing subsequence
      </li>
      <li>
        Longest decreasing subsequence
      </li>
    </ul>
    <p>
      these all require the same method to solve with slighty different comparisons.
    </p>
    <table class="table table-bordered border-primary">
      <thead @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
        <tr>
          <th>index</th>
          <th v-for="(item,index) in list" :key="'i'+index" scope="col" class="text-center" 
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
          >
              {{index}}
          </th>
          <th scope="col" style="width:10%;" v-if="showRemoveItems" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
            {{list.length}}
          </th>
        </tr>
        <tr>
          <th>arr[index]</th>
          <th v-for="(item, index) in list" :key="index+','+item" scope="col" class="text-center"
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
          >
            {{item}}
          </th>
          <th scope="col" style="width:10%;" v-if="showRemoveItems" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
            <input v-on:keyup.enter="apendList"  v-model="newItemForList" type="text" class="form-control" id="arrayItemInput" >
          </th>
        </tr>
      </thead>
      <tbody @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
        <tr>
          <th>Longest Sequence</th>
          <td v-for="(item, index) in longestString" :key="index+','+item" scope="col" class="text-center"
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
          >
            {{item}}
          </td>
          <td scope="col" style="width:10%;" v-if="showRemoveItems" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
            1
          </td>

        </tr>
      </tbody>
      <tfoot v-if="showRemoveItems" @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
        <th>
          <button @click="list=[]" type="button" class="btn">
                Remove All
          </button>
        </th>
        <th v-for="(item,index) in list" :key="'i'+index" scope="col" class="text-center" 
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
          >
            <button @click="list.splice(index,1)" type="button" class="btn">
              X
            </button>
          </th>
      </tfoot>
    </table>
    
    <br>
      <div class="row justify-content-center ">
        <label for="comparisonType">Select Subsequence Comparison Type</label>
        <select v-model="comparisonType" class="form-select" id="comparisonType">
          <!-- <option selected>Subsequence Type</option> -->
          <option value="i">Longest increasing</option>
          <option value="nd">Longest non-decreasing</option>
          <option value="d">Longest decreasing</option>
        </select>
      </div>
      <br>
      <div class="row justify-content-center ">
        <button @click="stepAlgorithm" type="button" class="btn btn-primary col-3">
          Step Forward
        </button>
        <button @click="stepBackAlgorithm" type="button" class="btn btn-primary col-3">
          Step Back
        </button>
        <button @click="runAlgorithm" type="button" class="btn btn-primary col-3">
            Run
        </button>
        <button @click="pauseAlgorithm" type="button" class="btn btn-primary col-3">
            Pause
        </button>
      </div>
      <br>
    <!-- </div> -->
    <div class="container">
      <div class="row">
        <div class="col-3">
          <table class="table">
            <thead>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </thead>
            <tbody>
              <tr>
                <td>Max length</td>
                <td>{{max}}</td>
              </tr>
              <tr>
                <td>Left Pointer</td>
                <td>{{leftPointer}}</td>
              </tr>
              <tr>
                <td>Left Pointer Value</td>
                <td>{{list[leftPointer]}}</td>
              </tr>
              <tr>
                <td>Left Pointer Longest String</td>
                <td>{{longestString[leftPointer]}}</td>
              </tr>
              <tr>
                <td>Right Pointer</td>
                <td>{{rightPointer}}</td>
              </tr>
              <tr>
                <td>Right Pointer Value</td>
                <td>{{list[rightPointer]}}</td>
              </tr>
              <tr>
                <td>Right Pointer Longest String</td>
                <td>{{longestString[rightPointer]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <h4>Pseudo Code</h4>
          <br>
          <code>
            list={{list}}<br>
            leftPointer=0<br>
            rightPointer=1<br>
            longestString=[]<br>
            maxStringLength=0<br><br>
            for leftPointer = 1 to listLength<br>
            &nbsp;  for rightPointer = 0 to leftPointer-1<br>
            &nbsp;&nbsp;&nbsp;  if list[rightPointer] > list[leftPointer]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  if longestString[rightPointer]+1 > longestString[leftPointer]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  longestString[rightPointer] = longestString[leftPointer]+1<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  maxStringLength = Max(maxStringLength, longestString[rightPointer])<br>
          </code>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      list:[],
      longestString:[],
      leftPointer:0,
      rightPointer:0,
      searchComplete:false,
      max:1,
      newItemForList:'',
      showRemoveItems:false,
      pauseRunning:false,
      delayMs:500,
      comparisonType:'i',
    }
  },
  methods:{ 
    apendList(){
      this.list.push(this.newItemForList);
      this.newItemForList = '';
    },
    pauseAlgorithm(){
      this.pauseRunning=true;
    },
    async delay(ms = this.delayMs) {
      return await new Promise(resolve => setTimeout(resolve, ms));
    },
    async runAlgorithm(){
      while(!this.searchComplete && !this.pauseRunning){
        console.log('in run while');
        if(!this.pauseRunning){
          await this.delay();
          this.stepAlgorithm();
        }
      }
      this.pauseRunning=false;
    },
    comparisionOperation(left=this.leftPointer,right=this.rightPointer){
      switch(this.comparisonType){
        case 'i':
          if(this.list[right] > this.list[left]){
            return true
          }
          break;
        case 'nd':
          if(this.list[right] >= this.list[left]){
            return true
          }
          break;
        case 'd':
          if(this.list[right] < this.list[left]){
            return true
          }
          break;
      }
      return false;
    },
    stepBackAlgorithm(){
      if(this.leftPointer!==0 || this.rightPointer!==0){
        if(this.leftPointer!==0){
          this.leftPointer--;
        }else{//
          this.rightPointer--;
          this.leftPointer=this.rightPointer>0 ? this.rightPointer-1 : 0;
        }
        if(this.max==this.longestString[this.leftPointer]+1){
          let duplicateMax=false
          for(let maximum of this.longestString){
            if(maximum = this.max){
              //do nothing
            }else{
              duplicateMax=true;
            }
          }
          if(!duplicateMax){
            this.max--;
          }
        }
        this.longestString[this.rightPointer]=this.longestString[this.leftPointer]||1;
      }
    },
    stepAlgorithm(){
      if(this.leftPointer===this.listLength-2 && this.rightPointer===this.listLength-1){
        if(this.searchComplete===false){
          this.searchComplete=true;
        }
      }else{
        if(this.leftPointer<this.rightPointer-1){
          this.leftPointer++;
        }else if(this.rightPointer!==this.listLength){
          this.leftPointer = 0;
          this.rightPointer++;
        }
      }
      // and whether adding it to the longest string would be longer than using the current longest string value at the right pointer:`);
      if(this.comparisionOperation()){
        if(this.longestString[this.leftPointer]+1>this.longestString[this.rightPointer]){
          this.longestString[this.rightPointer] = this.longestString[this.leftPointer] + 1;
          this.max=Math.max(this.max, this.longestString[this.rightPointer]);
        }
      }
    }
  },
  computed:{
    listLength(){
      return this.list.length;
    }
  },
  watch: {
    list: function(val) {
      //initialise longestString array for every position in list to 1 as by default longest string is min itself.
      this.longestString=[];
      for(let i=0; i<val.length; i++){
        this.longestString.push(1);
      }
    }
  },

  created(){
    this.list = [-1,3,4,5,2,2,2,2];
  }

}
</script>
<style>
.center{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.table td {
    /* padding: 0.75rem; */
    padding-top: 0.25rem;
    padding-right: 0.75rem;
    padding-bottom: 0.25rem;
    padding-left: 0.75rem;
}
button{
  padding:5px;
}
</style>
