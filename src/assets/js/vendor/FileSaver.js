var saveAs=saveAs||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(v){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var w=v.document,y=function(){return v.URL||v.webkitURL||v},m=w.createElementNS("http://www.w3.org/1999/xhtml","a"),h="download"in m,S=v.webkitRequestFileSystem,O=v.requestFileSystem||S||v.mozRequestFileSystem,i=function(e){(v.setImmediate||v.setTimeout)(function(){throw e},0)},b="application/octet-stream",E=0,R=function(e){var t=function(){"string"==typeof e?y().revokeObjectURL(e):e.remove()};v.chrome?t():setTimeout(t,500)},g=function(e,t,n){for(var o=(t=[].concat(t)).length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){i(e)}}},n=function(o,n){var e,r,t,i,a,c=this,f=o.type,s=!1,u=function(){g(c,"writestart progress write writeend".split(" "))},d=function(){(!s&&e||(e=y().createObjectURL(o)),r)?r.location.href=e:null==v.open(e,"_blank")&&"undefined"!=typeof safari&&(v.location.href=e);c.readyState=c.DONE,u(),R(e)},l=function(e){return function(){if(c.readyState!==c.DONE)return e.apply(this,arguments)}},p={create:!0,exclusive:!1};if(c.readyState=c.INIT,n||(n="download"),h)return e=y().createObjectURL(o),m.href=e,m.download=n,i=m,(a=w.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,v,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(a),c.readyState=c.DONE,u(),void R(e);/^\s*(?:text\/(?:plain|xml)|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)&&(o=new Blob(["\ufeff",o],{type:o.type})),v.chrome&&f&&f!==b&&(t=o.slice||o.webkitSlice,o=t.call(o,0,o.size,b),s=!0),S&&"download"!==n&&(n+=".download"),(f===b||S)&&(r=v),O?(E+=o.size,O(v.TEMPORARY,E,l(function(e){e.root.getDirectory("saved",p,l(function(e){var t=function(){e.getFile(n,p,l(function(n){n.createWriter(l(function(t){t.onwriteend=function(e){r.location.href=n.toURL(),c.readyState=c.DONE,g(c,"writeend",e),R(n)},t.onerror=function(){var e=t.error;e.code!==e.ABORT_ERR&&d()},"writestart progress write abort".split(" ").forEach(function(e){t["on"+e]=c["on"+e]}),t.write(o),c.abort=function(){t.abort(),c.readyState=c.DONE},c.readyState=c.WRITING}),d)}),d)};e.getFile(n,{create:!1},l(function(e){e.remove(),t()}),l(function(e){e.code===e.NOT_FOUND_ERR?t():d()}))}),d)}),d)):d()},e=n.prototype;return e.abort=function(){this.readyState=this.DONE,g(this,"abort")},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(e,t){return new n(e,t)}}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs});