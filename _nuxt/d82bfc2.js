(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{245:function(t,r,e){var content=e(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(65).default)("f9ea3c5c",content,!0,{sourceMap:!1})},247:function(t,r,e){"use strict";e(245)},248:function(t,r,e){(r=e(64)(!1)).push([t.i,"#left{overflow-y:scroll;padding:20px 20px 160px}#divider,#left{height:100vh;float:left}#divider{width:.4vw;background-color:#789;cursor:col-resize}#right{float:right;height:100vh;padding:20px 20px 160px;overflow-y:scroll}",""]),t.exports=r},250:function(t,r,e){"use strict";var n={name:"SplitScreen",methods:{toggleDivider:function(){this.rightWidth=0},selectDivider:function(){this.$refs.wrapper.addEventListener("mousemove",this.moveDivider,!1)},moveDivider:function(t){this.rightWidth=100-t.x/window.innerWidth*100},releaseDivider:function(){this.$refs.wrapper.removeEventListener("mousemove",this.moveDivider,!1)}},data:function(){return{rightWidth:49.5}},computed:{leftWidth:function(){return 99.6-this.rightWidth}}},o=(e(247),e(55)),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t._t("header"),t._v(" "),e("div",{ref:"wrapper",staticClass:"wraapper",on:{mouseup:t.releaseDivider}},[e("div",{style:{width:t.leftWidth+"vw"},attrs:{id:"left"}},[t._t("left",[t._v("\n                This is full of stuff on the left\n            ")])],2),t._v(" "),e("div",{ref:"divider",attrs:{id:"divider"},on:{mousedown:t.selectDivider}}),t._v(" "),e("div",{style:{width:t.rightWidth+"vw"},attrs:{id:"right"}},[t._t("right",[t._v("\n                This is full of stuff on the right\n            ")])],2)])],2)}),[],!1,null,null,null);r.a=component.exports},256:function(t,r,e){var content=e(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(65).default)("45cb72e2",content,!0,{sourceMap:!1})},277:function(t,r,e){"use strict";e(256)},278:function(t,r,e){(r=e(64)(!1)).push([t.i,".center{margin:0 auto;display:flex;justify-content:center;align-items:center;text-align:center}.table td{padding:.25rem .75rem}button{padding:5px}",""]),t.exports=r},300:function(t,r,e){"use strict";e.r(r);e(16),e(31);var n=e(22),o=(e(63),e(19));function c(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return l(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(h)throw o}}}}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var h={components:{SplitScreen:e(250).a},props:{passedStr:{type:String,default:"yzhbgnxxyyzzy"},passedSearchStr:{type:String,default:"xyx"}},data:function(){return{str:"",leftPointer:0,rightPointer:-1,searchComplete:!1,min:1/0,pauseRunning:!1,delayMs:500,searchString:"",searchStrFreqencies:{},currentStringValid:!1}},methods:{apendList:function(){this.strArray.push(this.newItemForList),this.newItemForList=""},resetAlgorithm:function(){},pauseAlgorithm:function(){this.pauseRunning=!0},delay:function(){var t=arguments,r=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:r.delayMs,e.next=3,new Promise((function(t){return setTimeout(t,n)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},runAlgorithm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.searchComplete||t.pauseRunning){r.next=8;break}if(console.log("in run while"),t.pauseRunning){r.next=6;break}return r.next=5,t.delay();case 5:t.stepAlgorithm();case 6:r.next=0;break;case 8:t.pauseRunning=!1;case 9:case"end":return r.stop()}}),r)})))()},comparisionOperation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.leftPointer,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.rightPointer;switch(this.searchString){case"i":if(this.strArray[r]>this.strArray[t])return!0;break;case"nd":if(this.strArray[r]>=this.strArray[t])return!0;break;case"d":if(this.strArray[r]<this.strArray[t])return!0}return!1},stepBackAlgorithm:function(){if(0!==this.leftPointer||0!==this.rightPointer){if(0!==this.leftPointer?this.leftPointer--:(this.rightPointer--,this.leftPointer=this.rightPointer>0?this.rightPointer-1:0),this.min==this.longestString[this.leftPointer]+1){var t,r=!1,e=c(this.longestString);try{for(e.s();!(t=e.n()).done;){t.value;this.min||(r=!0)}}catch(t){e.e(t)}finally{e.f()}r||this.min--}this.longestString[this.rightPointer]=this.longestString[this.leftPointer]||1}},stepAlgorithm:function(){if(!this.currentStringValid&&this.rightPointer<this.strArray.length-1){++this.rightPointer;var t=this.strArray[this.rightPointer];if(this.searchStrFreqencies[t]){var r=this.searchStrFreqencies[t].currFreq||0;this.$set(this.searchStrFreqencies[t],"currFreq",++r)}}else if(this.currentStringValid){var e=this.strArray[this.leftPointer];if(this.searchStrFreqencies[e]){var n=this.searchStrFreqencies[e].currFreq||1;this.$set(this.searchStrFreqencies[e],"currFreq",--n)}++this.leftPointer}var o=!0;for(var c in this.searchStrFreqencies)this.searchStrFreqencies[c].requiredFreq>this.searchStrFreqencies[c].currFreq&&(o=!1),this.currentStringValid=o,o&&(this.min=Math.min(this.min,this.currentString.length))}},computed:{listLength:function(){return this.strArray.length},strArray:function(){return Object(n.a)(this.str)},currentString:function(){return this.str.substring(this.leftPointer,this.rightPointer+1)}},watch:{searchString:function(t){this.searchStrFreqencies={};var r,e=c(t);try{for(e.s();!(r=e.n()).done;){var n=r.value;this.searchStrFreqencies[n]?this.$set(this.searchStrFreqencies,n,{requiredFreq:this.searchStrFreqencies[n].requiredFreq+1,currFreq:0}):this.$set(this.searchStrFreqencies,n,{requiredFreq:1,currFreq:0})}}catch(t){e.e(t)}finally{e.f()}}},created:function(){this.searchString=this.passedSearchStr,this.str=this.passedStr}},v=(e(277),e(55)),component=Object(v.a)(h,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("split-screen",[e("div",{attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"row justify-content-center "},[e("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.stepAlgorithm}},[t._v("\n        Step Forward\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.stepBackAlgorithm}},[t._v("\n        Step Back\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.runAlgorithm}},[t._v("\n          Run\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.pauseAlgorithm}},[t._v("\n          Pause\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-primary col-3",attrs:{type:"button"},on:{click:t.resetAlgorithm}},[t._v("\n          Reset\n      ")])])]),t._v(" "),e("div",{attrs:{slot:"left"},slot:"left"},[e("h3",{staticClass:"subtitle"},[t._v("\n      Longest Increasing Substring\n    ")]),t._v(" "),e("p",[t._v('Find the shortest substring in "'+t._s(t.str)+'"" where all of the characters in the search substring "'+t._s(t.searchString)+'" are present.\n    ')]),e("p"),e("div",{staticClass:"row justify-content-center "},[e("label",{attrs:{for:"searchString"}},[t._v("String to be Searched")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.str,expression:"str"}],attrs:{id:"str",type:"text"},domProps:{value:t.str},on:{input:function(r){r.target.composing||(t.str=r.target.value)}}})]),t._v(" "),e("br"),t._v(" "),e("table",{staticClass:"table table-bordered border-primary"},[e("thead",{on:{mouseenter:function(r){t.showRemoveItems=!0},mouseleave:function(r){t.showRemoveItems=!1}}},[e("tr",[e("th",[t._v("index")]),t._v(" "),t._l(t.strArray,(function(r,n){return e("th",{key:"i"+n,staticClass:"text-center",class:{"table-primary":t.rightPointer===n,"table-secondary":t.leftPointer===n},attrs:{scope:"col"}},[t._v("\n              "+t._s(n)+"\n          ")])}))],2)]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("str[index]")]),t._v(" "),t._l([].concat(t.strArray),(function(r,n){return e("th",{key:n+","+r,staticClass:"text-center",class:{"table-primary":t.rightPointer===n,"table-secondary":t.leftPointer===n,"table-success":t.leftPointer<=n&t.rightPointer>=n&&t.currentStringValid,"table-danger":t.leftPointer<n&t.rightPointer>n&&!t.currentStringValid},attrs:{scope:"col"}},[t._v("\n            "+t._s(r)+"\n          ")])}))],2)])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row justify-content-center "},[e("label",{attrs:{for:"searchString"}},[t._v("Search String")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],attrs:{id:"searchString",type:"text"},domProps:{value:t.searchString},on:{input:function(r){r.target.composing||(t.searchString=r.target.value)}}})]),t._v(" "),e("br")]),t._v(" "),e("div",{attrs:{slot:"right"},slot:"right"},[e("div",{staticClass:"row"},[e("h4",[t._v("Variables Values")]),t._v(" "),e("table",{staticClass:"table"},[e("thead",[e("th",{attrs:{scope:"col"}},[t._v("Variable")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Value")])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Min length")]),t._v(" "),e("td",[t._v(t._s(t.min))])]),t._v(" "),e("tr",[e("td",[t._v("Left Pointer")]),t._v(" "),e("td",[t._v(t._s(t.leftPointer))])]),t._v(" "),e("tr",[e("td",[t._v("Right Pointer")]),t._v(" "),e("td",[t._v(t._s(t.rightPointer))])]),t._v(" "),e("tr",[e("td",[t._v("Current Substring")]),t._v(" "),e("td",[t._v(t._s(t.currentString))])]),t._v(" "),e("tr",[e("td",[t._v("Current Substring Valid")]),t._v(" "),e("td",[t._v(t._s(t.currentStringValid))])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("h4",[t._v("Search str Frequencies")]),t._v(" "),e("table",{staticClass:"table"},[e("thead",[e("th",{attrs:{scope:"col"}},[t._v("Element")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Required Frequency")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Current Frequency")])]),t._v(" "),e("tbody",t._l(t.searchStrFreqencies,(function(r,n){return e("tr",{key:"elem"+n},[e("td",[t._v(t._s(n))]),t._v(" "),e("td",[t._v(t._s(r.requiredFreq))]),t._v(" "),e("td",[t._v(t._s(r.currFreq))])])})),0)])]),t._v(" "),e("div",{staticClass:"row"},[e("h4",[t._v("Pseudo Code")]),t._v(" "),e("br"),t._v(" "),e("code",[t._v("\n        strArray="+t._s(t.strArray)),e("br"),t._v("\n        leftPointer=0"),e("br"),t._v("\n        rightPointer=1"),e("br"),t._v("\n        longestString=[]"),e("br"),t._v("\n        minStringLength=0"),e("br"),e("br"),t._v("\n        for leftPointer = 1 to listLength"),e("br"),t._v("\n           for rightPointer = 0 to leftPointer-1"),e("br"),t._v("\n             if strArray[rightPointer] > strArray[leftPointer]"),e("br"),t._v("\n               if longestString[rightPointer]+1 > longestString[leftPointer]"),e("br"),t._v("\n                 longestString[rightPointer] = longestString[leftPointer]+1"),e("br"),t._v("\n                 minStringLength = Min(minStringLength, longestString[rightPointer])"),e("br")])])])])}),[],!1,null,null,null);r.default=component.exports}}]);