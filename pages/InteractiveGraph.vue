<template>
  <div id="drawingArea">
      <my-interactive-graph></my-interactive-graph>
    <!-- <my-canvas 
        style="width: 100%; height: 600px;" 
        @canvasClicked="manageCanvasClick" 
        @canvasClickUp="manageCanvasClickUp" 
        @canvasDrag="moveNode"
        :clearCanvas="clearCanvas"
        @canvasCleared="clearCanvas=false"
    >
      <graph-node
       v-for="(obj, index) in nodes" :key="index"
        :x="obj.x"
        :y="obj.y"
        :radius="obj.radius"
      >
      </graph-node>
        :reRenderNode="reRenderNode[index] | false"
        @nodeReRendered="reRenderNode[index]=false"
    </my-canvas> -->
  </div>
</template>

<script>
// import MyCanvas from '../components/Canvas/MyCanvas';
// import MyBox from '../components/Canvas/MyBox.vue';
// import GraphNode from '~/components/Canvas/GraphNode.vue';
import MyInteractiveGraph from '~/components/Canvas/MyInteractiveGraph.vue';

export default {
  name: 'interactive-graph',
  components: {
    // MyCanvas,
    // MyBox,
    // GraphNode,
    MyInteractiveGraph
  },

  data () {
    return {
    //   nodes: [],
    //   selectedNode:undefined,
    //   clearCanvas:false,
    //   reRenderNode:[],
    }
  },

//   methods:{
//     reRenderCanvas(){
//         this.clearCanvas = true;
//     //     // for(let node=0 ;node< this.nodes.length; node++){
//     //     //     if(this.reRenderNode[node])
//     //     //         this.reRenderNode[node] = true;
//     //     //     else
//     //     //         this.reRenderNode.push(true);
//     //     // }
//     },
//     manageCanvasClick(e){
//         let target = this.withinNode(e.layerX, e.layerY);
//         // console.log('Canvas click down at node', {target});
//         if (target) {
//             this.selectedNode = target;
//         }else{
//             this.addNode(e);
//         }
//     },
//     manageCanvasClickUp(e){
//         this.selectedNode = undefined;
//     },
//     addNode(e){
//         // console.log('addNode',{e});
//         let node = {
//             x: e.layerX,
//             y: e.layerY,
//             radius: 10,
//             fillStyle: '#22cccc',
//             strokeStyle: '#009999'
//         };
//         this.nodes.push(node);
//         this.selectedNode = node;
//         this.reRenderCanvas();
//     },
//     withinNode(x, y) {
//         // console.log("check if current click in node", {x,y});
//         return this.nodes.find(n => {
//             if(x > (n.x - n.radius) && y > (n.y - n.radius) && x < (n.x + n.radius) && y < (n.y + n.radius)){
//                 console.log('inside node', {n});
//                 return true;
//             }
//         });
//     },
//     moveNode(e) {
//         // console.log("Move Node",{e});
//         if (this.selectedNode) {
//             this.selectedNode.x = e.layerX;
//             this.selectedNode.y = e.layerY;
//             this.reRenderCanvas();
//         }
//     },
//   },
//   mounted(){
//     //   this.reRenderCanvas();
//   }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#drawingArea {
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}
</style>