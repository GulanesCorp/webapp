(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{683:function(t,e,r){"use strict";r.r(e);r(28);var n=r(5),c={data:function(){return{visits:null}},methods:{fetchvitits:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("admissions/".concat(t.$route.params.id,"/visits")).then((function(e){t.visits=e.reverse()})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},beforeCreate:function(){},created:function(){this.fetchvitits()},computed:{}},o=r(54),l=r(63),v=r.n(l),d=r(562),m=r(452),f=r(451),h=r(442),_=r(435),V=r(108),C=r(445),w=r(573),x=r(574),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-card",{staticClass:"mx-auto "},[r("v-card-title",{staticClass:"primary white--text"},[r("span",{staticClass:"title"},[t._v("Admission "+t._s(this.$route.params.id)+" Visits")]),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-card-text",{staticClass:"py-0"},[r("v-timeline",{attrs:{dense:""}},[r("v-slide-x-reverse-transition",{attrs:{group:"","hide-on-leave":""}},t._l(t.visits,(function(e){return r("v-timeline-item",{key:e.id,attrs:{small:"","fill-dot":""}},[r("v-alert",{attrs:{value:!0,color:"success",text:"",icon:"mdi-information"}},[r("div",{staticClass:"title"},[t._v("\n                "+t._s(e.dateTime)+"\n              ")]),t._v(" "),r("v-divider"),t._v(" "),r("p",{attrs:{cl:""}},[t._v(t._s(e.symptoms))])],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAlert:d.a,VCard:m.a,VCardText:f.c,VCardTitle:f.d,VContainer:h.a,VDivider:_.a,VSlideXReverseTransition:V.e,VSpacer:C.a,VTimeline:w.a,VTimelineItem:x.a})}}]);