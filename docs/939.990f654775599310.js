"use strict";(self.webpackChunknct_cloned=self.webpackChunknct_cloned||[]).push([[939],{9939:(m,u,r)=>{r.r(u),r.d(u,{ProfileComponent:()=>d});var s=r(5861),i=r(6895),_=r(8505),e=r(4650),a=r(9653),c=r(1177);let d=(()=>{class l{constructor(t,n){this.store=t,this.notiflixService=n}ngOnInit(){var t=this;return(0,s.Z)(function*(){yield t.store.select("auth").pipe((0,_.b)(n=>t.currentUser=n.currentUser))})()}handleUpdate(){this.notiflixService.error("T\xednh n\u0103ng ch\u01b0a c\xf3!")}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(a.yh),e.Y36(c.c))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-profile"]],standalone:!0,features:[e.jDz],decls:33,vars:4,consts:[[1,"px-4"],[1,"flex","items-center","pb-5","border-b","border-[#EAEBEB]"],[1,"w-[160px]","h-[160px]","rounded-md","overflow-hidden"],[3,"src","alt"],[1,"ml-4","flex-1"],[1,"font-semibold","line-clamp-2"],[1,"text-sm","text-gray-600","bg-gray-200","py-2","mt-4","px-4","rounded-md",3,"click"],[1,"mt-5"],[1,"text-xl","font-semibold"],[1,"bg-gray-200","text-black","py-2","mb-4","px-4","rounded-md","text-sm","flex","items-center","font-semibold"],[1,"text-gray-400","mr-1"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h1",5),e._uU(6),e.qZA(),e.TgZ(7,"button",6),e.NdJ("click",function(){return n.handleUpdate()}),e._uU(8," C\u1eadp Nh\u1eadt "),e.qZA()()(),e.TgZ(9,"div",7)(10,"h1",8),e._uU(11," Th\xf4ng tin c\xe1 nh\xe2n "),e.qZA(),e.TgZ(12,"ul",7)(13,"li",9)(14,"span",10),e._uU(15,"T\xean hi\u1ec3n th\u1ecb: "),e.qZA(),e._uU(16," {{currentUser?.displayName} "),e.qZA(),e.TgZ(17,"li",9)(18,"span",10),e._uU(19,"Email: "),e.qZA(),e._uU(20),e.qZA(),e.TgZ(21,"li",9)(22,"span",10),e._uU(23,"Website: "),e.qZA(),e._uU(24," Ch\u01b0a c\xf3 "),e.qZA(),e.TgZ(25,"li",9)(26,"span",10),e._uU(27,"Gi\u1edbi t\xednh: "),e.qZA(),e._uU(28," Ch\u01b0a c\xf3 "),e.qZA(),e.TgZ(29,"li",9)(30,"span",10),e._uU(31,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: "),e.qZA(),e._uU(32," Ch\u01b0a c\xf3 "),e.qZA()()()()),2&t&&(e.xp6(3),e.Q6J("src",null==n.currentUser?null:n.currentUser.photoURL,e.LSH)("alt",null==n.currentUser?null:n.currentUser.displayName),e.xp6(3),e.hij(" ",null==n.currentUser?null:n.currentUser.displayName," "),e.xp6(14),e.hij(" ",null==n.currentUser?null:n.currentUser.email," "))},dependencies:[i.ez]}),l})()}}]);