(this["webpackJsonpplaatjes-ruilen"]=this["webpackJsonpplaatjes-ruilen"]||[]).push([[0],{10:function(e,n,t){"use strict";(function(e){var a=t(4),r=t.n(a),s=t(11),c=t(12),l=t.n(c),i=t(16),u=t.n(i),o=t(3),d=e.gapi,j=function(e){return new Promise((function(n,t){d.load(e,{callback:n,onerror:t})}))},b=u()(Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("client");case 2:return e.next=4,d.client.init({apiKey:"AIzaSyCULqTDCVfoWs8DCOOngNZLtvKbEj2QtMg",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scopes:"https://www.googleapis.com/auth/spreadsheets.readonly"});case 4:case"end":return e.stop()}}),e)}))));n.a=function(e){var n=e.onChangeLackingFieldValue,t=e.onChangeRedundantFieldValue,a=e.spreadsheetId;Object(o.useEffect)((function(){Object(s.a)(r.a.mark((function e(){var s,c,i,u,o,j,f,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,b();case 4:return e.next=6,d.client.sheets.spreadsheets.get({spreadsheetId:a,includeGridData:!0});case 6:i=e.sent,u=i.result,o=u.sheets[0],j=l()(null===o||void 0===o||null===(s=o.data[0].rowData)||void 0===s?void 0:s.map((function(e){var n,t;return null===(n=e.values[0])||void 0===n||null===(t=n.effectiveValue)||void 0===t?void 0:t.numberValue}))).sort((function(e,n){return e-n})),n(j.join(", ")),f=u.sheets[1],v=l()(null===f||void 0===f||null===(c=f.data[0].rowData)||void 0===c?void 0:c.map((function(e){var n,t,a,r,s;return Array(null!==(n=null===(t=e.values[1])||void 0===t||null===(a=t.effectiveValue)||void 0===a?void 0:a.numberValue)&&void 0!==n?n:1).fill(null===(r=e.values[0])||void 0===r||null===(s=r.effectiveValue)||void 0===s?void 0:s.numberValue)}))).flat().sort((function(e,n){return e-n})),t(v.join(", "));case 14:case"end":return e.stop()}}),e)})))().catch(window.error)}),[a,n,t])}}).call(this,t(5))},14:function(e,n,t){"use strict";(function(e){var a=t(1),r=t(0),s=t(2),c=t(3),l=t(7),i=t(8),u=t(15),o=t(10),d=(t(25),new URLSearchParams(e.location.search)),j=d.get("googleSheet1"),b=d.get("googleSheet2"),f=function(){var e=Object(c.useState)(),n=Object(a.a)(e,2),t=n[0],r=n[1],s=Object(c.useMemo)((function(){var e;return null===(e=(null!==t&&void 0!==t?t:"").match(/\d+/g))||void 0===e?void 0:e.map((function(e){return e})).sort((function(e,n){return e-n}))}),[t]);return[t,r,s]},v=function(){var e=f(),n=Object(a.a)(e,3),t=n[0],r=n[1],s=n[2],c=f(),i=Object(a.a)(c,3),u=i[0],o=i[1],d=i[2];return{lackingFieldValue:t,onChangeLackingFieldValue:r,lackingArray:s,lackingCardSet:new Set(s),redundantFieldValue:u,onChangeRedundantFieldValue:o,redundantArray:d,redundantCardCounts:Object(l.orderBy)(Object.entries(Object(l.groupBy)(d)).map((function(e){var n=Object(a.a)(e,2);return[n[0],n[1].length]})),(function(e){var n=Object(a.a)(e,2);n[0];return n[1]}),"desc")}},O=function(e,n){var t=e.redundantCardCounts.filter((function(e){var t=Object(a.a)(e,1)[0];return n.lackingCardSet.has(t)})).map((function(e){return Object(a.a)(e,1)[0]})),r=n.redundantCardCounts.filter((function(n){var t=Object(a.a)(n,1)[0];return e.lackingCardSet.has(t)})).map((function(e){return Object(a.a)(e,1)[0]})),s=Math.min(t.length,r.length);return{possibleCards1to2:t,possibleCards2to1:r,cards1to2:t.slice(0,s),cards2to1:r.slice(0,s)}};n.a=function(){var e=v(),n=v(),t=O(e,n);return Object(o.a)(Object(s.a)(Object(s.a)({},e),{},{spreadsheetId:j})),Object(o.a)(Object(s.a)(Object(s.a)({},n),{},{spreadsheetId:b})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"top",children:[Object(r.jsx)("div",{className:"collectorPane collectorPane1",children:Object(r.jsx)(i.a,Object(s.a)(Object(s.a)({},e),{},{possibleTransfersIn:t.possibleCards2to1,transfersIn:t.cards2to1,possibleTransfersOut:t.possibleCards1to2,transfersOut:t.cards1to2}))}),Object(r.jsx)("div",{className:"collectorPane collectorPane2",children:Object(r.jsx)(i.a,Object(s.a)(Object(s.a)({},n),{},{possibleTransfersIn:t.possibleCards1to2,transfersIn:t.cards1to2,possibleTransfersOut:t.possibleCards2to1,transfersOut:t.cards2to1}))})]}),Object(r.jsx)(u.a,Object(s.a)({},t))]})}}).call(this,t(5))},15:function(e,n,t){"use strict";var a=t(0);n.a=function(e){var n=e.cards1to2,t=e.cards2to1;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{children:"Plaatjes van verzamelaar 1 naar verzamelaar 2: "}),Object(a.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(a.jsx)("li",{className:"transfer",children:e},e)}))})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{children:"Plaatjes van verzamelaar 2 naar verzamelaar 1: "}),Object(a.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(a.jsx)("li",{className:"transfer",children:e},e)}))})]})]})}},23:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(3),s=t.n(r),c=t(13),l=t.n(c),i=t(14),u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),s(e),c(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(i.a,{})}),document.getElementById("root")),u()},8:function(e,n,t){"use strict";var a=t(0),r=t(9),s=t.n(r);t(23);n.a=function(e){var n=e.lackingFieldValue,t=e.onChangeLackingFieldValue,r=e.lackingArray,c=e.redundantFieldValue,l=e.onChangeRedundantFieldValue,i=e.redundantArray,u=e.possibleTransfersIn,o=e.transfersIn,d=e.possibleTransfersOut,j=e.transfersOut;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("div",{children:"Ontbrekende plaatjes: "}),Object(a.jsx)("textarea",{value:n||"",onChange:function(e){return t(e.target.value)}})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("div",{children:"Dubbele plaatjes: "}),Object(a.jsx)("textarea",{value:c||"",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(e,n){return Object(a.jsx)("li",{className:s()("card",{transfer:o.includes(e),possibleTransfer:u.includes(e)}),children:e},n)}))}),Object(a.jsx)("ul",{children:null===i||void 0===i?void 0:i.map((function(e,n){return Object(a.jsx)("li",{className:s()("card",{transfer:j.includes(e)&&i.indexOf(e)===n,possibleTransfer:d.includes(e)}),children:e},n)}))})]})}}},[[26,1,2]]]);
//# sourceMappingURL=main.022e40aa.chunk.js.map