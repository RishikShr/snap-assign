(this["webpackJsonpmap-test"]=this["webpackJsonpmap-test"]||[]).push([[0],{117:function(e,t,n){},137:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a,c,i=n(25),o=n.n(i),r=n(106),s=n.n(r),u=(n(117),n(72)),b=n(107),d=n(90),h=n.n(d),j=n(109),l=n(52),f=n(108),m=n(49),v=function(e){if(void 0!==a){var t=e.getEngine().getDeltaTime();a.rotation.y+=10/60*Math.PI*2*(t/1e3)}},O=function(e){var t=e.texturePath;return Object(m.jsx)("div",{children:Object(m.jsx)(f.a,{antialias:!0,onSceneReady:function(e){!function(e,t){var n=new l.a("camera1",0,0,0,new l.f(0,0,-10),e);n.setTarget(l.f.Zero());var c=e.getEngine().getRenderingCanvas();n.attachControl(c,!0),new l.b("light",new l.f(0,1,0),e).intensity=.7;var i=new Array(6);i.fill(new l.g(0,0,1,1)),i[0]=new l.g(0,0,-1,-1),a=l.c.CreateBox("box",{width:5,height:5,faceUV:i},e);var o=new l.d("mapMaterial",e);o.diffuseTexture=new l.e("".concat(t),e),a.material=o,a.position.y=0,l.c.CreateGround("ground",{width:6,height:6},e)}(e,t)},onRender:v,id:"my-canvas",style:{width:600,height:600}})})},g=(n(137),j.a.div(c||(c=Object(b.a)(["\n  width: 50vw;\n  height: 50vh;\n"]))));h.a.accessToken="pk.eyJ1Ijoic2h1YmhhbWt1bWF3YXQ3ODkiLCJhIjoiY2tvM3hoOG9kMWRtMjJ1azQwNmlqMmpkdiJ9.1rAuBqANI9uOd4bzVbdxyg";var x=function(){var e=Object(i.useRef)(),t=Object(i.useState)(0),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(0),r=Object(u.a)(o,2),s=r[0],b=r[1],d=Object(i.useState)(0),j=Object(u.a)(d,2),l=j[0],f=j[1],v=Object(i.useState)(!1),x=Object(u.a)(v,2),p=x[0],w=x[1];Object(i.useEffect)((function(){var t;return e.current&&(t=new h.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[75.857,22.719],zoom:12,attributionControl:!1})).on("move",(function(){c(t.getCenter().lng.toFixed(4)),b(t.getCenter().lat.toFixed(4)),f(t.getZoom().toFixed(2))})),function(){return t.remove()}}),[]);var y=Object(i.useState)(null),k=Object(u.a)(y,2),C=k[0],M=k[1];return Object(i.useEffect)((function(){M("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/".concat(a,",").concat(s,",").concat(l,",0/").concat(500,"x").concat(300,"?access_token=").concat(h.a.accessToken))}),[s,a,500,300,l]),Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)("div",{className:"image",children:Object(m.jsx)(g,{id:"map",ref:e,style:{width:600,height:700}})}),Object(m.jsxs)("div",{className:"render",children:[Object(m.jsxs)("button",{className:"button",onClick:function(){w(!p)},children:[p?"Hide":"Show"," 3D"]}),C&&p&&Object(m.jsx)(O,{texturePath:C})]})]})};s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.94b79e86.chunk.js.map