// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,o=t,e=r,i=function(n){return n===o||n===e},f=function(n){return n!=n},u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,a=c,y=function(n){return a.call(n)},l=Object.prototype.hasOwnProperty,p=function(n,t){return null!=n&&l.call(n,t)},A="function"==typeof Symbol?Symbol.toStringTag:"",b=p,U=A,d=c,m=y,w=function(n){var t,r,o;if(null==n)return d.call(n);r=n[U],t=b(n,U);try{n[U]=void 0}catch(t){return d.call(n)}return o=d.call(n),t?n[U]=r:delete n[U],o},s=u&&"symbol"==typeof Symbol.toStringTag?w:m,h=s,v="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,F=function(n){return v&&n instanceof Uint32Array||"[object Uint32Array]"===h(n)},I=N,S=function(){var n,t;if("function"!=typeof I)return!1;try{t=new I(t=[1,3.14,-3.14,4294967296,4294967297]),n=F(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},T="function"==typeof Uint32Array?Uint32Array:void 0,g=function(){throw new Error("not implemented")},j=S()?T:g,E=s,O="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,P=function(n){return O&&n instanceof Float64Array||"[object Float64Array]"===E(n)},V=x,Y=function(){var n,t;if("function"!=typeof V)return!1;try{t=new V([1,3.14,-3.14,NaN]),n=P(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},_="function"==typeof Float64Array?Float64Array:void 0,q=function(){throw new Error("not implemented")},G=Y()?_:q,M=s,k="function"==typeof Uint8Array,z="function"==typeof Uint8Array?Uint8Array:null,B=function(n){return k&&n instanceof Uint8Array||"[object Uint8Array]"===M(n)},C=z,D=function(){var n,t;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,256,257]),n=B(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},H="function"==typeof Uint8Array?Uint8Array:void 0,J=function(){throw new Error("not implemented")},K=D()?H:J,L=s,Q="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,W=function(n){return Q&&n instanceof Uint16Array||"[object Uint16Array]"===L(n)},X=R,Z=function(){var n,t;if("function"!=typeof X)return!1;try{t=new X(t=[1,3.14,-3.14,65536,65537]),n=W(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},$="function"==typeof Uint16Array?Uint16Array:void 0,nn=function(){throw new Error("not implemented")},tn={uint16:Z()?$:nn,uint8:K};(n=new tn.uint16(1))[0]=4660;var rn=52===new tn.uint8(n.buffer)[0],on=j,en=!0===rn?1:0,fn=new G(1),un=new on(fn.buffer),cn=function(n){return fn[0]=n,un[en]},an=j,yn=!0===rn?1:0,ln=new G(1),pn=new an(ln.buffer),An=function(n,t){return ln[0]=n,pn[yn]=t>>>0,ln[0]},bn=cn,Un=An,dn=f,mn=r,wn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},sn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},hn=.6931471803691238,vn=1.9082149292705877e-10,Nn=1048575,Fn=function(n){var t,r,o,e,i,f,u,c,a,y,l;return 0===n?mn:dn(n)||n<0?NaN:(e=0,(r=bn(n))<1048576&&(e-=54,r=bn(n*=0x40000000000000)),r>=2146435072?n+n:(e+=(r>>20)-1023|0,e+=(u=614244+(r&=Nn)&1048576|0)>>20|0,f=(n=Un(n,r|1072693248^u))-1,(Nn&2+r)<3?0===f?0===e?0:e*hn+e*vn:(i=f*f*(.5-.3333333333333333*f),0===e?f-i:e*hn-(i-e*vn-f)):(u=r-398458|0,c=440401-r|0,o=(y=(l=(a=f/(2+f))*a)*l)*wn(y),i=l*sn(y)+o,(u|=c)>0?(t=.5*f*f,0===e?f-(t-a*(t+i)):e*hn-(t-(a*(t+i)+e*vn)-f)):0===e?f-a*(f-i):e*hn-(a*(f-i)-e*vn-f))))},In=Math.sqrt;return function(n){return n<1?NaN:f(n)||i(n)?n:Fn(n+In(n+1)*In(n-1))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).acosh=t();
//# sourceMappingURL=browser.js.map
