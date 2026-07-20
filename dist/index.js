"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var n=s(function(p,t){
var a=require('@stdlib/math-base-assert-is-infinite/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-ln/dist'),i=require('@stdlib/math-base-special-sqrt/dist');function c(r){return r<1?NaN:q(r)||a(r)?r:v(r+i(r+1)*i(r-1))}t.exports=c
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
