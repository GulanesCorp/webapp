(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{663:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{title:"Wards",search:"",headers:[{text:"ID",value:"id"},{text:"Name",value:"name",sortable:!1},{text:"No. of Beds",value:"numberOfBeds"}]}},methods:{navigateToWard:function(e){console.log(e),this.$router.push("/inventory/ward/"+e.id)}},computed:{wards:function(){return this.$store.getters.wards}},beforeMount:function(){this.$store.dispatch("retrieve_all_wards")}},l=r(54),n=r(63),c=r.n(n),d=r(655),h=r(185),v=r(445),f=r(495),w=r(53),m=r(93),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[null===e.wards?r("v-progress-circular",{attrs:{width:2,color:"primary",size:"20",indeterminate:""}}):r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.wards,search:e.search,"items-per-page":15,"sort-by":"calories"},on:{"click:row":e.navigateToWard},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[r("h3",[e._v(e._s(e.title))])]),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{staticClass:"shrink",attrs:{"append-icon":"search",label:"Search","single-line":"",dense:"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VDataTable:d.a,VProgressCircular:h.a,VSpacer:v.a,VTextField:f.a,VToolbar:w.a,VToolbarTitle:m.a})}}]);