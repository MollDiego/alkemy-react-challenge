(this["webpackJsonpalkemy-react-challenge"]=this["webpackJsonpalkemy-react-challenge"]||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){},234:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),s=a.n(c),i=(a(112),a(113),a(28)),o=a(2),u=a(1),l=n.a.createContext(),d=n.a.createContext(),h={isAuthenticated:!1,token:null},j=localStorage.getItem("token");function b(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("token",t.payload.token),Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:!0,token:t.payload.token});case"LOGOUT":return localStorage.clear(),Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:!1,token:null});default:return e}}function p(e){var t=e.children,a=n.a.useReducer(b,h),r=Object(i.a)(a,2),c=r[0],s=r[1];return Object(u.jsx)(l.Provider,{value:c,children:Object(u.jsx)(d.Provider,{value:s,children:t})})}function m(){var e=n.a.useContext(d);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}j&&(h.isAuthenticated=!0,h.token=j);var x=a(38),O=a(5),v=(a(115),a(32)),f=a.n(v),w=a(45),k=a(46),y=a.n(k),g=a(19),S=a(29);function C(){var e=S.a().shape({mail:S.b().email("Email Invalido").required("Email requerido"),password:S.b().min(2,"Muy corta").max(50,"Muy larga").required("Password requerida")}),t=m();function a(){return(a=Object(w.a)(f.a.mark((function e(a){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("http://challenge-react.alkemy.org/",{email:a.mail,password:a.password});case 3:if(200===(r=e.sent).status){e.next=6;break}throw new Error("Ocurrio un error");case 6:if(r.data){e.next=8;break}throw new Error("Empty Token");case 8:if(3===r.data.token.split(".").length){e.next=11;break}throw new Error("Malformed Token");case 11:n=r.data.token,t({type:"LOGIN",payload:{token:n}}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Superhero"}),Object(u.jsx)(g.c,{initialValues:{mail:"",password:""},validationSchema:e,onSubmit:function(e){return function(e){return a.apply(this,arguments)}(e)},children:function(e){var t=e.errors,a=e.touched;return Object(u.jsxs)(g.b,{children:[Object(u.jsx)(g.a,{name:"mail",type:"email",placeholder:"Email"}),t.mail&&a.mail?Object(u.jsx)("div",{children:t.mail}):null,Object(u.jsx)(g.a,{name:"password",type:"password",placeholder:"Password"}),t.password&&a.password?Object(u.jsx)("div",{children:t.password}):null,Object(u.jsx)("button",{type:"submit",children:"Submit"})]})}})]})}function E(){return Object(u.jsx)("div",{children:"Es el Home"})}var A=a(245),q=a(243),I=a(246),N=a(244);a(234);function P(){var e=m();return Object(u.jsx)(A.a,{bg:"primary",variant:"dark",children:Object(u.jsxs)(q.a,{children:[Object(u.jsx)(A.a.Brand,{href:"/",children:"Super H\xe9roes"}),Object(u.jsxs)(I.a,{className:"justify-content-end",children:[Object(u.jsx)(x.b,{exact:!0,className:"link",activeClassName:"active",to:"/",children:"Home"}),Object(u.jsx)(x.b,{className:"link",activeClassName:"active",to:"/searcher",children:"Buscador"}),Object(u.jsx)(N.a,{size:"sm",variant:"warning",type:"button",onClick:function(){return e({type:"LOGOUT"})},children:"Cerrar sesi\xf3n"})]})]})})}function B(){var e=S.a().shape({search:S.b().min(2,"Ingrese al menos 3 caracteres para la busqueda").required("campo requerido para la Busqueda")});function t(){return(t=Object(w.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://superheroapi.com/api/4912475925446355",e.next=3,y.a.get("".concat("https://superheroapi.com/api/4912475925446355","/search/").concat(t.search));case 3:200===(a=e.sent).status&&console.log(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("div",{children:["es el Buscador",Object(u.jsx)(g.c,{validationSchema:e,initialValues:{search:""},onSubmit:function(e){!function(e){t.apply(this,arguments)}(e)},children:function(e){var t=e.errors,a=e.touched;return Object(u.jsxs)(g.b,{children:[Object(u.jsx)(g.a,{name:"search"}),Object(u.jsx)(N.a,{type:"submit",size:"sm",variant:"primary",children:"Buscar"}),t.search&&a.search&&Object(u.jsx)("div",{className:"text-danger",children:t.search})]})}})]})}var L=function(){return function(){var e=n.a.useContext(l);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e}().isAuthenticated?Object(u.jsxs)(x.a,{children:[Object(u.jsx)(P,{}),Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{exact:!0,path:"/",children:Object(u.jsx)(E,{})}),Object(u.jsx)(O.a,{path:"/searcher",children:Object(u.jsx)(B,{})})]})]}):Object(u.jsx)(C,{})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,247)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{children:Object(u.jsx)(L,{})})}),document.getElementById("root")),T()}},[[241,1,2]]]);
//# sourceMappingURL=main.b08e3e21.chunk.js.map