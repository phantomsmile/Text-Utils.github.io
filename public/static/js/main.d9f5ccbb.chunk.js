(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(72),r=a.n(o),c=(a(87),a(6));a(89);function i(e){return n.a.createElement("div",{className:"container ",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black",paddingBottom:"12px",borderRadius:"10px"}},n.a.createElement("h1",{className:"my-3"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"}),n.a.createElement("div",null,n.a.createElement("div",{className:"accordion-body"},n.a.createElement("h3",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("div",null,n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("div",null,n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var s=a(3),m=a.n(s),d=a(77);function u(e){var t=Object(l.useState)("#fff"),a=Object(c.a)(t,2),o=a[0],r=a[1];return n.a.createElement("div",{style:{height:"40px"}},n.a.createElement("p",null,n.a.createElement("button",{className:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseWidthExample","aria-expanded":"false","aria-controls":"collapseWidthExample"},"Select Theme")),n.a.createElement("div",null,n.a.createElement("div",{className:"collapse collapse-horizontal",id:"collapseWidthExample"},n.a.createElement("div",{className:"card card-body",style:{width:"300px"}},n.a.createElement(d.a,{color:o,onChange:function(t){r(t.hex),e.color(t.hex)}})))))}var h=a(14);function b(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(h.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement(u,{color:e.switchTheme}),n.a.createElement("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),e.modeText,n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"})),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))))}function p(e){var t=Object(l.useState)(""),a=Object(c.a)(t,2),o=a[0],r=a[1],i=Object(l.useState)("0"),s=Object(c.a)(i,2),m=s[0],d=s[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black",height:"auto"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){r(""),r(e.target.value);var t=o.split(" ");d(t.length)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=o.toUpperCase();r(e)},style:{background:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"}},"Convert to UPPERCASE"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=o.toLocaleLowerCase();r(e)},style:{background:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"}},"Convert to lowercase"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=prompt("Please enter the word to be replaced",""),t=prompt("Please enter the word to be replaced by",""),a=o.replace(e,t);r(a)},style:{background:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"}},"Replace first occurence"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=prompt("Please enter the word to be replaced",""),t=prompt("Please enter the word to be replaced by",""),a=o.replace(new RegExp(e,"g"),t);r(a)},style:{background:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"}},"Replace all occurences"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=o.split(" ").map(function(e){return e.split("").reverse().join("")});e=e.join(" "),r(e)},style:{background:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"}},"Reverse Words"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Text was copied to clipboard","success")},style:{background:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"}},"Copy to clipboard"),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){r(""),d("0"),e.showAlert("The text box is reset","success")},style:{background:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"}},"Reset")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null,m," words and ",o.length," characters and time required to read this will be ",.008*o.split(" ").length," minutes"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o.trim():"Enter your text above to preview here")))}b.prototype={title:m.a.string.isRequired,aboutText:m.a.string},b.defaultProps={title:"Set Title here",aboutText:"About Text here"};var g=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg)},E=a(2);var v=function(){var e=Object(l.useState)("light"),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(l.useState)("Light Mode"),s=Object(c.a)(r,2),m=s[0],d=s[1],u=Object(l.useState)(null),v=Object(c.a)(u,2),y=v[0],w=v[1],k=function(e,t){w({msg:e,type:t}),setTimeout(function(){w(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,n.a.createElement(b,{title:"textUtils",aboutText:"About textUtils",mode:a,toggleMode:function(){"light"===a?(o("dark"),d("Dark Mode"),document.body.style.backgroundColor="#002356",k("Dark mode is enabled","success")):(o("light"),d("Light Mode"),document.body.style.backgroundColor="white",k("Light mode is enabled","success"))},modeText:m,switchTheme:function(e){document.body.style.background="linear-gradient(".concat(e,",transparent)")}}),n.a.createElement(g,{alert:y}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(E.c,null,n.a.createElement(E.a,{exact:!0,path:"/",element:n.a.createElement(p,{heading:"Enter your Text to Analysis",mode:a,showAlert:k})}),n.a.createElement(E.a,{exact:!0,path:"/about",element:n.a.createElement(i,{mode:a})})))))},y=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,201)).then(function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),l(e),n(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null))),y()},78:function(e,t,a){e.exports=a(199)},87:function(e,t,a){},89:function(e,t,a){}},[[78,3,2]]]);
//# sourceMappingURL=main.d9f5ccbb.chunk.js.map