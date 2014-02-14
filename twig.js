/**
 * twig.js
 * https://github.com/schmittjoh/twig.js
 *
 * (C) 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
 * Licensed under the Apache 2.0 License.
 *
 * Portions of this code are from the Google Closure Library received
 * from the Closure Authors under the Apache 2.0 License.
 */
(function() {var e=void 0,f=!0,h=null,k=!1;function m(a){return function(){return this[a]}}var n,p=this;function q(a,b,c){a=a.split(".");c=c||p;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&b!==e?c[d]=b:c=c[d]?c[d]:c[d]={}}
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){return"array"==r(a)}function t(a){return"string"==typeof a}function u(a){var b=typeof a;return"object"==b&&a!=h||"function"==b}var v="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),w=0;function x(a,b,c){return a.call.apply(a.bind,arguments)}
function y(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function z(a,b,c){z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x:y;return z.apply(h,arguments)}function A(a,b){q(a,b,e)};var B=/&/g,C=/</g,D=/>/g,E=/\"/g,F=/[&<>\"]/,G={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},H={"'":"\\'"};function I(a,b){a!=h&&this.append.apply(this,arguments)}I.prototype.b="";I.prototype.append=function(a,b,c){this.b+=a;if(b!=h)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};I.prototype.toString=m("b");function J(a,b,c){for(var d in a)b.call(c,a[d],d,a)}var K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(a,b){for(var c,d,g=1;g<arguments.length;g++){d=arguments[g];for(c in d)a[c]=d[c];for(var i=0;i<K.length;i++)c=K[i],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var M=Array.prototype,N=M.indexOf?function(a,b,c){return M.indexOf.call(a,b,c)}:function(a,b,c){c=c==h?0:0>c?Math.max(0,a.length+c):c;if(t(a))return!t(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},O=M.forEach?function(a,b,c){M.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=t(a)?a.split(""):a,i=0;i<d;i++)i in g&&b.call(c,g[i],i,a)};var P=z,v="twig_ui_"+Math.floor(2147483648*Math.random()).toString(36);function Q(a){return h===a||k===a||e===a||0===a?f:R(a)?0===S(a):k}function T(a,b){L.apply(h,Array.prototype.slice.call(arguments,0));return a}function R(a){return s(a)||t(a)||u(a)}function S(a){if(s(a))a=a.length;else if(t(a))a=a.length;else if(u(a)){var b=0,c;for(c in a)b++;a=b}else a=("number"===typeof a?a.toString():"").length;return a}function U(a,b,c){s(a)?O(a,b,c):J(a,b,c)};function V(a){this.env_=a;this.c=[];this.l={}}n=V.prototype;n.s=m("c");n.C=function(a){this.c=a};n.I=function(a){this.l=a};n.getParent=function(a){a=this.getParent_(a);return k===a?k:this.env_.d(a)};n.B=function(a,b,c){if(a in this.l){var d=new I;this.l[a](d,b,c||{});return d.toString()}d=this.getParent(b);if(k!==d)return d.j(a,b,c);throw Error("The template '"+this.n()+"' has no parent, and no trait defining the block '"+a+"'.");};
n.j=function(a,b,c){if(c&&a in c){var d=new I,g=c[a];delete c[a];g(d,b,c);return d.toString()}if(a in this.c)return d=new I,this.c[a](d,b,c||h),d.toString();d=this.getParent(b);return k!==d?d.j(a,b,c):""};n.i=function(a,b){var c=new I;this.render_(c,a||{},b||{});return c.toString()};
n.q=function(a,b,c,d){if(!a["get"+b])throw Error("The macro "+b+" is not defined in "+a.n()+".");if(d===e)return a["get"+b].apply(a,c);throw Error("Positional arguments, or default values in macro arguments are not supported, yet.");};function W(a){this.r=a}W.prototype.toString=m("r");function X(a,b,c,d,g){if(g&&b instanceof W)return b.toString();b=b==h?"":String(b);if(Y===c){a=String(b);if(a.quote)b=a.quote();else{b=['"'];for(c=0;c<a.length;c++){var i=a.charAt(c),l=i.charCodeAt(0),d=b,g=c+1,j;if(!(j=G[i])){if(!(31<l&&127>l))if(i in H)i=H[i];else if(i in G)i=H[i]=G[i];else{l=i;j=i.charCodeAt(0);if(31<j&&127>j)l=i;else{if(256>j){if(l="\\x",16>j||256<j)l+="0"}else l="\\u",4096>j&&(l+="0");l+=j.toString(16).toUpperCase()}i=H[i]=l}j=i}d[g]=j}b.push('"');b=b.join("")}return b.substring(1,
b.length-1)}if(!c||Z===c)return a=b,F.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(B,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(C,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(D,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(E,"&quot;"))),a;if(aa===c)return encodeURIComponent(b);throw Error("The type '"+c+"' is not supported.");}var Z="html",Y="js",aa="url";function $(){this.a={};this.f={};this.g={};this.k={};this.e={};this.o={};this.p=k;this.J="UTF-8"}n=$.prototype;n.i=function(a,b){var c=this.d(a);return c.i.call(c,T({},this.o,b||{}))};n.filter=function(a,b,c){if(!(a in this.f))throw Error("The filter '"+a+"' does not exist.");return this.f[a].apply(h,Array.prototype.slice.call(arguments,1))};n.w=function(a,b,c){if(!(a in this.g))throw Error("The function '"+a+"' does not exist.");return this.g[a].apply(h,Array.prototype.slice.call(arguments,1))};
n.test=function(a,b,c){if(!(a in this.k))throw Error("The test '"+a+"' does not exist.");return this.k[a].apply(h,Array.prototype.slice.call(arguments,1))};n.escape=function(a,b,c,d){return X(0,a,b,0,d)};n.z=function(a,b,c){var d=this.d(a),g=d["get"+b];if(!g)throw Error("The macro '"+b+"' does not exist on template '"+d.n()+"'.");return g.apply(d,Array.prototype.slice.call(arguments,2)).toString()};n.F=function(a,b){this.f[a]=b};n.G=function(a,b){this.g[a]=b};n.H=function(a,b){this.k[a]=b};n.u=m("o");
n.h=function(){this.p=f;J(this.a,function(a){a.h()},this)};n.v=function(a){return a in this.a};n.getExtension=function(a){if(!(a in this.a))throw Error('The "'+a+'" extension is not enabled.');return this.a[a]};n.m=function(a){this.a[a.getName()]=a};n.A=function(a){delete this.a[a]};n.D=function(a){J(a,function(a){this.m(a)})};n.t=m("a");n.d=function(a){var b=a[v]||(a[v]=++w);if(b in this.e)return this.e[b];k===this.p&&this.h();a=new a(this);return this.e[b]=a};window.Twig=new $;A("goog.provide",function(a){q(a)});A("goog.require",function(){});
A("twig.attr",function(a,b,c,d,g){d=d||"any";g=g!==e?g:k;if(!u(a)&&!s(a))return g?k:h;if(b in a){if("array"!==d&&"function"==r(a[b]))return g?f:a[b].apply(a,c||[]);if("method"!==d)return g?f:a[b]}if("array"===d||s(a))return g?k:h;var b=b.toLowerCase(),i="get"+b,l="is"+b,j;a:{b=function(a,b){b=b.toLowerCase();return b===i||b===l};for(j in a)if(b.call(e,0,j))break a;j=e}return j&&"function"==r(a[j])?g?f:a[j].apply(a,c||[]):g?k:h});A("twig.bind",P);
A("twig.inherits",function(a,b){function c(){}c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c});A("twig.extend",T);A("twig.spaceless",function(a){return a.replace(/>[\s\xa0]+</g,"><").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")});A("twig.range",function(a,b){for(var c=[];a<=b;a+=1)c.push(a);return c});A("twig.contains",function(a,b){var c;if(s(a))c=0<=N(a,b);else if(t(a))c=-1!=a.indexOf(b);else a:{for(c in a)if(a[c]==b){c=f;break a}c=k}return c});A("twig.countable",R);A("twig.count",S);
A("twig.forEach",U);A("twig.empty",Q);A("twig.createObj",function(a){for(var b={},c=0;c<arguments.length;c+=2)b[arguments[c]]=arguments[c+1];return b});A("twig.filter.capitalize",function(a,b){return b.charAt(0).toUpperCase()+b.substring(1)});A("twig.filter.escape",X);A("twig.filter.first",function(a,b){return s(b)?b[0]:u(b)?b[Object.keys(b)[0]]:t(b)?b.charAt(0):""});A("twig.filter.length",function(a,b){return S(b)});A("twig.filter.def",function(a,b){return Q(a)?b||"":a});
A("twig.filter.replace",function(a,b){for(var c in b){var d;d=c.replace(/[\.\\+*?\[\]<>(){}^$=!|:-]/g,"\\$&");a=a.replace(RegExp(d,"g"),b[c])}return a});A("twig.filter.join",function(a,b){var c=b||"",d=new I,g=f;U(a,function(a){g||d.append(c);g=k;d.append(a)});return d.toString()});A("twig.filter.keys",function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b});A("twig.filter.upper",function(a,b){return b.toUpperCase()});A("twig.filter.lower",function(a,b){return b.toLowerCase()});
A("twig.filter.nl2br",function(a){return a.replace(/\n/g,"<br />")});A("twig.StringBuffer",I);I.prototype.append=I.prototype.append;I.prototype.toString=I.prototype.toString;$.prototype.createTemplate=$.prototype.d;$.prototype.filter=$.prototype.filter;$.prototype.invoke=$.prototype.w;$.prototype.test=$.prototype.test;$.prototype.escape=$.prototype.escape;$.prototype.macro=$.prototype.z;$.prototype.setFilter=$.prototype.F;$.prototype.setFunction=$.prototype.G;$.prototype.setTest=$.prototype.H;
$.prototype.render=$.prototype.i;$.prototype.getGlobals=$.prototype.u;$.prototype.initRuntime=$.prototype.h;$.prototype.hasExtension=$.prototype.v;$.prototype.getExtension=$.prototype.getExtension;$.prototype.addExtension=$.prototype.m;$.prototype.removeExtension=$.prototype.A;$.prototype.setExtensions=$.prototype.D;$.prototype.getExtensions=$.prototype.t;A("twig.Template",V);V.prototype.setTraits=V.prototype.I;V.prototype.setBlocks=V.prototype.C;V.prototype.getBlocks=V.prototype.s;
V.prototype.renderParentBlock=V.prototype.B;V.prototype.renderBlock=V.prototype.j;V.prototype.callMacro=V.prototype.q;A("twig.Markup",W);})();
