(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{246:function(r,t,e){"use strict";e(16),e(31),e(63);var n=e(19);t.a={name:"DelayMixin",methods:{delay:function(){var r=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:t.delayMs,e.next=3,new Promise((function(r){return setTimeout(r,n)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()}},data:function(){return{delayMs:50}}}},253:function(r,t,e){var content=e(275);"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,e(65).default)("d9c7dc42",content,!0,{sourceMap:!1})},274:function(r,t,e){"use strict";e(253)},275:function(r,t,e){(t=e(64)(!1)).push([r.i,"table[data-v-832d1f3c]{margin-left:auto;margin-right:auto}td[data-v-832d1f3c]{width:50px;height:50px;border:1px solid #000;text-align:center;vertical-align:center}.boldBorderBottom[data-v-832d1f3c]{border-bottom:3px solid #000}.boldBorderRight[data-v-832d1f3c]{border-right:3px solid #000}.boldBorderTop[data-v-832d1f3c]{border-top:3px solid #000}.boldBorderLeft[data-v-832d1f3c]{border-left:3px solid #000}.incorrectNumber[data-v-832d1f3c]{background-color:red}.correctNumber[data-v-832d1f3c]{font-weight:500;background-color:#98fb98}.guessedNumber[data-v-832d1f3c]{background-color:orange}.currentNumber[data-v-832d1f3c]{border:3px solid #8a2be2}.searchNumber[data-v-832d1f3c]{background-color:#ff0}",""]),r.exports=t},281:function(r,t,e){"use strict";e.r(t);e(63);var n=e(19),o=e(246);e(140);function c(r,t){var e;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return l(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var i=0,n=function(){};return{s:n,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(r){throw r},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){e=r[Symbol.iterator]()},n:function(){var r=e.next();return c=r.done,r},e:function(r){d=!0,o=r},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw o}}}}function l(r,t){(null==t||t>r.length)&&(t=r.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=r[i];return e}var d={data:function(){return{currentRow:-1,currentCol:-1,initialGrid:[],guessStack:[],backtrack:!1,counter:0}},methods:{fillGrid:function(){for(var r,col,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.grid,i=0;i<81;i++)if(col=i%9,0===t[r=Math.floor(i/9)][col]){var e,n=[1,2,3,4,5,6,7,8,9],o=c(n=n.sort((function(){return Math.random()-.5})));try{for(o.s();!(e=o.n()).done;){var l=e.value;if(this.insertNumber(l,r,col)){if(this.checkGridComplete(t))return!0;if(this.fillGrid(t))return!0}}}catch(r){o.e(r)}finally{o.f()}break}t[r][col]=0},solveGrid:function(){for(var r,col,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.grid,i=0;i<81;i++)if(col=i%9,0===t[r=Math.floor(i/9)][col]){console.log("grid[",r,"][",col,"] = ",t[r][col]);for(var e=[1,2,3,4,5,6,7,8,9],n=0,o=e;n<o.length;n++){var c=o[n];if(console.log({value:c}),this.insertNumber(c,r,col,t)){if(this.checkGridComplete(t))return this.counter++,!0;if(this.solveGrid(t))return!0}}break}t[r][col]=0},removeNumber:function(){var r=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,o,col,c,l,d,h,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=r.length>0&&void 0!==r[0]?r[0]:t.grid,console.log("Removing number"),o=Math.floor(9*Math.random()),col=Math.floor(9*Math.random());0==n[o][col];)o=Math.floor(9*Math.random()),col=Math.floor(9*Math.random());return console.log("grid[",o,"][",col,"] = ",n[o][col]),c=n[o][col],console.log({backup:c}),console.log("grid[",o,"]",n[o]),n[o][col]=0,e.next=12,n.splice(o,1,n[o]);case 12:for(console.log("grid[",o,"][",col,"] = ",n[o][col]),l=[],d=0;d<9;d++){for(h=[],f=0;f<9;f++)o!==d||col!==f?(console.log("Set Pos as in grid",d,f),console.log(n[d][f])):o==d&&col==f&&(console.log("Row & col must be set to 0",d,f),console.log(n[d][f]));l.push(h)}console.log("Grid",n),console.log("copyGrid",l),t.counter=0,t.solveGrid(l),console.log("counter",t.counter),1!==t.counter?(n[o][col]=c,t.numberOfRemainingBacktracks-=1):n[o][col]=0;case 21:case"end":return e.stop()}}),e)})))()},iterativeSuduko:function(r,t,col){var e=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==r[t][col]){n.next=10;break}o=1;case 2:if(!(o<=9)){n.next=9;break}if(!e.insertNumber(o)){n.next=6;break}return e.guessStack.push({row:t,col:col,val:o}),n.abrupt("return");case 6:o++,n.next=2;break;case 9:e.backtrack=!0;case 10:return n.abrupt("return");case 11:case"end":return n.stop()}}),n)})))()},backtrackAlgo:function(r,t,col){var e=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r[t][col]!==e.initialGrid[t][col]){n.next=2;break}return n.abrupt("return");case 2:if((o=e.guessStack.pop()).row,o.col===col){n.next=6;break}return r[t][col]=0,n.abrupt("return");case 6:c=o.val+1;case 7:if(!(c<=9)){n.next=15;break}if(!e.insertNumber(c)){n.next=12;break}return e.guessStack.push({row:t,col:col,val:c}),e.backtrack=!1,n.abrupt("return");case 12:c++,n.next=7;break;case 15:return r[t][col]=0,n.abrupt("return");case 17:case"end":return n.stop()}}),n)})))()},checkGridComplete:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.grid,t=0;t<9;t++)for(var col=0;col<9;col++)if(0==r[col][t])return!1;return!0},rowHasVal:function(r){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentRow,i=0;i<9;i++)if(this.grid[t][i]===r)return!0;return!1},colHasVal:function(r){for(var col=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentCol,i=0;i<9;i++)if(this.grid[i][col]===r)return!0;return!1},squareHasVal:function(r){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentRow,col=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.currentCol,e=3*Math.floor(t/3),n=3*Math.floor(col/3),o=e+2,c=n+2,i=n;i<=c;i++)for(var l=e;l<=o;l++)if(this.grid[l][i]===r)return!0;return!1},resetAlgorithm:function(){this.currentRow=-1,this.currentCol=-1,this.algoComplete=!1,this.inProgress=!1,this.paused=!0,this.gridReady=!0,this.setGrid()},resetGrid:function(){this.currentRow=-1,this.currentCol=-1,this.setGrid(),this.algoComplete=!1,this.inProgress=!1,this.paused=!0,this.gridReady=!0},setGrid:function(){this.grid=[],this.grid.push([3,0,6,5,0,8,4,0,0]),this.grid.push([5,2,0,0,0,0,0,0,0]),this.grid.push([0,8,7,0,0,0,0,3,1]),this.grid.push([0,0,3,0,1,0,0,8,0]),this.grid.push([9,0,0,8,6,3,0,0,5]),this.grid.push([0,5,0,0,9,0,6,0,0]),this.grid.push([1,3,0,0,0,0,2,5,0]),this.grid.push([0,0,0,0,0,0,0,7,4]),this.grid.push([0,0,5,2,0,6,3,0,0]),this.initialGrid=[],this.initialGrid.push([3,0,6,5,0,8,4,0,0]),this.initialGrid.push([5,2,0,0,0,0,0,0,0]),this.initialGrid.push([0,8,7,0,0,0,0,3,1]),this.initialGrid.push([0,0,3,0,1,0,0,8,0]),this.initialGrid.push([9,0,0,8,6,3,0,0,5]),this.initialGrid.push([0,5,0,0,9,0,6,0,0]),this.initialGrid.push([1,3,0,0,0,0,2,5,0]),this.initialGrid.push([0,0,0,0,0,0,0,7,4]),this.initialGrid.push([0,0,5,2,0,6,3,0,0])},insertNumber:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentRow,col=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.currentCol,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.grid;return e[t][col]===r?(e[t][col]=0,!0):!(this.rowHasVal(r,t)||this.colHasVal(r,col)||this.squareHasVal(r,t,col))&&(e[t][col]=r,!0)},clearGrid:function(){this.grid=[],this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.grid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid=[],this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0]),this.initialGrid.push([0,0,0,0,0,0,0,0,0])}},computed:{squareStartRow:function(){return 3*Math.floor(this.currentRow/3)},squareStartCol:function(){return 3*Math.floor(this.currentCol/3)},squareEndRow:function(){return this.squareStartRow+2},squareEndCol:function(){return this.squareStartCol+2}}},h={name:"SudukoBackTracker",mixins:[o.a,d],data:function(){return{currentNumber:1,gridWidth:9,gridHeight:9,grid:[],inProgress:!1,paused:!0,algoComplete:!1,gridReady:!1,algorithm:"solve",numberOfRemainingBacktracks:5}},methods:{toggleRunAlgo:function(){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.paused=!r.paused;case 1:if(r.paused||r.algoComplete){t.next=8;break}return t.next=4,r.stepAlgo();case 4:return t.next=6,r.delay();case 6:t.next=1;break;case 8:case"end":return t.stop()}}),t)})))()},stepAlgo:function(){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.algorithm,t.next="generate"===t.t0?3:"solve"===t.t0?15:41;break;case 3:if(r.inProgress){t.next=13;break}return r.inProgress=!0,t.next=7,r.clearGrid();case 7:return t.next=9,r.fillGrid(r.grid);case 9:(e=t.sent)&&(r.initialGrid=r.grid),t.next=14;break;case 13:r.numberOfRemainingBacktracks>0&&(console.log("numberOfRemainingBacktracks",r.numberOfRemainingBacktracks),r.removeNumber());case 14:return t.abrupt("break",41);case 15:if(r.inProgress||(r.inProgress=!0,r.currentRow=0),!0!==r.backtrack){t.next=28;break}if(r.currentCol--,!(r.currentCol<0)){t.next=25;break}if(r.currentRow--,!(r.currentRow<0)){t.next=24;break}return r.inProgress=!1,r.algoComplete=!0,t.abrupt("return");case 24:r.currentCol=8;case 25:r.backtrackAlgo(r.grid,r.currentRow,r.currentCol),t.next=39;break;case 28:if(r.currentCol++,9!==r.currentCol){t.next=36;break}if(r.currentRow++,9!==r.currentRow){t.next=35;break}return r.inProgress=!1,r.algoComplete=!0,t.abrupt("return");case 35:r.currentCol=0;case 36:return t.next=38,r.iterativeSuduko(r.grid,r.currentRow,r.currentCol);case 38:e=t.sent;case 39:return(!0===e||!1===e)&&(r.inProgress=!1,r.algoComplete=!0),t.abrupt("break",41);case 41:case"end":return t.stop()}}),t)})))()},manageMouseUp:function(r){},manageHover:function(r){},manageMouseDown:function(r){}},mounted:function(){this.resetAlgorithm()},watch:{gridHeight:function(r){this.resetGrid()},gridWidth:function(r){this.resetGrid()}}},f=(e(274),e(55)),component=Object(f.a)(h,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("div",[e("ul",{staticClass:"nav justify-content-center"},[e("li",[e("b-input-group",{attrs:{size:"sm"}},[e("label",{staticClass:"form-label x-4",attrs:{for:"delay"}},[r._v("Delay")]),r._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.delayMs,expression:"delayMs"}],staticClass:"form-range",attrs:{min:"1",max:"400",type:"range",id:"delay"},domProps:{value:r.delayMs},on:{__r:function(t){r.delayMs=t.target.value}}})])],1),r._v(" "),e("li",[e("b-button-group",{staticClass:"mx-1"},[e("b-button",{on:{click:r.resetGrid}},[r._v("Reset")]),r._v(" "),e("b-button",{attrs:{disabled:r.algoComplete||!r.gridReady},on:{click:r.toggleRunAlgo}},[r._v(r._s(r.paused||!r.paused&&!r.inProgress?"Run":"Pause"))]),r._v(" "),e("b-button",{attrs:{disabled:r.algoComplete||!r.gridReady},on:{click:r.stepAlgo}},[r._v("Step")])],1)],1),r._v(" "),e("li",[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-select",{staticClass:"mx-1",attrs:{placeholder:"Select Algorithm"},on:{change:r.resetAlgorithm},model:{value:r.algorithm,callback:function(t){r.algorithm=t},expression:"algorithm"}},[e("b-form-select-option",{attrs:{value:"solve"}},[r._v("Solve w/ Backtrack")]),r._v(" "),e("b-form-select-option",{attrs:{value:"generate"}},[r._v("Generate Grid")])],1)],1)],1)])]),r._v(" "),e("div",[e("div",[e("br"),r._v(" "),e("table",[e("tr",r._l([1,2,3,4,5,6,7,8,9],(function(t){return e("td",{key:t,class:{currentNumber:r.currentNumber===t},on:{click:function(e){r.currentNumber=t}}},[r._v("    \n                      "+r._s(t)+"\n                  ")])})),0)]),r._v(" "),e("br"),r._v(" "),e("table",r._l(r.grid,(function(t,n){return e("tr",{key:"y:"+n},r._l(t,(function(t,o){return e("td",{key:n+","+o,class:{boldBorderBottom:(n+1)%3==0,boldBorderRight:(o+1)%3==0,boldBorderTop:0===n,boldBorderLeft:0===o,correctNumber:0!==r.initialGrid[n][o],currentNumber:n===r.currentRow&&o===r.currentCol,searchNumber:!(n===r.currentRow&&o===r.currentCol)&&0===r.initialGrid[n][o]&&(n<=r.squareEndRow&&n>=r.squareStartRow&&o<=r.squareEndCol&&o>=r.squareStartCol||n===r.currentRow||o===r.currentCol)},on:{click:function(t){return r.insertNumber(r.currentNumber,n,o)}}},[r._v("    \n                      "+r._s(0!==t?t:"")+"\n                  ")])})),0)})),0)])])])}),[],!1,null,"832d1f3c",null);t.default=component.exports}}]);