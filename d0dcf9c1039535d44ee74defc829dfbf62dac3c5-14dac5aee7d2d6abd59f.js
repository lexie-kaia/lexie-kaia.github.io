(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[640],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),l=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||l(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},3724:function(t,e,r){"use strict";var n=r(7294);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=(0,n.forwardRef)((function(t,e){var r=t.color,i=t.size,u=l(t,["color","size"]);return n.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:r},u),n.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}))}));i.defaultProps={color:"currentColor",size:"1em"},e.Z=i},6278:function(t,e,r){"use strict";var n=r(6771),o=r(7294),l=r(3724),i=r(3431);var u=(0,n.Z)("section",{target:"enrtcq35"})({name:"5iroc3",styles:"&:not(:last-child){margin-bottom:1rem;}"}),a=(0,n.Z)("div",{target:"enrtcq34"})({name:"wtgc9x",styles:"display:flex;align-items:center;padding:0.5rem 0"}),s=(0,n.Z)("div",{target:"enrtcq33"})("display:",(function(t){return t.isOpen?"block":"none"}),";"),c=(0,n.Z)("h2",{target:"enrtcq32"})({name:"xlrx4j",styles:"font-weight:700;font-size:16px;line-height:24px;text-transform:uppercase"}),f=(0,n.Z)("button",{target:"enrtcq31"})("margin-left:0.75rem;transform:",(function(t){return t.isOpen?"rotate(0)":"rotate(180deg)"}),";svg{fill:",(function(t){return t.theme.color.textMain}),";stroke:",(function(t){return t.theme.color.textMain}),";stroke-width:1px;width:16px;height:16px;}&:focus,&:hover{outline:none;svg{fill:",(function(t){return t.theme.color.highlight}),";stroke:",(function(t){return t.theme.color.highlight}),";}}"),p=(0,n.Z)("div",{target:"enrtcq30"})({name:"1404sh0",styles:"display:flex;justify-content:center;align-items:center;width:32px;height:32px"});e.Z=function(t){var e=t.children,r=t.title,n=t.isAccordion,h=(0,o.useState)(!0),x=h[0],g=h[1];return(0,i.tZ)(u,null,(0,i.tZ)(a,null,(0,i.tZ)(c,null,r),n&&(0,i.tZ)(f,{onClick:function(){g(!x)},isOpen:x},(0,i.tZ)(p,null,(0,i.tZ)(l.Z,null)))),(0,i.tZ)(s,{isOpen:x},e))}},457:function(t,e,r){"use strict";var n=r(6771),o=r(7294),l=r(5444),i=r(3431),u=(0,n.Z)("ul",{target:"eh2t3tq1"})("display:flex;flex-wrap:wrap;font-size:14px;line-height:20px;text-transform:uppercase;color:",(function(t){return t.theme.color.textSub}),";"),a=(0,n.Z)("li",{target:"eh2t3tq0"})("margin-right:0.25rem;a{&:before{content:'#';}&:hover,&:focus{outline:none;text-decoration:underline;color:",(function(t){return t.theme.color.highlight}),";}}");e.Z=function(t){var e=t.tags;return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)(u,null,e.map((function(t){return(0,i.tZ)(a,{key:t},(0,i.tZ)(l.rU,{to:"/?tag="+t},t))}))))}}}]);
//# sourceMappingURL=d0dcf9c1039535d44ee74defc829dfbf62dac3c5-14dac5aee7d2d6abd59f.js.map