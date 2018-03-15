!function(t){"use strict";if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return new Blob}catch(t){}var c=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var c=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},e=function(){this.data=[]},l=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},n=e.prototype,o=l.prototype,s=t.FileReaderSync,d=function(t){this.code=this[this.name=t]},i="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),a=i.length,r=t.URL||t.webkitURL||t,u=r.createObjectURL,f=r.revokeObjectURL,R=r,p=t.btoa,h=t.atob,b=t.ArrayBuffer,g=t.Uint8Array,w=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(l.fake=o.fake=!0;a--;)d.prototype[i[a]]=a+1;return r.createObjectURL||(R=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(w),n.origin=e&&e[1])),n}),R.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof l?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):p?e+";base64,"+p(t.data):e+","+encodeURIComponent(t.data)):u?u.call(r,t):void 0},R.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&f&&f.call(r,t)},n.append=function(t){var e=this.data;if(g&&(t instanceof b||t instanceof g)){for(var n="",o=new g(t),i=0,a=o.length;i<a;i++)n+=String.fromCharCode(o[i]);e.push(n)}else if("Blob"===c(t)||"File"===c(t)){if(!s)throw new d("NOT_READABLE_ERR");var r=new s;e.push(r.readAsBinaryString(t))}else t instanceof l?"base64"===t.encoding&&h?e.push(h(t.data)):"URI"===t.encoding?e.push(decodeURIComponent(t.data)):"raw"===t.encoding&&e.push(t.data):("string"!=typeof t&&(t+=""),e.push(unescape(encodeURIComponent(t))))},n.getBlob=function(t){return arguments.length||(t=null),new l(this.data.join(""),t,"raw")},n.toString=function(){return"[object BlobBuilder]"},o.slice=function(t,e,n){var o=arguments.length;return o<3&&(n=null),new l(this.data.slice(t,1<o?e:this.data.length),n,this.encoding)},o.toString=function(){return"[object Blob]"},o.close=function(){this.size=0,delete this.data},e}(t);t.Blob=function(t,e){var n=e&&e.type||"",o=new c;if(t)for(var i=0,a=t.length;i<a;i++)Uint8Array&&t[i]instanceof Uint8Array?o.append(t[i].buffer):o.append(t[i]);var r=o.getBlob(n);return!r.slice&&r.webkitSlice&&(r.slice=r.webkitSlice),r};var e=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=e(new t.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);