(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{17:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c.n(n),r=c(5),a=(c(17),c(2)),j=c(9),i=c(4),l=c(1),h=c(11),b=c(8),o=c.n(b),d=function(){var e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=c(12),O=c.n(x),m=c(0),u=function(e){var t=e.person;return Object(m.jsx)(r.b,{to:"/people/".concat(t.slug),style:"m"===t.sex?{color:"rgb(0, 71, 171)"}:{color:"rgb(255, 0, 0)"},children:t.name})},p=function(e){var t=e.person,c=Object(a.h)().slug;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("tr",{className:O()({"is-selected":c===t.slug}),children:[Object(m.jsx)("th",{children:Object(m.jsx)(u,{person:t})}),Object(m.jsx)("th",{children:t.sex}),Object(m.jsx)("th",{children:t.born}),Object(m.jsx)("th",{children:t.died}),t.father?Object(m.jsx)("th",{children:Object(m.jsx)(u,{person:t.father})}):Object(m.jsx)("th",{children:t.fatherName}),t.mother?Object(m.jsx)("th",{children:Object(m.jsx)(u,{person:t.mother})}):Object(m.jsx)("th",{children:t.motherName})]})})},f=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.useEffect)((function(){d().then((function(e){if(e){var t=e.map((function(t){var c=e.find((function(e){return t.fatherName===e.name}))||null,n=e.find((function(e){return t.motherName===e.name}))||null;return Object(j.a)(Object(j.a)({},t),{},{fatherName:t.fatherName||"--John Doe--",motherName:t.motherName||"--Jane Doe--",father:c,mother:n})}));n(t)}}))}),[]),Object(m.jsx)("div",{className:"level-item",children:Object(m.jsxs)("table",{className:"table is-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{title:"Name",children:" Name"}),Object(m.jsx)("th",{title:"sex",children:"Sex"}),Object(m.jsx)("th",{title:"born",children:"Born"}),Object(m.jsx)("th",{title:"died",children:"Died"}),Object(m.jsx)("th",{title:"father",children:"Father"}),Object(m.jsx)("th",{title:"mother",children:"Mother"})]})}),Object(m.jsx)("tbody",{children:c.map((function(e){return Object(m.jsx)(p,{person:e},e.slug)}))})]})})},v=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{className:"title has-text-centered is-uppercase",children:"Page not found"})})},N=function(){return Object(m.jsxs)("nav",{className:"is-flex is-justify-content-space-evenly",children:[Object(m.jsx)(r.c,{to:"/",className:"navbar-item",children:"Home"}),Object(m.jsx)(r.c,{to:"people",className:"navbar-item",children:"People"})]})},g=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.h)().slug;return Object(l.useEffect)((function(){d().then((function(e){n(e.find((function(e){return e.slug===s}))||null)}))}),[]),Object(m.jsx)("div",{children:c?Object(m.jsx)("div",{className:"section level-item",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsx)("div",{className:"media",children:Object(m.jsx)("div",{className:"media-content",children:Object(m.jsx)("p",{className:"title is-4",children:c.name})})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("p",{children:"Sex: ".concat(c.sex)}),Object(m.jsx)("p",{children:"Lived: ".concat(c.born," - ").concat(c.died)}),Object(m.jsx)("p",{children:"Father: ".concat(c.fatherName||"--John Doe--")}),Object(m.jsx)("p",{children:"Mother: ".concat(c.motherName||"--Jane Doe--")})]})]})})}):Object(m.jsx)("h1",{children:"Person not found"})})},y=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(N,{}),Object(m.jsx)("div",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(a.d,{children:[Object(m.jsx)(a.b,{path:"/",element:Object(m.jsx)("h1",{className:"title level-item",children:"Home Page"})}),Object(m.jsx)(a.b,{path:"home",element:Object(m.jsx)(a.a,{to:"/"})}),Object(m.jsxs)(a.b,{path:"people",children:[Object(m.jsx)(a.b,{index:!0,element:Object(m.jsx)(f,{})}),Object(m.jsx)(a.b,{path:":slug",element:Object(m.jsx)(g,{})})]}),Object(m.jsx)(a.b,{path:"/*",element:Object(m.jsx)(v,{})})]})})})]})};s.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3a6400b0.chunk.js.map