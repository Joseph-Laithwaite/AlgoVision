(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{244:function(e,t,n){"use strict";n.r(t);n(191);var r={props:{table:{},headingTable:{default:null},rightPointer:{type:Number},leftPointer:{type:Number},indexPointer:{default:null},keyPointer:{default:null},showIndex:{type:Boolean,default:!0},editable:{default:!0},rowIsObject:{default:!1},twoDArray:{default:!1},addEmptyCorner:{default:!0},hasRowHeadings:{default:!0},showRowIndex:{default:!1},highlightArray:{default:null}},data:function(){return{mouseHover:!1}}},l=n(55),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",{staticClass:"table table-bordered border-primary",on:{mouseenter:function(t){e.mouseHover=!!e.editable},mouseleave:function(t){e.mouseHover=!1}}},[n("thead",[e.showIndex?n("tr",[e.hasRowHeadings?n("th",[e._v("\n                    index\n                ")]):e._e(),e._v(" "),e.addEmptyCorner?n("th"):e._e(),e._v(" "),e._l(e.table,(function(t,r){return n("th",{key:"i"+r,staticClass:"text-center",class:{"table-primary":e.rightPointer===r,"table-secondary":e.leftPointer===r},attrs:{scope:"col"}},[e._v("\n                    "+e._s(r)+"\n                ")])}))],2):e._e(),e._v(" "),null!==e.headingTable?n("tr",[e.addEmptyCorner?n("th"):e._e(),e._v(" "),e._l(e.headingTable,(function(t,r){return n("th",{key:"i"+r,staticClass:"text-center",class:{"table-primary":e.rightPointer===r,"table-secondary":e.leftPointer===r},attrs:{scope:"col"}},[e._v("\n                    "+e._s(t)+"\n                ")])}))],2):e._e(),e._v(" "),!0===e.rowIsObject?n("tr",[e.addEmptyCorner?n("th"):e._e(),e._v(" "),e._l(e.table[0],(function(t,r){return n("th",{key:r,staticClass:"text-center",class:{"table-primary":e.rightPointer===r,"table-secondary":e.leftPointer===r},attrs:{scope:"col"}},[e._v("\n                    "+e._s(r)+"\n                ")])}))],2):e._e()]),e._v(" "),!1===e.twoDArray?n("tbody",[n("tr",e._l(e.table,(function(t,r){return n("th",{key:r+","+t,staticClass:"text-center",class:{"table-primary":e.rightPointer===r,"table-secondary":e.leftPointer===r},attrs:{scope:"col"}},[e._v("\n                    "+e._s(t||!0===t||!1===t?t:"null")+"\n                ")])})),0)]):e._e(),e._v(" "),!0===e.twoDArray?n("tbody",e._l(e.table,(function(t,r){return n("tr",{key:"row"+r,staticClass:"text-center"},[e.showRowIndex?n("th",{attrs:{scope:"row"}},[e._v(e._s(r))]):e._e(),e._v(" "),e._l(t,(function(t,l){return n("td",{key:r+","+l,staticClass:"text-center",class:{"table-secondary":null!=e.highlightArray&&0!==e.highlightArray.length&&!0===e.highlightArray[r][l],"table-primary":e.indexPointer===r&&e.keyPointer==l}},[e.editable?e._e():n("span",[e._v("\n                        "+e._s(t||!0===t||!1===t||0==t?t:"null")+"\n                    ")]),e._v(" "),e.editable?n("span",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.table[r][l],expression:"table[index][name]",modifiers:{number:!0}}],staticClass:"form-control",attrs:{placeholder:"null"},domProps:{value:e.table[r][l]},on:{input:function(t){t.target.composing||e.$set(e.table[r],l,e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]):e._e()])}))],2)})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports},302:function(e,t,n){"use strict";n.r(t);n(16),n(31),n(63);var r=n(19),l={components:{UltimateTable:n(244).default},name:"ShiftLinkedList",data:function(){return{shiftAmount:2,linkedList:{head:0,nodes:[{id:0,next:1,value:0},{id:1,next:2,value:1},{id:2,next:3,value:2},{id:3,next:4,value:3},{id:4,next:5,value:4},{id:5,next:null,value:5}]},editable:!0,currentRow:0,currentKey:"id",listLength:0,listTail:{},offset:null,newTailPosition:null,newHead:null,delayMs:500}},methods:{delay:function(){var e=arguments,t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:t.delayMs,n.next=3,new Promise((function(e){return setTimeout(e,r)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},runShift:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.editable=!1,e.currentKey="id",e.listLength=0,e.listTail={},e.offset=null,e.newTailPosition=null,e.newHead=null,e.delay(),e.listLength=1,e.listTail=e.linkedList.nodes[e.linkedList.head],e.currentRow=e.linkedList.head,e.currentKey="next",console.log(e.linkedList.nodes.length);case 13:if(null==e.listTail.next){t.next=22;break}return console.log(e.listTail),t.next=17,e.delay();case 17:e.listTail=e.linkedList.nodes[e.listTail.next],e.listLength++,e.currentRow=e.currentRow+1<e.linkedList.nodes.length?e.currentRow+1:0,t.next=13;break;case 22:return e.offset=Math.abs(e.shiftAmount)%e.listLength,t.next=25,e.delay();case 25:if(0!==e.offset){t.next=28;break}return alert("offset is equal to zero so no change required"),t.abrupt("return",e.linkedList.head);case 28:e.newTailPosition=e.shiftAmount>0?e.listLength-e.offset:e.offset,n=e.linkedList.nodes[e.linkedList.head],e.currentRow=e.linkedList.head,i=1;case 32:if(!(i<e.newTailPosition)){t.next=42;break}return console.log(n.next),n=e.linkedList.nodes[n.next],console.log(n),e.currentRow=e.currentRow+1<e.linkedList.nodes.length?e.currentRow+1:0,t.next=39,e.delay();case 39:i++,t.next=32;break;case 42:return console.log(n),e.newHead=n.next,e.linkedList.nodes[n.id].next=null,t.next=47,e.delay();case 47:return e.linkedList.nodes[e.listTail.id].next=e.linkedList.head,e.currentRow=e.listTail.id,t.next=51,e.delay();case 51:return e.linkedList.head=e.newHead,e.currentRow=e.newHead,e.currentKey="id",t.next=56,e.delay();case 56:e.editable=!0;case 57:case"end":return t.stop()}}),t)})))()}}},o=n(55),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"offset"}},[e._v("Shift amount")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.shiftAmount,expression:"shiftAmount"}],attrs:{id:"offset",type:"number"},domProps:{value:e.shiftAmount},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.runShift(t)},input:function(t){t.target.composing||(e.shiftAmount=t.target.value)}}}),e._v(" "),n("ultimate-table",{attrs:{table:e.linkedList.nodes,rowIsObject:!0,twoDArray:!0,editable:e.editable,showIndex:!1,addEmptyCorner:!1,indexPointer:e.currentRow,keyPointer:e.currentKey}}),e._v(" "),n("div",[n("h3",[e._v("Variables")]),e._v(" "),n("table",{staticClass:"table"},[e._m(0),e._v(" "),n("tbody",[n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Head")]),e._v(" "),n("td",[e._v(e._s(e.linkedList.head))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("ListLength")]),e._v(" "),n("td",[e._v(e._s(e.listLength))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("ListTail")]),e._v(" "),n("td",[e._v(e._s(e.listTail))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("Offset")]),e._v(" "),n("td",[e._v(e._s(e.offset))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("NewTailPosition")]),e._v(" "),n("td",[e._v(e._s(e.newTailPosition))])]),e._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[e._v("newHead")]),e._v(" "),n("td",[e._v(e._s(e.newHead))])])])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("th",{attrs:{scope:"col"}},[this._v("Variable")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("Value")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{UltimateTable:n(244).default})}}]);