(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){var d=c(1),e=d.init;e()},function(a,b,c){'use strict';function f(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function d(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function e(e,a,b){return a&&d(e.prototype,a),b&&d(e,b),e}c.r(b),c.d(b,'init',function(){return o});var g=function(){function g(a,b,c,d){f(this,g),this.id=a,this.nombre=b,this.cantidad=c,this.precio=d}return e(g,[{key:'imprimirClase',value:function(){console.log(''.concat(this.nombre,', ').concat(this.cantidad,', ').concat(this.precio,'\u20AC'))}}]),g}(),h=new g('Vestido',4,45,90),i=['Baltasar.png','BlackFryday.png','Duende.png','Main.png','Gaspar.png','Melchor.png','PapaNoel.png'],j=['alert-warning','alert-dark','alert-danger','alert-success','alert-info','alert-primary','alert-danger'],k=document.body,l=document.querySelector('img'),m=function(b){l.src='./assets/'.concat(b)},n=function(b){k.classList=b};l.addEventListener('click',function(){var d=l.src.split('/'),e=d[d.length-1],b=0;i.forEach(function(c,a){e===c&&(b=a===i.length-1?0:a+1)}),m(i[b]),n(j[b])});var o=function(){m(i[3]);var c=localStorage.setItem('Producto',JSON.stringify([h,{id:32,nombre:'productoLSdos',talla:'Talla s',precio:20.8}])),a=localStorage.getItem('Producto');console.log(JSON.parse(a))}}]);