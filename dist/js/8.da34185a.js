"use strict";(self["webpackChunkmianjing"]=self["webpackChunkmianjing"]||[]).push([[8],{1008:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"collect-page"},[e("van-nav-bar",{attrs:{fixed:"",title:"我的收藏"}}),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,i){return e("ArticleItem",{key:i,attrs:{item:t}})})),1)],1)},a=[],r=(i(4114),i(4754)),s={name:"collect-page",data(){return{list:[],loading:!1,finished:!1,page:1}},methods:{async onLoad(){const{data:t}=await(0,r.AW)({page:this.page});this.list.push(...t.rows),this.loading=!1,this.page++,this.page>t.pageTotal&&(this.finished=!0)}}},o=s,p=i(1656),u=(0,p.A)(o,n,a,!1,null,"2b137f50",null),l=u.exports},4754:function(t,e,i){i.d(e,{AW:function(){return p},GE:function(){return a},ef:function(){return r},f:function(){return s},f0:function(){return u},km:function(){return o}});var n=i(5067);const a=t=>n.A.get("/interview/query",{params:{current:t.current||1,pageSize:t.pageSize||10,sorter:t.sorter}}),r=t=>n.A.get("interview/show",{params:{id:t}}),s=t=>n.A.post("interview/opt",{id:t,optType:1}),o=t=>n.A.post("interview/opt",{id:t,optType:2}),p=t=>n.A.get("/interview/opt/list",{params:{page:t.page,pageSize:5,optType:2}}),u=t=>n.A.get("/interview/opt/list",{params:{page:t.page,pageSize:5,optType:1}})}}]);
//# sourceMappingURL=8.da34185a.js.map