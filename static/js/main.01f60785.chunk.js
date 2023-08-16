(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),s=n(6),r=n(3),i=n(4),o=n.n(i),l=n(1),d=(n(17),n(18),n(19),n(5)),u=n.n(d),j=n(0),m=function(e){var t=e.post,n=e.toggleSelectedPostFunction,c=e.selectedPost;return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{type:"button","data-cy":"PostButton",className:u()("button is-link",{"is-light":t.id!==(null===c||void 0===c?void 0:c.id)}),onClick:function(){return n(t)},children:t.id!==(null===c||void 0===c?void 0:c.id)?"Open":"Close"})})]},t.id)},b=function(e){var t=e.posts,n=e.selectedPost,c=e.selectPost,a=function(e){e.id===(null===n||void 0===n?void 0:n.id)?c(null):c(e)};return Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(m,{post:e,toggleSelectedPostFunction:a,selectedPost:n},e.id)}))})]})]})},h=n(11),O=(n(21),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),x=n(2),f=function(e){var t=e.addComment,n=e.postId,c=Object(l.useState)({name:"",email:"",text:""}),a=Object(r.a)(c,2),i=a[0],d=a[1],m=Object(l.useState)({isNameError:!1,isEmailError:!1,isTextError:!1}),b=Object(r.a)(m,2),h=b[0],O=b[1],f=Object(l.useState)(!1),p=Object(r.a)(f,2),v=p[0],N=p[1],y=function(){var e=Object(s.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),i.name.trim()||O((function(e){return Object(x.a)(Object(x.a)({},e),{},{isNameError:!0})})),i.email.trim()||O((function(e){return Object(x.a)(Object(x.a)({},e),{},{isEmailError:!0})})),i.text.trim()||O((function(e){return Object(x.a)(Object(x.a)({},e),{},{isTextError:!0})})),i.name.trim()&&i.email.trim()&&i.text.trim()){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,N(!0),e.next=10,t(i.email,i.text,i.name,n);case 10:return e.prev=10,N(!1),d((function(e){return Object(x.a)(Object(x.a)({},e),{},{text:""})})),e.finish(10);case 14:case"end":return e.stop()}}),e,null,[[6,,10,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:y,children:[Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":h.isNameError}),value:i.name,onChange:function(e){d((function(t){return Object(x.a)(Object(x.a)({},t),{},{name:e.target.value})})),O((function(e){return Object(x.a)(Object(x.a)({},e),{},{isNameError:!1})}))}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),h.isNameError&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h.isNameError&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":h.isEmailError}),value:i.email,onChange:function(e){d((function(t){return Object(x.a)(Object(x.a)({},t),{},{email:e.target.value})})),O((function(e){return Object(x.a)(Object(x.a)({},e),{},{isEmailError:!1})}))}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),h.isEmailError&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h.isEmailError&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:u()("textarea",{"is-danger":h.isTextError}),value:i.text,onChange:function(e){d((function(t){return Object(x.a)(Object(x.a)({},t),{},{text:e.target.value})})),O((function(e){return Object(x.a)(Object(x.a)({},e),{},{isTextError:!1})}))}})}),h.isTextError&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:u()("button is-link",{"is-loading":v}),children:"Add"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){d({name:"",email:"",text:""}),O({isNameError:!1,isEmailError:!1,isTextError:!1})},children:"Clear"})})]})]})},p="https://mate.academy/students-api";function v(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),v(300).then((function(){return fetch(p+e,c)})).then((function(e){return e.json()}))}var y=function(e){return N(e)},g=function(e,t){return N(e,"POST",t)},E=function(e){return N(e,"DELETE")},k=function(e){return y("/comments?postId=".concat(e))},w=function(e){var t=e.email,n=e.name,c=e.postId,a=e.body;return g("/comments",{email:t,name:n,postId:c,body:a})},C=function(e){return E("/comments/".concat(e))},S=function(e){var t=e.comment,n=e.deleteCommentFunction;return Object(j.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(t.email),"data-cy":"CommentAuthor",children:t.name}),Object(j.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(t.id)},children:"delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:t.body})]})},P=function(e){var t=e.post,n=Object(l.useState)([]),c=Object(r.a)(n,2),a=c[0],i=c[1],d=Object(l.useState)(!1),u=Object(r.a)(d,2),m=u[0],b=u[1],x=Object(l.useState)(!1),p=Object(r.a)(x,2),v=p[0],N=p[1],y=Object(l.useState)(!1),g=Object(r.a)(y,2),E=g[0],P=g[1],F=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=i,e.next=4,k(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),N(!0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){b(!0),P(!1),F(t.id)}),[t]);var T=Object(l.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t,n,c,a){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={email:t,body:n,name:c,postId:a},e.abrupt("return",w(s).then((function(e){i((function(t){return[].concat(Object(h.a)(t),[e])}))})).catch((function(e){throw e})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,c,a){return e.apply(this,arguments)}}(),[]),I=Object(l.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((function(e){return e.filter((function(e){return e.id!==t}))})),e.prev=1,e.next=4,C(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),N(!0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(j.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(j.jsx)("div",{className:"block",children:m?Object(j.jsx)(O,{}):Object(j.jsxs)(j.Fragment,{children:[v&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!m&&!v&&!a.length&&Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!m&&!v&&!!a.length&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),a.map((function(e){return Object(j.jsx)(S,{comment:e,deleteCommentFunction:I},e.id)}))]}),!m&&!v&&!E&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return P(!0)},children:"Write a comment"})]})}),E&&Object(j.jsx)(f,{addComment:T,postId:t.id})]})})},F=function(e){var t=e.user,n=e.selectUserFunction,c=e.selectedUser;return Object(j.jsx)("a",{href:"#user-".concat(t.id),className:u()("dropdown-item",{"is-active":t.id===(null===c||void 0===c?void 0:c.id)}),onClick:function(){return n(t)},children:t.name},t.id)},T=function(e){var t=e.users,n=e.selectUser,c=e.selectedUser,a=Object(l.useState)(!1),s=Object(r.a)(a,2),i=s[0],o=s[1],d=Object(l.useRef)(null);Object(l.useEffect)((function(){var e=function(e){d.current&&i&&!d.current.contains(e.target)&&o(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[i]);var m=function(e){n(e),o(!1)};return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:u()("dropdown",{"is-active":i}),children:[Object(j.jsx)("div",{className:"dropdown-trigger",ref:d,children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return o((function(e){return!e}))},children:[Object(j.jsx)("span",{children:(null===c||void 0===c?void 0:c.name)||"Choose a user"}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(j.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(j.jsx)(F,{user:e,selectUserFunction:m,selectedUser:c},e.id)}))})})]})},I=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(!1),i=Object(r.a)(a,2),d=i[0],m=i[1],h=Object(l.useState)(null),x=Object(r.a)(h,2),f=x[0],p=x[1],v=Object(l.useState)([]),N=Object(r.a)(v,2),g=N[0],E=N[1],k=Object(l.useState)(!1),w=Object(r.a)(k,2),C=w[0],S=w[1],F=Object(l.useState)(null),I=Object(r.a)(F,2),U=I[0],L=I[1],B=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,y("/users");case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),S(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=E,e.next=4,n=t.id,y("/posts?userId=".concat(n));case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),S(!0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}var n}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){B()}),[]),Object(l.useEffect)((function(){L(null),f&&(m(!0),D(f))}),[f]),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(T,{users:n,selectUser:p,selectedUser:f})}),Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!f&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),d?Object(j.jsx)(O,{}):Object(j.jsxs)(j.Fragment,{children:[C&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!g.length&&f&&!C&&Object(j.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!!g.length&&f&&!C&&Object(j.jsx)(b,{posts:g,selectedPost:U,selectPost:L})]})]})]})}),Object(j.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":U}),children:Object(j.jsx)("div",{className:"tile is-child box is-success ",children:U&&Object(j.jsx)(P,{post:U})})})]})})})};a.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.01f60785.chunk.js.map