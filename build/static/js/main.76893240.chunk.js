(this.webpackJsonpruter=this.webpackJsonpruter||[]).push([[0],{198:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(83),s=n.n(a),j=(n(94),n.p,n(47),n(1));var i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},o=n(2),l=n(3),u=n(8),b=n(9),h=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"home",children:Object(j.jsx)("p",{children:"THOBEJANE MPELEMANE SIMON"})})}}]),n}(c.Component),O=n(16),d=n(5),x=n(10),m=n(11),f=function(){var e=Object(c.useState)(7),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(m.a)(a,2),i=s[0],o=s[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"contact"}),Object(j.jsx)("h4",{children:"phone: 0769982537"}),Object(j.jsx)("h4",{children:"email: sea6580@gmail.com"}),Object(j.jsx)("h4",{children:"address: P O BOX 616 GROOTHOEK 0628"}),Object(j.jsxs)("p",{children:["i am default value ",n]}),Object(j.jsx)("button",{onClick:function(){r(10)},children:" Count value "}),Object(j.jsx)("button",{onClick:function(){o([].concat(Object(x.a)(i),[{uid:i.length,name:"i am item number :"+i.length}]))},children:" Array items"}),Object(j.jsx)("ul",{children:i.map((function(e){return Object(j.jsx)("li",{children:e.name},e.uid)}))})]})},p=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Education",children:[Object(j.jsxs)("h3",{children:[Object(j.jsx)("i",{class:"fas fa-layer-group fa-1x"}),"short courses currently doing"]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"java"}),Object(j.jsx)("li",{children:"java Script"}),Object(j.jsx)("li",{children:"HTML"})]})]}),Object(j.jsxs)("div",{className:"Social",children:[Object(j.jsx)("h2",{children:"Social"}),Object(j.jsx)("i",{className:"fab fa-facebook-square fa-2x"})," ",Object(j.jsx)("h4",{children:"Facebook"}),Object(j.jsx)("p",{children:"King See Thobejane"}),Object(j.jsx)("i",{className:"fab fa-twitter fa-1x"}),Object(j.jsx)("h4",{children:"Twitter"}),Object(j.jsx)("p",{children:"@King_See"})]})]})},g=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={arrList:[{surname:"thobejane",_name:"simon",age:51,location:"madisha ditoro"},{surname:"Kekana",_name:"mpho",age:15,location:"polokwane"},{surname:"leolo",_name:"tumelo",age:20,location:"moletlane"}]},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"simon",children:[Object(j.jsx)("h1",{children:"Information "}),Object(j.jsx)("h3",{children:"surnamr  name age location "}),Object(j.jsx)("h5",{children:"========================================= "}),Object(j.jsxs)("h5",{children:[this.state.arrList.map((function(e){return Object(j.jsx)("li",{children:e.surname+"    :   "+e._name+"    :   "+e.age+"    :   "+e.location})}))," "]}),Object(j.jsx)("h5",{children:"========================================= "})]})}},{key:"getSurname",value:function(e){return e>=18?"You are old enough to code":"You are not old enough to code"}}]),n}(c.Component),v=(n(89),n(34),function(e){var t=e.AddUsers,n=Object(c.useState)(""),r=Object(m.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),o=Object(m.a)(i,2),l=o[0],u=o[1],b=Object(c.useState)(""),h=Object(m.a)(b,2),O=h[0],d=h[1],x=Object(c.useState)(""),f=Object(m.a)(x,2),p=f[0],g=f[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a,l,O,p)},children:[Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)},placeholder:"enter your name",autoFocus:!0}),Object(j.jsx)("input",{type:"text",value:l,onChange:function(e){return u(e.target.value)},placeholder:"enter your surname",autoFocus:!0}),Object(j.jsx)("input",{type:"text",value:O,onChange:function(e){return d(e.target.value)},placeholder:"enter your location",autoFocus:!0}),Object(j.jsx)("input",{type:"text",value:p,onChange:function(e){return g(e.target.value)},placeholder:"enter your age",autoFocus:!0}),Object(j.jsx)("button",{type:"submit",children:"add User"})]})})}),y=n(27),S=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];y.a({_name:y.b().required("Please enter your name"),_surname:y.b().required("Please enter your surname"),_location:y.b().required("Please enter your name"),_age:y.b().required("enter age")});return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v,{AddUsers:function(e,t,c,a){r([].concat(Object(x.a)(n),[{uid:n.length,_name:e,_surname:t,_location:c,_age:a}]))}}),Object(j.jsx)("div",{className:"output",children:Object(j.jsx)(O.b,{to:"./UserInfo",children:n.map((function(e){return Object(j.jsxs)("p",{children:[e.uid+1," :  ",e._name,"  ",e._surname,"   ",e._location,"   ",e._age]})}))})})]})},_=function(){return Object(j.jsxs)(j.Fragment,{children:["if () ",Object(j.jsx)("p",{children:"helo "})]})},F=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O.a,{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{className:"homeMenu",children:[Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"./",children:"home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"./Userspage",children:"users"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"./About",children:"about"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"./Profile",children:"profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"./Register2",children:"Register2"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"./UserInfo",children:"UserInfo"})})]}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/Profile",children:Object(j.jsx)(f,{})}),Object(j.jsx)(d.a,{path:"/About",children:Object(j.jsx)(p,{})}),Object(j.jsx)(d.a,{path:"/Userspage",children:Object(j.jsx)(g,{})}),Object(j.jsx)(d.a,{path:"/Register2",children:Object(j.jsx)(S,{})}),Object(j.jsx)(d.a,{path:"/UsreInfo",children:Object(j.jsx)(_,{})}),Object(j.jsx)(d.a,{path:"/",children:Object(j.jsx)(h,{})})]})]})})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),i()},47:function(e,t,n){},94:function(e,t,n){}},[[198,1,2]]]);
//# sourceMappingURL=main.76893240.chunk.js.map