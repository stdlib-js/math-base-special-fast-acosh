"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(o,t){
var s=require('@stdlib/math-base-assert-is-infinite/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),i=require('@stdlib/math-base-special-sqrt/dist');function v(r){return r<1?NaN:a(r)||s(r)?r:q(r+i(r+1)*i(r-1))}t.exports=v
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
