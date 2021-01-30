<template>
<div id="container">
      <svg xmlns="http://www.w3.org/2000/svg" :view-box.camel="viewbox">
        <sub-graph :graph="graph" :startPoint="startPoint" :layerHeight="layerHeight" :availableWidth="width"></sub-graph>
      </svg>
</div>
</template>

<script>
 import subGraph from './SubGraph';

export default {
    name:'Graph',
    components: {subGraph},
    props:{graph:{type:Object}},
    data() {
        return{
            // graph:{
            //     node:"Parent",
            //     children:[
            //     {
            //         node:"Left Child",
            //         children:[
            //         {
            //             node:"Left Child",
            //             children:[]
            //         },
            //         {
            //             node:"Right Child",
            //             children:[]
            //         }
            //         ]
            //     },
            //     {
            //         node:"Right Child",
            //         children:[
            //             {
            //                 node:"Left Child",
            //                 children:[]
            //             },
            //             {
            //                 node:"Right Child",
            //                 children:[]
            //             }
            //         ]
            //     }
            //     ]
            // },
            layers:3,
            width:1000,
            height:1000,
        }
    },
    computed: {
        viewbox() {
            return "0 0 " + this.width + " " + this.height
        },
        startPoint(){
            return {x: Math.floor(this.width/2), y: Math.floor(this.height*0.1)}
        },
        layerHeight(){
          // console.log('layers', this.layers);
          // console.log('height', this.height);
          // console.log('Math.floor(this.height*0.8)', Math.floor(this.height*0.8), 'of type: ', typeof Math.floor(this.height*0.8));
          // console.log('Math.floor(Math.floor(this.height*0.8) / parseInt(this.layers))', Math.floor(Math.floor(this.height*0.8) / parseInt(this.layers)), 'of type: ', typeof Math.floor(Math.floor(this.height*0.8) / parseInt(this.layers)));  
          return Math.floor(Math.floor(this.height*0.8) / parseInt(this.layers));
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