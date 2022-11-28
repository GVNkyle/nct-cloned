"use strict";(self.webpackChunknct_cloned=self.webpackChunknct_cloned||[]).push([[677],{6344:(S,g,o)=>{o.d(g,{T:()=>t});var d=o(6895),e=o(4650),y=o(498);let h=(()=>{class a{constructor(){this.onClick=new e.vpe,this.imgNotFound=y.qp}ngOnInit(){this.name=this.item.artists.map(i=>i.name).join(", ")}handleClick(i){this.onClick.emit(i)}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-song-item"]],inputs:{item:"item",index:"index"},outputs:{onClick:"onClick"},standalone:!0,features:[e.jDz],decls:9,vars:4,consts:[[1,"flex","items-start","p-2","rounded-md","hover:bg-gray-200","transition-colors","cursor-pointer",3,"click"],[1,"w-[54px]","h-[54px]"],["width","100%","height","100%","loading","lazy",1,"rounded-md",3,"src","alt"],[1,"ml-4","flex-1"],[1,"font-semibold","line-clamp-1","text-sm"],[1,"flex","items-center","gap-2","text-xs","w-full","mt-1"],[1,"rounded-sm","line-clamp-1","text-gray-400"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return r.handleClick(r.index)}),e.TgZ(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"p",4),e._uU(5),e.qZA(),e.TgZ(6,"div",5)(7,"p",6),e._uU(8),e.qZA()()()()),2&i&&(e.xp6(2),e.s9C("src",r.item.thumbnail||r.imgNotFound,e.LSH),e.s9C("alt",r.item.title),e.xp6(3),e.Oqu(r.item.title),e.xp6(3),e.hij(" ",r.name," "))},dependencies:[d.ez]}),a})();var x=o(1368),v=o(653),C=o(9653);function Z(a,p){if(1&a){const i=e.EpF();e.ynx(0),e.TgZ(1,"app-song-item",2),e.NdJ("onClick",function(u){e.CHM(i);const f=e.oxw();return e.KtG(f.handleClick(u))}),e.qZA(),e.BQk()}if(2&a){const i=p.$implicit,r=p.index;e.xp6(1),e.Q6J("item",i)("index",r)}}let t=(()=>{class a{constructor(i){this.store=i,this.songs=[]}handleClick(i){this.store.dispatch((0,x.Sl)()),this.store.dispatch((0,v.QN)({currentIndex:i,songIds:this.songs}))}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(C.yh))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-wrap-song"]],inputs:{songs:"songs"},standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[[1,"grid","md:grid-cols-2","grid-cols-1","gap-2","my-5"],[4,"ngFor","ngForOf"],[3,"item","index","onClick"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0),e.YNc(1,Z,2,2,"ng-container",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("ngForOf",r.songs))},dependencies:[d.ez,d.sg,h]}),a})()},6677:(S,g,o)=>{o.r(g),o.d(g,{PlaylistModule:()=>M});var d=o(6895),e=o(2607),y=o(5861),h=o(498),x=o(3905),v=o(8505),C=o(262),Z=o(9646),t=o(4650),a=o(529),p=o(2340);let i=(()=>{class l{constructor(n){this.http=n,this.apiUrl=p.N.apiUrl}getPlaylistDetail(n){let m=(new a.LE).append("key",n);return this.http.get(`${this.apiUrl}playlist`,{params:m})}}return l.\u0275fac=function(n){return new(n||l)(t.LFG(a.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var r=o(1177),u=o(6344),f=o(725);function F(l,s){1&l&&(t.ynx(0),t._UZ(1,"app-detail-skeleton"),t.BQk())}function k(l,s){if(1&l&&(t.ynx(0),t.TgZ(1,"a",16),t._UZ(2,"img",17),t.qZA(),t.BQk()),2&l){const n=s.$implicit,m=t.oxw(2);t.xp6(1),t.Q6J("routerLink",n.link),t.xp6(1),t.s9C("src",n.imageUrl||m.imgNotFound,t.LSH),t.s9C("alt",n.name)}}function A(l,s){if(1&l&&(t.ynx(0),t.TgZ(1,"p",18),t._uU(2),t.qZA(),t.BQk()),2&l){const n=s.$implicit;t.xp6(2),t.hij(" ",n.name," ")}}function U(l,s){if(1&l&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),t._UZ(4,"img",6),t.qZA()(),t.TgZ(5,"div",7)(6,"div")(7,"div"),t._uU(8),t.qZA()(),t.TgZ(9,"div",8)(10,"div",9),t.YNc(11,k,3,3,"ng-container",10),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p",11),t._uU(14),t.ALo(15,"date"),t.qZA()()(),t.TgZ(16,"div",12)(17,"span"),t._uU(18,"Tags: "),t.qZA(),t.TgZ(19,"div",13),t.YNc(20,A,3,1,"ng-container",10),t.qZA()(),t.TgZ(21,"div",14)(22,"h1"),t._uU(23,"B\xe0i h\xe1t"),t.qZA(),t._UZ(24,"app-wrap-song",15),t.qZA()()),2&l){const n=t.oxw();t.xp6(4),t.s9C("src",(null==n.data||null==n.data.playlist?null:n.data.playlist.thumbnail)||n.imgNotFound,t.LSH),t.xp6(4),t.hij("Playlist: ",null==n.data||null==n.data.playlist?null:n.data.playlist.title,""),t.xp6(3),t.Q6J("ngForOf",null==n.data||null==n.data.playlist?null:n.data.playlist.artists),t.xp6(1),t.hij(" ",n.artistName," "),t.xp6(2),t.hij(" ",t.xi3(15,7,null==n.data||null==n.data.playlist?null:n.data.playlist.dateCreate,"longDate")," "),t.xp6(6),t.Q6J("ngForOf",null==n.data||null==n.data.playlist?null:n.data.playlist.listTag),t.xp6(4),t.Q6J("songs",null==n.data||null==n.data.playlist?null:n.data.playlist.songs)}}let N=(()=>{class l{constructor(n,m,c,I){this.playlistService=n,this.notiflixService=m,this.route=c,this.router=I,this.key="",this.artistName="",this.imgNotFound=h.qp}ngOnInit(){this.key=this.route.snapshot.paramMap.get("key"),this.getPlaylistDetail()}getPlaylistDetail(){var n=this;return(0,y.Z)(function*(){yield(0,x.z)(n.playlistService.getPlaylistDetail(n.key).pipe((0,v.b)(m=>{n.data=m,n.data?.playlist?.artists?.map(c=>{c.link=c.shortLink?`/artist/${c.shortLink}`:"#"}),n.artistName=n.data?.playlist?.artists?.map(c=>c.name).join(", ")}),(0,C.K)(()=>(n.notiflixService.error("Oops! Something error happened!"),n.router.navigate(["/error"]),(0,Z.of)(null)))))})()}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(i),t.Y36(r.c),t.Y36(e.gz),t.Y36(e.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"px-4"],[1,"flex","md:flex-row","flex-col"],[1,"flex","items-center","justify-center","md:w-auto","w-full"],[1,"w-[238px]","max-w-full","aspect-[1/1]","bg-gray-400","rounded-md"],[1,"rounded-md",3,"src"],[1,"flex-1","md:ml-5","ml-0","md:mt-0","mt-5"],[1,"flex","items-center","mt-4"],[1,"flex","items-center","mr-3"],[4,"ngFor","ngForOf"],[1,"mt-4"],[1,"flex","mt-5"],[1,"flex","items-center","flex-wrap","gap-2","ml-2"],[1,"mt-4","mb-5","font-semibold","text-xl"],[3,"songs"],[1,"w-5","h-5","bg-gray-500","rounded-full",3,"routerLink"],["loading","eager",1,"rounded-full",3,"src","alt"],[1,"bg-gray-200","rounded-sm","px-2","py-1","line-clamp-1"]],template:function(n,m){if(1&n&&(t.YNc(0,F,2,0,"ng-container",0),t.YNc(1,U,25,10,"ng-template",null,1,t.W1O)),2&n){const c=t.MAs(2);t.Q6J("ngIf",!m.data)("ngIfElse",c)}},dependencies:[d.sg,d.O5,e.yS,u.T,f.k,d.uU]}),l})();var T=o(3182);const P=[{path:"",component:(()=>{class l{constructor(){}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-main"]],decls:1,vars:0,consts:[["type","playlist","name","Playlist"]],template:function(n,m){1&n&&t._UZ(0,"app-explore",0)},dependencies:[T.k]}),l})()},{path:":key",component:N}];let D=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[e.Bz.forChild(P),e.Bz]}),l})(),M=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[d.ez,D,u.T,f.k,T.k]}),l})()}}]);