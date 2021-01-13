<template>
  <div>
    <h3 class="subtitle">
      Longest Increasing Substring
    </h3>
    <p>Find the shortest substring in "{{str}}"" where all of the characters in the search substring "{{searchString}}" are present.
    <p>
      <div class="row justify-content-center ">
        <label for="searchString">String to be Searched</label>
        <input id="str" type="text" v-model="str" />
      </div>
    <br>
    <table class="table table-bordered border-primary">
      <thead @mouseenter="showRemoveItems=true" @mouseleave="showRemoveItems=false">
        <tr>
          <th>index</th>
          <th v-for="(item,index) in strArray" :key="'i'+index" scope="col" class="text-center" 
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index }"
          >
              {{index}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>str[index]</th>
          <th v-for="(item, index) in [...strArray]" :key="index+','+item" scope="col" class="text-center"
          :class="{ 'table-primary': rightPointer===index, 'table-secondary':leftPointer===index, 'table-success':((leftPointer<=index&rightPointer>=index)&&currentStringValid), 'table-danger':((leftPointer<index&rightPointer>index)&&!currentStringValid) }"
          >
            {{item}}
          </th>
        </tr>
      </tbody>
    </table>
    
    <br>
      <div class="row justify-content-center ">
        <label for="searchString">Search String</label>
        <input id="searchString" type="text" v-model="searchString" />
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
        <button @click="resetAlgorithm" type="button" class="btn btn-primary col-3">
            Reset
        </button>
      </div>
      <br>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h4>Variables Values</h4>
          <table class="table">
            <thead>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </thead>
            <tbody>
              <tr>
                <td>Min length</td>
                <td>{{min}}</td>
              </tr>
              <tr>
                <td>Left Pointer</td>
                <td>{{leftPointer}}</td>
              </tr>
              <tr>
                <td>Right Pointer</td>
                <td>{{rightPointer}}</td>
              </tr>
              <tr>
                <td>Current Substring</td>
                <td>{{currentString}}</td>
              </tr>
              <tr>
                <td>Current Substring Valid</td>
                <td>{{currentStringValid}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-3">
          <h4>Search str Frequencies</h4>
          <table class="table">
            <thead>
              <th scope="col">Element</th>
              <th scope="col">Required Frequency</th>
              <th scope="col">Current Frequency</th>
            </thead>
            <tbody>
              <tr v-for="(value,key) in searchStrFreqencies" :key="'elem'+key">
                <td>{{key}}</td>
                <td>{{value.requiredFreq}}</td>
                <td>{{value.currFreq}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="col">
          <h4>Pseudo Code</h4>
          <br>
          <code>
            strArray={{strArray}}<br>
            leftPointer=0<br>
            rightPointer=1<br>
            longestString=[]<br>
            minStringLength=0<br><br>
            for leftPointer = 1 to listLength<br>
            &nbsp;  for rightPointer = 0 to leftPointer-1<br>
            &nbsp;&nbsp;&nbsp;  if strArray[rightPointer] > strArray[leftPointer]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  if longestString[rightPointer]+1 > longestString[leftPointer]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  longestString[rightPointer] = longestString[leftPointer]+1<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  minStringLength = Min(minStringLength, longestString[rightPointer])<br>
          </code>
        </div> -->
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  props: {
    passedStr:{ 
      type: String,
      default:'yzhbgnxxyyzzy'
    },
    passedSearchStr:{
      type: String,
      default:'xyx'
    },
  },
  data(){
    return{
      str:'',
      leftPointer:0,
      rightPointer:-1,
      searchComplete:false,
      min:Infinity,
      pauseRunning:false,
      delayMs:500,
      searchString:'',
      searchStrFreqencies: {},
      // currentString:'',
      currentStringValid:false,
    }
  },
  methods:{ 
    apendList(){
      this.strArray.push(this.newItemForList);
      this.newItemForList = '';
    },
    resetAlgorithm(){
      
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
      switch(this.searchString){
        case 'i':
          if(this.strArray[right] > this.strArray[left]){
            return true
          }
          break;
        case 'nd':
          if(this.strArray[right] >= this.strArray[left]){
            return true
          }
          break;
        case 'd':
          if(this.strArray[right] < this.strArray[left]){
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
        if(this.min==this.longestString[this.leftPointer]+1){
          let duplicateMin=false
          for(let minimum of this.longestString){
            if(minimum = this.min){
              //do nothing
            }else{
              duplicateMin=true;
            }
          }
          if(!duplicateMin){
            this.min--;
          }
        }
        this.longestString[this.rightPointer]=this.longestString[this.leftPointer]||1;
      }
    },
    stepAlgorithm(){
        if(!this.currentStringValid && this.rightPointer<this.strArray.length-1){   
          //current string does not include search chars so increase string ie. rightPointer++ 
          ++this.rightPointer;
          //Add elem at rightPointer to frequency table
          let currElem = this.strArray[this.rightPointer];
          if(this.searchStrFreqencies[currElem]){
            let currFreq = this.searchStrFreqencies[currElem].currFreq||0
            this.$set(this.searchStrFreqencies[currElem],'currFreq',++currFreq);
          }
        }else if(this.currentStringValid){
          //curren tstring valid so try shorten string (ie. leftPointer++) to check if that's still valid
          let currElem = this.strArray[this.leftPointer];
          if(this.searchStrFreqencies[currElem]){
            let currFreq = this.searchStrFreqencies[currElem].currFreq||1
            this.$set(this.searchStrFreqencies[currElem],'currFreq',--currFreq);
          }
          ++this.leftPointer;
        }
        //loop through frequencies to check if current string is valid.
        let valid=true
        for(let key in this.searchStrFreqencies){
          if((this.searchStrFreqencies[key].requiredFreq>this.searchStrFreqencies[key].currFreq)){
            valid=false;
          }
        this.currentStringValid=valid;
        if(valid){
          this.min = Math.min(this.min, this.currentString.length);
        }
      }

      //Check if string is validate

      // if(this.leftPointer===this.listLength-2 && this.rightPointer===this.listLength-1){
      //   if(this.searchComplete===false){
      //     this.searchComplete=true;
      //   }
      // }else{
      //   if(this.leftPointer<this.rightPointer-1){
      //     this.leftPointer++;
      //   }else if(this.rightPointer!==this.listLength){
      //     this.leftPointer = 0;
      //     this.rightPointer++;
      //   }
      // }
      // // and whether adding it to the longest string would be longer than using the current longest string value at the right pointer:`);
      // if(this.comparisionOperation()){
      //   if(this.longestString[this.leftPointer]+1>this.longestString[this.rightPointer]){
      //     this.longestString[this.rightPointer] = this.longestString[this.leftPointer] + 1;
      //     this.min=Math.min(this.min, this.longestString[this.rightPointer]);
      //   }
      // }
    }
  },
  computed:{
    listLength(){
      return this.strArray.length;
    },
    strArray(){
      return [...this.str];
    },
    currentString(){
      return this.str.substring(this.leftPointer,this.rightPointer+1);
    }

  },
  watch: {
    searchString: function(val){
      this.searchStrFreqencies={};
      for(let elem of val){
        if(this.searchStrFreqencies[elem]){
          this.$set(this.searchStrFreqencies,elem,{requiredFreq : this.searchStrFreqencies[elem].requiredFreq + 1, currFreq:0})
          // this.searchStrFreqencies[elem].requiredFreq = this.searchStrFreqencies[elem].requiredFreq + 1;
        }else{
          this.$set(this.searchStrFreqencies,elem,{requiredFreq : 1, currFreq:0})
          // this.searchStrFreqencies[elem].requiredFreq = 1;
        }
      }
    }
  },

  created(){
    this.searchString=this.passedSearchStr;
    this.str=this.passedStr;
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
