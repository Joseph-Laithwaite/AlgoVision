<template>
  <g>
    <!-- <text :x="startX" :y="startY">
      {{ graph.node }}
    </text>
    <circle fill="#FFC107" r="10" :cx="startX" :cy="startY + 25"></circle>  -->
    <g v-if="graph.children && graph.children.length>0">
      <g v-for="(child, index) in graph.children" :key="child.node">
              <!-- x1 y1, x2 y2, x y -->
        <path
          :d="
              'M ' +
                startX + ' ' +
                startY +
              ' C '+
                  startX + ' ' +
                  Math.floor(startY + 0.5*(layerHeight)) +
                ' , ' + 
                  `${childBaseXPos + Math.floor(index*childXDistance + (0.5*childXDistance))} ` +
                  Math.floor(startY+(0.5*layerHeight)) +
                ' , ' + 
                  `${childBaseXPos + Math.floor(index*childXDistance + (0.5*childXDistance))} ` +
                  Math.floor(startY+layerHeight)
          " 
        />
        <!-- M 500 100 C 500 233 , 250 233 , 250 366 -->
        <!-- d="M 500 100 C 500 233 , 250 233 , 250366" -->
                  <!-- Math.floor(index*childXDistance + Math.floor(startX - Math.floor(childXDistance * 0.5))) + ' ' + -->
        <subGraph 
          :graph="child" 
          :layer="nextLayer" 
          :startPoint="{
            y : startY+layerHeight, 
            x : childBaseXPos + Math.floor(index*childXDistance + (0.5*childXDistance))}"
          :availableWidth="childXDistance"
          :layerHeight="layerHeight"
          ></subGraph>
            <!-- x : graph.children.length>1 ? startX  + Math.floor(index*childXDistance - Math.floor(childXDistance * 0.5)) : startX}" -->
      </g>    
    </g>
    <text :x="startX" :y="startY-20">
      {{ graph.node }}
    </text>
    <circle fill="#FFC107" r="10" :cx="startX" :cy="startY"></circle> 
  </g>
</template>

<script>
export default {
    name:'subGraph',
    props:{
        graph:{type:Object},
        layer:{default:0},
        startPoint:{type:Object},
        availableWidth:{type:Number},
        layerHeight:{type:Number},
    },
    data(){
        return{
            
        }
    },
    computed: {
        nextLayer(){
            return this.layer+1;
        },
        startX(){
            return this.startPoint ? this.startPoint.x : 0;
        },
        startY(){
            return this.startPoint ? this.startPoint.y : 0;
        },
        numberOfChildren(){
            return this.graph.children.length|0;
        },
        childYPos(){
            return this.layerHeight + this.startY;
        },
        childXDistance() {
            // distance between two array items on the horizon
            return Math.round(this.availableWidth / this.numberOfChildren);
        },
        childBaseXPos(){
          let basePos =  parseInt(this.startX-Math.floor(0.5 * this.graph.children.length * this.childXDistance));
          if(isNaN(basePos)){
            return null;
          }else{
            return basePos;
          }
        }
    }
}
</script>

<style scoped>
.item {
  stroke: #ccc;
  stroke-width: 5;
}
path {
  stroke: #5bbaa1;
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
}
text {
  font-size: 28px;
  text-anchor: middle;
  background-color:white;
}
#container {
  display: flex;
  height: 100vh;
  justify-content: center;
  border: 2px solid #b2ebf2;
  border-radius: 10px;
}
#config {
  padding: 10px;
  margin: 5px;
  height: fit-content;
  background: #82e5cb;
  border-radius: 5px;
}
svg {
  width: 100%;
  height: 60%;
}

.title {
  font-size: 40px;
}
.clip-svg {
  clip-path: url(#myClip);
}
#config button {
  float: right;
}
.item {
  border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
  padding: 5px;
}
.action {
  padding: 10px;
}
input,
button {
  margin-bottom: 3px;
}
.circle {
  stroke-width: 5;
  stroke: #5bbaa1;
  fill: none;
}
</style>