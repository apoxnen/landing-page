(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{27:function(e,t,a){e.exports=a(53)},37:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},38:function(e,t,a){e.exports=a.p+"static/media/header-image-3.a85f2aff.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},42:function(e,t,a){e.exports=a.p+"static/media/header-image-1.29b56644.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/header-image-2.f6b67d36.jpg"},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(21),s=a.n(n),r=a(6),o=a(26),c=a.n(o),m=a(10),u=a(2),d=function(e){var t=e.component,a=e.layout,i=Object(u.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(m.Route,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},v=a(9),h=a(3),p=a.n(h),b=a(18),f=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(v.a)(a,2),s=n[0],r=n[1],o=Object(i.useState)([]),c=Object(v.a)(o,2),m=c[0],u=c[1],d=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!d())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=s-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(d()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var p=function(){d()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(b.throttle)((function(){p(),h()}),30),E=Object(b.throttle)((function(){r(window.innerHeight)}),30);return Object(i.useEffect)((function(){p(),h()}),[s]),l.a.createElement(l.a.Fragment,null,e.children())}));f.propTypes={children:p.a.func.isRequired};var E=f,g=a(14),N=a(1),k=a.n(N),j=a(11),O=function(e){var t=e.className,a=e.src,n=e.width,s=e.height,r=e.alt,o=Object(u.a)(e,["className","src","width","height","alt"]),c=Object(i.useState)(!1),m=Object(v.a)(c,2),d=m[0],h=m[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");d||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:n,height:s,alt:r,onLoad:function(){h(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,y=function(e){var t=e.className,i=Object(u.a)(e,["className"]),n=k()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:n}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(j.a,{to:"/"},l.a.createElement(w,{src:a(37),alt:"Open",width:32,height:32}))))},x=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,s=e.hideSignin,r=e.bottomOuterDivider,o=e.bottomDivider,c=Object(u.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(i.useState)(!1),d=Object(v.a)(m,2),h=d[0],p=d[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return h&&E(),document.addEventListener("keydown",N),document.addEventListener("click",O),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",O),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},N=function(e){h&&27===e.keyCode&&g()},O=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==f.current&&g()},w=k()("site-header",r&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},c,{className:w}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:k()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement(y,null),!n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?g:E},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:b,className:k()("header-nav",h&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:k()("list-reset text-xs",a&&"header-nav-".concat(a))}),!s&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(j.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:g},"Sign up")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var D=x,C=function(e){var t=e.className,a=Object(u.a)(e,["className"]),i=k()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"}))},L=function(e){var t=e.className,a=Object(u.a)(e,["className"]),i=k()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Facebook"),l.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://google.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Instagram"),l.a.createElement("g",null,l.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),l.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),l.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},H=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(u.a)(e,["className","topOuterDivider","topDivider"]),s=k()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},n,{className:s}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:k()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(y,null),l.a.createElement(L,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(C,null),l.a.createElement("div",{className:"footer-copyright"},"Made by energiajyyr\xe4t. All right reserved")))))};H.defaultProps={topOuterDivider:!1,topDivider:!1};var F=H,B=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(F,null))},M=a(5),A={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},P={types:Object(M.a)({},A.types),defaults:Object(M.a)({},A.defaults)},T={types:Object(M.a)({},A.types,{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(M.a)({},A.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},S={types:Object(M.a)({},A.types,{pushLeft:p.a.bool}),defaults:Object(M.a)({},A.defaults,{pushLeft:!1})},z=function(e){var t=e.className,a=Object(u.a)(e,["className"]),i=k()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:i}))},R=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,s=e.loading,r=e.wide,o=e.wideMobile,c=e.disabled,m=Object(u.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),d=k()("button",i&&"button-".concat(i),n&&"button-".concat(n),s&&"is-loading",r&&"button-block",o&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},m,{className:d,disabled:c}))};R.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var q=R,I=function(e){var t=e.className,a=e.children,n=e.handleClose,s=e.show,r=e.closeHidden,o=e.video,c=e.videoTag,m=Object(u.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){d()}),[m.show]);var d=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},h=function(e){e.stopPropagation()},p=k()("modal",s&&"is-active",o&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,s&&l.a.createElement("div",Object.assign({},m,{className:p,onClick:n}),l.a.createElement("div",{className:"modal-inner",onClick:h},o?l.a.createElement("div",{className:"responsive-video"},"iframe"===c?l.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:o})):l.a.createElement(l.a.Fragment,null,!r&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),l.a.createElement("div",{className:"modal-content"},a)))))};I.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var K=a(24),V=Object(M.a)({},P.defaults),G=function(e){var t=e.className,n=e.topOuterDivider,s=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=Object(u.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(i.useState)(!1),p=Object(v.a)(h,2),b=(p[0],p[1],k()("hero section center-content",n&&"has-top-divider",s&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t)),f=k()("hero-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},d,{className:b}),l.a.createElement("div",{className:"image-container"},l.a.createElement(K.a,{id:"cover-image",src:a(38),shape:"box",keepAspectRatio:!1,title:"Rounded Image"})),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:f},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Aidosti puhtainta ja halvinta s\xe4hk\xf6\xe4 ",l.a.createElement("span",{className:"text-color-primary"},"sinulle")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Kuluta halvinta mahdollista s\xe4hk\xf6\xe4 tuulisina aikoina ja tue siirtym\xe4\xe4 fossiilittomaan s\xe4hk\xf6verkkoon                "),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(z,null,l.a.createElement(q,{tag:"a",color:"primary",wideMobile:!0,href:"#"},"Tilaa uutiskirje"))))),l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"}))))};G.defaultProps=V;var J=G,W=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,s=Object(u.a)(e,["className","data","children","tag"]),r=k()("section-header",t),o=n;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},s,{className:r}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(o,{className:k()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};W.defaultProps={children:null,tag:"h2"};var Q=W,U=Object(M.a)({},S.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(u.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=k()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),h=k()("features-tiles-inner section-inner pt-0",s&&"has-top-divider",r&&"has-bottom-divider"),p=k()("tiles-wrap center-content",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:h},l.a.createElement(Q,{data:{title:"Tavoitteemme",paragraph:"Me haluamme mahdollistaa jokaiselle kotitaloudelle mahdollisuuden alentaa s\xe4hk\xf6laskuaan     ja samalla tehd\xe4 ymp\xe4rist\xf6lle yst\xe4v\xe4llisi\xe4 valintoja. Halpa ja vihre\xe4 s\xe4hk\xf6 kulkevat k\xe4si k\xe4dess\xe4."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(w,{src:a(39),alt:"Features tile icon 02",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Selke\xe4\xe4 s\xe4\xe4st\xf6\xe4 s\xe4hk\xf6laskuun"),l.a.createElement("p",{className:"m-0 text-sm"},"Kuluttamalla s\xe4hk\xf6\xe4 tuulisina tunteina saat alennettua s\xe4hk\xf6laskuasi huomattavasti. Ilman kulutusmuutoksiakin voit p\xe4\xe4st\xe4 halvemmalla kuin nyky\xe4\xe4n.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(w,{src:a(40),alt:"Features tile icon 04",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Aidosti puhtainta s\xe4hk\xf6\xe4"),l.a.createElement("p",{className:"m-0 text-sm"},"Tuulis\xe4hk\xf6 on puhtainta silloin, kun kulutat s\xe4hk\xf6\xe4 samaan aikaan tuulituotannon kanssa. Nykyiset alkuper\xe4takuisiin perustuvat tuulisopimukset eiv\xe4t ole niin puhtaita kuin olisi mahdollista.                    ")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(w,{src:a(41),alt:"Features tile icon 05",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Hy\xf6dy uusiutuvista kuten isot yritykset ovat hy\xf6tyneet jo vuosia."),l.a.createElement("p",{className:"m-0 text-sm"},"Suuret s\xe4hk\xf6nkuluttajat ostavat s\xe4hk\xf6\xe4 suoraan tuulipuistoista, joka on halvempaa kuin kuluttajalle tarjottava s\xe4hk\xf6. En\xe4\xe4 t\xe4m\xe4 ei ole mahdollista vain isoille yrityksille!"))))))))};Y.defaultProps=U;var $=Y,X=Object(M.a)({},T.defaults),Z=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,m=e.invertMobile,d=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(u.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=k()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),f=k()("features-split-inner section-inner",s&&"has-top-divider",r&&"has-bottom-divider"),E=k()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},p,{className:b}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:f},l.a.createElement(Q,{data:{title:"Kuinka se toimii",paragraph:"liirum laarum"},className:"center-content"}),l.a.createElement("div",{className:E},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Uusi sopimustyyppi"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Kaksi kiinte\xe4\xe4 hintaa"),l.a.createElement("p",{className:"m-0"},"Markkinoiden ehdottomasti halvinta s\xe4hk\xf6\xe4 saat kun tuulivoimalamme tuottavat s\xe4hk\xf6\xe4. Kalliimpaa hintaa maksat vain silloin, kun kulutat s\xe4hk\xf6\xe4 tuulettomina tunteina. Mit\xe4 enemm\xe4n siirr\xe4t kulutusta tuulisille tunneille, sit\xe4 enemm\xe4n s\xe4\xe4st\xe4t ja pienenn\xe4t hiilijalanj\xe4lke\xe4si. Tuulis\xe4hk\xf6mme tulee suoraan tuulivoimalasta, jonka tulevaa tuotantoa ennustamme. Tuulettomilla hetkill\xe4 kulutettavan s\xe4hk\xf6n ostamme p\xf6rssist\xe4, jolloin s\xe4hk\xf6n alkuper\xe4 on yhdistelm\xe4 kaikkia tuotantol\xe4hteit\xe4, jotka tuottavat s\xe4hk\xf6\xe4 Suomen s\xe4hk\xf6verkkoon.                      ")),l.a.createElement("div",{className:k()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(42),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Kulutuksen siirt\xe4minen tuulisille tunneille"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Miten me autamme sinua pienent\xe4m\xe4\xe4n s\xe4hk\xf6laskuasi ja hiilijalanj\xe4lke\xe4si?"),l.a.createElement("p",{className:"m-0"},"Tuotamme sinulle selkeit\xe4 kehotuksia milloin halpaa s\xe4hk\xf6\xe4 kannattaa kuluttaa. Annamme sinulle joka p\xe4iv\xe4 nelj\xe4n seuraavan p\xe4iv\xe4n ennusteen. Mit\xe4 l\xe4hemp\xe4n\xe4 nykyhetke\xe4, sen tarkempi ennuste on. Ennusteen p\xe4iv\xe4 1 (huominen) on aina tarkin, sille annamme tuntikohtaiset ohjeet s\xe4hk\xf6nkulutukseen. P\xe4iv\xe4lle 2 kerromme kerromme todenn\xe4k\xf6isesti parhaimman kulutusajankohdan. P\xe4iv\xe4t 3 ja 4 ovat ep\xe4tarkempia, osaamme sanoa tulevatko n\xe4m\xe4 p\xe4iv\xe4t olemaan tuulisia vai eiv\xe4t.")),l.a.createElement("div",{className:k()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(43),alt:"Features split 02",width:528,height:396})))))))};Z.defaultProps=X;var _=Z,ee=Object(M.a)({},S.defaults),te=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,r=e.hasBgColor,o=e.invertColor,c=e.pushLeft,m=Object(u.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),d=k()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",o&&"invert-color",t),v=k()("testimonial-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),h=k()("tiles-wrap",c&&"push-left");return l.a.createElement("section",Object.assign({},m,{className:d}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(Q,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:h},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};te.defaultProps=ee;var ae=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,s=Object(u.a)(e,["className","children","labelHidden","id"]),r=k()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},s,{className:r,htmlFor:n}),a)};ae.defaultProps={children:null,labelHidden:!1,id:null};var ie=ae,le=function(e){var t=e.children,a=e.className,i=e.status,n=Object(u.a)(e,["children","className","status"]),s=k()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},n,{className:s}),t)};le.defaultProps={children:null,status:!1};var ne=le,se=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,s=e.type,r=e.name,o=e.status,c=e.disabled,m=e.value,d=e.formGroup,v=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,E=Object(u.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),g=k()(d&&""!==d&&("desktop"===d?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),N=k()("form-input",h&&"form-input-".concat(h),o&&"form-".concat(o),t),j="textarea"===s?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(ie,{labelHidden:n,id:E.id},i),l.a.createElement("div",{className:g},l.a.createElement(j,Object.assign({},E,{type:"textarea"!==s?s:null,className:N,name:r,disabled:c,value:m,placeholder:p,rows:"textarea"===s?b:null})),a),f&&l.a.createElement(ne,{status:o},f))};se.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var re=a(25),oe=a.n(re),ce=Object(M.a)({},P.defaults,{split:!1}),me=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,r=e.hasBgColor,o=e.invertColor,c=e.split,m=Object(u.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),d=k()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",o&&"invert-color",t),v=k()("cta-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider",c&&"cta-split");return l.a.createElement("section",Object.assign({},m,{className:d}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"Tilaa uutiskirjeemme")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(oe.a,{action:"https://github.us9.list-manage.com/subscribe/post?u=f9760cea1ace436f629cc3d4b&id=a3db93a737",fields:[{name:"EMAIL",placeholder:"s\xe4hk\xf6postiosoitteesi",type:"email",required:!0}],messages:{sending:"L\xe4hetet\xe4\xe4n...",success:"Kiitos tilauksesta!",error:"Virhe j\xe4rjestelm\xe4ss\xe4.",empty:"Kirjoita s\xe4hk\xf6postiosoite kentt\xe4\xe4n.",duplicate:"T\xe4m\xe4 s\xe4hk\xf6postiosoite on jo tilaajalistalla",button:"Tilaa"},className:"form-input"})))))};me.defaultProps=ce;var ue=me,de=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,null),l.a.createElement($,null),l.a.createElement(_,{invertMobile:!0,topDivider:!0,imageFill:!0}),l.a.createElement(ue,{split:!0}))};g.a.initialize("G-YKQ6FGRGT3");var ve=function(){var e=Object(i.useRef)(),t=Object(m.useLocation)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),l.a.createElement(E,{ref:e,children:function(){return l.a.createElement(m.Switch,null,l.a.createElement(d,{exact:!0,path:"/",component:de,layout:B}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49),Object(r.createBrowserHistory)();s.a.render(l.a.createElement(c.a,{basename:"/landing-page"},l.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e1534447.chunk.js.map