<template>
<!-- class="my-canvas-wrapper" -->
<div class="container">
    <button @click="clearTheCanvas">Clear</button>
    <button @click="draw">Re Draw</button>
    <button @click="nodes = new Array()">Delete Nodes</button>
    <button @click="edges = new Array()">Delete Edges</button>
    <canvas ref="my-canvas" 
        @mousedown="manageMouseDown" 
        @mouseup="manageMouseUp"
        @mousemove="manageMouseMove"
    ></canvas>
</div>
</template>

<script>
export default {
    name:'MyInteractiveGraph',
    props:{
        clearCanvas:{
            default:false
        },
        editable:{
            default:true
        }
    },
    data() {
        return {
            context: null,
            drag:false,
            nodes: [],
            edges: [],
            selectedNode:undefined,
        }
    },
    methods:{
        draw(){
            this.clearTheCanvas();
            for (let edge of this.edges) {
                let fromNode = edge.from;
                let toNode = edge.to;
                this.context.beginPath();
                this.context.strokeStyle = fromNode.strokeStyle;
                this.context.moveTo(fromNode.x, fromNode.y);
                this.context.lineTo(toNode.x, toNode.y);
                this.context.stroke();
            }
            for (let node of this.nodes) {
                this.context.beginPath();
                this.context.fillStyle = node.fillStyle;
                this.context.fillStyle = node.selected ? node.selectedFill : node.fillStyle;
                this.context.arc(node.x, node.y, node.radius, 0, Math.PI * 2, true);
                this.context.strokeStyle = node.strokeStyle;
                this.context.stroke();
                this.context.fill();
            }
        },
        deleteNode(target){
            let newNodes = this.nodes.filter(node => node!== target);
            this.nodes = newNodes;
            let newEdges = this.edges.filter(edge => 
            {
                if(edge.from !== target && edge.to !== target) return true
            });
            this.edges = newEdges;
            if(this.selectedNode === target){this.selectedNode = undefined;}
        },
        deleteEdge(x,y){
            let newEdges = this.edges.filter(edge => {
                let calcIntercept = edge.from.y - edge.gradient * edge.from.x;
                let calcGradient = Math.abs(edge.from.x - x) / Math.abs(edge.from.y - y);
                if((calcGradient > edge.gradient * 1.1 || calcGradient < edge.gradient * 0.9) 
                    && ( calcIntercept > edge.yIntercept * 1.1 || calcIntercept > edge.yIntercept * 0.9 )){
                    // console.log("Calculated gradient is outside error")
                    return true;
                }
            });
            this.edges = newEdges;
            if(!this.selectedNode) this.selectedNode = {x:0,y:0};
        },
        manageMouseDown(e){
            if(this.editable === false) return;
            let target = this.withinNode(e.layerX, e.layerY);
            if(e.ctrlKey||e.altKey||e.shiftKey){
                if(target){
                    this.deleteNode(target);
                } else {
                    this.deleteEdge(e.layerX, e.layerY);
                }
                this.draw();
                return;
            }
            if (this.selectedNode && this.selectedNode.selected) {
                this.selectedNode.selected = false;
            }
            if (target) {
                this.addEdge(this.selectedNode, target);
            }
        },
        manageMouseUp(e){
            if(this.editable === false) return;
            if(e.ctrlKey||e.altKey||e.shiftKey){
                if(this.selectedNode){
                    let curNode = this.selectedNode;
                    this.addNode(e);
                    let newNode = this.selectedNode;
                    this.addEdge(curNode,newNode);
                    return;
                }else{
                    this.deleteNode(this.selectedNode);
                    return;
                }
            }
            if (!this.selectedNode) {
                this.addNode(e);
            }
            if (this.selectedNode && !this.selectedNode.selected) {
                this.selectedNode = undefined;
            }
            this.draw();
        },
        manageMouseMove(e){
            if(this.editable === false) return;
            if (this.selectedNode && e.buttons) {
                this.selectedNode.x = e.layerX;
                this.selectedNode.y = e.layerY;
                this.draw();
            }

        },
        clearTheCanvas(){
            this.context.clearRect(0, 0, this.$refs['my-canvas'].width, this.$refs['my-canvas'].height);
        },
        addNode(e){
            // console.log('addNode',{e});
            if(this.selectedNode) this.selectedNode.selected = false;
            let node = {
                    x: e.layerX,
                    y: e.layerY,
                    radius: 10,
                    fillStyle: '#22cccc',
                    strokeStyle: '#009999',
                    selectedFill: '#88aaaa',
                    selected: true
                };
            this.nodes.push(node);
            this.selectedNode = node;
            this.draw();
        },
        withinNode(x, y) {
            // console.log("check if current click in node", {x,y});
            return this.nodes.find(n => {
                if(x > (n.x - n.radius) && y > (n.y - n.radius) && x < (n.x + n.radius) && y < (n.y + n.radius)){
                    // console.log('inside node', {n});
                    return true;
                }
            });
        },
        addEdge(fromNode,toNode){
            if (fromNode && toNode && fromNode !== toNode) {
                if(!this.edgeExists(fromNode, toNode)){
                    let gradient = Math.abs(fromNode.x - toNode.x) / Math.abs(fromNode.y - toNode.y);
                    let yIntercept = fromNode.y - gradient * fromNode.x;
                    this.edges.push({ from: fromNode, to: toNode, gradient, yIntercept });
                }
            }
            this.selectedNode = toNode;
            this.selectedNode.selected = true;
            this.draw();
        },
        edgeExists(from, to) {
            return (this.edges.find( edge =>{
                    if((edge.from == from && edge.to == to)||
                        (edge.from == to && edge.to == from))
                    {
                        return true;
                    }
            }));
        },
    },

    mounted () {
        // We can't access the rendering context until the canvas is mounted to the DOM.
        // Once we have it, provide it to all child components.
        this.context = this.$refs['my-canvas'].getContext('2d')

        // Resize the canvas to fit its parent's width.
        // Normally you'd use a more flexible resize system.
        this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
        this.$refs['my-canvas'].height = 500;
        // this.$refs['my-canvas'].parentElement.clientHeight
    },

    watch: {
        clearCanvas: function (val) {
            // console.log("in MyCanvas clearCanvas has changed to ", val);
            if(val===true){
                this.clearTheCanvas();
                this.$emit('canvasCleared');
            }
        },
    }
}
</script>

<style scoped>

canvas{
    border: 1px solid black;
}
</style>