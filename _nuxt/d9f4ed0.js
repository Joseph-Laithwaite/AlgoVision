(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{249:function(e,t,n){var content=n(267);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("6783cd88",content,!0,{sourceMap:!1})},250:function(e,t,n){var content=n(269);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("5197cfec",content,!0,{sourceMap:!1})},259:function(e,t,n){"use strict";n.r(t);n(105),n(3),n(106);function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={name:"MyInteractiveGraph",props:{clearCanvas:{default:!1},editable:{default:!0}},data:function(){return{context:null,drag:!1,nodes:[],edges:[],selectedNode:void 0}},methods:{draw:function(){this.clearTheCanvas();var e,t=r(this.edges);try{for(t.s();!(e=t.n()).done;){var n=e.value,o=n.from,l=n.to;this.context.beginPath(),this.context.strokeStyle=o.strokeStyle,this.context.moveTo(o.x,o.y),this.context.lineTo(l.x,l.y),this.context.stroke()}}catch(e){t.e(e)}finally{t.f()}var c,d=r(this.nodes);try{for(d.s();!(c=d.n()).done;){var h=c.value;this.context.beginPath(),this.context.fillStyle=h.fillStyle,this.context.fillStyle=h.selected?h.selectedFill:h.fillStyle,this.context.arc(h.x,h.y,h.radius,0,2*Math.PI,!0),this.context.strokeStyle=h.strokeStyle,this.context.stroke(),this.context.fill()}}catch(e){d.e(e)}finally{d.f()}},deleteNode:function(e){var t=this.nodes.filter((function(t){return t!==e}));this.nodes=t;var n=this.edges.filter((function(t){if(t.from!==e&&t.to!==e)return!0}));this.edges=n,this.selectedNode===e&&(this.selectedNode=void 0)},deleteEdge:function(e,t){var n=this.edges.filter((function(n){var r=Math.abs(n.from.x-n.to.x)/Math.abs(n.from.y-n.to.y),o=(n.from.y,n.from.x,Math.abs(n.from.x-e)/Math.abs(n.from.y-t));if(o>1.1*r||o<.9*r)return!0}));this.edges=n,this.selectedNode||(this.selectedNode={x:0,y:0})},manageMouseDown:function(e){var t=this.withinNode(e.layerX,e.layerY);if(e.ctrlKey||e.altKey||e.shiftKey)return t?this.deleteNode(t):this.deleteEdge(e.layerX,e.layerY),void this.draw();this.selectedNode&&this.selectedNode.selected&&(this.selectedNode.selected=!1),t&&(this.selectedNode&&this.selectedNode!==t&&(this.edgeExists(this.selectedNode,t)||this.edges.push({from:this.selectedNode,to:t})),this.selectedNode=t,this.selectedNode.selected=!0,this.draw())},manageMouseUp:function(e){if(!(e.ctrlKey||e.altKey||e.shiftKey)||this.selectedNode){if(!this.selectedNode){var t={x:e.layerX,y:e.layerY,radius:10,fillStyle:"#22cccc",strokeStyle:"#009999",selectedFill:"#88aaaa",selected:!1};this.nodes.push(t),this.draw()}this.selectedNode&&!this.selectedNode.selected&&(this.selectedNode=void 0),this.draw()}else this.deleteNode(this.selectedNode)},manageMouseMove:function(e){this.selectedNode&&e.buttons&&(this.selectedNode.x=e.layerX,this.selectedNode.y=e.layerY,this.draw())},clearTheCanvas:function(){this.context.clearRect(0,0,this.$refs["my-canvas"].width,this.$refs["my-canvas"].height)},addNode:function(e){var t={x:e.layerX,y:e.layerY,radius:10,fillStyle:"#22cccc",strokeStyle:"#009999"};this.nodes.push(t),this.selectedNode=t,this.draw()},withinNode:function(e,t){return this.nodes.find((function(n){if(e>n.x-n.radius&&t>n.y-n.radius&&e<n.x+n.radius&&t<n.y+n.radius)return!0}))},edgeExists:function(e,t){return this.edges.find((function(n){if(n.from==e&&n.to==t||n.from==t&&n.to==e)return!0}))}},mounted:function(){this.context=this.$refs["my-canvas"].getContext("2d"),this.$refs["my-canvas"].width=this.$refs["my-canvas"].parentElement.clientWidth,this.$refs["my-canvas"].height=500},watch:{clearCanvas:function(e){!0===e&&(this.clearTheCanvas(),this.$emit("canvasCleared"))}}},c=(n(266),n(55)),component=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("canvas",{ref:"my-canvas",on:{mousedown:this.manageMouseDown,mouseup:this.manageMouseUp,mousemove:this.manageMouseMove}})])}),[],!1,null,"366108b9",null);t.default=component.exports},266:function(e,t,n){"use strict";n(249)},267:function(e,t,n){(t=n(64)(!1)).push([e.i,"canvas[data-v-366108b9]{border:1px solid #000}",""]),e.exports=t},268:function(e,t,n){"use strict";n(250)},269:function(e,t,n){(t=n(64)(!1)).push([e.i,"body,html{margin:0;padding:0}#drawingArea{position:relative;height:100vh;width:100vw;padding:20px;box-sizing:border-box}",""]),e.exports=t},291:function(e,t,n){"use strict";n.r(t);var r={name:"interactive-graph",components:{MyInteractiveGraph:n(259).default},data:function(){return{}}},o=(n(268),n(55)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"drawingArea"}},[t("my-interactive-graph")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MyInteractiveGraph:n(259).default})}}]);