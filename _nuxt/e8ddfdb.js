(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{282:function(e,t,n){"use strict";n.r(t);n(6),n(27),n(7),n(13);var r=n(22),o=n(37);function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){f=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var f={data:function(){return{wordBank:["e","ee","eee","eeee","eeeee","eeeeee","eeeeee"],target:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",allConstructOutput:[],allConstructSeq:{}}},methods:{callAllConstruct:function(){this.allConstructOutput="",this.allConstructOutput=this.allConstruct(this.target,this.wordBank)},allConstruct:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.target,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.wordBank;if(console.log("Target: "+t+" is type "+Object(o.a)(t)),""===t)return[[]];var c,f=[],v=l(n);try{var h=function(){var o=c.value;if(0===t.indexOf(o)){var l=t.slice(o.length),v=e.allConstruct(l,n).map((function(e){return[o].concat(Object(r.a)(e))}));f.push.apply(f,Object(r.a)(v))}};for(v.s();!(c=v.n()).done;)h()}catch(e){v.e(e)}finally{v.f()}return f},memorisedAllConstruct:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.target,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.wordBank,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(console.log("Target: "+t+" is type "+Object(o.a)(t)),t in c)return c[t];if(""===t)return[[]];var f,v=[],h=l(n);try{var d=function(){var o=f.value;if(0===t.indexOf(o)){var l=t.slice(o.length),c=e.memorisedAllConstruct(l,n).map((function(e){return[o].concat(Object(r.a)(e))}));v.push.apply(v,Object(r.a)(c))}};for(h.s();!(f=h.n()).done;)d()}catch(e){h.e(e)}finally{h.f()}return c[t]=v,c[t]},iterativeAllConstruct:function(){}}},v=n(55),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("All Construct")]),e._v(" "),n("h4",[e._v(" Decision Problem ie. return boolean")]),e._v(" "),n("p",[e._v("\n      Return a 2D array containing "),n("em",[e._v("all of ways ")]),e._v(' the target string="'+e._s(e.target)+'" can be made with the given the array of strings wordBank='+e._s(e.wordBank)+"."),n("br"),e._v("\n      Each element of the 2D array will represent one combination that constructs the target/ "),n("br"),e._v("\n      You may re-use elements of the WordBank as many times as required.\n  ")]),e._v(" "),n("h4",[e._v("Numbers Available")]),e._v(" "),n("table",{staticClass:"table"},[n("tbody",e._l(e.wordBank,(function(t,r){return n("th",{key:r+","+t,staticClass:"text-center",attrs:{scope:"col"}},[e._v("\n              "+e._s(t)+"\n          ")])})),0)]),e._v(" "),n("label",{attrs:{for:"target"}},[e._v("Target Construct:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.target,expression:"target"}],attrs:{type:"word",id:"target"},domProps:{value:e.target},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.callAllConstruct(t)},input:[function(t){t.target.composing||(e.target=t.target.value)},function(t){e.allConstructOutput=""}]}}),e._v(" "),0==e.allConstructOutput.length?n("p",[e._v("No combination found")]):e._e(),e._v(" "),e._l(e.allConstructOutput,(function(t,r){return n("p",{key:r},[e._v(e._s(t))])}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);