(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{35:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(36),i=c.n(n),s=(c(45),c(46),c(15)),o=c(4),l=c(8),j=c(40),d=c(18),u=c(37),b=(c(47),function(e,t){var c=Object(r.useState)((function(){return function(e,t){return JSON.parse(localStorage.getItem(e))||t}(e,t)})),a=Object(l.a)(c,2),n=a[0],i=a[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[n]),[n,i]}),h=function(e,t){for(var c=[],r=[],a=0;a<e.length;a++)for(var n=0;n<e.length;n++)if(e[a][n]>0)for(var i=0;i<a;i++){if(e[i][n]===e[a][n]){if(!(i<a-1)){e[i][n]=2*e[a][n],t+=e[i][n],e[a][n]=0,r.push({from:{x:a,y:n},to:{x:i,y:n}});break}if(0===e[i+1][n]){e[i][n]=2*e[a][n],t+=e[i][n],e[a][n]=0,r.push({from:{x:a,y:n},to:{x:i,y:n}});break}}if(0===e[i][n]){e[i][n]=e[a][n],e[a][n]=0,c.push({from:{x:a,y:n},to:{x:i,y:n}});break}}return{moves:c,merges:r,score:t}},f=function(e,t){for(var c=[],r=[],a=e.length-1;a>=0;a--)for(var n=0;n<e.length;n++)if(e[a][n]>0)for(var i=e.length-1;i>a;i--){if(e[i][n]===e[a][n]){if(!(i>a+1)){e[i][n]=2*e[a][n],t+=e[i][n],e[a][n]=0,r.push({from:{x:a,y:n},to:{x:i,y:n}});break}if(0===e[i-1][n]){e[i][n]=2*e[a][n],t+=e[i][n],e[a][n]=0,r.push({from:{x:a,y:n},to:{x:i,y:n}});break}}if(0===e[i][n]){e[i][n]=e[a][n],e[a][n]=0,c.push({from:{x:a,y:n},to:{x:i,y:n}});break}}return{moves:c,merges:r,score:t}},x=function(e,t){for(var c=[],r=[],a=0;a<e.length;a++)for(var n=0;n<e.length;n++)if(e[n][a]>0)for(var i=0;i<a;i++){if(e[n][i]===e[n][a]){if(!(i<a-1)){e[n][i]=2*e[n][a],t+=e[n][i],e[n][a]=0,r.push({from:{x:n,y:a},to:{x:n,y:i}});break}if(0===e[n][i+1]){e[n][i]=2*e[n][a],t+=e[n][i],e[n][a]=0,r.push({from:{x:n,y:a},to:{x:n,y:i}});break}}if(0===e[n][i]){e[n][i]=e[n][a],e[n][a]=0,c.push({from:{x:n,y:a},to:{x:n,y:i}});break}}return{moves:c,merges:r,score:t}},m=function(e,t){for(var c=[],r=[],a=e.length-1;a>=0;a--)for(var n=0;n<e.length;n++)if(e[n][a]>0)for(var i=e.length;i>a;i--){if(e[n][i]===e[n][a]){if(!(i>a+1)){e[n][i]=2*e[n][a],t+=e[n][i],e[n][a]=0,r.push({from:{x:n,y:a},to:{x:n,y:i}});break}if(0===e[n][i-1]){e[n][i]=2*e[n][a],t+=e[n][i],e[n][a]=0,r.push({from:{x:n,y:a},to:{x:n,y:i}});break}}if(0===e[n][i]){e[n][i]=e[n][a],e[n][a]=0,c.push({from:{x:n,y:a},to:{x:n,y:i}});break}}return{moves:c,merges:r,score:t}};function v(e){var t=function(e){var t,c=0,r=Object(d.a)(e);try{for(r.s();!(t=r.n()).done;){var a,n=t.value,i=Object(d.a)(n);try{for(i.s();!(a=i.n()).done;)0===a.value&&c++}catch(s){i.e(s)}finally{i.f()}}}catch(s){r.e(s)}finally{r.f()}return c}(e),c=Math.floor(Math.random()*t);return function(e,t){for(var c in e)for(var r in e[c])if(0===e[c][r]){if(0===t)return e[c][r]=2,{x:c,y:r};t--}}(e,c=c===t?t-1:c)}var O=function e(t){var c=[];return Array.isArray(t)?(t.forEach((function(t){c.push(e(t))})),c):t},y=function e(t,c){if(t===c)return!0;if(Array.isArray(t)&&Array.isArray(c)){if(t.length!==c.length)return!1;for(var r in t)if(!e(t[r],c[r]))return!1;return!0}return!1},g=function(e){for(var t=0;t<e.length;t++)for(var c=0;c<e[t].length;c++){if(0===e[t][c])return!1;if(t<e.length-1&&e[t][c]===e[t+1][c])return!1;if(c<e[t].length-1&&e[t][c]===e[t][c+1])return!1}return!0},p=c(39),w=function(e){return Object(p.a)(Array(e)).map((function(t){return Array(e).fill(2)}))},N=c(30),k=c.n(N),S=(c(49),c(2)),_=k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:return e.next=4,"key_".concat(t++);case 4:e.next=1;break;case 6:case"end":return e.stop()}}),e)}))();var A=function(e){var t=e.grid,c=e.gridSize;return Object(S.jsx)(S.Fragment,{children:t.map((function(e,t){return Object(S.jsx)(a.a.Fragment,{children:e.map((function(e,r){return e?Object(S.jsxs)("div",{className:"tile",style:{"--i":t,"--j":r,"--grid-size":c},"data-i":t,"data-j":r,children:[e,Object(S.jsx)("div",{className:"box front"}),Object(S.jsx)("div",{className:"box back"}),Object(S.jsx)("div",{className:"box left"}),Object(S.jsx)("div",{className:"box right"})]},_.next().value):""}))},_.next().value)}))})},T=(c(51),c.p+"static/media/memefrontpage.624ac3fa.png"),L=function(e){var t=e.setGameMode,c=Object(r.useState)(1),a=Object(l.a)(c,2),n=a[0];a[1];return console.log(n),Object(S.jsx)("div",{className:"gameLevel",children:Object(S.jsxs)("div",{className:"gameLevelBtns",children:[Object(S.jsx)("div",{className:"level1",onClick:function(){return t(3)}}),Object(S.jsx)("div",{className:"level2",onClick:function(){return t(4)}}),Object(S.jsx)("div",{className:"level3",onClick:function(){return t(5)}}),Object(S.jsx)("div",{className:"gameLevelImgs",children:Object(S.jsx)("img",{src:T,alt:"wow",id:"one"})})]})})},E=4,P=null,B=null,C=null,I=null,M=null,D=null,G=null,F=!1,H=function(e,t){if(P&&B&&!F){F=!0;var c,r=O(B),a=e(r,M);c=a.score,y(B,r)?F=!1:(!function(e){var t,c=e.moves,r=e.merges,a={},n=Object(d.a)(c);try{for(n.s();!(t=n.n()).done;){var i,s,o,l,j=t.value,u=j.from,b=j.to,h=void 0;a["".concat(u.x,"_").concat(u.y)]?(h=a["".concat(u.x,"_").concat(u.y)],a["".concat(u.x,"_").concat(u.y)]=void 0):h=document.querySelector("[data-i='".concat(u.x,"'][data-j='").concat(u.y,"']")),null===(i=h)||void 0===i||null===(s=i.style)||void 0===s||s.setProperty("--i",b.x),null===(o=h)||void 0===o||null===(l=o.style)||void 0===l||l.setProperty("--j",b.y),a["".concat(b.x,"_").concat(b.y)]=h}}catch(S){n.e(S)}finally{n.f()}var f,x={},m=Object(d.a)(r);try{for(m.s();!(f=m.n()).done;){var v,O,y,g,p=f.value,w=p.from,N=p.to,k=void 0;x["".concat(w.x,"_").concat(w.y)]?(k=x["".concat(w.x,"_").concat(w.y)],x["".concat(w.x,"_").concat(w.y)]=void 0):k=document.querySelector("[data-i='".concat(w.x,"'][data-j='").concat(w.y,"']")),null===(v=k)||void 0===v||null===(O=v.style)||void 0===O||O.setProperty("--i",N.x),null===(y=k)||void 0===y||null===(g=y.style)||void 0===g||g.setProperty("--j",N.y),x["".concat(N.x,"_").concat(N.y)]=k}}catch(S){m.e(S)}finally{m.f()}}(a),function(e){var t=e.x,c=e.y;console.log(t,c)}(v(r)),function(e){var t="".concat(e,"-animation"),c=document.querySelector(".board");null===c||void 0===c||c.classList.add(t),setTimeout((function(){var e;null===c||void 0===c||null===(e=c.classList)||void 0===e||e.remove(t)}),550)}(t),setTimeout((function(){try{P(r),I(c),c>D[E]&&(D[E]=c,G(Object(j.a)({},D))),function(e,t){var c,r=3===t?128:4===t?2048:8192,a=Object(d.a)(e);try{for(a.s();!(c=a.n()).done;){var n,i=c.value,s=Object(d.a)(i);try{for(s.s();!(n=s.n()).done;)if(r===n.value)return!0}catch(o){s.e(o)}finally{s.f()}}}catch(o){a.e(o)}finally{a.f()}return!1}(r,E)||g(r)&&setTimeout((function(){C&&C()}),1e3)}catch(e){}F=!1}),550))}};document.body.addEventListener("keydown",(function(e){switch(e.key){case"ArrowUp":case"w":case"W":H(h,"top");break;case"ArrowDown":case"s":case"S":H(f,"bottom");break;case"ArrowLeft":case"a":case"A":H(x,"left");break;case"ArrowRight":case"D":case"d":H(m,"right")}return!0}));var q=Object(u.SwipeEventListener)({swipeArea:document.querySelector("body")}).swipeArea;q.addEventListener("swipeDown",(function(){H(f,"bottom")})),q.addEventListener("swipeUp",(function(){H(h,"top")})),q.addEventListener("swipeLeft",(function(){H(x,"left")})),q.addEventListener("swipeRight",(function(){H(m,"right")}));var z=function(){var e=b("p-grid-size",3),t=Object(l.a)(e,2),c=t[0],n=t[1],i=b("p-grid",O(w(c))),s=Object(l.a)(i,2),j=s[0],d=s[1],u=b("p-highScore",{3:0,4:0,5:0}),h=Object(l.a)(u,2),f=h[0],x=h[1],m=b("p-score",0),v=Object(l.a)(m,2),y=v[0],g=v[1],p=b("p-is-playing",!1),N=Object(l.a)(p,2),k=N[0],_=N[1],T=b("p-isGameOut",!1),F=Object(l.a)(T,2),H=F[0],q=F[1];return console.log(j),P=d,B=j,E=c,I=g,M=y,G=x,D=f,C=function(){localStorage.setItem("p-score","0"),q(!0),_(!1),d(w(c)),g(0)},Object(r.useEffect)((function(){!1===k&&(localStorage.removeItem("p-isGameOut"),q(!1))})),Object(S.jsxs)("div",{className:"board-outer",children:[Object(S.jsxs)("div",{className:"board ".concat(k?"":"rotated"),style:{gridTemplate:"repeat(".concat(c,", ").concat(100/c,"%)/repeat(").concat(c,", ").concat(100/c,"%)")},children:[" ",j.map((function(e,t){return Object(S.jsxs)(a.a.Fragment,{children:[" ",e.map((function(e,t){return Object(S.jsx)("div",{className:"cell"},t)}))," "]},t)})),Object(S.jsx)(A,{grid:j,gridSize:c}),Object(S.jsx)("div",{className:"front-but-back",children:Object(S.jsx)(L,{setGameMode:function(e){_(!0),n(e),d(w(e))}})})]}),k?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{id:"score",className:"score",children:[Object(S.jsx)("div",{children:"Score"}),Object(S.jsx)("div",{children:y})]}),Object(S.jsxs)("div",{id:"highScore",className:"highScore",children:[Object(S.jsx)("div",{children:"High Score"}),Object(S.jsxs)("div",{children:[" ",f[c]," "]})]}),Object(S.jsx)("button",{onClick:function(){d(w(c)),g(0),_(!1)},className:"resetBtn",children:" Reset"})]}):"",H&&!k?Object(S.jsx)(o.a,{to:"/gameOver"}):null]})},J=(c(57),c(63)),V=c(33),R=function(){return localStorage.removeItem("grid"),localStorage.setItem("score","0"),Object(S.jsxs)(J.a.div,{initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100%"}},children:[Object(S.jsx)("div",{className:"frontPageContent",children:Object(S.jsxs)("div",{className:"frontPage",children:[Object(S.jsx)("div",{className:"frontPageTitle",children:"2048"}),Object(S.jsx)(V.BrowserView,{children:Object(S.jsx)(s.b,{to:"/how_to_desktop",children:Object(S.jsx)("div",{className:"playBtn",children:"Play"})})}),Object(S.jsx)(V.MobileView,{children:Object(S.jsx)(s.b,{to:"/how_to_mobile",children:Object(S.jsx)("div",{className:"playBtn",children:"Play"})})})]})}),Object(S.jsx)("div",{className:"frontPageFooter",children:"Made with \u2764 by @untitledTeam"})]})},U=c(64),W=(c(35),c.p+"static/media/swipe-right.b66379ac.gif"),K=function(){return Object(S.jsx)(J.a.div,{initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100%"}},children:Object(S.jsxs)("div",{className:"howToContent",children:[Object(S.jsx)("div",{className:"howToTitle",children:"How to play 2048?"}),Object(S.jsx)("img",{className:"swipeHowTo",src:W}),Object(S.jsx)(s.b,{to:"/game",children:Object(S.jsx)("div",{className:"nextBtn",children:"Next"})})]})})},Q=c.p+"static/media/press-right.d58c43b7.gif",X=function(){return Object(S.jsx)(J.a.div,{initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:"-100%"}},children:Object(S.jsxs)("div",{className:"howToContent",children:[Object(S.jsx)("div",{className:"howToTitle",children:"How to play 2048?"}),Object(S.jsx)("img",{className:"pressHowTo",src:Q}),Object(S.jsx)(s.b,{to:"/game",children:Object(S.jsx)("div",{className:"nextBtn",children:"Next"})})]})})},Y=c.p+"static/media/video_3.237aecb6.webm",Z=(c(59),function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){setTimeout((function(){a(!0)}),8e3)})),Object(S.jsxs)("div",{className:"endCredits",children:[Object(S.jsx)("video",{src:Y,autoPlay:!0,children:"wow"}),c?Object(S.jsx)(o.a,{to:"/credits"}):null]})}),$=(c(60),c.p+"static/media/react.6ce24c58.svg");var ee=function(e){return Object(S.jsxs)("div",{className:"credits",children:[Object(S.jsx)("div",{className:"heading",children:Object(S.jsxs)("a",{href:"https://github.com/untitled-team-101",target:"_blank",children:["Made with",Object(S.jsx)("img",{className:"App-logo",src:$,alt:"logo"}),"by @untitledTeam"]})}),Object(S.jsxs)("div",{className:"contributors",children:[Object(S.jsx)("small",{className:"contributors-text",children:"Contributors"}),Object(S.jsxs)("ul",{className:"member-list",children:[Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"https://github.com/Ayan-Dhara",target:"_blank",children:"Ayan Dhara"})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"https://github.com/grawish",target:"_blank",children:"Grawish Sachdeva"})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"https://github.com/tanmayVaish",target:"_blank",children:"Tanmay Vaish"})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"https://github.com/dhruvgarg02",target:"_blank",children:"Dhruv Garg"})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"https://github.com/sarveshspatil111",target:"_blank",children:"Sarvesh Patil"})})]})]})]})};var te=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(U.a,{exitBeforeEnter:!0,children:Object(S.jsx)(s.a,{children:Object(S.jsxs)(o.d,{children:[Object(S.jsx)(o.b,{exact:!0,path:"/",children:Object(S.jsx)(R,{})}),Object(S.jsx)(o.b,{exact:!0,path:"/how_to_desktop",children:Object(S.jsx)(X,{})}),Object(S.jsx)(o.b,{exact:!0,path:"/how_to_mobile",children:Object(S.jsx)(K,{})}),Object(S.jsx)(o.b,{exact:!0,path:"/game",children:Object(S.jsx)(z,{})}),Object(S.jsx)(o.b,{exact:!0,path:"/gameOver",children:Object(S.jsx)(Z,{})}),Object(S.jsx)(o.b,{exact:!0,path:"/credits",children:Object(S.jsx)(ee,{})}),Object(S.jsx)(o.b,{path:"/gameLevel",children:Object(S.jsx)(L,{})}),Object(S.jsx)(o.b,{path:"/",children:Object(S.jsx)("h1",{children:"404 Error"})})]})})})})};i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(te,{})}),document.getElementById("root"))}},[[61,1,2]]]);