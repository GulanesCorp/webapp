(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{681:function(t,e,o){"use strict";o.r(e);o(127);var n={data:function(){return{search:null,dialog:!1,headers:[{text:"Group",value:"group"},{text:"Quantitty(in bags)",value:"counts",sortable:!1},{text:"Actions",value:"actions"}],editedItem:{id:0,group:"",added:0,total:0,counts:0},body:{options:{page:1,itemsPerPage:10,sortBy:["name"]}}}},beforeCreate:function(){this.$store.dispatch("fetchbloodsbank")},methods:{editItem:function(t){this.editedIndex=this.groups.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},close:function(){this.dialog=!1},getdata:function(){this.$store.dispatch("fetchbloodsbank")},save:function(){var t=this,data={groupId:this.editedItem.id,bagsCount:this.editedItem.added};this.$store.dispatch("updatebloodgroup",data).then((function(){t.getdata(),t.close()}))}},computed:{groups:function(){return this.$store.getters.groups},summation:function(){return parseInt(this.editedItem.added)+parseInt(this.editedItem.counts)}}},r=o(54),d=o(63),l=o.n(d),c=o(222),v=o(452),m=o(451),h=o(464),f=o(442),_=o(651),k=o(645),x=o(435),I=o(163),y=o(465),C=o(445),V=o(495),w=o(53),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[null!=t.groups?o("div",{staticClass:"breadcrumb"},[o("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),o("router-link",{attrs:{to:"/pharmacy"}},[t._v("Pharmacy")]),t._v(" "),o("router-link",{staticClass:"active",attrs:{to:"/inventory/bloods"}},[t._v("Blood bank")])],1):t._e(),t._v(" "),o("v-data-table",{attrs:{headers:t.headers,items:t.groups,search:t.search,options:t.body.options,"mobile-breakpoint":"100"},scopedSlots:t._u([{key:"top",fn:function(){return[o("v-toolbar",{attrs:{flat:"",color:"white"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"2","align-self":"center"}},[o("h3",{staticClass:"title"},[t._v("Blood Bank")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",solo:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),o("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Update Group "+t._s(t.editedItem.group))])]),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Group",readonly:""},model:{value:t.editedItem.group,callback:function(e){t.$set(t.editedItem,"group",e)},expression:"editedItem.group"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{value:"0",type:"number",label:"Counts(To be added)"},model:{value:t.editedItem.added,callback:function(e){t.$set(t.editedItem,"added",e)},expression:"editedItem.added"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{value:t.summation,type:"number",readonly:"",label:"Counts(In total)"}})],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.group",fn:function(e){var n=e.item;return[o("p",{staticClass:"font-weight-bold"},[t._v(t._s(n.group))])]}},{key:"item.actions",fn:function(e){var n=e.item;return[o("v-icon",{attrs:{small:"",color:"blue darken-2"},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-lead-pencil")])]}},{key:"no-data",fn:function(){return[o("h3",[t._v("No Data available ...")])]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:h.a,VContainer:f.a,VDataTable:_.a,VDialog:k.a,VDivider:x.a,VIcon:I.a,VRow:y.a,VSpacer:C.a,VTextField:V.a,VToolbar:w.a})}}]);