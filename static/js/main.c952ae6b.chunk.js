(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,a,t){e.exports=t(359)},213:function(e,a,t){},349:function(e,a,t){},351:function(e,a,t){},353:function(e,a,t){},355:function(e,a,t){},357:function(e,a,t){},359:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(24),r=t.n(i),s=t(62),l=t(63),c=t(66),m=t(64),d=t(67),u=(t(213),t(52)),p=t.n(u),h=t(53),f=t.n(h),g=t(13),b=t.n(g),E=t(33),v=t.n(E),w=t(119),y=t.n(w),x=t(5),N=Object(x.withStyles)({font:{fontWeight:"bold",fontFamily:"'Quicksand', sans-serif"},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var a=e.classes;return o.a.createElement(p.a,{position:"fixed",color:"primary"},o.a.createElement(f.a,null,o.a.createElement(v.a,{className:a.menuButton,color:"inherit","aria-label":"Open drawer",onClick:e.switchDrawerHandler.bind(void 0,null)},o.a.createElement(y.a,null)),o.a.createElement(b.a,{variant:"h5",color:"inherit",className:a.font},"Technovation")))}),k=t(86),S=(t(50),t(20)),O=t.n(S),j=t(6),I=t(59),C=t.n(I),D=t(41),z=t.n(D),W=t(54),T=t.n(W),A=t(55),H=t.n(A),F=t(58),M=t.n(F),B=t(57),G=t.n(B),L=t(56),Q=t.n(L),R=t(25),J=t.n(R),q=Object(x.withStyles)(function(){return{card:{margin:"0px 15px 15px 15px",boxShadow:"none",border:"1px #e1e4e8 solid !important"},media:{height:200},root:{fontWeight:"800",fontFamily:"'Quicksand', sans-serif",fontSize:16}}})(function(e){var a=e.classes,t=e.data;return o.a.createElement(T.a,{className:a.card},o.a.createElement(H.a,null,o.a.createElement(Q.a,{className:a.media,image:t.eventImg,title:t.eventName}),o.a.createElement(G.a,null,o.a.createElement(b.a,{classes:{root:a.root},color:"primary",gutterBottom:!0},t.eventName),o.a.createElement(b.a,{component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),o.a.createElement(M.a,null,o.a.createElement(J.a,{size:"small",color:"primary"},"Share"),o.a.createElement(J.a,{size:"small",color:"primary"},"Learn More")))}),K=t(28),P=Object(x.withStyles)({card:{textAlign:"center",height:"",margin:"0px 10px",border:"1px #e1e4e8 solid !important"},media:{padding:"5% 0%",width:"60%",height:"auto"},font:{marginBottom:5,fontSize:16,fontWeight:"800",fontFamily:"'Quicksand', sans-serif",textTransform:"unset"}})(function(e){var a=e.classes;return o.a.createElement(O.a,{classes:{root:a.card},elevation:0},o.a.createElement(J.a,null,o.a.createElement(K.b,null,o.a.createElement("img",{className:a.media,src:"https://image.flaticon.com/icons/png/512/236/236832.png",alt:""}),o.a.createElement(K.d,{color:"primary",classes:{root:a.font}},e.data.name),o.a.createElement(K.d,{style:{textTransform:"none",textAlign:"left"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"))),o.a.createElement(K.a,null,o.a.createElement(J.a,{color:"primary",size:"small"},"Learn More"),o.a.createElement(J.a,{color:"primary",size:"small"},"Learn More")))}),U=Object(x.withStyles)(function(e){var a;return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"100%",flexWrap:"nowrap",transform:"translateZ(0)"},fontForHeader:(a={fontFamily:"'Quicksand', sans-serif",fontWeight:"600",margin:"5px auto"},Object(j.a)(a,e.breakpoints.down("sm"),{fontSize:"22px"}),Object(j.a)(a,e.breakpoints.up("md"),{fontSize:"26px"}),Object(j.a)(a,e.breakpoints.up("lg"),{fontSize:"32px"}),a),hr:{width:"80%",borderBottom:"2px solid #3F51B5",marginBottom:"20px"}}})(function(e){var a=e.classes,t=e.data,n=t.name,i=null;return i="Events"===n?t.data.map(function(e,a){return o.a.createElement(z.a,{key:a},o.a.createElement(q,{data:e}))}):t.data.map(function(e,a){return o.a.createElement(z.a,{key:a},o.a.createElement(P,{data:e}))}),o.a.createElement("div",null,o.a.createElement("div",{className:a.root},o.a.createElement("div",null,o.a.createElement("h1",{className:a.fontForHeader},n),o.a.createElement("hr",{className:a.hr})),o.a.createElement(C.a,{className:a.gridList,cols:"Events"===n?window.innerWidth<=725?1.25:3.5:window.innerWidth<=725?1.2:4.5,cellHeight:"auto"},i)))}),Y=function(e){var a=null;switch(e){case 0:a="Final Year Members";break;case 1:a="Third Year Members";break;case 2:a="Second Year Members"}return a},Z=Object(x.withStyles)(function(e){return{paperStyle:Object(k.a)({},e.mixins.gutters(),{paddingTop:.5*e.spacing.unit,paddingBottom:.5*e.spacing.unit,margin:"20px 0px"})}})(function(e){var a=e.classes,t=e.data;return o.a.createElement("div",{className:"Container"},o.a.createElement(O.a,{className:a.paperStyle,elevation:3},o.a.createElement(U,{data:Object(k.a)({},t.events,{name:"Events"})})),t.member.yearWiseMembers.map(function(e,t){return o.a.createElement(O.a,{className:a.paperStyle,elevation:3,key:t},o.a.createElement(U,{data:{data:e,name:Y(t)}}))}))}),_={events:{data:[{eventName:"Some Workshop",eventImg:"https://img.rwgenting.com/rwgenting/uploadedImages/Images/Casino/Highlights/Earn_and_Buy_Promotion/AOS-banner.jpg?n=211"},{eventName:"Some Coding Contest",eventImg:"https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"},{eventName:"Some Coding Contest",eventImg:"https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"},{eventName:"Some Coding Contest",eventImg:"https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"},{eventName:"Some Coding Contest",eventImg:"https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"},{eventName:"Some Coding Contest",eventImg:"https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"},{eventName:"Some Coding Contest",eventImg:"https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"},{eventName:"Some Coding Contest",eventImg:"https://cacm.acm.org/system/assets/0002/7480/052417.balloons.jpg"}]},member:{yearWiseMembers:[[{name:"Vaibhav Sahu",img:"SomeImg.img"},{name:"Manas Garg",img:"some.img"},{name:"Manas Garg",img:"some.img"},{name:"Manas Garg",img:"some.img"},{name:"Manas Garg",img:"some.img"}],[{name:"atul bisht",img:"Someimg.img"}],[{name:"Someone",img:"someone.img"}]]},profile:{id:"1",name:"Akashdeep Arora",about:"Something About the person",skills:["some skill","some skill","some skill","some skill","some skill","some skill","some skill","some skill","some skill","some skill"],image:"https://akashdeep98.github.io/assets/images/akash.jpg"}},V=t(61),$=t.n(V),X=t(60),ee=t.n(X),ae=t(34),te=t.n(ae),ne=t(36),oe=t.n(ne),ie=t(35),re=t.n(ie),se=t(121),le=t.n(se),ce=t(122),me=t.n(ce),de=t(123),ue=t.n(de),pe=t(37),he=t.n(pe),fe=t(362),ge=Object(x.withStyles)({paper:{minWidth:"20%",maxWidth:"50%"},root:{width:"100%",fontWeight:"400",fontFamily:"'Quicksand', sans-serif",color:"#494444",marginTop:60},icon:{color:"#3F51B5",iconSize:25},anchorsOverride:{textDecoration:"none",color:"inherit"}})(function(e){var a=e.classes;function t(a){e.switchDrawerHandler(!1)}var n=o.a.createElement("div",null,o.a.createElement(ee.a,{className:a.root},o.a.createElement(fe.a,{to:"/",exact:!0,className:a.anchorsOverride},o.a.createElement(te.a,{tabIndex:0,button:!0,onClick:t.bind(void 0,0),onKeyDown:e.switchDrawerHandler.bind(void 0,!1)},o.a.createElement(re.a,null,o.a.createElement(le.a,{className:a.icon})),o.a.createElement(oe.a,{disableTypography:!0,primary:"Home"}))),o.a.createElement("li",null,o.a.createElement(he.a,{variant:"inset"})),o.a.createElement(fe.a,{to:"/explore",exact:!0,className:a.anchorsOverride},o.a.createElement(te.a,{tabIndex:1,button:!0,onClick:t.bind(void 0,1),onKeyDown:e.switchDrawerHandler.bind(void 0,!1)},o.a.createElement(re.a,null,o.a.createElement(me.a,{className:a.icon})),o.a.createElement(oe.a,{disableTypography:!0,primary:"Explore"}))),o.a.createElement(he.a,{variant:"inset",component:"li"}),o.a.createElement(fe.a,{to:"/about",exact:!0,className:a.anchorsOverride},o.a.createElement(te.a,{tabIndex:2,button:!0,onClick:t.bind(void 0,2),onKeyDown:e.switchDrawerHandler.bind(void 0,!1)},o.a.createElement(re.a,null,o.a.createElement(ue.a,{className:a.icon})),o.a.createElement(oe.a,{disableTypography:!0,primary:"About Us"})))),o.a.createElement(he.a,null));return o.a.createElement("div",null,o.a.createElement($.a,{open:e.data.sidebarSwitch,onClose:e.switchDrawerHandler.bind(void 0,!1),onOpen:e.switchDrawerHandler.bind(void 0,!0),classes:{paper:a.paper}},o.a.createElement(N,{data:e.data,switchDrawerHandler:e.switchDrawerHandler}),n))}),be=t(16),Ee=t.n(be),ve=(t(349),Object(x.withStyles)(function(e){var a,t;return{image:(a={marginTop:"4%"},Object(j.a)(a,e.breakpoints.down("sm"),{width:"70%",height:"auto"}),Object(j.a)(a,e.breakpoints.up("md"),{width:"50%",height:"auto"}),Object(j.a)(a,e.breakpoints.up("lg"),{width:"32%",height:"auto"}),a),font:(t={textAlign:"center",fontWeight:"400",fontFamily:"'Nunito', sans-serif"},Object(j.a)(t,e.breakpoints.down("sm"),{fontSize:"36px",padding:"0%"}),Object(j.a)(t,e.breakpoints.up("md"),{fontSize:"45px",padding:"0 12.5%"}),Object(j.a)(t,e.breakpoints.up("lg"),{fontSize:"56px",padding:"0 25%"}),t)}})(function(e){var a=e.classes;return o.a.createElement("div",{className:"Container",style:{height:"100%"}},o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv1",animationDelay:"1s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv2",animationDelay:"3s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv3",animationDelay:"5s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv4",animationDelay:"7s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv2",animationDelay:"9s"}}),o.a.createElement(Ee.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement("img",{className:a.image,src:"/discuss.png",alt:""}),o.a.createElement("p",{className:a.font},'"We\'re in it for the people, not the projects."')))})),we=(t(351),Object(x.withStyles)(function(e){var a,t,n;return{image:(a={marginTop:"4%"},Object(j.a)(a,e.breakpoints.down("sm"),{width:"70%",height:"auto"}),Object(j.a)(a,e.breakpoints.up("md"),{width:"50%",height:"auto"}),Object(j.a)(a,e.breakpoints.up("lg"),{width:"32%",height:"auto"}),a),font:(t={textAlign:"center",fontWeight:"400",fontFamily:"'Nunito', sans-serif"},Object(j.a)(t,e.breakpoints.down("sm"),{fontSize:"36px",padding:"0%"}),Object(j.a)(t,e.breakpoints.up("md"),{fontSize:"45px",padding:"0 12.5%"}),Object(j.a)(t,e.breakpoints.up("lg"),{fontSize:"56px",padding:"0 25%"}),t),font1:(n={textAlign:"center",fontWeight:"400",fontFamily:"'Nunito', sans-serif"},Object(j.a)(n,e.breakpoints.down("sm"),{fontSize:"20px",padding:"0%"}),Object(j.a)(n,e.breakpoints.up("md"),{fontSize:"32px",padding:"0 2"}),Object(j.a)(n,e.breakpoints.up("lg"),{fontSize:"22px",padding:"0 5%"}),n)}})(function(e){var a=e.classes;return o.a.createElement("div",{className:"Container"},o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv1",animationDelay:"1s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv2",animationDelay:"3s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv3",animationDelay:"5s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv4",animationDelay:"7s"}}),o.a.createElement("i",{className:"fas fa-circle",id:"dot",style:{animationName:"mv2",animationDelay:"9s"}}),o.a.createElement(Ee.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement("img",{className:a.image,src:"/team.svg",alt:""}),o.a.createElement("p",{className:a.font},'"We believe, To teach once is to learn Twice."'),o.a.createElement("p",{className:a.font1},"Technovation is the technical club of Computer Science Department, ABES Engineering College. It was formed in 2010 with a vision to provide a platform for students to present their technical skills. With time it has emerged into a fully operational group having a team of 50+ students having expertise in various fields. Within the last few years, we have organised various events which include seminars on some of the latest technologies such as Android, PHP and Adobe Photoshop , Coding events, Aptitude tests and Quizes. We have always tried to ensure that the events imbibe knowledge and can start a deep thinking process within you."),o.a.createElement("p",{className:a.font},"Our Aim"),o.a.createElement("p",{className:a.font1},"It is a community which looks forward to bring new technological ideas & methods which could be implemented for developing solutions to real life problems. This club envisages conducive platform to explore student's latent talents and also to enable them to come out with their innovative ideas. The club also Organises various events which helps in raising the confidence level of students, impacting technical knowledge and building professional attitude in them."),o.a.createElement("br",null),o.a.createElement("br",null)))})),ye=Object(x.withStyles)(function(e){var a;return{image:(a={marginTop:"4%"},Object(j.a)(a,e.breakpoints.down("sm"),{width:"29%",height:"auto"}),Object(j.a)(a,e.breakpoints.up("md"),{width:"50%",height:"auto"}),Object(j.a)(a,e.breakpoints.up("lg"),{width:"32%",height:"100%"}),a),root:{flexGrow:1}}})(function(e){var a=e.classes;return o.a.createElement(Ee.a,{container:!0,className:a.root,style:{margin:"100px"}},o.a.createElement(Ee.a,{md:4,sm:12},o.a.createElement("center",null,o.a.createElement("img",{src:"/akash.jpg",alt:"something",className:a.image}))),o.a.createElement(Ee.a,{md:8,sm:12},o.a.createElement("center",null,o.a.createElement("h1",null,"About:"),o.a.createElement("br",null),o.a.createElement("p",null,_.profile.about))))}),xe=t(361),Ne=t(360),ke=Object(x.withStyles)(function(e){var a;return{font:(a={textAlign:"center",fontWeight:"600",fontFamily:"'Quicksand', sans-serif",fontSize:"36px",color:"#494444",margin:"0px auto"},Object(j.a)(a,e.breakpoints.down("sm"),{fontSize:"12px"}),Object(j.a)(a,e.breakpoints.up("md"),{fontSize:"26px"}),Object(j.a)(a,e.breakpoints.up("lg"),{fontSize:"36px"}),a),hr:{width:"5%",borderBottom:"2px solid #3F51B5"},icon:{margin:"8px 20px 0px 20px",color:"#3F51B5",fontSize:"35px"}}})(function(e){var a=e.classes;return o.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.25)",padding:"10px"}},o.a.createElement("h1",{className:a.font},"Join Us"),o.a.createElement("hr",{className:a.hr}),o.a.createElement(K.c,{container:!0,direction:"row",justify:"center"},o.a.createElement("a",{className:a.icon,href:"https://www.facebook.com/abestechnovation/"},o.a.createElement("i",{className:"fab fa-github"})),o.a.createElement("a",{className:a.icon,href:"https://www.facebook.com/abestechnovation/"},o.a.createElement("i",{className:"fab fa-facebook-square"})),o.a.createElement("a",{className:a.icon,href:"https://www.instagram.com/technovationabes/"},o.a.createElement("i",{className:"fab fa-instagram"})),o.a.createElement("a",{className:a.icon,href:"mailto:technovation@abes.ac.in"},o.a.createElement("i",{className:"fas fa-envelope"}))),o.a.createElement("p",{style:{color:"#3F51B5",textAlign:"center",fontFamily:"'Quicksand', sans-serif"}},"\xa9 2018 Technovation"))}),Se=(t(353),t(128)),Oe=t.n(Se),je=t(124),Ie=t.n(je),Ce=t(125),De=t.n(Ce),ze=t(126),We=t.n(ze),Te=t(127),Ae=t.n(Te),He=(t(355),Object(x.withStyles)({root:{margin:0,padding:"2% 15%"},itemRoot:{color:"#0676FC",display:"flex",flexDirection:"row",justifyContent:"center",padding:"4%"},fontInfoControl:{fontFamily:"'ZCOOL QingKe HuangYou', cursive",color:"#494444",textAlign:"center"}})(function(e){var a=e.classes;return o.a.createElement("div",{className:a.root},o.a.createElement(Ee.a,{container:!0,spacing:16},o.a.createElement(Ee.a,{item:!0,lg:3,sm:6,xs:12},o.a.createElement(O.a,{classes:{root:a.itemRoot}},o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:1}},o.a.createElement(Ie.a,{fontSize:"large"})),o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:3}},o.a.createElement(b.a,{variant:"h5",classes:{h5:a.fontInfoControl},style:{fontWeight:"bold"}},"DATE"),o.a.createElement(b.a,{variant:"subtitle1",classes:{subtitle1:a.fontInfoControl}},e.data.getUTCDate()," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.data.getMonth()],", ",e.data.getUTCFullYear())))),o.a.createElement(Ee.a,{item:!0,lg:3,sm:6,xs:12},o.a.createElement(O.a,{classes:{root:a.itemRoot}},o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:1}},o.a.createElement(De.a,{fontSize:"large"})),o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:3}},o.a.createElement(b.a,{variant:"h5",classes:{h5:a.fontInfoControl},style:{fontWeight:"bold"}},"TIME"),o.a.createElement(b.a,{variant:"subtitle1",classes:{subtitle1:a.fontInfoControl}},"4:00 PM")))),o.a.createElement(Ee.a,{item:!0,lg:3,sm:6,xs:12},o.a.createElement(O.a,{classes:{root:a.itemRoot}},o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:1}},o.a.createElement(We.a,{fontSize:"large"})),o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:3}},o.a.createElement(b.a,{variant:"h5",classes:{h5:a.fontInfoControl},style:{fontWeight:"bold"}},"VENUE"),o.a.createElement(b.a,{variant:"subtitle1",classes:{subtitle1:a.fontInfoControl}},"Seminar Hall 2, Raman Block")))),o.a.createElement(Ee.a,{item:!0,lg:3,sm:6,xs:12},o.a.createElement(O.a,{classes:{root:a.itemRoot}},o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:1}},o.a.createElement(Ae.a,{fontSize:"large"})),o.a.createElement("div",{className:"InfoIcon",style:{flexGrow:3}},o.a.createElement(b.a,{variant:"h5",classes:{h5:a.fontInfoControl},style:{fontWeight:"bold"}},"REGISTRATION"),o.a.createElement(b.a,{variant:"subtitle1",classes:{subtitle1:a.fontInfoControl}},"Free"))))))})),Fe=function(e){return e.children},Me=function(e){var a=(new Date).getTime(),t=new Date(e)-a;return t<0?-1:[Math.floor(t/864e5),Math.floor(t%864e5/36e5),Math.floor(t%36e5/6e4),Math.floor(t%6e4/1e3)]},Be=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={days:0,hours:0,min:0,sec:0},t.date="Jan 29, 2019 00:00:00",t.updateTimerHandler=function(){setInterval(function(){var e=Me(t.date);t.setState({days:e[0],hours:e[1],min:e[2],sec:e[3]})},1e3)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateTimerHandler()}},{key:"render",value:function(){var e=new Date(this.date),a=this.props.classes;return o.a.createElement(Fe,null,o.a.createElement("div",{className:"Container EventPageBackground"},o.a.createElement("div",{className:"Wrapper"},o.a.createElement("h1",{className:a.timer},this.state.days," Days . ",this.state.hours," Hours . ",this.state.min," Minutes . ",this.state.sec," Seconds"),o.a.createElement("hr",{className:a.hr}),o.a.createElement("h1",{className:a.header},"Web Development BootCamp"),o.a.createElement("p",{className:a.info},"There will be details about the event . Anim minim proident laborum aliqua pariatur enim. Occaecat cupidatat labore laborum aliqua."),o.a.createElement(v.a,{color:"inherit","aria-label":"Explore More",fontSize:"large"},o.a.createElement(Oe.a,null)))),o.a.createElement(He,{data:e}))}}]),a}(n.Component),Ge=Object(x.withStyles)({timer:{fontFamily:"'Kaushan Script', cursive",fontSize:22},header:{fontSize:56,fontFamily:"'ZCOOL QingKe HuangYou', cursive"},hr:{width:"20%",borderBottom:"2px solid #ffffff",marginBottom:"20px",borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0},info:{fontSize:16,padding:"0% 25%",marginBottom:"25%"}})(Be),Le=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).tileData=_,t.state={sidebarSwitch:!1},t.switchDrawerHandler=function(e){t.setState(function(a){return{sidebarSwitch:null==e?!a.sidebarSwitch:e}})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(xe.a,null,o.a.createElement(Fe,null,o.a.createElement(N,{data:this.state,switchDrawerHandler:this.switchDrawerHandler}),o.a.createElement(ge,{data:this.state,switchDrawerHandler:this.switchDrawerHandler}),o.a.createElement(Ne.a,{path:"/",exact:!0,component:ve}),o.a.createElement(Ne.a,{path:"/explore",exact:!0,render:function(){return o.a.createElement(Z,{data:e.tileData})}}),o.a.createElement(Ne.a,{path:"/about",exact:!0,component:we}),o.a.createElement(Ne.a,{path:"/profile/:id",exact:!0,component:ye}),o.a.createElement(Ne.a,{path:"/event/:id",exact:!0,component:Ge}),o.a.createElement(ke,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(357);r.a.render(o.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,a,t){}},[[208,2,1]]]);
//# sourceMappingURL=main.c952ae6b.chunk.js.map