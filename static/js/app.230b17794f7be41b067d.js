webpackJsonp([1],{"+ryY":function(t,e){},GwIG:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=[{title:"week1",key:"Week1TodoList",name:"TodoList"},{title:"week2",key:"Week2Filter",name:"Filter"},{title:"week3",key:"Week1TodoList",name:"TodoList"},{title:"week4",key:"Week1TodoList",name:"TodoList"},{title:"week5",key:"Week1TodoList",name:"TodoList"},{title:"week6",key:"Week1TodoList",name:"TodoList"},{title:"week7",key:"Week1TodoList",name:"TodoList"},{title:"week8",key:"Week1TodoList",name:"TodoList"},{title:"week9",key:"Week1TodoList",name:"TodoList"}],o={name:"Home",data:function(){return{msg:"the F2E works",weeks:a}},methods:{push:function(t){this.$emit("push-page",t)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-ons-page",[i("div",{staticClass:"home"},[i("v-ons-toolbar",[i("div",{staticClass:"center"},[i("h5",[t._v(t._s(t.msg))])])]),i("div",{staticClass:"works"},[t._l(t.weeks,function(e,s){return[i("a",{on:{click:function(i){t.push(e.key)}}},[i("div",{staticClass:"title"},[t._v(t._s(e.title))]),i("hr"),i("div",{staticClass:"name"},[t._v(t._s(s<2?e.name:"unknown"))])])]})],2)],1)])},staticRenderFns:[]};var c=i("VU/8")(o,n,!1,function(t){i("eOaq")},null,null).exports,l=[{id:"1",title:"type something here...",time:"01/01",file:"",comment:"123",completed:!1},{id:"2",title:"type something here...",time:"07/07",file:"",comment:"456",completed:!1},{id:"3",title:"type something here...",time:"12/31",file:"",comment:"789",completed:!1}],r={all:function(t){return t},progress:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}},d={name:"Week1_TodoList",data:function(){return{items:l,completed:!1,isActive:"all",cacheTodo:{},cacheTitle:"",cacheComment:""}},methods:{push:function(t){this.$emit("push-page",t)},addTodo:function(){var t=Math.floor(Date.now());this.items.unshift({id:t,title:"",time:"",file:"",comment:"",completed:!1}),this.newTodo=""},editTodo:function(t){console.log(t),this.cacheTodo=t,this.cacheTitle=t.title,this.cacheComment=t.comment},doneEdit:function(t){this.cacheTitle.trim()&&(t.title=this.cacheTitle.trim(),t.comment=this.cacheComment,this.cacheTodo={})},cancelEdit:function(){this.cacheTodo={},this.cacheTitle="",this.cacheComment=""}},computed:{filteredItems:function(){return r[this.isActive](this.items)}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-ons-page",[i("v-ons-toolbar",[i("div",{staticClass:"left"},[i("v-ons-back-button")],1),i("div",{staticClass:"center"},[i("h5",[t._v("Week1. Todolist")])])]),i("div",{staticClass:"todolist"},[i("div",{staticClass:"nav"},[i("ul",[i("li",[i("a",{class:{active:"all"===t.isActive},on:{click:function(e){t.isActive="all"}}},[t._v("My Tasks")])]),i("li",[i("a",{class:{active:"progress"===t.isActive},on:{click:function(e){t.isActive="progress"}}},[t._v("In Progress")])]),i("li",[i("a",{class:{active:"completed"===t.isActive},on:{click:function(e){t.isActive="completed"}}},[t._v("Completed")])])])]),i("div",{staticClass:"items"},[i("div",{staticClass:"additem",on:{click:t.addTodo}},[i("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1),t._l(t.filteredItems,function(e,s){return i("div",{key:s,staticClass:"item_row",style:{"height: 200px":e.id===t.cacheTodo.id}},[i("div",{staticClass:"title"},[e.id!==t.cacheTodo.id?i("div",{staticClass:"texts"},[i("label",{class:{completed:e.completed},attrs:{for:e.id}},[t._v(t._s(e.title))])]):t._e(),e.id===t.cacheTodo.id?i("div",{staticClass:"editing"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTitle,expression:"cacheTitle"}],attrs:{type:"text"},domProps:{value:t.cacheTitle},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.doneEdit(e)},input:function(e){e.target.composing||(t.cacheTitle=e.target.value)}}})]):t._e(),i("div",{staticClass:"checkbox",on:{click:function(t){e.completed=!e.completed}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"item.completed"}],attrs:{type:"checkbox",id:s},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(i){var s=e.completed,a=i.target,o=!!a.checked;if(Array.isArray(s)){var n=t._i(s,null);a.checked?n<0&&t.$set(e,"completed",s.concat([null])):n>-1&&t.$set(e,"completed",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(e,"completed",o)}}})]),i("div",{staticClass:"star"},[i("font-awesome-icon",{attrs:{icon:["far","star"]}})],1),i("div",{staticClass:"edit",on:{click:function(i){t.editTodo(e)}}},[i("font-awesome-icon",{attrs:{icon:["fas","pencil-alt"]}})],1)]),i("hr"),i("div",{staticClass:"content"},[e.id!==t.cacheTodo.id?i("div",{staticClass:"texts"},[i("div",{staticClass:"date"},[i("font-awesome-icon",{attrs:{icon:["far","calendar-alt"]}}),i("span",[t._v(t._s(e.time))])],1),i("div",{staticClass:"file"},[i("font-awesome-icon",{attrs:{icon:["far","file"]}})],1),i("div",{staticClass:"comment"},[i("font-awesome-icon",{attrs:{icon:["far","comment-dots"]}})],1)]):t._e(),e.id===t.cacheTodo.id?i("div",{staticClass:"editing"},[i("div",{staticClass:"date"},[i("font-awesome-icon",{attrs:{icon:["far","calendar-alt"]}}),i("span",[t._v("Deadline")]),i("input",{attrs:{type:"datetime-local"}})],1),i("div",{staticClass:"file"},[i("font-awesome-icon",{attrs:{icon:["far","file"]}}),i("span",[t._v("File")]),i("input",{attrs:{type:"file",id:"file"}}),i("label",{attrs:{for:"file"}},[i("font-awesome-icon",{attrs:{icon:["fas","plus-square"]}})],1)],1),i("div",{staticClass:"comment"},[i("font-awesome-icon",{attrs:{icon:["far","comment-dots"]}}),i("span",[t._v("comment")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cacheComment,expression:"cacheComment"}],domProps:{value:t.cacheComment},on:{input:function(e){e.target.composing||(t.cacheComment=e.target.value)}}})],1)]):t._e()]),e.id===t.cacheTodo.id?i("div",{staticClass:"btns"},[i("button",{staticClass:"cancel",on:{click:function(e){t.cancelEdit()}}},[t._v("Cancel")]),i("button",{staticClass:"add",on:{click:function(i){t.doneEdit(e)}}},[t._v("Add Task")])]):t._e()])})],2)])],1)},staticRenderFns:[]};var u=i("VU/8")(d,m,!1,function(t){i("cidt")},null,null).exports,p={name:"Week2_Filter",data:function(){return{items:[],showSidebar:!1}},methods:{push:function(t){this.$emit("push-page",t)}},created:function(){var t=this;this.axios.get("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97").then(function(e){for(var i=e.data.result.records,s=0;s<10;s++)t.items.push(i[s]);console.log(t.items)}).catch(function(t){console.log(t)})}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-ons-page",[i("v-ons-toolbar",[i("div",{staticClass:"left"},[i("v-ons-back-button")],1),i("div",{staticClass:"center"},[i("h5",[t._v("Week2. Filter")])])]),i("div",{staticClass:"filter"},[i("div",{staticClass:"nav"},[i("div",{staticClass:"sidebar-btn",on:{click:function(e){t.showSidebar=!t.showSidebar}}},[i("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1),i("h1",{staticClass:"title"},[t._v("HaveFun")]),i("div",{staticClass:"search"},[i("div",{staticClass:"icon"},[i("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1),i("input",{attrs:{type:"text",placeholder:"explore your activities"}})])]),i("div",{staticClass:"sidebar",class:{"slide-in":t.showSidebar}},[i("div",{staticClass:"location"},[i("p",[t._v("Location")]),i("select",[i("option",[t._v("Taiwan")])])]),i("div",{staticClass:"date"},[i("p",[t._v("Date")]),i("div",{staticClass:"from"},[i("span",[t._v("from:")]),i("input",{attrs:{type:"datetime-local"}})]),i("div",{staticClass:"to"},[i("span",[t._v("to:    ")]),i("input",{attrs:{type:"datetime-local"}})])]),i("div",{staticClass:"categories"},[i("p",[t._v("Categories")]),i("div",{staticClass:"checkboxs"},[i("div",{staticClass:"checkbox"},[i("input",{attrs:{type:"checkbox",id:"all"}}),i("label",{attrs:{for:"all"}},[t._v("ALL")])]),i("div",{staticClass:"checkbox"},[i("input",{attrs:{type:"checkbox",id:"Entertainment"}}),i("label",{attrs:{for:"Entertainment"}},[t._v("Entertainment")])]),i("div",{staticClass:"checkbox"},[i("input",{attrs:{type:"checkbox",id:"Food"}}),i("label",{attrs:{for:"Food"}},[t._v("Food")])]),i("div",{staticClass:"checkbox"},[i("input",{attrs:{type:"checkbox",id:"Learning"}}),i("label",{attrs:{for:"Learning"}},[t._v("Learning")])]),i("div",{staticClass:"checkbox"},[i("input",{attrs:{type:"checkbox",id:"Outdoors"}}),i("label",{attrs:{for:"Outdoors"}},[t._v("Outdoors")])])])])]),i("div",{staticClass:"contents",on:{click:function(e){t.showSidebar=!1}}},[i("h3",{staticClass:"title"},[t._v("Showing "+t._s(t.items.length)+" results by...")]),i("div",{staticClass:"items"},t._l(t.items,function(e){return i("div",{staticClass:"item_row"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.Picture1}})]),i("div",{staticClass:"details"},[i("div",{staticClass:"name"},[t._v(t._s(e.Name))]),i("div",{staticClass:"description"},[t._v(t._s(e.Description))]),i("div",{staticClass:"info"},[i("div",{staticClass:"location"},[i("font-awesome-icon",{attrs:{icon:["fas","map-marker-alt"]}}),i("span",[t._v(t._s(e.Add))])],1),i("div",{staticClass:"opentime"},[i("font-awesome-icon",{attrs:{icon:["far","calendar-alt"]}}),i("span",[t._v(t._s(e.Opentime))])],1)])])])}))])])],1)},staticRenderFns:[]};var f=i("VU/8")(p,v,!1,function(t){i("fSsD")},null,null).exports,h={name:"App",components:{Home:c,Week1TodoList:u,Week2Filter:f},data:function(){return{options:{animation:"slide",animationOptions:{duration:.5,timing:"ease-in"}},pageStack:[c]}},methods:{onPush:function(t){this.pageStack[this.pageStack.length-1]!==t&&(this.pageStack.push(t),console.log("push: ",t))}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-ons-navigator",{attrs:{swipeable:"swipeable","page-stack":t.pageStack,options:t.options}},t._l(t.pageStack,function(e){return i(e,{key:e.name,tag:"component",attrs:{"page-stack":t.pageStack},on:{"push-page":t.onPush}})}))],1)},staticRenderFns:[]};var C=i("VU/8")(h,k,!1,function(t){i("GwIG")},null,null).exports,_=(i("Xrl+"),i("fLmE"),i("+ryY"),i("QxPg")),g=i("U0v6"),w=i.n(g),b=i("1P+R"),T=i("KREn"),y=i("h17U"),x=i("EOUi"),L=i.n(x),A=i("mtWM"),E=i.n(A),W=i("Rf8U"),F=i.n(W);s.a.use(F.a,E.a),s.a.use(L.a),s.a.config.productionTip=!1,_.default.library.add(b.a),_.default.library.add(T.a),_.default.library.add(y.a),s.a.component("font-awesome-icon",w.a),new s.a({el:"#app",components:{App:C},template:"<App/>"})},"Xrl+":function(t,e){},cidt:function(t,e){},eOaq:function(t,e){},fLmE:function(t,e){},fSsD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.230b17794f7be41b067d.js.map