(this["webpackJsonpbrainstorm-search"]=this["webpackJsonpbrainstorm-search"]||[]).push([[0],{12:function(n,e,t){n.exports=t(21)},19:function(n,e,t){},20:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),u=t(4),i=t(1),l=t(2);function s(){var n=Object(i.a)(["\n\tbackground-color: #202020;\n\t//   font-size: 1em;\n\tborder-color: #222;\n\tborder-width: 1px;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder-radius: 3px;\n"]);return s=function(){return n},n}function m(){var n=Object(i.a)([""]);return m=function(){return n},n}function d(){var n=Object(i.a)([""]);return d=function(){return n},n}function f(){var n=Object(i.a)(["\n\t//   font-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder-radius: 3px;\n\tborder-color: #222;\n\tbackground-color: #222;\n\tcolor: #eee;\n\t// color: #1aaa3f;\n\tborder-width: 1px;\n\t//   background-color: #bcc5c9;\n"]);return f=function(){return n},n}var h=l.a.input(f()),b=l.a.span(d()),p=l.a.div(m()),g=l.a.button(s()),v=function(n){var e;e="https://www.google.com.np/search?q="+n,Object.assign(document.createElement("a"),{target:"_blank",href:e}).click()},w=function(n){var e=n.sentence,t=n.value,o=n.onChange,c=e.split("{}"),i=Object(u.a)(c,2),l=i[0],s=i[1],m=Object(r.useRef)(),d=function(){var n=m.current.value;n=e.replace("{}",n.trim()),v(n)};return a.a.createElement(p,null,a.a.createElement(b,null,l),a.a.createElement(h,{ref:m,type:"search",value:t,onChange:o,onKeyDown:function(n){"Enter"===n.key&&d()}}),a.a.createElement(b,null,s),a.a.createElement(g,{onClick:d},"Go"))},E=(t(19),"\n\ndefine {}\n{} meaning\nwhat is {}\npros and cons of {}\nwhy does {} work\n{} alternatives\nhow to use {}\nwhen to use {}\nwhy use {}\n{} synonym\nwho is {}\n\nhow does {} work?".split("\n").map((function(n){return n.trim()})).filter((function(n){return n&&0!==n.length}))),k=function(){var n=Object(r.useState)(localStorage.getItem("query")),e=Object(u.a)(n,2),t=e[0],o=e[1],c=function(n){var e=n.target;localStorage.setItem("query",e.value),o(e.value);var r=t.length+6;e.style.width=r?r+"ch":"inherit"};return a.a.createElement("main",null,a.a.createElement("div",{className:"App"},E.map((function(n,e){return a.a.createElement(w,{index:e,sentence:n,value:t,onChange:c})}))))};t(20);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.784514ea.chunk.js.map