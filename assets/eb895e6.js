(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{664:function(t,e,r){"use strict";r.r(e);r(28);var n=r(5),o={components:{"beds-list":r(516).default},data:function(){return{ward:null,total:0}},created:function(){this._retrieve_ward()},methods:{_retrieve_ward:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("wards/".concat(t.$route.params.id,"/")).then((function(e){t.ward=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},_addmorebeds:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("beds/list/",{wardId:t.$route.params.id,numberOfBeds:t.total}).then((function(e){null!==e&&t._retrieve_ward()})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},computed:{}},c=r(54),d=r(63),l=r.n(d),f=r(222),m=r(464),v=r(442),w=r(432),h=r(465),_=r(445),x=r(495),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{"background-color":"white"},attrs:{fluid:""}},[r("div",[r("v-row",{attrs:{"no-gutters":""}},[r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-text-field",{attrs:{type:"number",outlined:"",dense:"","hide-details":"",placeholder:"No. of beds to add"},model:{value:t.total,callback:function(e){t.total=e},expression:"total"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"2"}},[r("v-btn",{staticClass:"primary mt-1 ml-2",attrs:{small:"",shaped:""},on:{click:function(e){return e.stopPropagation(),t._addmorebeds()}}},[t._v("Add more beds")])],1)],1)],1),t._v(" "),null==t.ward?r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}}):r("beds-list",{attrs:{ward:t.ward}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BedsList:r(516).default}),l()(component,{VBtn:f.a,VCol:m.a,VContainer:v.a,VProgressLinear:w.a,VRow:h.a,VSpacer:_.a,VTextField:x.a})}}]);