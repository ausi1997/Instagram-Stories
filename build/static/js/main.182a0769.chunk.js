(this["webpackJsonpinstagram-stories"]=this["webpackJsonpinstagram-stories"]||[]).push([[0],{29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),o=n(21),i=n.n(o),l=(n(29),n(2)),r=n(4),j=n(3),u=n(7),d=n.n(u),h=function(){var e=Object(s.useRef)(null),t=Object(s.useState)(""),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(s.useState)([]),u=Object(l.a)(i,2),h=u[0],b=u[1],p=Object(r.e)(),f=Object(s.useContext)(w),O=f.state,g=f.dispatch;Object(s.useEffect)((function(){d.a.Modal.init(e.current)}),[]);return Object(c.jsxs)("nav",{children:[Object(c.jsxs)("div",{className:"nav-wrapper white",children:[Object(c.jsx)("a",{href:"/",className:"brand-logo left",children:"Instagram"}),Object(c.jsx)("ul",{id:"nav-mobile",className:"right",children:O?[Object(c.jsx)(j.b,{children:Object(c.jsx)("li",{children:Object(c.jsx)("i",{className:"material-icons modal-trigger","data-target":"modal1",style:{color:"black"},children:"search"})},"1")}),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/",children:"Home"})},"2"),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/profile",children:"Profile"})},"3"),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/create",children:"Create"})},"4"),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("button",{class:"btn waves-effect waves-light #64b5f6 blue lighten-2",type:"submit",name:"action",onClick:function(){localStorage.clear(),g({type:"CLEAR"}),p.push("/login")},children:"Logout"})]},"5")]:[Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/login",children:"Login"})}),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/signup",children:"Signup"})})]})]}),Object(c.jsxs)("div",{id:"modal1",class:"modal",ref:e,style:{color:"black"},children:[Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("input",{type:"text",placeholder:"search",value:a,onChange:function(e){return t=e.target.value,o(t),void fetch("/user/search-users",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){console.log(e),b(e)}));var t}}),Object(c.jsx)("ul",{className:"collection",children:h&&h.map((function(t){return Object(c.jsx)(j.b,{to:t._id!==O._id?"/profile/"+t._id:"/profile",onClick:function(){d.a.Modal.getInstance(e.current).close(),o("")},children:Object(c.jsx)("li",{className:"collection-item",children:t&&t.username})})}))})]}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsx)("button",{className:"modal-close waves-effect waves-green btn-flat",onClick:function(){o("")},children:"close"})})]})]})},b=(n(34),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(s.useContext)(w),i=o.state;o.dispatch;Object(s.useEffect)((function(){fetch("/post/view",{headers:{Authorization:"Bearer"+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)})).catch((function(e){console.log(e)}))}),[]);return Object(c.jsx)("div",{className:"home",children:n&&n.map((function(e){return Object(c.jsxs)("div",{className:"home-card",children:[Object(c.jsx)("h5",{children:Object(c.jsx)(j.b,{to:e.postedBy._id!==i._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.username})}),Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:e.photo})}),Object(c.jsxs)("div",{className:"card-content",children:[e.likes.includes(i._id)?Object(c.jsx)(j.b,{children:Object(c.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/post/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));a(t)}));var t},children:"thumb_down"})}):Object(c.jsx)(j.b,{children:Object(c.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/post/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)}));var t},children:"thumb_up"})}),Object(c.jsx)("h6",{style:{fontStyle:"italic"},children:e.likes.length+" likes"}),Object(c.jsx)("h6",{style:{fontFamily:"cursive"},children:e.title}),Object(c.jsx)("p",{style:{fontStyle:"italic"},children:e.body}),Object(c.jsx)("h6",{style:{fontFamily:"cursive"},children:"Comments"}),e.comment.map((function(e){return Object(c.jsxs)("h6",{style:{fontStyle:"italic"},children:[Object(c.jsxs)("span",{style:{fontWeight:"bold",fontFamily:"cursive"},children:[e.postedBy.firstName,"  "]}),e.text]})})),Object(c.jsx)("form",{onSubmit:function(t){var c,s;t.preventDefault(),c=t.target[0].value,s=e._id,fetch("/post/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({postId:s,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));a(t)}))},children:Object(c.jsx)("input",{type:"text",placeholder:"add a comment..."})})]})]})}))})}),p=function(){var e=Object(s.useContext)(w),t=(e.state,e.dispatch),n=Object(r.e)(),a=Object(s.useState)(""),o=Object(l.a)(a,2),i=o[0],u=o[1],h=Object(s.useState)(""),b=Object(l.a)(h,2),p=b[0],f=b[1];return Object(c.jsx)("div",{className:"mycard",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h2",{children:"Instagram"}),Object(c.jsx)("input",{type:"text",placeholder:"email",value:i,onChange:function(e){return u(e.target.value)}}),Object(c.jsx)("input",{type:"password",placeholder:"password",value:p,onChange:function(e){return f(e.target.value)}}),Object(c.jsx)("button",{class:"btn waves-effect waves-light #64b5f6 blue lighten-2",type:"submit",name:"action",onClick:function(){/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(i)?fetch("/user/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:p})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?(d.a.toast({html:e.message,classes:"#e53935 red darken-1"}),n.push("/login")):null==e.token||void 0==e.token?(d.a.toast({html:e.message,classes:"#e53935 red darken-1"}),u(""),f(""),n.push("/login")):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),d.a.toast({html:e.message,classes:"#4caf50 green"}),n.push("/"))})):d.a.toast({html:"Invalid email...",classes:"#e53935 red darken-1"})},children:"Login"}),Object(c.jsx)("p",{children:"Do not have account?"}),Object(c.jsx)(j.b,{to:"/signup",children:"click here"})]})})},f=function(){var e=Object(r.e)(),t=Object(s.useState)(""),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(s.useState)(""),u=Object(l.a)(i,2),h=u[0],b=u[1],p=Object(s.useState)(""),f=Object(l.a)(p,2),O=f[0],g=f[1],m=Object(s.useState)(""),x=Object(l.a)(m,2),y=x[0],v=x[1],w=Object(s.useState)(""),S=Object(l.a)(w,2),C=S[0],N=S[1];return Object(c.jsx)("div",{className:"mycard",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h2",{children:"Instagram"}),Object(c.jsx)("input",{type:"text",placeholder:"firstname",value:a,onChange:function(e){return o(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"lastname",value:h,onChange:function(e){return b(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"email",value:O,onChange:function(e){return g(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"username",value:C,onChange:function(e){return N(e.target.value)}}),Object(c.jsx)("input",{type:"password",placeholder:"password",value:y,onChange:function(e){return v(e.target.value)}}),Object(c.jsx)("button",{class:"btn waves-effect waves-light #64b5f6 blue lighten-2",type:"submit",name:"action",onClick:function(){/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(O)?fetch("/user/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:a,lastName:h,email:O,username:C,password:y})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?d.a.toast({html:t.message,classes:"#e53935 red darken-1"}):1==t.status?(d.a.toast({html:t.message,classes:"#4caf50 green"}),e.push("/login")):(d.a.toast({html:t.message,classes:"#4caf50 green"}),e.push("/signup"))})):d.a.toast({html:"Invalid email...",classes:"#e53935 red darken-1"})},children:"Signup"}),Object(c.jsx)("p",{children:"Already an account?"}),Object(c.jsx)(j.b,{to:"/login",children:"click here"})]})})},O=n(6),g=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(s.useContext)(w),i=o.state,r=o.dispatch,u=Object(s.useState)(""),d=Object(l.a)(u,2),h=d[0],b=d[1];Object(s.useEffect)((function(){fetch("/post/mypost",{headers:{Authorization:"Bearer"+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.myposts),console.log(n)}))}),[]);Object(s.useEffect)((function(){if(h){var e=new FormData;e.append("file",h),e.append("upload_preset","instagram-clone"),e.append("cloud_name","dj0jmz1eg"),fetch("https://api.cloudinary.com/v1_1/dj0jmz1eg/image/upload",{method:"post",body:e}).then((function(e){e.json().then((function(e){console.log(e),fetch("/user/updatePic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({profilePic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(O.a)(Object(O.a)({},i),{},{profilePic:e.profilePic}))),r({type:"PDATEPIC",payload:e.profilePic}),window.location.reload()}))}))})).catch((function(e){console.log(e)}))}}),[h]);return Object(c.jsxs)("div",{style:{margin:"auto",maxWidth:"650px"},children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"2px solid black"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:i?i.profilePic:"loading..."}),Object(c.jsxs)("div",{className:"file-field input-field",children:[Object(c.jsxs)("div",{className:"btn waves-effect waves-light #64b5f6 blue lighten-2",children:[Object(c.jsx)("span",{children:"Update"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void b(t);var t}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:i?i.firstName+" "+i.lastName:"loading..."}),Object(c.jsx)("h5",{children:i?i.username:"loading..."}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"115%"},children:[Object(c.jsxs)("h5",{children:[n&&n.length," posts"]}),Object(c.jsxs)("h5",{children:[i?i.followers.length:0," followers"]}),Object(c.jsxs)("h5",{children:[i?i.followings.length:0," followings"]})]})]})]}),Object(c.jsx)("div",{className:"gallery",children:n&&n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j.b,{children:Object(c.jsx)("i",{className:"small material-icons",onClick:function(){var t;t=e._id,fetch("/post/delete/".concat(t),{method:"delete",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));a(t)}))},children:"delete_forever"})}),Object(c.jsx)("img",{className:"item",src:e.photo,alt:e.title})]})}))})]})},m=function(){var e=Object(r.e)(),t=Object(s.useState)(""),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(s.useState)(""),j=Object(l.a)(i,2),u=j[0],h=j[1],b=Object(s.useState)(""),p=Object(l.a)(b,2),f=p[0],O=p[1],g=Object(s.useState)(""),m=Object(l.a)(g,2),x=m[0],y=m[1];Object(s.useEffect)((function(){x&&fetch("/post/create",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({title:a,body:u,pic:x})}).then((function(e){return e.json()})).then((function(t){t.error?d.a.toast({html:t.message,classes:"#e53935 red darken-1"}):(d.a.toast({html:t.message,classes:"#4caf50 green"}),e.push("/"))}))}),[x]);return Object(c.jsxs)("div",{className:"card input-field",children:[Object(c.jsx)("input",{type:"text",placeholder:"title",value:a,onChange:function(e){return o(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"body",value:u,onChange:function(e){return h(e.target.value)}}),Object(c.jsxs)("div",{className:"file-field input-field",children:[Object(c.jsxs)("div",{className:"btn",children:[Object(c.jsx)("span",{children:"Upload Image"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return O(e.target.files[0])}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(c.jsx)("button",{class:"btn waves-effect waves-light #64b5f6 blue lighten-2",type:"submit",name:"action",onClick:function(){return function(){var e=new FormData;e.append("file",f),e.append("upload_preset","instagram-clone"),e.append("cloud_name","dj0jmz1eg"),fetch("https://api.cloudinary.com/v1_1/dj0jmz1eg/image/upload",{method:"post",body:e}).then((function(e){e.json().then((function(e){console.log(e.url),y(e.url),console.log(x),console.log(a)}))})).catch((function(e){console.log(e)}))}()},children:"Create Post"})]})},x=n(23),y=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(s.useContext)(w),i=(o.state,o.dispatch),j=Object(r.f)().userid,u=Object(s.useState)(!0),d=Object(l.a)(u,2),h=d[0],b=d[1];Object(s.useEffect)((function(){fetch("/user/profile/".concat(j),{headers:{Authorization:"Bearer"+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[]);return Object(c.jsxs)("div",{style:{margin:"auto",maxWidth:"650px"},children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"2px solid black"},children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:n&&n.user.profilePic})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:n&&n.user.firstName+" "+n.user.lastName}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"115%"},children:[Object(c.jsxs)("h5",{children:[n&&n.posts.length," posts"]}),Object(c.jsxs)("h5",{children:[" ",n&&n.user.followers.length," followers"]}),Object(c.jsxs)("h5",{children:[n&&n.user.followings.length," followings"]})]}),h?Object(c.jsx)("button",{style:{margin:"10px"},class:"btn waves-effect waves-light #64b5f6 blue lighten-2",type:"submit",name:"action",onClick:function(){fetch("/user/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({followId:j})}).then((function(e){return e.json()})).then((function(e){console.log(e),i({type:"UPDATE",payload:{followings:e.followings,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){return Object(O.a)(Object(O.a)({},t),{},{user:Object(O.a)(Object(O.a)({},t.user),{},{followers:[].concat(Object(x.a)(t.user.followers),[e._id])})})})),b(!1)}))},children:"Follow"}):Object(c.jsx)("button",{style:{margin:"10px"},class:"btn waves-effect waves-light #64b5f6 blue lighten-2",type:"submit",name:"action",onClick:function(){fetch("/user/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer"+localStorage.getItem("jwt")},body:JSON.stringify({followId:j})}).then((function(e){return e.json()})).then((function(e){console.log(e),i({type:"UPDATE",payload:{followings:e.followings,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){var n=t.user.followers.filter((function(t){return t!=e._id}));return Object(O.a)(Object(O.a)({},t),{},{user:Object(O.a)(Object(O.a)({},t.user),{},{followers:n})})})),b(!0)}))},children:"UnFollow"})]})]}),Object(c.jsx)("div",{className:"gallery",children:n&&n.posts.map((function(e){return Object(c.jsx)("img",{className:"item",src:e.photo,alt:e.title})}))})]})},v=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(O.a)(Object(O.a)({},e),{},{followers:t.payload.followers,followings:t.payload.followings}):"UPDATEPIC"==t.type?Object(O.a)(Object(O.a)({},e),{},{profilePic:t.payload}):e},w=Object(s.createContext)(),S=function(){var e=Object(r.e)(),t=Object(s.useContext)(w),n=(t.state,t.dispatch);return Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.push("/login")}),[]),Object(c.jsxs)("switch",{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",children:Object(c.jsx)(b,{})}),Object(c.jsx)(r.a,{path:"/login",children:Object(c.jsx)(p,{})}),Object(c.jsx)(r.a,{path:"/signup",children:Object(c.jsx)(f,{})}),Object(c.jsx)(r.a,{exact:!0,path:"/profile",children:Object(c.jsx)(g,{})}),Object(c.jsx)(r.a,{path:"/create",children:Object(c.jsx)(m,{})}),Object(c.jsx)(r.a,{path:"/profile/:userid",children:Object(c.jsx)(y,{})})]})};var C=function(){var e=Object(s.useReducer)(v,null),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)(w.Provider,{value:{state:n,dispatch:a},children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(h,{}),Object(c.jsx)(S,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),N()}},[[35,1,2]]]);
//# sourceMappingURL=main.182a0769.chunk.js.map