<script>
export default {
  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],

  props: {
    // Node coordinates.
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    radius: {
      type: Number,
      default: 10
    },

    // The value to display.
    // value: {
    //   type: Number,
    //   defualt: 0
    // },

    // The fill color of the node.
    fillStyle: {
      type: String,
      default: '#22cccc'
    },

    // The line color of the node.
    strokeStyle: {
      type: String,
      default: '#009999'
    },

    reRenderNode:{
      type: Boolean,
      default:false
    }
  },

  data () {
    return {
      previousPos:{
        x:null,
        y:null,
        radius: null,
      }
    }
  },
  methods:{
    reRender(){
      console.log("Force Rerendering node");
      this.$forceUpdate();
    },
  },
  render () {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    if(!this.provider.context) return;

    const ctx = this.provider.context;

    // ctx.beginPath();

    //Delete pixels drawn at previousPos
    // ctx.clearRect(
    //   this.previousPos.x - (this.previousPos.radius +1), 
    //   this.previousPos.y - (this.previousPos.radius +1),
    //   this.previousPos.x + (this.previousPos.radius +1), 
    //   this.previousPos.y + (this.previousPos.radius +1)
    // );

    // console.log('this.previousPos.x', this.previousPos.x)
    // console.log('this.previousPos.y',   this.previousPos.y)
    // console.log('this.previousPos.x + 2*this.previousPos.radius',   this.previousPos.x + 2*this.previousPos.radius)
    // console.log('this.previousPos.y + 2*this.previousPos.radius',  this.previousPos.y + 2*this.previousPos.radius)

    // Draw New Node
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.strokeStyle = this.strokeStyle;
    ctx.stroke();
    ctx.fill();

    this.previousPos.x = this.x;
    this.previousPos.y = this.y;
    this.previousPos.radius = this.radius;
    this.previousPos.fillStyle = this.fillStyle;
    this.previousPos.strokeStyle = this.strokeStyle;
    // console.log('this.previousPos.x', this.previousPos.x)
    // console.log('this.previousPos.y',   this.previousPos.y)
    // console.log('this.previousPos.x + 2*this.previousPos.radius',   this.previousPos.x + 2*this.previousPos.radius)
    // console.log('this.previousPos.y + 2*this.previousPos.radius',  this.previousPos.y + 2*this.previousPos.radius)
  },

  watch: {
        reRenderNode: function (val) {
            console.log("in GraphNode reRenderNode has changed to ", val);
            if(val===true){
                this.reRender();
                this.$emit('nodeReRendered');
            }
        }
    }
}
</script>