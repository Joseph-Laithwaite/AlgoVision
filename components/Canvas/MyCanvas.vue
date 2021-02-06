<template>
  <div class="my-canvas-wrapper">
    <canvas ref="my-canvas" 
        @mousedown="manageMouseDown" 
        @mouseup="manageMouseUp"
        @mousemove="manageMouseHover"
    ></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        clearCanvas:{
            default:false
            }
    },
    data() {
        return {
        // By creating the provider in the data property, it becomes reactive,
        // so child components will update when `context` changes.
        provider: {
            // This is the CanvasRenderingContext that children will draw to.
            context: null
        },
        drag:false,
        }
    },
    methods:{
        manageMouseDown(e){
            this.drag = true;
            this.$emit('canvasClicked',e);
        },
        manageMouseUp(e){
            this.drag = false;
            this.$emit('canvasClickUp',e);
        },
        manageMouseHover(e){
            if(this.drag){
                this.$emit('canvasDrag',e);
            }
        },
        throttle(callback, interval) {
            let enableCall = true;
            return function(...args) {
                if (!enableCall) return;
                enableCall = false;
                callback.apply(this, args);
                setTimeout(() => enableCall = true, interval);
            }
        },
        clearTheCanvas(){
            this.$forceUpdate();
            // this.provider.context.clearRect(0, 0, this.$refs['my-canvas'].width, this.$refs['my-canvas'].height);
        },
    },

    // Allows any child component to `inject: ['provider']` and have access to it.
    provide () {
        return {
        provider: this.provider
        }
    },

    mounted () {
        // We can't access the rendering context until the canvas is mounted to the DOM.
        // Once we have it, provide it to all child components.
        this.provider.context = this.$refs['my-canvas'].getContext('2d')

        // Resize the canvas to fit its parent's width.
        // Normally you'd use a more flexible resize system.
        this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
        this.$refs['my-canvas'].height = this.$refs['my-canvas'].parentElement.clientHeight
    },
    watch: {
        clearCanvas: function (val) {
            console.log("in MyCanvas clearCanvas has changed to ", val);
            if(val===true){
                this.clearTheCanvas();
                this.$emit('canvasCleared');
            }
        }
    }
}
</script>

<style scoped>

canvas{
    border: 1px solid black;
}
</style>