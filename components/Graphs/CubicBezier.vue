<template>
    <g>
        <circle fill="#FFC107" r="10" :cx="halfSize" :cy="topHeight + 100"></circle> 
        <path
            :d="
                'M' +
                halfSize +
                ',' +
                topHeight +
                ' ' +
                'C' +
                halfSize +
                ',' +
                halfSize +
                ' ' +
                xPosition +
                ',' +
                halfSize +
                ' ' +
                xPosition +
                ',' +
                bottomHeight
            "
        />
        <circle fill="#FFC107" r="10" :cx="xPosition" :cy="bottomHeight + 15"></circle>
        <text :x="xPosition" :y="bottomHeight + 60">
            {{ item }}
        </text>
    </g>
</template>
<script>
export default {
    name:'CubicBezier',
    props: [
        "index",
        "halfSize",
        "topHeight",
        "bottomHeight",
        "distance",
        "item"
    ],
    computed: {
        xPosition() {
            return this.distance * this.index + this.distance * 0.5
        }
    }
}
</script>