(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{326:function(t,i,e){t.exports={Container:"SlideShowModal_Container__1pAQu",SliderContainer:"SlideShowModal_SliderContainer__1ejTn",Title:"SlideShowModal_Title__2W1oB",LightenTitle:"SlideShowModal_LightenTitle__2JIL5"}},327:function(t,i,e){t.exports={Arrow:"ArrowBtns_Arrow__2wu-Y",ArrowLeft:"ArrowBtns_ArrowLeft__1r1Zg",ArrowRight:"ArrowBtns_ArrowRight__2iWqt",ArrowTop:"ArrowBtns_ArrowTop__d2XIy",ArrowBottom:"ArrowBtns_ArrowBottom__1szoq"}},328:function(t,i,e){t.exports={Slider:"Slider_Slider__1okMe",Slides:"Slider_Slides__K4_66",Slide:"Slider_Slide__1QSs3",Dot:"Slider_Dot__3yYwF"}},329:function(t,i,e){"use strict";e.r(i);var r=e(0),a=e(12),o=e(3),n=e(326),c=e.n(n),s={Breyo:[e.p+"static/media/breyoGif1.8cb1761d.gif",e.p+"static/media/breyoGif2.251639bd.gif",e.p+"static/media/breyoGif3.f48b1ea1.gif"],Simplify:[e.p+"static/media/simplifyGif1.fe12ca4a.gif",e.p+"static/media/simplifyGif2.6fe6be65.gif",e.p+"static/media/simplifyGif3.1f5f9274.gif",e.p+"static/media/simplifyGif4.1413ab1d.gif",e.p+"static/media/simplifyGif5.5886d1b1.gif"],"Guitar Trainer":[e.p+"static/media/guitarGif1.dbc70d8f.gif",e.p+"static/media/guitarGif2.02bd3ca1.gif",e.p+"static/media/guitarGif3.3cd7c9e6.gif"],Notely:[e.p+"static/media/notelyGif1.890ed4e0.gif",e.p+"static/media/notelyGif2.1c6462b3.gif",e.p+"static/media/notelyGif3.029e8f7d.gif"],"PvN Strategy Game":[e.p+"static/media/pvnGif1.eedadf15.gif",e.p+"static/media/pvnGif2.c03d4b02.gif"]},l=e(327),d=e.n(l),f=function(t){var i=t.switchProj;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"".concat(d.a.Arrow," ").concat(d.a.ArrowLeft),onClick:function(){return i(!1)},children:[Object(r.jsx)("div",{className:d.a.ArrowTop}),Object(r.jsx)("div",{className:d.a.ArrowBottom})]}),Object(r.jsxs)("div",{className:"".concat(d.a.Arrow," ").concat(d.a.ArrowRight),onClick:function(){return i(!0)},children:[Object(r.jsx)("div",{className:d.a.ArrowTop}),Object(r.jsx)("div",{className:d.a.ArrowBottom})]})]})},m=e(48);var u=e(51);function j(t){return function(t){if(Array.isArray(t))return Object(m.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(u.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=e(328),p=e.n(b),w=function(t){var i=t.gifs,e=t.title,n=Object(o.useRef)(),c=Object(o.useState)(0),s=Object(a.a)(c,2),l=s[0],d=s[1];return Object(r.jsxs)("div",{className:p.a.Slider,children:[Object(r.jsx)("div",{className:p.a.Slides,ref:n,onScroll:function(){var t=Math.min(.9*window.innerWidth,550);d(Math.floor(n.current.scrollLeft/t))},children:i.map((function(t,i){return Object(r.jsx)("div",{className:"FlexC ".concat(p.a.Slide),children:Object(r.jsx)("img",{src:t,alt:e})},i)}))}),Object(r.jsx)("div",{className:"FlexC",children:j(Array(i.length)).map((function(t,i){return Object(r.jsx)("span",{style:l===i?{background:"#535353"}:null,onClick:function(){return function(t){var i=Math.min(.9*window.innerWidth,550);n.current.scrollLeft=i*t}(i)},className:p.a.Dot},i)}))})]})};i.default=function(t){var i=t.close,e=t.project,n=t.switchProj,l=Object(o.useRef)(),d=Object(o.useState)([]),m=Object(a.a)(d,2),u=m[0],j=m[1];Object(o.useEffect)((function(){j(s[e.title])}),[e]);var b="Guitar Trainer"===e.title;return Object(r.jsxs)("div",{className:"Backdrop ".concat(c.a.Container),onClick:function(t){l.current.contains(t.target)||i()},children:[Object(r.jsx)("div",{className:"".concat(c.a.Title," ").concat(b?c.a.LightenTitle:""),children:e.titleComp}),Object(r.jsxs)("div",{className:c.a.SliderContainer,ref:l,children:[Object(r.jsx)(w,{gifs:u,title:e.title}),Object(r.jsx)(f,{switchProj:n})]})]})}}}]);
//# sourceMappingURL=3.d69c454c.chunk.js.map