(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n.n(i),c=n(3),r=n(2),s=(n(10),n(1)),o=(n(11),n(0)),u=function(e){var t=e.images,n=e.step,i=e.frameSize,a=e.itemWidth,u=e.animationDuration,l=e.infinite,m=Object(r.useState)({step:n,frameSize:i,itemWidth:a,animationDuration:u,infinite:l,currentIndex:0}),j=Object(c.a)(m,2),b=j[0],p=j[1];return Object(o.jsxs)("div",{className:"carousel",children:[Object(o.jsxs)("div",{className:"carousel__wrapper",children:[Object(o.jsx)("button",{className:"carousel__button",type:"button",onClick:function(){var e=b.currentIndex-b.step;e<0&&(e=b.infinite?t.length-b.step:0),p((function(t){return Object(s.a)(Object(s.a)({},t),{},{currentIndex:e})}))},children:"Prev"}),Object(o.jsx)("div",{className:"carousel__list__wrapper",style:{width:"".concat(b.itemWidth*b.frameSize,"px")},children:Object(o.jsx)("ul",{className:"carousel__list",style:{transform:"translateX(".concat(-b.currentIndex*b.itemWidth,"px)"),transition:"transform ".concat(b.animationDuration,"s ease")},children:t.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:e,alt:"".concat(t),className:"carousel__img",style:{width:"".concat(b.itemWidth,"px")}})},e)}))})}),Object(o.jsx)("button",{className:"carousel__button",type:"button","data-cy":"next",onClick:function(){var e=b.currentIndex+b.step;e>=t.length-b.frameSize&&(e=b.infinite?e+b.frameSize-t.length:t.length-b.frameSize),p((function(t){return Object(s.a)(Object(s.a)({},t),{},{currentIndex:e})}))},children:"Next"})]}),Object(o.jsxs)("label",{children:["Frame size is ".concat(b.frameSize," "),Object(o.jsx)("input",{type:"range",min:"2",max:"5",value:b.frameSize,onChange:function(e){var t=+e.target.value;p((function(e){return Object(s.a)(Object(s.a)({},e),{},{frameSize:t})}))}})]}),Object(o.jsxs)("label",{children:["Step number is ".concat(b.step," "),Object(o.jsx)("input",{type:"range",min:"2",max:"5",value:b.step,onChange:function(e){var t=+e.target.value;p((function(e){return Object(s.a)(Object(s.a)({},e),{},{step:t})}))}})]}),Object(o.jsxs)("label",{children:["Itemwidth is ".concat(b.itemWidth," "),Object(o.jsx)("input",{type:"range",min:"130",max:"200",value:b.itemWidth,onChange:function(e){var t=+e.target.value;p((function(e){return Object(s.a)(Object(s.a)({},e),{},{itemWidth:t})}))}})]}),Object(o.jsxs)("label",{children:["Animation duration ".concat(b.animationDuration,"s "),Object(o.jsx)("input",{type:"range",min:"1",max:"3",value:b.animationDuration,onChange:function(e){var t=+e.target.value;p((function(e){return Object(s.a)(Object(s.a)({},e),{},{animationDuration:t})}))}})]}),Object(o.jsxs)("label",{children:["Infinite loop ",Object(o.jsx)("input",{type:"checkbox",onChange:function(){p((function(e){return Object(s.a)(Object(s.a)({},e),{},{infinite:!e.infinite})}))},checked:b.infinite})]})]})},l=function(){var e=Object(r.useState)(["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]),t=Object(c.a)(e,1)[0];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{className:"title","data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(o.jsx)(u,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1,infinite:!1})]})};a.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a7743ba7.chunk.js.map