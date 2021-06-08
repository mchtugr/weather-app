(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{51:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(12),r=c.n(n),s=c(6),i=(c(51),c(77)),o=c(40),l=c(75),d=c(35),j=c(79),u=c(80),b=c(76),x=c(22),p=c.n(x),h=c(33),O=c(34),m=c.n(O),f="FETCH_WEATHER_DATA_REQUEST",y="FETCH_WEATHER_DATA_SUCCESS",w="FETCH_WEATHER_DATA_FAIL",v="SELECT_WEATHER_DISPLAY_TIME",_="SELECT_WEATHER_DISPLAY_DAY",N="SET_TEMPERATURE_UNIT",g=function(t){return function(){var e=Object(h.a)(p.a.mark((function e(c,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:f}),e.next=4,m.a.get("http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=").concat(a().unit,"&appid=bec94a3e4508449a5a9ff54c70a1990d"));case 4:n=e.sent,r=n.data,c({type:y,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c({type:w,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}()},E=function(t){return function(e,c){var a=c().weather.data.find((function(e){return e.dt===t}));e({type:v,payload:a})}},T=function(t){return{type:N,payload:t}},D=c(1),A=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),c=e[0],n=e[1],r=Object(s.b)(),i=Object(s.c)((function(t){return t.weather.error}));return Object(D.jsx)(l.a,{className:"justify-content-center mb-5 mt-5",children:Object(D.jsxs)(d.a,{md:6,xs:11,children:[i&&Object(D.jsx)(j.a,{variant:"danger",className:"text-center p-1",children:"City not found!"}),Object(D.jsx)(u.a,{onSubmit:function(t){t.preventDefault(),r(g(c)),n("")},className:"justify-content-center",children:Object(D.jsxs)(l.a,{children:[Object(D.jsx)(d.a,{children:Object(D.jsxs)(u.a.Group,{className:"mb-3",controlId:"city",children:[Object(D.jsx)(u.a.Control,{type:"text",placeholder:"Enter a city",value:c,onChange:function(t){return n(t.target.value)}}),!c&&Object(D.jsx)(u.a.Text,{className:"ml-3 text-info",children:"e.g. New York"})]})}),Object(D.jsx)(d.a,{xs:"auto",children:Object(D.jsx)(b.a,{variant:"info",type:"button",onClick:g,children:"Fetch"})})]})})]})})},C=c(78),S=function(){var t,e=Object(s.c)((function(t){return t.weather.data})),c=Object(s.c)((function(t){return t.weather.selectedData})),n=Object(s.c)((function(t){return t.weather.location})),r=Object(s.c)((function(t){return t.unit})),o=Object(s.c)((function(t){return t.weather.selectedDay})),j=Object(s.b)();return Object(a.useEffect)((function(){var t=e.find((function(t){return t.dt_txt.split(" ")[0]===o}));j(E(t.dt))}),[o]),Object(D.jsx)(i.a,{className:"border rounded",children:Object(D.jsxs)(l.a,{className:"demo",children:[Object(D.jsx)(d.a,{xs:8,children:Object(D.jsxs)(l.a,{children:[Object(D.jsx)(d.a,{xs:"auto",children:Object(D.jsx)(C.a,{src:"/icons/".concat(c.weather[0].icon,".png"),alt:c.weather[0].description})}),Object(D.jsx)(d.a,{xs:"auto",className:"justify-content-center",children:Object(D.jsxs)(l.a,{children:[Object(D.jsx)(d.a,{className:"temp-font",children:Math.round(c.main.temp)}),Object(D.jsxs)(d.a,{className:"my-2",children:[Object(D.jsx)(l.a,{className:"mb-2 mt-1 px-2 ".concat("metric"===r&&"font-weight-bold"),onClick:function(){j(T("metric")),j(g(n.name))},children:"\xb0C"}),Object(D.jsx)(l.a,{className:"px-2 ".concat("imperial"===r&&"font-weight-bold"),onClick:function(){j(T("imperial")),j(g(n.name))},children:"\xb0F"})]}),Object(D.jsxs)(d.a,{xs:"auto",className:"my-3",children:[Object(D.jsxs)(l.a,{children:["Humidity: ",c.main.humidity,"%"]}),Object(D.jsxs)(l.a,{children:["Wind:","metric"===r?" ".concat((t=c.wind.speed,(18*t/5).toFixed(2))," km/h"):" ".concat(c.wind.speed," mph")]})]})]})})]})}),Object(D.jsxs)(d.a,{xs:4,className:"",children:[Object(D.jsxs)(l.a,{className:"justify-content-end px-2 pt-2",children:[n.name,", ",n.country]}),Object(D.jsxs)(l.a,{className:"justify-content-end px-2",children:[new Date(c.dt_txt.split(" ")[0]).toDateString().split(" ")[0],", ",c.dt_txt.split(" ")[1].slice(0,5)]}),Object(D.jsx)(l.a,{className:"justify-content-end px-2 ",children:c.weather[0].main})]})]})})},k=function(){var t=Object(s.c)((function(t){return t.weather.data})),e=Object(s.c)((function(t){return t.weather.selectedData})),c=Object(s.c)((function(t){return t.weather.selectedDay})),a=(t[0].dt_txt.split(" ")[0],t.find((function(t){return t.dt_txt.split(" ")[0]===c}))),n=t.indexOf(a);t=t.slice(n,n+8);var r=e.dt_txt.split(" ")[1].slice(0,5),i=Object(s.b)();return Object(D.jsx)(l.a,{className:"justify-content-center m-3 overflow-auto",children:t.map((function(t){var e=t.dt_txt.split(" ")[1].slice(0,5);return Object(D.jsx)("div",{className:"p-1 text-center time-interval rounded ".concat(e===r&&"border"),onClick:function(){return e=t.dt,void i(E(e));var e},children:t.dt_txt.split(" ")[1].slice(0,5)},t.dt)}))})},F=c(81),H=function(t){var e=t.data,c=Object(s.b)(),a=Object(s.c)((function(t){return t.weather.selectedDay})),n=e.dt_txt.split(" ")[0];return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{id:e.dt,className:"mx-1 weather-card",onClick:function(){return c(function(t){var e=t.split(" ")[0];return{type:_,payload:e}}(e.dt_txt))},children:Object(D.jsxs)(F.a,{className:"text-center py-3 ".concat(n===a&&"selected"),children:[Object(D.jsx)(F.a.Title,{children:new Date(e.dt_txt.split(" ")[0]).toDateString().split(" ")[0]}),Object(D.jsx)(F.a.Img,{className:"weather-icon",variant:"top",src:"/icons/".concat(e.weather[0].icon,".png")}),Object(D.jsx)(F.a.Body,{className:"text-center px-0",children:Object(D.jsx)(F.a.Text,{children:Math.round(e.main.temp)+"\xb0"})})]})},e.dt)})},R=function(){var t=Object(s.c)((function(t){return t.weather.data}));return Object(D.jsxs)(l.a,{className:"justify-content-center",children:[Number(t[0].dt_txt.split(" ")[1].slice(0,2))>12&&Object(D.jsx)(H,{data:t[0]}),t.map((function(t){if("12:00:00"===t.dt_txt.split(" ")[1])return Object(D.jsx)(H,{data:t},t.dt)}))]})},I=function(){return Object(D.jsx)("footer",{children:Object(D.jsxs)("p",{className:"text-center",children:["Designed by"," ",Object(D.jsx)("a",{className:"author",href:"https://github.com/murtazaaylak",children:"Murtaza Aylak"})]})})},W=function(){var t=Object(s.c)((function(t){return t.weather.data}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(i.a,{className:"mb-4 app-wrapper",children:[Object(D.jsx)(A,{}),t&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(S,{}),Object(D.jsx)(k,{}),Object(D.jsx)(R,{})]})]}),Object(D.jsx)(I,{})]})},M=c(16),L=c(38),U=c(39),Y=c(13),P=Object(M.combineReducers)({weather:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return{loading:!0};case y:var c=e.payload.list[0];return{data:e.payload.list,location:e.payload.city,selectedData:c,selectedDay:c.dt_txt.split(" ")[0],loading:!1};case v:return Object(Y.a)(Object(Y.a)({},t),{},{selectedData:e.payload,loading:!1});case _:return Object(Y.a)(Object(Y.a)({},t),{},{selectedDay:e.payload,loading:!1});case w:return{loading:!1,error:e.payload};default:return t}},unit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"metric",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return e.payload;default:return t}}}),z=Object(M.createStore)(P,{weather:{}},Object(U.composeWithDevTools)(Object(M.applyMiddleware)(L.a)));r.a.render(Object(D.jsx)(s.a,{store:z,children:Object(D.jsx)(W,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.c30608ba.chunk.js.map