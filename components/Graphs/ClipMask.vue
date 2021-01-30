<template>
    <g>
        <circle class="circle" :r="radius" :cx="halfSize" :cy="topHeight" 
        style="fill:white;stroke:black;stroke-width:5;opacity:0.5"/>
        <!-- <rect :width="2*radius" :height="2*radius" :x="halfSize-radius" :y="topHeight-radius"   
        style="fill:white;stroke:black;stroke-width:5;opacity:0.5" /> -->
        <text class="title" :x="halfSize" :y="topHeight" style="font-size:30;font-family:monospace;">{{title}}
            <!-- <tspan :x="halfSize" :y="topHeight-(radius/2)">{{title.length > 15 ? title.substring(0,5) : ''}}</tspan>
            <tspan :x="halfSize" :y="topHeight-(radius/2)+40">{{10 >= title.length ? title.substring(0,5) : title.substring(5,10)}}</tspan>
            <tspan :x="halfSize" :y="topHeight-(radius/2)+80">{{10 >= title.length ? title.substring(5,10) : title.substring(10,15)}}</tspan> -->
        </text>
    </g>
</template>
<script>
export default {
    props: ["title", "halfSize", "topHeight", "radius"]
}
</script>