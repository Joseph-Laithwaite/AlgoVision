<template>
    <div>
        <slot name="header"></slot>
        <div class="wraapper" ref="wrapper"  @mouseup="releaseDivider">
            <div id="left"  :style="{'width': leftWidth+'vw'}"  >
                <slot name="left">
                    This is full of stuff on the left
                </slot>
            </div>
            <div id="divider" ref="divider" 
                @mousedown="selectDivider" 
            ></div>
            <div id="right" :style="{'width': rightWidth+'vw'}">
                <slot name="right">
                    This is full of stuff on the right
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SplitScreen',
    methods:{
        toggleDivider(){
            this.rightWidth = 0;
        },
        selectDivider(){
            this.$refs.wrapper.addEventListener('mousemove', this.moveDivider, false);

        },
        moveDivider(e){
            // console.log(e);
            this.rightWidth = 100-(e.x/ window.innerWidth)*100;
            // console.log({e_x:e.x,window_inner_width:window.innerWidth, rightWidth: this.rightWidth});
        },
        releaseDivider(){
            this.$refs.wrapper.removeEventListener('mousemove', this.moveDivider , false);
        }
    },
    data() {return{
        rightWidth:49.5,
    }},
    computed: {
        leftWidth(){
            return 100 - 0.4 - this.rightWidth;
        }
    }
}
</script>

<style>

#left {
    height: 100vh;
    float: left;
    padding: 20px;
    overflow-y: scroll;
    padding-bottom: 160px;
}
#divider {
    float: left; 
    height: 100vh;
    width: 0.4vw;
    background-color:lightslategray;
    cursor: col-resize;
} 

#right {
    float: right; 
    height: 100vh;
    padding: 20px;
    padding-bottom: 160px;
    overflow-y: scroll;
}
</style>