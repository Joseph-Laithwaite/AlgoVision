<template>
<!-- class="my-canvas-wrapper" -->
<div class="container">
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
                let gradient = Math.abs(edge.from.x - edge.to.x) / Math.abs(edge.from.y - edge.to.y);
                let yIntercept = edge.from.y - gradient * edge.from.x;
                // console.log({edge});
                let calculatedGradient = Math.abs(edge.from.x - x) / Math.abs(edge.from.y - y);
                // console.log({
                //     gradient,
                //     yIntercept, 
                //     // calculatedY: yIntercept + gradient*edge.from.x, 
                //     // calculatedX: (edge.from.y-yIntercept)/gradient,
                //     x,
                //     y,
                //     calculatedGradient
                // });
                if(calculatedGradient > gradient*1.1 || calculatedGradient < gradient*0.9){
                    // console.log("Calculated gradient is outside error")
                    return true;
                }
            });
            this.edges = newEdges;
            if(!this.selectedNode) this.selectedNode = {x:0,y:0};
        },
        manageMouseDown(e){
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
                if (this.selectedNode && this.selectedNode !== target) {
                    if(!this.edgeExists(this.selectedNode, target)){
                        this.edges.push({ from: this.selectedNode, to: target });
                    }
                }
                this.selectedNode = target;
                this.selectedNode.selected = true;
                this.draw();
            }
        },
        manageMouseUp(e){
            if(e.ctrlKey||e.altKey||e.shiftKey){
                if(!this.selectedNode){
                    this.deleteNode(this.selectedNode);
                    return;
                }
            }
            if (!this.selectedNode) {
                let node = {
                    x: e.layerX,
                    y: e.layerY,
                    radius: 10,
                    fillStyle: '#22cccc',
                    strokeStyle: '#009999',
                    selectedFill: '#88aaaa',
                    selected: false
                };
                this.nodes.push(node);
                this.draw();
            }
            if (this.selectedNode && !this.selectedNode.selected) {
                this.selectedNode = undefined;
            }
            this.draw();
        },
        manageMouseMove(e){
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
            let node = {
                x: e.layerX,
                y: e.layerY,
                radius: 10,
                fillStyle: '#22cccc',
                strokeStyle: '#009999'
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