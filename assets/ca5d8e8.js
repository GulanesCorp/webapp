(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{512:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return v}));var r=n(513),c=n(2),o=Object(c.i)("v-card__actions"),l=Object(c.i)("v-card__subtitle"),f=Object(c.i)("v-card__text"),v=Object(c.i)("v-card__title");r.a},518:function(t,e,n){"use strict";n(11),n(8),n(9),n(40),n(146),n(103),n(326),n(22),n(17),n(18),n(12),n(20),n(37),n(42),n(78),n(74),n(10),n(48);var r=n(0),c=(n(325),n(3)),o=n(49),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],m=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=d.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),_=d.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(_)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var j=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var v=j.get(l);return v||function(){var t,e;for(e in v=[],y)y[e].forEach((function(t){var r=n[t],c=O(e,t,r);c&&v.push(c)}));var c=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),j.set(l,v)}(),t(n.tag,Object(o.a)(data,{class:v}),c)}})},519:function(t,e,n){"use strict";n(11),n(28),n(8),n(9),n(40),n(146),n(326),n(17),n(18),n(12),n(20),n(37),n(66),n(42),n(78),n(10),n(48);var r=n(0),c=(n(325),n(3)),o=n(49),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return d.reduce((function(n,r){return n[t+Object(l.G)(r)]=e(),n}),{})}var _=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},y=h("align",(function(){return{type:String,default:null,validator:_}})),O=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},j=h("justify",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},C=h("alignContent",(function(){return{type:String,default:null,validator:w}})),S={align:Object.keys(y),justify:Object.keys(j),alignContent:Object.keys(C)},x={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=x[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:O}},j),{},{alignContent:{type:String,default:null,validator:w}},C),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var v=P.get(l);return v||function(){var t,e;for(e in v=[],S)S[e].forEach((function(t){var r=n[t],c=k(e,t,r);c&&v.push(c)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,v)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:v}),c)}})},524:function(t,e,n){"use strict";n.r(e);var r={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},c=n(60),o=n(73),l=n.n(o),f=n(513),v=n(682),d=n(169),m=n(210),h=n(505),_=n(100),y=n(59),O=n(510),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default "},[null==t.services.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("h2",[n("strong",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",c,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VDataTable:v.a,VIcon:d.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:y.a,VTooltip:O.a})},713:function(t,e,n){"use strict";n.r(e);n(38),n(30),n(25);var r=n(4),c={components:{"service-card":n(524).default},data:function(){return{staffdata:null,staffpatients:[],services:[],allservices:null,tab:null}},methods:{getStaffById:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/")).then((function(e){t.staffdata=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getStaffPatinets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/patients")).then((function(e){t.staffpatients=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAcitveAssignedServices:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?active=true")).then((function(e){null!==e&&(t.services=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getHistoricalAssignedServices:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?")).then((function(e){null!==e&&(t.allservices=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}},created:function(){this.getStaffById(),this.getAcitveAssignedServices()},computed:{desserts:{get:function(){return[{name:"Name",value:null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName},{name:"Role",value:"undefined"==this.staffdata.user?"No role":this.staffdata.user.roles[0].name.toLowerCase()},{name:"Depatment",value:null==this.staffdata.department?"Un-Assigned":this.staffdata.department.name},{name:"Work Shift",value:"6:00AM - 12:01PM"},{name:"Location",value:null==this.staffdata.department?"Not available":this.staffdata.department.extraId},{name:"Is Staff",value:"undefined"==this.staffdata.user.isStaff?"":this.staffdata.user.isStaff},{name:"Level",value:null==this.staffdata.level?"None":this.staffdata.level},{name:"Phone",value:null==this.staffdata.contacts?"None ":this.staffdata.contacts},{name:"Email",value:this.staffdata.email},{name:"Joining Date",value:(new Date).toISOString().slice(0,10)}]}}}},o=n(60),l=n(73),f=n.n(l),v=n(215),d=n(513),m=n(512),h=n(518),_=n(502),y=n(169),O=n(210),j=n(519),w=n(593),C=n(677),S=n(727),x=n(720),k=n(671),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.staffdata?n("div",{staticClass:"breadcrumb "},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{attrs:{to:"/staffs"}},[t._v("Staffs")]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/staffs/"+this.$route.params.id}},[t._v(t._s(null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName))])],1):t._e(),t._v(" "),n("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[null==t.staffdata?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("v-card",{attrs:{flat:"",tile:"",outlined:""}},[n("v-card-title",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-avatar",{attrs:{size:"82"}},[n("img",{attrs:{alt:"user",height:"100%",width:"100%",src:null==t.staffdata.imageUrl?"https://boylancode.com/wp-content/uploads/2018/09/Man-Placeholder-Headshot.png":t.staffdata.imageUrl}})])],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-icon",{staticClass:"red--text lighten-4 mx-1"},[t._v("mdi-account-lock")]),t._v(" "),n("v-icon",{staticClass:"blue--text lighten-4 mx-1"},[t._v("mdi-camera")]),t._v(" "),n("v-icon",{staticClass:"orange--text mx-1"},[t._v("mdi-pencil")])],1),t._v(" "),n("v-card-text",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[t._l(t.desserts,(function(e){return n("tr",{key:e.name},[n("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.value))])])})),t._v(" "),n("tr")],2)]},proxy:!0}])})],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-tabs",{staticClass:"elevation-2",attrs:{"slider-color":"secondary","background-color":"primary","show-arrows":this.$vuetify.breakpoint.mobile,color:"secondary",left:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"ffont-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-eye")]),t._v("Profile")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-account")]),t._v("Payroll")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-medical-bag")]),t._v("\n              Leaves")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-history")]),t._v(" Attandence")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Document")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Timeline")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:t.getHistoricalAssignedServices}},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("Consultations History")],1)])],1),t._v(" "),n("v-tabs-items",{attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Profile")])]),t._v(" "),n("v-tab-item",[n("service-card",{attrs:{services:t.services}})],1),t._v(" "),n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Leaves")])]),t._v(" "),n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Attendance")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Document")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Timeline")])]),t._v(" "),n("v-tab-item",[null==t.allservices?n("v-progress-circular"):n("service-card",{attrs:{services:t.allservices}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAvatar:v.a,VCard:d.a,VCardText:m.c,VCardTitle:m.d,VCol:h.a,VContainer:_.a,VIcon:y.a,VProgressCircular:O.a,VRow:j.a,VSimpleTable:w.a,VTab:C.a,VTabItem:S.a,VTabs:x.a,VTabsItems:k.a})}}]);