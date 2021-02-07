(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{254:function(t,e,n){var content=n(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("2b6a4e80",content,!0,{sourceMap:!1})},255:function(t,e,n){var content=n(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("1b7833da",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n.r(e);n(16),n(31),n(63);var r=n(19);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(h)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={data:function(){return{list:[],longestString:[],leftPointer:0,rightPointer:0,searchComplete:!1,max:1,newItemForList:"",showRemoveItems:!1,pauseRunning:!1,delayMs:500,comparisonType:"i"}},methods:{apendList:function(){this.list.push(this.newItemForList),this.newItemForList=""},pauseAlgorithm:function(){this.pauseRunning=!0},delay:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:e.delayMs,n.next=3,new Promise((function(t){return setTimeout(t,r)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},runAlgorithm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.searchComplete||t.pauseRunning){e.next=8;break}if(console.log("in run while"),t.pauseRunning){e.next=6;break}return e.next=5,t.delay();case 5:t.stepAlgorithm();case 6:e.next=0;break;case 8:t.pauseRunning=!1;case 9:case"end":return e.stop()}}),e)})))()},comparisionOperation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.leftPointer,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.rightPointer;switch(this.comparisonType){case"i":if(this.list[e]>this.list[t])return!0;break;case"nd":if(this.list[e]>=this.list[t])return!0;break;case"d":if(this.list[e]<this.list[t])return!0}return!1},stepBackAlgorithm:function(){if(0!==this.leftPointer||0!==this.rightPointer){if(0!==this.leftPointer?this.leftPointer--:(this.rightPointer--,this.leftPointer=this.rightPointer>0?this.rightPointer-1:0),this.max==this.longestString[this.leftPointer]+1){var t,e=!1,n=o(this.longestString);try{for(n.s();!(t=n.n()).done;){t.value;this.max||(e=!0)}}catch(t){n.e(t)}finally{n.f()}e||this.max--}this.longestString[this.rightPointer]=this.longestString[this.leftPointer]||1}},stepAlgorithm:function(){this.leftPointer===this.listLength-2&&this.rightPointer===this.listLength-1?!1===this.searchComplete&&(this.searchComplete=!0):this.leftPointer<this.rightPointer-1?this.leftPointer++:this.rightPointer!==this.listLength&&(this.leftPointer=0,this.rightPointer++),this.comparisionOperation()&&this.longestString[this.leftPointer]+1>this.longestString[this.rightPointer]&&(this.longestString[this.rightPointer]=this.longestString[this.leftPointer]+1,this.max=Math.max(this.max,this.longestString[this.rightPointer]))}},computed:{listLength:function(){return this.list.length}},watch:{list:function(t){this.longestString=[];for(var i=0;i<t.length;i++)this.longestString.push(1)}},created:function(){this.list=[-1,3,4,5,2,2,2,2]}},h=(n(276),n(55)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"subtitle"},[t._v("\n    Longest Increasing Subsequence\n  ")]),t._v(" "),n("p",[t._v("\n    This is a classic dynamic programming problem asking \n    for the longest subsequence (a selection of characters but not necessarily contiguouse) \n    and has 3 main variations:\n  ")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("\n    these all require the same method to solve with slighty different comparisons.\n  ")]),t._v(" "),n("table",{staticClass:"table table-bordered border-primary"},[n("thead",{on:{mouseenter:function(e){t.showRemoveItems=!0},mouseleave:function(e){t.showRemoveItems=!1}}},[n("tr",[n("th",[t._v("index")]),t._v(" "),t._l(t.list,(function(e,r){return n("th",{key:"i"+r,staticClass:"text-center",class:{"table-primary":t.rightPointer===r,"table-secondary":t.leftPointer===r},attrs:{scope:"col"}},[t._v("\n            "+t._s(r)+"\n        ")])})),t._v(" "),t.showRemoveItems?n("th",{staticStyle:{width:"10%"},attrs:{scope:"col"},on:{mouseenter:function(e){t.showRemoveItems=!0},mouseleave:function(e){t.showRemoveItems=!1}}},[t._v("\n          "+t._s(t.list.length)+"\n        ")]):t._e()],2),t._v(" "),n("tr",[n("th",[t._v("arr[index]")]),t._v(" "),t._l(t.list,(function(e,r){return n("th",{key:r+","+e,staticClass:"text-center",class:{"table-primary":t.rightPointer===r,"table-secondary":t.leftPointer===r},attrs:{scope:"col"}},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),t.showRemoveItems?n("th",{staticStyle:{width:"10%"},attrs:{scope:"col"},on:{mouseenter:function(e){t.showRemoveItems=!0},mouseleave:function(e){t.showRemoveItems=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItemForList,expression:"newItemForList"}],staticClass:"form-control",attrs:{type:"text",id:"arrayItemInput"},domProps:{value:t.newItemForList},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.apendList(e)},input:function(e){e.target.composing||(t.newItemForList=e.target.value)}}})]):t._e()],2)]),t._v(" "),n("tbody",{on:{mouseenter:function(e){t.showRemoveItems=!0},mouseleave:function(e){t.showRemoveItems=!1}}},[n("tr",[n("th",[t._v("Longest Sequence")]),t._v(" "),t._l(t.longestString,(function(e,r){return n("td",{key:r+","+e,staticClass:"text-center",class:{"table-primary":t.rightPointer===r,"table-secondary":t.leftPointer===r},attrs:{scope:"col"}},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),t.showRemoveItems?n("td",{staticStyle:{width:"10%"},attrs:{scope:"col"},on:{mouseenter:function(e){t.showRemoveItems=!0},mouseleave:function(e){t.showRemoveItems=!1}}},[t._v("\n          1\n        ")]):t._e()],2)]),t._v(" "),t.showRemoveItems?n("tfoot",{on:{mouseenter:function(e){t.showRemoveItems=!0},mouseleave:function(e){t.showRemoveItems=!1}}},[n("th",[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.list=[]}}},[t._v("\n              Remove All\n        ")])]),t._v(" "),t._l(t.list,(function(e,r){return n("th",{key:"i"+r,staticClass:"text-center",class:{"table-primary":t.rightPointer===r,"table-secondary":t.leftPointer===r},attrs:{scope:"col"}},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.list.splice(r,1)}}},[t._v("\n            X\n          ")])])}))],2):t._e()]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"row justify-content-center "},[n("label",{attrs:{for:"comparisonType"}},[t._v("Select Subsequence Comparison Type")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.comparisonType,expression:"comparisonType"}],staticClass:"form-select",attrs:{id:"comparisonType"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.comparisonType=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"i"}},[t._v("Longest increasing")]),t._v(" "),n("option",{attrs:{value:"nd"}},[t._v("Longest non-decreasing")]),t._v(" "),n("option",{attrs:{value:"d"}},[t._v("Longest decreasing")])])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"row justify-content-center "},[n("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.stepAlgorithm}},[t._v("\n        Step Forward\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.stepBackAlgorithm}},[t._v("\n        Step Back\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.runAlgorithm}},[t._v("\n          Run\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.pauseAlgorithm}},[t._v("\n          Pause\n      ")])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("table",{staticClass:"table"},[t._m(1),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Max length")]),t._v(" "),n("td",[t._v(t._s(t.max))])]),t._v(" "),n("tr",[n("td",[t._v("Left Pointer")]),t._v(" "),n("td",[t._v(t._s(t.leftPointer))])]),t._v(" "),n("tr",[n("td",[t._v("Left Pointer Value")]),t._v(" "),n("td",[t._v(t._s(t.list[t.leftPointer]))])]),t._v(" "),n("tr",[n("td",[t._v("Left Pointer Longest String")]),t._v(" "),n("td",[t._v(t._s(t.longestString[t.leftPointer]))])]),t._v(" "),n("tr",[n("td",[t._v("Right Pointer")]),t._v(" "),n("td",[t._v(t._s(t.rightPointer))])]),t._v(" "),n("tr",[n("td",[t._v("Right Pointer Value")]),t._v(" "),n("td",[t._v(t._s(t.list[t.rightPointer]))])]),t._v(" "),n("tr",[n("td",[t._v("Right Pointer Longest String")]),t._v(" "),n("td",[t._v(t._s(t.longestString[t.rightPointer]))])])])])]),t._v(" "),n("div",{staticClass:"col"},[n("h4",[t._v("Pseudo Code")]),t._v(" "),n("br"),t._v(" "),n("code",[t._v("\n          list="+t._s(t.list)),n("br"),t._v("\n          leftPointer=0"),n("br"),t._v("\n          rightPointer=1"),n("br"),t._v("\n          longestString=[]"),n("br"),t._v("\n          maxStringLength=0"),n("br"),n("br"),t._v("\n          for leftPointer = 1 to listLength"),n("br"),t._v("\n             for rightPointer = 0 to leftPointer-1"),n("br"),t._v("\n               if list[rightPointer] > list[leftPointer]"),n("br"),t._v("\n                 if longestString[rightPointer]+1 > longestString[leftPointer]"),n("br"),t._v("\n                   longestString[rightPointer] = longestString[leftPointer]+1"),n("br"),t._v("\n                   maxStringLength = Max(maxStringLength, longestString[rightPointer])"),n("br")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("\n      Longest increasing subsequence\n    ")]),this._v(" "),e("li",[this._v("\n      Longest non-decreasing subsequence\n    ")]),this._v(" "),e("li",[this._v("\n      Longest decreasing subsequence\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",{attrs:{scope:"col"}},[this._v("Variable")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Value")])])}],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n(254)},277:function(t,e,n){(e=n(64)(!1)).push([t.i,".center{margin:0 auto;display:flex;justify-content:center;align-items:center;text-align:center}.table td{padding:.25rem .75rem}button{padding:5px}",""]),t.exports=e},278:function(t,e,n){"use strict";n(255)},279:function(t,e,n){(e=n(64)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:150;font-size:50px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:100;font-size:30px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},296:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(260),l=r.default.extend({components:{LongestIncreasingSubsequence:o.default}}),c=(n(278),n(55)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("\n      algovision\n    ")]),this._v(" "),e("longest-increasing-subsequence")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LongestIncreasingSubsequence:n(260).default})}}]);