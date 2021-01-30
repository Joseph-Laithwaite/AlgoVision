<template>
  <g>
    <g>
      <g v-for="(child, index) in graph.children" :key="item + index">
        <cubic-bezier
          :index="index"
          :half-size="halfSize"
          :top-height="topHeight"
          :bottom-height="bottomHeight"
          :radius="radius"
          :distance="distance"
          :item="child.node"
        ></cubic-bezier>

      </g>
    </g>
  </g>
</template>

<script>
import CubicBezier from "./CubicBezier.vue"
import RecursiveGraph from './RecursiveGraph.vue';

export default {
  name: "recursiveGraph",
  components: {
    CubicBezier,
    RecursiveGraph
  },
  props:{
    layerNumber:{type:Number},
    graph:{},
    // allowedWidth:{type:Number},
    size: {default:1000},
    layerHeight: {type:Number},
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    topHeight() {
      // 20% of the size
      return this.size * 0.2 + (this.layerNumber-1)*this.layerHeight;
    },
    bottomHeight() {
      // 80% of the size
      // return this.size * 0.8
      return this.size * 0.2 + (this.layerNumber-1)*this.layerHeight;
    },
    width() {
      return this.size
    },
    halfSize() {
      // 50% of the size
      return this.size * 0.5
    },
    distance() {
      // distance between two array items on the horizon
      return Math.round(this.width / this.graph.children.length);
    },
    radius() {
      return this.topHeight * 0.5
    },
    viewbox() {
      return "0 0 " + this.size + " " + this.size
    }
  },
};
</script>

<style>
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