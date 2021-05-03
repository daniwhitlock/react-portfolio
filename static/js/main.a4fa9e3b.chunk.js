(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e,t,a){},31:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=31},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),i=a.n(s),l=(a(24),a(8)),r=a(2),o=a(0);var j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("header",{className:"flex-row px-1 header",children:[Object(o.jsx)("h2",{className:"logo",children:Object(o.jsx)("a",{href:"/",children:"Dani Whitlock"})}),Object(o.jsx)("nav",{className:"header-nav navbar",children:Object(o.jsxs)("ul",{className:"flex-row nav-list",children:[Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(l.b,{className:"header-link",to:"/about",children:"About"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(l.b,{className:"header-link",to:"/portfolio",children:"Portfolio "})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(l.b,{className:"header-link",to:"/contact",children:"Contact"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{className:"header-link",href:"https://drive.google.com/file/d/16tIyVihzH_2PJ5zbfHivb2_yVuslX0Hp/view?usp=sharing",target:"_blank",children:"Resume "})})]})})]}),Object(o.jsx)("div",{className:"hero"})]})},m=a.p+"static/media/dani.a15f46a3.jpg";var d=function(){return Object(o.jsxs)("section",{className:"section-header",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsxs)("div",{className:"about-flex-container",children:[Object(o.jsx)("div",{className:"image-holder",children:Object(o.jsx)("img",{src:m,className:"profilepic",alt:"profilepic"})}),Object(o.jsx)("div",{className:"bio",children:Object(o.jsx)("p",{children:"I enjoy taking complex problems and turning them into visually appealing user-friendly designs. Information is powerful. How it is presented, even more so. When I am not working, you will most likely find me doing some kind of project, puzzle, or spending time with my family."})})]})]})},b=function(){var e={name:"Tech It Up",github:"https://github.com/daniwhitlock/tech-blog",deployment:"https://salty-woodland-41746.herokuapp.com/"}.filter();return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex-row",children:e.map((function(e,t){return Object(o.jsx)("img",{src:a(31)("./".concat(t,".jpg")),alt:e.name,className:"img-thumbnail mx-1"},e.name)}))})})};var h=function(e){return console.log(e),Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:e.name}),Object(o.jsx)(b,{})]})},u=a(10),x=a(15),O=a(16);var f=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(O.a)(s,2),l=i[0],r=i[1],j=a.name,m=a.email,d=a.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);r(t?"":"Your email is invalid.")}else e.target.value.length?r(""):r("".concat(e.target.name," is required."));l||(n(Object(x.a)(Object(x.a)({},a),{},Object(u.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(o.jsxs)("section",{className:"section-header",children:[Object(o.jsx)("h2",{children:"Contact me"}),Object(o.jsx)("div",{className:"contact-padding",children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",a)},children:[Object(o.jsxs)("div",{className:"form-padding",children:[Object(o.jsx)("label",{className:"contact-label",htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:j,onBlur:b})]}),Object(o.jsxs)("div",{className:"form-padding",children:[Object(o.jsx)("label",{className:"contact-label",htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:b})]}),Object(o.jsxs)("div",{className:"form-padding",children:[Object(o.jsx)("label",{className:"contact-label",htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:b})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-message",children:l})}),Object(o.jsx)("button",{className:"button",type:"submit",children:"Submit"})]})})]})};var p=function(){return Object(o.jsx)("section",{className:"footer",children:Object(o.jsxs)("h2",{className:"footer-words",children:["In a world where you can be anything","\n",Object(o.jsx)("span",{className:"footer-span",children:"Be kind. Be brave. Be true."})]})})};a(32),a(33);var g=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(r.a,{path:"/portfolio",component:h}),Object(o.jsx)(r.a,{path:"/contact",component:f}),Object(o.jsx)(r.a,{path:"/",component:d})]}),Object(o.jsx)(p,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.a4fa9e3b.chunk.js.map