(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)o=r[d],i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={index:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c6f4")},"0993":function(t,e,n){t.exports=n.p+"img/checked.4dffc28a.png"},"1f04":function(t,e,n){"use strict";var a=n("f78c"),i=n.n(a);i.a},"2af0":function(t,e,n){},"2d1e":function(t,e,n){"use strict";var a=n("2af0"),i=n.n(a);i.a},"2fb1":function(t,e,n){},"4d94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 pl-4 pr-4",attrs:{id:"sidemenu"}},[n("a",{attrs:{href:"index"}},[n("div",{staticClass:"menu-button p-2 m-1",class:{active:"dashboard"===t.current}},[t._v(" Dashboard ")])]),n("a",{attrs:{href:"kanban"}},[n("div",{staticClass:"menu-button p-2 m-1",class:{active:"kanban"===t.current}},[t._v(" Kanban ")])])])},i=[],s={name:"SideMenu",props:{current:String}},o=s,r=(n("1f04"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"d9f7726c",null);e["a"]=c.exports},"526a":function(t,e,n){},"5e7d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left item row m-2 p-3"},["personal"===t.type?a("div",{staticClass:"personal-label"}):"work"===t.type?a("div",{staticClass:"work-label"}):"other"===t.type?a("div",{staticClass:"other-label"}):a("div",{staticClass:"label"}),a("div",{staticClass:"col"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(t.name))]),a("hr",{staticClass:"m-0 mb-1"}),a("div",{staticClass:"d-flex justify-content-between"},[a("p",{staticClass:"m-0"},[t._v(t._s(t.month+"."+t.day+"."+t.year))]),t.kanban?a("img",{staticClass:"m-0 mt-1",attrs:{alt:"trash icon",src:n("c8e4"),height:"18px",width:"18px"},on:{click:function(e){return t.$emit("delete",t.id)}}}):t._e()])])])},i=[],s=(n("a9e3"),{name:"Item",props:{id:Number,name:String,date:String,type:String,kanban:Boolean},data:function(){return{month:new Date(this.date).getUTCMonth()+1,day:new Date(this.date).getUTCDate(),year:new Date(this.date).getUTCFullYear()}}}),o=s,r=(n("6000"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"a3689f3a",null);e["a"]=c.exports},6e3:function(t,e,n){"use strict";var a=n("2fb1"),i=n.n(a);i.a},"65fe":function(t,e,n){},"8c22":function(t,e,n){"use strict";var a=n("65fe"),i=n.n(a);i.a},"9a73":function(t,e,n){"use strict";var a=n("526a"),i=n.n(a);i.a},aa09:function(t,e,n){"use strict";var a=n("b2b6"),i=n.n(a);i.a},b043:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between pt-2 pl-5 pr-5",attrs:{id:"topbar"}},[t._m(0),a("div",[t._v(" "+t._s((new Date).toDateString())+" "),a("img",{staticClass:"ml-3",attrs:{alt:"profile icon",src:n("c3e7"),height:"40",width:"40"}})])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"index"}},[n("h2",[t._v("motivately")])])}],s={name:"TopBar"},o=s,r=(n("8c22"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"bb6f3050",null);e["a"]=c.exports},b2b6:function(t,e,n){},b6b4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.all>0?n("h3",[t._v("Progress: "+t._s(Math.round(t.finished/t.all*100))+"%")]):n("h3",[t._v("Progress: N/A")]),n("b-progress",{attrs:{value:Math.round(t.finished/t.all*100),max:100}})],1)},i=[],s=(n("a9e3"),{name:"ProgressBar",props:{finished:Number,all:Number}}),o=s,r=(n("aa09"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},c3e7:function(t,e,n){t.exports=n.p+"img/profile.f507fbd7.png"},c5a9:function(t,e,n){t.exports=n.p+"img/unchecked.18b62994.png"},c6f4:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("TopBar"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("SideMenu",{attrs:{current:"dashboard"}})],1),a("div",{staticClass:"col pt-5 pr-5"},[a("h1",[t._v("Today's Dashboard")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mt-4"},[a("h2",[t._v("Upcoming Deadlines")]),a("div",{staticClass:"container upcoming p-3"},[0===t.upcomingDeadlines.length?a("h3",{staticClass:"text-center pt-4"},[t._v("No Upcoming Deadlines")]):t._e(),t._l(t.upcomingDeadlines,(function(e){return a("Item",{key:e.name,class:{reminder:new Date(e.date)-Date.now()<t.threeDays},attrs:{name:e.name,date:e.date,type:e.type}})}))],2)]),a("div",{staticClass:"col-md-6 mt-4"},[a("h2",[t._v("Notes")]),a("div",{staticClass:"container upcoming p-3 px-4"},[a("label",{staticClass:"m-0",attrs:{for:"notes-input"}},[t._v("Jot Down Notes Here")]),a("b-form-textarea",{attrs:{id:"notes-input",rows:"10","no-resize":""},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)])]),a("div",{staticClass:"row mt-5 mb-5"},[a("div",{staticClass:"col-md-12"},[a("h2",[t._v("To-Do List")]),a("ProgressBar",{attrs:{finished:t.finished.length,all:t.todo.length+t.finished.length}}),a("div",{staticClass:"container mt-4 p-3",attrs:{id:"todo-container"}},[0===t.todo.length&&0===t.finished.length?a("h3",{staticClass:"text-center pt-4"},[t._v("Currently Empty")]):t._e(),t._l(t.todo,(function(e){return a("ToDo",{key:e.id,attrs:{name:e.name,id:e.id,status:0},on:{"checked-item":t.checkedUpdate,"unchecked-item":t.uncheckedUpdate,delete:t.deleteToDo}})})),t._l(t.finished,(function(e){return a("ToDo",{key:e.id,attrs:{name:e.name,id:e.id,status:1},on:{"checked-item":t.checkedUpdate,"unchecked-item":t.uncheckedUpdate,delete:t.deleteToDo}})})),a("div",{attrs:{id:"add-area"}},[a("label",{staticClass:"mt-3 invisible",attrs:{for:"task-input"}},[t._v("Task Name")]),a("b-form-input",{class:{hidden:!t.showInput},attrs:{id:"task-input",placeholder:"Task Name..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToDo(e)}},model:{value:t.newToDo,callback:function(e){t.newToDo=e},expression:"newToDo"}}),a("img",{staticClass:"ml-2",attrs:{alt:"ToDo List Add",src:n("d1da"),height:"40px",width:"40px"},on:{click:function(e){t.showInput=!t.showInput}}})],1)],2)],1)])])]),a("Footer")],1)},s=[],o=(n("99af"),n("fb6a"),n("4e82"),n("a434"),n("b043")),r=n("4d94"),c=n("5e7d"),l=n("b6b4"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper d-flex justify-content-between m-2 p-3"},[a("div",{staticClass:"content"},[a("img",{attrs:{alt:"checkbox",src:t.paths[t.currentImage],height:"24px",width:"24px"},on:{click:t.switchIcon}}),a("h3",{staticClass:"ml-2 mb-0"},[t._v(t._s(t.name))])]),a("img",{staticClass:"m-0",attrs:{alt:"trash icon",src:n("c8e4"),height:"20px",width:"20px"},on:{click:function(e){return t.$emit("delete",t.id)}}})])},d=[],h=(n("a9e3"),{name:"ToDo",props:{id:Number,name:String,status:Number},data:function(){return{paths:[n("c5a9"),n("0993")],currentImage:this.status}},methods:{switchIcon:function(){0==this.currentImage?(this.currentImage=1,this.$emit("checked-item",this.id)):(this.currentImage=0,this.$emit("unchecked-item",this.id))}}}),f=h,g=(n("ec9f"),n("2877")),p=Object(g["a"])(f,u,d,!1,null,"21d96a1a",null),m=p.exports,b=n("fd2d"),v={name:"App",components:{TopBar:o["a"],SideMenu:r["a"],Item:c["a"],ProgressBar:l["a"],ToDo:m,Footer:b["a"]},data:function(){return{upcomingDeadlines:[],upcomingEvents:[{name:"Dinner Date",date:"03.19.2022"},{name:"Sister Birthday",date:"03.22.2022"},{name:"Marathon",date:"03.31.2022"}],newToDo:"",todo:[],finished:[],showInput:!1,threeDays:2592e5,id:0,notes:""}},methods:{addToDo:function(){this.newToDo&&(this.todo.push({id:this.id,name:this.newToDo}),this.id++,this.newToDo=""),this.showInput=!1},deleteToDo:function(t){for(var e=0;e<this.todo.length;e++)if(this.todo[e].id===t)return void this.todo.splice(e,1);for(var n=0;n<this.finished.length;n++)if(this.finished[n].id===t)return void this.finished.splice(n,1)},checkedUpdate:function(t){for(var e=0;e<this.todo.length;e++)this.todo[e].id===t&&(this.finished.splice(0,0,this.todo[e]),this.todo.splice(e,1))},uncheckedUpdate:function(t){for(var e=0;e<this.finished.length;e++)this.finished[e].id===t&&(this.todo.splice(this.todo.length,0,this.finished[e]),this.finished.splice(e,1))}},mounted:function(){if(localStorage.todo&&(this.todo=JSON.parse(localStorage.todo)),localStorage.finished&&(this.finished=JSON.parse(localStorage.finished)),localStorage.arrBacklog||localStorage.arrInProgress){var t=[];localStorage.arrBacklog&&(t=t.concat(JSON.parse(localStorage.arrBacklog))),localStorage.arrInProgress&&(t=t.concat(JSON.parse(localStorage.arrInProgress))),t.sort((function(t,e){return new Date(t.date)-new Date(e.date)})),t.length>3?this.upcomingDeadlines=t.slice(0,3):this.upcomingDeadlines=t}localStorage.todoId&&(this.id=parseInt(localStorage.todoId)),localStorage.notes&&(this.notes=localStorage.notes)},watch:{todo:function(t){localStorage.todo=JSON.stringify(t)},finished:function(t){localStorage.finished=JSON.stringify(t)},id:function(t){localStorage.todoId=t},notes:function(t){localStorage.notes=t}}},A=v,C=(n("9a73"),Object(g["a"])(A,i,s,!1,null,"56d71f66",null)),w=C.exports,y=n("5f5b"),I=n("b1e0");n("f9e3"),n("2dd8");a["default"].config.productionTip=!1,a["default"].use(y["a"]),a["default"].use(I["a"]),new a["default"]({render:function(t){return t(w)}}).$mount("#app")},c8e4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACMCAYAAAC+jM2nAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANjSURBVHgB7ds/U9RAHIfx3x7nn8ICX4CCvQOUDFKc7wBb52bEV6C8ApdXILyDYwaVEjs7U4BSnvgCjFJZSWFBQ9bNWHvJBeJt5vt8mhS3R5g8JHebDc4S5YerA7O5j9ZJ7rHfP8osQT2DFIKLIbgYgoshuBiCi3F/pz/pceaWg/V2rINCKLacC2NLUD/VuW6w7nKu99oSxSVdDMHFEFwMwcUQXAzBxRBcDMHFEFwMwcUQXAzBxRBcDMHF9M2F5/98NdhKXOx7YY2F7biwnRvqa/mYuwnvvIZnw9N9PjtVbR9zLuliCC6G4GIILobgYgguhuBiCC6G4GIILobgYgguhuBi+pYovzGYt9sX89aQPzjJraFZ7rttyQa3OxcrV1km9MP15kuzs9x3y7ikiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4GIKLIbgYgoshuBiCiyG4mL6lquid21zIrangrLFZ7rtlyQb3bz+N4+aBzcAs9902LuliCC6G4GIILobgYgguhuBiCC6G4GIILobgYgguhuBiCC6m3eXREJ754drAUF9wC9bicvrk4OWDAFe5BjjbNEv3YYAktXy4JucsinNDp/SL4tuk1yv/nvzw0a+4mTd0wbnfP747aUCdC/bY0BWVrSqDh1C8N3RDEfaqhlQGdzdujeKGz/IuKIqsakhlcD/KYuywa0hbsJE/OMmtQr1JV//mjnGWpytYbpeX23WGztUZlI3zi8HDez/NuQ1DekLY8u8+Z3WG1gpeyr6ejQdLC+VX/lVDQty2f3O8U3d07eCl7PTHh8HS/fI/MlYMKdiL8+6X07xhquCl7PTsMJ7p5Q2bgWGG4pk9ZezS1MFL8UzP4mf6dyvPdOe4C/c/lV/QnHvi949G1sCVb9X7p2ub8ae8ir/EoqFNcZbkdu13f8cfZo1nTNe2NuOH64M48d+wnls2FxbjMt+ioTkX8ngM83j37Iv1eofxjM7sGvwBU/+3M6VhbWsAAAAASUVORK5CYII="},d1da:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApnSURBVHgB7d0/bxzHGQbw5wQXRmIgJ0AG6MZcAjHiVCbhIlXMY2WkkhkgXQBRyQcQVacQ+QksAel9at1YbJSk0ilsXCTWpYli2ICWqRQgQC6wDbij572boebu9m7/3OzuzOzzA+bu9ijLsvj45buzs3M9UGWXl5eJetpVo6+GvN7Wr80xrOMsk4UhUjUu9PFYnnu93hhUSQ+USwd5oMZ7mAV3F68C3JRp2NV4ql+nDH4+BjyDCvQAsxDvYxbsPvxkqvyZPKvAj0BzGHBcVeiP1LiJVy1HiCTwI8wCP1KBT9FxnQ24rtKmQg8QJ1Pdh10Ne6cCrkItlfkO4g71KhL2B+hYZe9EwHW1vofuhXqVR2qcqaAPEbloA25V62OE21PXLVXjFBFX9egCrk8Yb4HBLmuoxmlsQY8m4DrY0oYcgTYxRERBDz7gDHZthogg6MEGnD12Y07UeBhq0IMMuAq3BPsEDHZTUsyq+RCBCSrgnO5rXarGQUjV/BoCIO2IGh+rl0/AcLcpUeOFfC90i+g97yu4rtqfoPnVe7ReqsZt3xd4eVvBF6p2AvJNosYT9T26B495WcH11N9nmK3sI/+l8LQ3966C6xmSZ2C4Q5Ko8Ux9747hGW8quD5pkR933v0lUSn3VSW/C094EXC2JNFJ4UnL0nrAVbgl1BLuBBSTFB6EvNUeXIVbVv1xliROCWZ9+S20qLWA6+mlIXi5PWbyvR22OZXYSoui/4NPQF1yotqVUzSs8YAz3J3WeMgbDTjDTWg45I0FnOEmS2MhbyTgDDdlaCTktQec4aY1ag95rQFnuKmAWkNeW8D1BP8QRPmOVMgfoga1BFyvLZEVgbyIQ0XIpqEHdWwH7fxKpg63XH5nuKkoycpnOjtOOa/g6g/5AlxbQtVIBZdKPoEjTiu4vsUsAVE1srLU6boVZwHXd+LwZgXa1LHLO4OctCg8qSTHpEXZc7GW3FUF50kluWROOjfO1MYB1xdzEhC55aQf36hF0ZvyPAFRfQ422VyocsD1jw/puxMQ1SfFrB+vNHW4SYvC1oSakGCDVqVSBdezJi9A1JxKrUrVCs6+m5pWqYqXDriq3kdga0LNG1S5AFSqRbEWUiUgap6caO6UOeEsW8FljXcConbIzF2pKl64gvPEkjxR6jJ+mQru9Ubn1BlmF+JCClVwVm/y0E6RKl60grN6k28KZTK3grN6k8dyq3iRCs7qTb46yvsFays4qzd5LndePK+CD0Dkr9x58bwKzjvkyXcTVcGvr/riygrONScUiL6+8SbTuhblJojCsHIiJLNF4cklBeh61snmqgo+AFFYMk82VwX8DojCsp/15lKLwvaEArZ0W1tWBT8CUZgGi29kBZyzJxSqpTZlrkVhe0IRSFSbcmEOFiv4AERhO7QPXlv4ItsTh17++2ukz7/A9999i9d//AaSd/ewtf0OqFaS4fvmYDHgA5Azn//5U/zj/PHce/0bW7j1hz9On6kWu/bBVYuir+dzC+SaTf77Euk/vwDVZm5tit2D74IoDldZtgPO/ptiMTAvWMEpRlfz4dOAq55Fws3+m2Ihffi2vDAVPAFRXA7kwQSc7QnFZpppE/B9EMUlkQcTcPbfFJv35IEtCsUqkYdregaFKDoykyIVnO0JxWpPAs4KTrHqs4JTzBIJeAKiOE178G0Qxen6Jh/lTeS7n7AHp5glDDhFjQGnmHGakKLW76nLmZfouM//8in+c/EVXEufP5veZLwo+fku+jfegksf/vYOXv/RG6B5r4Hw5d/Okf7rGZqSPh+rxzFc6r/5FvYPfweax2lCILPKhmb818egZQx4JGL4n7QODLjys/d/CYqTBHyCjtv94FcIHfc8zDTp8bMwZ2SjzO+/+wYuyezMl38/X3r/Fx/+Bu++/wFcks09t95myBeknEXRtt7+KVwbn/8J2f+ud9RU4R6odhNpUVIQxWnCHpyiJgH/P4jilLJFoZhdMOAUM/bgFLWxBNztqh8if0yu9Xq9FEQRUtkem7UoKYjiMu1MrtkHRBGZnluagF+AKC5P5YEVnGI116KMQBSXVB6mAdczKZwPp1hMZAZFXth39IxAFIerltsO+FMQxeHMvLADzhNNisVyBVc9ywjswyl8E53lqcW76lnFKXRzrfZiwM9Azmxtu7/Pk3I9sg969sHl5WWinl6AnBmfP8bLi6/U+Hp63H9zC4Nf/x79G1ugWuzYCwh7i19VIX+ingYgCs9YhXtuu4Ksna04XUihWmqxswI+AlGYhotvLAVcT7GMQBSWcdbNO6s232SbQqF5kPVmL+tNdaIpH2vyPxCFY6dwBVe/UK5ojkAUhrNV9xav2x/8FERheLTqC701/5C0KtKm8FPYyGepqt47q76Y9wkPD0Dkt7WdRl4Fl+otl+5ZxclXO+v29llbwfXJJqs4+WqYt3HV2gouuACLPLaTF/DcT1nTv8FDEPklt3qL3AouWMXJQztFAl7oczJZxckzhaq3KFTBha7i8oHunFGhtu0UDXjhTzrWvyFnVKhtp2W2/C5cwQXnxallqRoHZQJe6rPq9bw416hQW0pVb1Gqghu8b5NasHbNySqlKriFVZyadoAKKgVc39bGE05qyoOyrYlRqUUR+oRTpg0TENUnVWNPn/+VVrVFMSect0FUr9tVwy0qB1ywVaGandobaVZRuUUxdKsisyq7IHKn0qzJoo0quNA/Pg7BrZfJHclSpVmTRRsHXOgzXE4dkiulL+issnGLYlPtyn31dAdE1cmU4DEccR1w9uO0CSd9t81Ji2JY/XgKonJSOOq7bU4ruKEquVRwqeRcdUhFSGHcc9V325xWcEN/COddEBVzt45wi1oCLtQfeAjOrFC+U52VWtTSothUu3Kinu6BaJmE+wQ1qj3ggiGnDLWHWzQScMGQk6WRcIvGAi4YckKD4RaNBlww5J3WaLhF4wEXDHknNR5u0UrABUPeKa2EW7QWcKFCfqSePgaveMZKrlDerXOeO0+rARd6Szi5rJ+AYpKqcaivarem9YALhjw6EurDui6/l1Hbpfoy5C9CL5Pk/Z3hk+/hgQ/hFl4E3NAL3WWRFm9/C4/pt483uQveNS9alEVsWYLjTUuyyKsKblgtC1cj+s+rlmSRlxXcpqr5QD19AlZz36SYbcozgse8rOA2/Re4B56A+kS+F3u+h1t4X8Ft7M1bN4KD3aaa5H0Ft1m9ueyJmIKaYmZIDkIKtwiqgtt0NT8C17PUyXzS9X2fpv7KCDbghg76iRq3QC4N4XCHqbYEH3CDQXdmiAiCbUQTcINBr8S0IsNYgm1EF3BDB32AWY+egLIE32PniTbgNr3u/KYaH4HECIFN91XViYAbVlWXHXC7tkHoSI2niLhaZ+lUwG3WNKNU9ljDPsIs1KMuVOssnQ24zarsN/VzqLfQSWWWlX1najyK7YSxCgY8g17gJVXdVHdfAy+BHmFWpcddrdLrMOAF6O2gE8zCvo9Z4Jtua1LMqvOFfh6xQudjwDegg2/CLs/beDUl2V8YWSZ4dfdSah1fWMdjBrm6HwBKWjNTs5E/lQAAAABJRU5ErkJggg=="},d94e:function(t,e,n){},ec9f:function(t,e,n){"use strict";var a=n("d94e"),i=n.n(a);i.a},f78c:function(t,e,n){},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("p",{staticClass:"m-0"},[t._v("Copyright © 2021 motivately")])])}],s={name:"Footer"},o=s,r=(n("2d1e"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"eb4e356c",null);e["a"]=c.exports}});
//# sourceMappingURL=index.ab587ce7.js.map