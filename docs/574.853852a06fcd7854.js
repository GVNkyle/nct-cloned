"use strict";(self.webpackChunknct_cloned=self.webpackChunknct_cloned||[]).push([[574],{6904:(O,T,l)=>{l.d(T,{G:()=>r});var S=l(529),c=l(2340),o=l(4004),m=l(4650);let r=(()=>{class d{constructor(v){this.http=v,this.apiUrl=c.N.apiUrl}getExplore(v=1,g="song"){let D=(new S.LE).append("type",g).append("page",v);return this.http.get(`${this.apiUrl}explore`,{params:D}).pipe((0,o.U)(y=>y.data))}getExploreArtists(v){let g=(new S.LE).append("gender",v);return this.http.get(`${this.apiUrl}exploreArtists`,{params:g}).pipe((0,o.U)(D=>D.artist))}}return d.\u0275fac=function(v){return new(v||d)(m.LFG(S.eN))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3182:(O,T,l)=>{l.d(T,{k:()=>Rt});var S=l(5861),c=l(6895),o=l(4650),m=l(9646),r=l(8421),d=l(9751),f=l(5577),v=l(1144),g=l(576),D=l(3268);const y=["addListener","removeListener"],x=["addEventListener","removeEventListener"],W=["on","off"];function M(t,e,n,i){if((0,g.m)(n)&&(i=n,n=void 0),i)return M(t,e,n).pipe((0,D.Z)(i));const[s,a]=function Q(t){return(0,g.m)(t.addEventListener)&&(0,g.m)(t.removeEventListener)}(t)?x.map(p=>h=>t[p](e,h,n)):function j(t){return(0,g.m)(t.addListener)&&(0,g.m)(t.removeListener)}(t)?y.map(K(t,e)):function J(t){return(0,g.m)(t.on)&&(0,g.m)(t.off)}(t)?W.map(K(t,e)):[];if(!s&&(0,v.z)(t))return(0,f.z)(p=>M(p,e,n))((0,r.Xf)(t));if(!s)throw new TypeError("Invalid event target");return new d.y(p=>{const h=(...u)=>p.next(1<u.length?u:u[0]);return s(h),()=>a(h)})}function K(t,e){return n=>i=>t[n](e,i)}var Z=l(4004),I=l(8505),X=l(9300),k=l(4986),V=l(4482),L=l(5403);const R={leading:!0,trailing:!1};var $=l(3532),b=l(1165);function et(t,e,n,i){const s=window&&!!window.document&&window.document.documentElement;let a=s&&e?window:n;if(t&&(a=t&&s&&"string"==typeof t?function nt(t,e,n){return(n?window.document:e).querySelector(t)}(t,n.nativeElement,i):t,!a))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return a}function P(t){return t&&!t.firstChange}const it={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},lt={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class rt{constructor(e=!0){this.vertical=e,this.propsMap=e?it:lt}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function pt(t){return["Window","global"].some(n=>Object.prototype.toString.call(t).includes(n))}function U(t,e){return t?e.document.documentElement:null}function H(t,e){const n=function ut({container:t,isWindow:e,axis:n}){const{offsetHeightKey:i,clientHeightKey:s}=F(n);return z(t,e,i,s)}(e);return e.isWindow?function dt(t,e,n){const{axis:i,container:s,isWindow:a}=n,{offsetHeightKey:p,clientHeightKey:h}=F(i),u=t+N(U(a,s),i,a),E=z(e.nativeElement,a,p,h),C=function mt(t,e,n){const i=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+N(t,e,n)}(e.nativeElement,i,a)+E;return{height:t,scrolled:u,totalToScroll:C,isWindow:a}}(n,t,e):function ft(t,e,n){const{axis:i,container:s}=n;return{height:t,scrolled:s[i.scrollTopKey()],totalToScroll:s[i.scrollHeightKey()],isWindow:!1}}(n,0,e)}function F(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function z(t,e,n,i){if(isNaN(t[n])){const s=U(e,t);return s?s[i]:0}return t[n]}function N(t,e,n){const i=e.pageYOffsetKey(),s=e.scrollTopKey(),a=e.offsetTopKey();return isNaN(window.pageYOffset)?U(n,t)[s]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[a]}function gt(t,e={down:0,up:0},n){let i,s;if(t.totalToScroll<=0)return!1;const a=t.isWindow?t.scrolled:t.height+t.scrolled;return n?(i=(t.totalToScroll-a)/t.totalToScroll,s=(e?.down?e.down:0)/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-a)),s=(e?.up?e.up:0)/10),i<=s}class Tt{constructor({totalToScroll:e}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=e}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,n){this.updateScrollPosition(e),this.updateTotalToScroll(n)}updateTriggeredFlag(e,n){n?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,n){return n?this.triggered.down===e:this.triggered.up===e}}function yt(t){const{scrollContainer:e,scrollWindow:n,element:i,fromRoot:s}=t,a=function ct({windowElement:t,axis:e}){return function at(t,e){const n=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return{...t,container:n}}({axis:e,isWindow:pt(t)},t)}({axis:new rt(!t.horizontal),windowElement:et(e,n,i,s)}),p=new Tt({totalToScroll:H(i,a)}),u={up:t.upDistance,down:t.downDistance};return function xt(t){let e=M(t.container,"scroll");return t.throttle&&(e=e.pipe(function tt(t,e=k.z,n=R){const i=function q(t=0,e,n=k.P){let i=-1;return null!=e&&((0,$.K)(e)?n=e:i=e),new d.y(s=>{let a=(0,b.q)(t)?+t-n.now():t;a<0&&(a=0);let p=0;return n.schedule(function(){s.closed||(s.next(p++),0<=i?this.schedule(void 0,i):s.complete())},a)})}(t,e);return function G(t,e=R){return(0,V.e)((n,i)=>{const{leading:s,trailing:a}=e;let p=!1,h=null,u=null,E=!1;const C=()=>{u?.unsubscribe(),u=null,a&&(Y(),E&&i.complete())},A=()=>{u=null,E&&i.complete()},B=_=>u=(0,r.Xf)(t(_)).subscribe((0,L.x)(i,C,A)),Y=()=>{if(p){p=!1;const _=h;h=null,i.next(_),!E&&B(_)}};n.subscribe((0,L.x)(i,_=>{p=!0,h=_,(!u||u.closed)&&(s?Y():B(_))},()=>{E=!0,(!(a&&p&&u)||u.closed)&&i.complete()}))})}(()=>i,n)}(t.throttle,void 0,{leading:!0,trailing:!0}))),e}({container:a.container,throttle:t.throttle}).pipe((0,f.z)(()=>(0,m.of)(H(i,a))),(0,Z.U)(E=>function Dt(t,e,n){const{scrollDown:i,fire:s}=function St(t,e,n){const i=function ht(t,e){return t<e.scrolled}(t,e);return{fire:gt(e,n,i),scrollDown:i}}(t,e,n);return{scrollDown:i,fire:s,stats:e}}(p.lastScrollPosition,E,u)),(0,I.b)(({stats:E})=>p.updateScroll(E.scrolled,E.totalToScroll)),(0,X.h)(({fire:E,scrollDown:C,stats:{totalToScroll:A}})=>function st(t,e,n){return!!(t&&e||!n&&e)}(t.alwaysCallback,E,p.isTriggeredScroll(A,C))),(0,I.b)(({scrollDown:E,stats:{totalToScroll:C}})=>{p.updateTriggeredFlag(C,E)}),(0,Z.U)(Ct))}function Ct(t){const{scrollDown:e,stats:{scrolled:n}}=t;return{type:e?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:n}}}let _t=(()=>{class t{constructor(n,i){this.element=n,this.zone=i,this.scrolled=new o.vpe,this.scrolledUp=new o.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:n,infiniteScrollDisabled:i,infiniteScrollDistance:s}){const a=P(n),p=P(i),h=P(s),u=!p&&!this.infiniteScrollDisabled||p&&!i.currentValue||h;(a||p||h)&&(this.destroyScroller(),u&&this.setup())}setup(){(function ot(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=yt({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(n=>this.handleOnScroll(n))})}handleOnScroll({type:n,payload:i}){const s="[NGX_ISE] DOWN"===n?this.scrolled:this.scrolledUp;(function Ot(t){return t.observed??t.observers.length>0})(s)&&this.zone.run(()=>s.emit(i))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(o.SBq),o.Y36(o.R0b))},t.\u0275dir=o.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[o.TTD]}),t})(),Mt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),t})();var It=l(3905),Pt=l(262),Ut=l(6686),wt=l(9578),At=l(6904),Wt=l(1177),Kt=l(2607);function Zt(t,e){if(1&t&&(o.ynx(0),o._UZ(1,"app-explore-skeleton",3),o.BQk()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ratio",n.ratio)}}function kt(t,e){if(1&t&&(o.ynx(0),o._UZ(1,"app-item",8),o.BQk()),2&t){const n=e.$implicit,i=o.oxw(2);o.xp6(1),o.Q6J("ratio",i.ratio)("item",n)}}function Lt(t,e){if(1&t){const n=o.EpF();o.TgZ(0,"div")(1,"h1",4),o._uU(2),o.qZA(),o.TgZ(3,"div",5),o.NdJ("scrolled",function(){o.CHM(n);const s=o.oxw();return o.KtG(s.onScroll())}),o.TgZ(4,"div",6),o.YNc(5,kt,2,2,"ng-container",7),o.qZA()()()}if(2&t){const n=o.oxw();o.xp6(2),o.Oqu(n.name),o.xp6(1),o.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50),o.xp6(2),o.Q6J("ngForOf",n.data)}}let Rt=(()=>{class t{constructor(n,i,s){this.exploreService=n,this.notiflixService=i,this.router=s,this.ratio="1/1",this.data=[],this.pageNumber=1,this.pageSize=10}ngOnInit(){this.getExplore()}getExplore(){var n=this;return(0,S.Z)(function*(){yield(0,It.z)(n.exploreService.getExplore(n.pageNumber,n.type).pipe((0,I.b)(i=>{n.data=[...n.data,...i]}),(0,Pt.K)(()=>(n.notiflixService.error("Oops! Something error happened!"),n.router.navigate(["/error"]),(0,m.of)(null)))))})()}onScroll(){this.pageNumber=this.pageNumber+1,this.getExplore()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(At.G),o.Y36(Wt.c),o.Y36(Kt.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-explore"]],inputs:{type:"type",name:"name",ratio:"ratio"},standalone:!0,features:[o.jDz],decls:4,vars:2,consts:[[1,"px-4"],[4,"ngIf","ngIfElse"],["elseBlock",""],[3,"ratio"],[1,"mb-5","font-semibold","text-xl"],["infiniteScroll","",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"grid","lg:grid-cols-4","md:grid-cols-3","grid-cols-2","gap-4"],[4,"ngFor","ngForOf"],[3,"ratio","item"]],template:function(n,i){if(1&n&&(o.TgZ(0,"div",0),o.YNc(1,Zt,2,1,"ng-container",1),o.YNc(2,Lt,6,4,"ng-template",null,2,o.W1O),o.qZA()),2&n){const s=o.MAs(3);o.xp6(1),o.Q6J("ngIf",0===i.data.length)("ngIfElse",s)}},dependencies:[c.ez,c.sg,c.O5,Mt,_t,Ut.C,wt.P]}),t})()},9578:(O,T,l)=>{l.d(T,{P:()=>v});var S=l(6895),c=l(2607),o=l(498),m=l(653),r=l(4650),d=l(9653);const f=function(g){return[g]};let v=(()=>{class g{constructor(y){this.store=y,this.ratio="1/1",this.link="",this.imgNotFound=o.qp}ngOnInit(){this.link=this.item.type?`/${this.item.type.toLowerCase()}/${this.item.key}`:this.type?`/${this.type}/${this.item.key}`:"#"}handleSong(y){"songs"===this.type&&this.store.dispatch((0,m.aV)({songIds:y}))}}return g.\u0275fac=function(y){return new(y||g)(r.Y36(d.yh))},g.\u0275cmp=r.Xpm({type:g,selectors:[["app-item"]],inputs:{item:"item",type:"type",ratio:"ratio"},standalone:!0,features:[r.jDz],decls:6,vars:9,consts:[[3,"click"],[1,"block","w-full","rounded-md",3,"routerLink"],["loading","lazy",1,"rounded-md",3,"src"],[1,"line-clamp-1","font-semibold","text-sm"]],template:function(y,x){1&y&&(r.TgZ(0,"div",0),r.NdJ("click",function(){return x.handleSong(x.item.key)}),r.TgZ(1,"a",1),r._UZ(2,"img",2),r.TgZ(3,"p",3),r._uU(4),r.ALo(5,"titlecase"),r.qZA()()()),2&y&&(r.xp6(1),r.Udp("aspect-ratio",x.ratio),r.Q6J("routerLink",r.VKq(7,f,x.link)),r.xp6(1),r.s9C("src",x.item.imageUrl||x.item.thumbnail||x.item.thumbURL||x.imgNotFound,r.LSH),r.xp6(2),r.Oqu(r.lcZ(5,5,null==x.item?null:x.item.title)))},dependencies:[S.ez,S.rS,c.Bz,c.yS]}),g})()},725:(O,T,l)=>{l.d(T,{k:()=>m});var S=l(6895),c=l(5828),o=l(4650);let m=(()=>{class r{constructor(){}}return r.\u0275fac=function(f){return new(f||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-detail-skeleton"]],standalone:!0,features:[o.jDz],decls:14,vars:0,consts:[[1,"px-4"],[1,"flex","md:flex-row","flex-col"],[1,"flex","items-center","justify-center"],[1,"w-[238px]","max-w-full","aspect-[1/1]","rounded-md","skeleton"],[1,"flex-1","md:ml-5","ml-0","md:mt-0","mt-5"],[1,"skeleton","h-5","w-[200px]","mb-5"],[1,"mt-5","flex","items-center","gap-2"],[1,"w-[80px]","py-4","skeleton"]],template:function(f,v){1&f&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._UZ(3,"div",3),o.qZA(),o.TgZ(4,"div",4),o._UZ(5,"p",5)(6,"p",5)(7,"p",5),o.qZA()(),o.TgZ(8,"div",6),o._UZ(9,"div",7)(10,"div",7)(11,"div",7)(12,"div",7),o.qZA(),o._UZ(13,"app-list-song-skeleton"),o.qZA())},dependencies:[S.ez,c._]}),r})()},6686:(O,T,l)=>{l.d(T,{C:()=>m});var S=l(6895),c=l(4650);function o(r,d){if(1&r&&(c.ynx(0),c._UZ(1,"div",3),c.BQk()),2&r){const f=c.oxw();c.xp6(1),c.Udp("aspect-ratio",f.ratio)}}let m=(()=>{class r{constructor(){this.longArr=Array.apply(0,Array(12))}}return r.\u0275fac=function(f){return new(f||r)},r.\u0275cmp=c.Xpm({type:r,selectors:[["app-explore-skeleton"]],inputs:{ratio:"ratio"},standalone:!0,features:[c.jDz],decls:4,vars:1,consts:[[1,"mb-5","w-[150px]","h-5","skeleton"],[1,"grid","lg:grid-cols-4","md:grid-cols-3","grid-cols-2","gap-4"],[4,"ngFor","ngForOf"],[1,"rounded-md","skeleton"]],template:function(f,v){1&f&&(c.TgZ(0,"div"),c._UZ(1,"h1",0),c.TgZ(2,"div",1),c.YNc(3,o,2,2,"ng-container",2),c.qZA()()),2&f&&(c.xp6(3),c.Q6J("ngForOf",v.longArr))},dependencies:[S.ez,S.sg]}),r})()},5828:(O,T,l)=>{l.d(T,{_:()=>m});var S=l(6895),c=l(4055),o=l(4650);let m=(()=>{class r{constructor(){}}return r.\u0275fac=function(f){return new(f||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-list-song-skeleton"]],standalone:!0,features:[o.jDz],decls:14,vars:0,consts:[[1,"my-5"],[1,"w-[200px]","h-6","mt-4","skeleton"],[1,"grid","md:grid-cols-2","grid-cols-1","gap-2","mt-4"]],template:function(f,v){1&f&&(o.TgZ(0,"div",0)(1,"div"),o._UZ(2,"h1",1),o.qZA(),o.TgZ(3,"div",2),o._UZ(4,"app-song-item-skeleton")(5,"app-song-item-skeleton")(6,"app-song-item-skeleton")(7,"app-song-item-skeleton")(8,"app-song-item-skeleton")(9,"app-song-item-skeleton")(10,"app-song-item-skeleton")(11,"app-song-item-skeleton")(12,"app-song-item-skeleton")(13,"app-song-item-skeleton"),o.qZA()())},dependencies:[S.ez,c.t]}),r})()},4055:(O,T,l)=>{l.d(T,{t:()=>o});var S=l(6895),c=l(4650);let o=(()=>{class m{constructor(){}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=c.Xpm({type:m,selectors:[["app-song-item-skeleton"]],standalone:!0,features:[c.jDz],decls:6,vars:0,consts:[[1,"flex","items-start","p-2","rounded-md","hover:bg-gray-200","transition-colors","cursor-pointer"],[1,"w-[54px]","h-[54px]","rounded-md","skeleton"],[1,"ml-4","flex-1"],[1,"font-semibold","line-clamp-1","text-sm","h-4","skeleton","w-[80%]"],[1,"flex","items-center","gap-2","text-xs","w-full","mt-1"],[1,"skeleton","h-4","mt-1","w-[100px]","line-clamp-1","text-gray-400"]],template:function(d,f){1&d&&(c.TgZ(0,"div",0),c._UZ(1,"div",1),c.TgZ(2,"div",2),c._UZ(3,"p",3),c.TgZ(4,"div",4),c._UZ(5,"p",5),c.qZA()()())},dependencies:[S.ez]}),m})()}}]);