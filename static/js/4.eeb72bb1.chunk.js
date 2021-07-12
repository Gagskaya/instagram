(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[4],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var s=n(3),c=n.n(s),a=n(34),r=n(25),o=n(24),l=n(19),i=n(8);function u(){var e=c.a.useContext(r.a).firebase,t=c.a.useContext(a.a).user;return Object(i.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:Object(i.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(i.jsxs)("div",{className:"flex justify-between h-full",children:[Object(i.jsx)("div",{className:"text-gray-700 text-center flex items-center align-item cursor-pointer",children:Object(i.jsx)("h1",{className:"flex justify-center w-full",children:Object(i.jsx)(o.b,{to:l.a,"aria-label":"Instagram logo",children:Object(i.jsx)("img",{src:"/images/logo.png",alt:"instagram",className:"mt-2 w-6/12"})})})}),Object(i.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.b,{"aria-label":"Dashboard",to:l.a,children:Object(i.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),Object(i.jsx)("button",{title:"Sign Out",type:"button",onKeyDown:function(t){"Enter"===t.key&&e.auth().signOut()},onClick:function(){return e.auth().signOut()},children:Object(i.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),Object(i.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(i.jsx)(o.b,{to:"/p/".concat(t.displayName),children:Object(i.jsx)("img",{src:"/images/avatars/".concat(t.displayName,".jpg"),className:"rounded-full h-8 w-8 flex",alt:"".concat(t.displayName," profile")})})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.b,{to:l.b,children:Object(i.jsx)("button",{type:"button",className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",children:"Log In"})}),Object(i.jsx)(o.b,{to:l.e,children:Object(i.jsx)("button",{type:"button",className:"font-bold text-sm rounded text-blue-medium w-20 h-8",children:"Sign Up"})})]})})]})})})}var d=n(10),m=n.n(d),j=n(18),b=n(22),x=n(35);var p=n(60),f=n.n(p),h=function(e){var t=e.username,n=e.fullName;return t&&n?Object(i.jsxs)(o.b,{to:"/p/".concat(t),className:"grid grid-cols-4 gap-4 mb-6 items-center",children:[Object(i.jsx)("div",{className:"flex items-center justify-between col-span-1",children:Object(i.jsx)("img",{src:"/images/avatars/".concat(t,".jpg"),alt:"",className:"rounded-full w-16 flex mr-3"})}),Object(i.jsxs)("div",{className:"col-span-3",children:[Object(i.jsx)("p",{className:"font-bold text-sm",children:t}),Object(i.jsx)("p",{className:"text-sm",children:n})]})]}):Object(i.jsx)(f.a,{count:1,height:61})},O=c.a.memo(h);function g(e){var t=e.spDocId,n=e.username,s=e.profileId,a=e.userId,r=e.loggedInUserDocId,l=c.a.useState(!1),u=Object(b.a)(l,2),d=u[0],p=u[1];function f(){return(f=Object(j.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,Object(x.g)(r,s,!1);case 3:return e.next=5,Object(x.f)(a,t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return d?null:Object(i.jsxs)("div",{className:"flex flex items-center align-items justify-between",children:[Object(i.jsxs)("div",{className:"flex items-center justify-between",children:[Object(i.jsx)("img",{className:"rounded-full w-8 flex mr-3 ",src:"/images/avatars/".concat(n,".jpg"),alt:""}),Object(i.jsx)(o.b,{to:"/p/".concat(n),children:Object(i.jsx)("p",{className:"font-bold text-sm",children:n})})]}),Object(i.jsx)("button",{onClick:function(){return f.apply(this,arguments)},className:"text-xs font-bold text-blue-medium",type:"button",children:"Follow"})]})}function v(e){var t=e.userId,n=e.following,s=e.loggedInUserDocId,a=c.a.useState(null),r=Object(b.a)(a,2),o=r[0],l=r[1];return c.a.useEffect((function(){function e(){return(e=Object(j.a)(m.a.mark((function e(){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)(t,n);case 2:s=e.sent,l(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t,n]),o?o.length>0?Object(i.jsxs)("div",{className:"rounded flex flex-col",children:[Object(i.jsx)("div",{className:"text-sm flex item-center align-items justify between mb-2",children:Object(i.jsx)("p",{className:"font-bold text-gray-base",children:"Suggestions for you"})}),Object(i.jsx)("div",{className:"mt-4 gap-5",children:o&&o.map((function(e){return Object(i.jsx)(g,{spDocId:e.docId,profileId:e.userId,username:e.username,userId:t,loggedInUserDocId:s},e.docId)}))})]}):null:Object(i.jsx)(f.a,{count:1,height:150,className:"mt-5"})}function N(){var e=function(){var e=c.a.useState({}),t=Object(b.a)(e,2),n=t[0],s=t[1],r=c.a.useContext(a.a).user;return c.a.useEffect((function(){function e(){return(e=Object(j.a)(m.a.mark((function e(){var t,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)(r.uid);case 2:t=e.sent,n=Object(b.a)(t,1),c=n[0],s(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===r||void 0===r?void 0:r.uid)&&function(){e.apply(this,arguments)}()}),[r]),{user:n}}().user,t=e.docId,n=e.fullName,s=e.username,r=e.userId,o=e.following;return Object(i.jsxs)("div",{className:"p-4",children:[Object(i.jsx)(O,{username:s,fullName:n}),Object(i.jsx)(v,{userId:r,following:o,loggedInUserDocId:t})]})}function w(e){var t=e.username;return Object(i.jsx)("div",{className:"flex border-b border-gray-primary h-4 p-4 py-8",children:Object(i.jsx)("div",{className:"flex items-center",children:Object(i.jsxs)(o.b,{to:"/p/".concat(t),className:"flex items-center",children:[Object(i.jsx)("img",{src:"/images/avatars/".concat(t,".jpg"),alt:"".concat(t," profile"),className:"rounded-full h-8 w-8 flex mr-3"}),Object(i.jsx)("p",{className:"font-bold",children:t})]})})})}function y(e){var t=e.src,n=e.caption;return Object(i.jsx)("img",{src:t,alt:n})}function k(e){var t=e.docId,n=e.totalLikes,s=e.likedPhoto,o=e.handleFocus,l=c.a.useContext(a.a).user.uid,u=void 0===l?"":l,d=c.a.useState(s),x=Object(b.a)(d,2),p=x[0],f=x[1],h=c.a.useState(n),O=Object(b.a)(h,2),g=O[0],v=O[1],N=c.a.useContext(r.a),w=N.firebase,y=N.FieldValue,k=function(){var e=Object(j.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f((function(e){return!e})),e.next=3,w.firestore().collection("photos").doc(t).update({likes:p?y.arrayRemove(u):y.arrayUnion(u)});case 3:v((function(e){return p?e-1:e+1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"flex justify-content p-4",children:Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("svg",{onClick:k,onKeyDown:function(e){"Enter"===e.key&&k()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,className:"w-8 mr-4 select-none cursor-pointer focus:outline-none ".concat(p?"fill-red text-red-primary":"text-black-light"),children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(i.jsx)("svg",{onClick:o,onKeyDown:function(e){"Enter"===e.key&&o()},className:"w-8 text-black-light select-none cursor-pointer focus:outline-none",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})]})}),Object(i.jsx)("div",{className:"p-4 py-0 ",children:Object(i.jsx)("p",{className:"font-bold",children:"".concat(g," like")})})]})}function I(e){var t=e.caption,n=e.username;return Object(i.jsx)("div",{className:"p-4 pt-2 pb-8",children:Object(i.jsxs)("span",{className:"mr-1 font-bold",children:[n," ",Object(i.jsx)("span",{children:t})]})})}var C=n(71),L=n(66);function S(e){var t=e.docId,n=e.comments,s=e.setComments,o=e.commentInput,l=c.a.useState(""),u=Object(b.a)(l,2),d=u[0],m=u[1],j=c.a.useContext(r.a),x=j.firebase,p=j.FieldValue,f=c.a.useContext(a.a).user.displayName,h=function(e){return e.preventDefault(),s([{displayName:f,comment:d}].concat(Object(L.a)(n))),m(""),x.firestore().collection("photos").doc(t).update({comments:p.arrayUnion({displayName:f,comment:d})})};return Object(i.jsx)("div",{className:"border-t border-gray-primary",children:Object(i.jsxs)("form",{className:"flex justify-between pl-0 pr-5",method:"POST",onSubmit:function(e){return d.length>=1?h(e):e.preventDefault()},children:[Object(i.jsx)("input",{type:"text","aria-label":"Add a comment",autoComplete:"off",className:"text-sm text-gray-base w-full mr-3 py-5 px-4",name:"add-comment",placeholder:"Add a comment...",value:d,onChange:function(e){return m(e.target.value)},ref:o}),Object(i.jsx)("button",{className:"text-sm font-bold text-blue-medium ".concat(!d&&"opacity-25"),type:"button",disabled:d.length<1,onClick:h,children:"Post"})]})})}function D(e){var t=e.docId,n=e.comments,s=e.posted,a=e.commentInput,r=c.a.useState(n),l=Object(b.a)(r,2),u=l[0],d=l[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"p-4 pt-1 pb-4",children:[(null===u||void 0===u?void 0:u.length)>=1&&Object(i.jsxs)("p",{className:"text-sm text-gray-base mb-1 cursor-pointer",children:["View all ",u.length," comments"]}),u.slice(0,3).map((function(e){return Object(i.jsxs)("p",{className:"mb-1",children:[Object(i.jsx)(o.b,{to:"/p/".concat(e.displayName),children:Object(i.jsx)("span",{className:"mr-1 font-bold",children:e.displayName})}),Object(i.jsx)("span",{children:e.comment})]},"".concat(e.comment,"-").concat(e.displayName))})),Object(i.jsxs)("p",{className:"text-gray-base  text-xs",children:[Object(C.a)(s,new Date)," ago"]})]}),Object(i.jsx)(S,{docId:t,comments:u,setComments:d,commentInput:a})]})}function F(e){var t=e.content,n=c.a.useRef(null);return Object(i.jsxs)("div",{className:"rounded col-span-4 border bg-white border-gray-primary mb-12",children:[Object(i.jsx)(w,{username:t.username}),Object(i.jsx)(y,{src:t.imageSrc,caption:t.caption}),Object(i.jsx)(k,{docId:t.docId,likedPhoto:t.userLikedPhoto,totalLikes:t.likes.length,handleFocus:function(){return n.current.focus()}}),Object(i.jsx)(I,{caption:t.caption,username:t.username}),Object(i.jsx)(D,{docId:t.docId,comments:t.comments,posted:t.dateCreated,commentInput:n})]})}function M(){var e=function(){var e=c.a.useState(null),t=Object(b.a)(e,2),n=t[0],s=t[1],r=c.a.useContext(a.a).user.uid,o=void 0===r?"":r;return c.a.useEffect((function(){function e(){return(e=Object(j.a)(m.a.mark((function e(){var t,n,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)(o);case 2:if(t=e.sent,n=Object(b.a)(t,1),c=n[0].following,a=[],!(c.length>0)){e.next=10;break}return e.next=9,Object(x.b)(o,c);case 9:a=e.sent;case 10:a.sort((function(e,t){return t.dateCreated-e.dateCreated})),s(a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),{photos:n}}().photos;return Object(i.jsx)("div",{className:"container col-span-2",children:e?(null===e||void 0===e?void 0:e.length)>0?e.map((function(e){return Object(i.jsx)(F,{content:e},e.docId)})):Object(i.jsx)("p",{className:"text-center text-2xl",children:"Follow people to see people"}):Object(i.jsx)(f.a,{count:null===e||void 0===e?void 0:e.length,width:640,height:400,className:"mb-5"})})}function E(){return c.a.useEffect((function(){document.title="Instagram"}),[]),Object(i.jsxs)("div",{className:"bg-gray-background",children:[Object(i.jsx)(u,{}),Object(i.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg",children:[Object(i.jsx)(M,{}),Object(i.jsx)(N,{})]})]})}}}]);
//# sourceMappingURL=4.eeb72bb1.chunk.js.map