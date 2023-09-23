// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function r(t){return t!=t}function o(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var e,i=o(),a=Object.prototype.toString,u=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"",f=i&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return a.call(t);r=t[l],i=l,n=null!=(e=t)&&u.call(e,i);try{t[l]=void 0}catch(n){return a.call(t)}return o=a.call(t),n?t[l]=r:delete t[l],o}:function(t){return a.call(t)},y="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var t,n,r;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(y&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?b:function(){throw new Error("not implemented")};var A,v=e,d=o(),m=Object.prototype.toString,g=Object.prototype.hasOwnProperty,s="function"==typeof c?c.toStringTag:"",w=d&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return m.call(t);r=t[s],i=s,n=null!=(e=t)&&g.call(e,i);try{t[s]=void 0}catch(n){return m.call(t)}return o=m.call(t),n?t[s]=r:delete t[s],o}:function(t){return m.call(t)},h="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),r=n,t=(h&&r instanceof Float64Array||"[object Float64Array]"===w(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?U:function(){throw new Error("not implemented")};var j,F=A,O=o(),T=Object.prototype.toString,N=Object.prototype.hasOwnProperty,I="function"==typeof c?c.toStringTag:"",E=O&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return T.call(t);r=t[I],i=I,n=null!=(e=t)&&N.call(e,i);try{t[I]=void 0}catch(n){return T.call(t)}return o=T.call(t),n?t[I]=r:delete t[I],o}:function(t){return T.call(t)},P="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=n,t=(P&&r instanceof Uint8Array||"[object Uint8Array]"===E(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var Y,_=j,q=o(),G=Object.prototype.toString,M=Object.prototype.hasOwnProperty,k="function"==typeof c?c.toStringTag:"",z=q&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return G.call(t);r=t[k],i=k,n=null!=(e=t)&&M.call(e,i);try{t[k]=void 0}catch(n){return G.call(t)}return o=G.call(t),n?t[k]=r:delete t[k],o}:function(t){return G.call(t)},B="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var t,n,r;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=n,t=(B&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:Y,uint8:_};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,Q=new F(1),R=new v(Q.buffer);function W(t){return Q[0]=t,R[L]}var X,Z=o(),$=Object.prototype.toString,tt=Object.prototype.hasOwnProperty,nt="function"==typeof c?c.toStringTag:"",rt=Z&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return $.call(t);r=t[nt],i=nt,n=null!=(e=t)&&tt.call(e,i);try{t[nt]=void 0}catch(n){return $.call(t)}return o=$.call(t),n?t[nt]=r:delete t[nt],o}:function(t){return $.call(t)},ot="function"==typeof Float64Array,et="function"==typeof Float64Array?Float64Array:null,it="function"==typeof Float64Array?Float64Array:void 0;X=function(){var t,n,r;if("function"!=typeof et)return!1;try{n=new et([1,3.14,-3.14,NaN]),r=n,t=(ot&&r instanceof Float64Array||"[object Float64Array]"===rt(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?it:function(){throw new Error("not implemented")};var at=!0===K?1:0,ut=new X(1),ct=new v(ut.buffer),lt=.6931471803691238,ft=1.9082149292705877e-10,yt=1048575;function pt(t){var o,e,i,a,u,c,l,f,y,p,b,A;return 0===t?n:r(t)||t<0?NaN:(u=0,(e=W(t))<1048576&&(u-=54,e=W(t*=0x40000000000000)),e>=2146435072?t+t:(u+=(e>>20)-1023|0,u+=(f=614244+(e&=yt)&1048576|0)>>20|0,l=(t=function(t,n){return ut[0]=t,ct[at]=n>>>0,ut[0]}(t,e|1072693248^f))-1,(yt&2+e)<3?0===l?0===u?0:u*lt+u*ft:(c=l*l*(.5-.3333333333333333*l),0===u?l-c:u*lt-(c-u*ft-l)):(f=e-398458|0,y=440401-e|0,a=(b=(A=(p=l/(2+l))*p)*A)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(b),i=A*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(b),c=i+a,(f|=y)>0?(o=.5*l*l,0===u?l-(o-p*(o+c)):u*lt-(o-(p*(o+c)+u*ft)-l)):0===u?l-p*(l-c):u*lt-(p*(l-c)-u*ft-l))))}var bt=Math.sqrt;return function(o){return o<1?NaN:r(o)||function(r){return r===t||r===n}(o)?o:pt(o+bt(o+1)*bt(o-1))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).acosh=n();
//# sourceMappingURL=index.js.map
