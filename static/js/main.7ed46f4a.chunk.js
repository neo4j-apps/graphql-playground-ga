(this["webpackJsonp@neo4j-apps/graphql-playground-ga"]=this["webpackJsonp@neo4j-apps/graphql-playground-ga"]||[]).push([[0],{270:function(e,n,o){e.exports=o(557)},275:function(e,n,o){},385:function(e,n,o){var t={"./Range.js":75,"./file.js":97,"./getASTNodeAtPosition.js":96,"./index.js":29,"./validateWithCustomRules.js":121};function r(e){var n=a(e);return o(n)}function a(e){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=a,e.exports=r,r.id=385},386:function(e,n){function o(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=386},387:function(e,n,o){var t={"./Range.js":75,"./file.js":97,"./getASTNodeAtPosition.js":96,"./index.js":29,"./validateWithCustomRules.js":121};function r(e){return Promise.resolve().then((function(){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o(t[e])}))}r.keys=function(){return Object.keys(t)},r.id=387,e.exports=r},388:function(e,n){function o(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=388},557:function(e,n,o){"use strict";o.r(n);var t=o(3),r=o.n(t),a=o(60),i=o.n(a),s=(o(275),o(23)),c=o(155);var u=function(){var e=new URL(window.location.href),n=e.searchParams.get("neo4jDesktopApiUrl"),o=e.searchParams.get("neo4jDesktopGraphAppClientId");return r.a.createElement(s.Provider,{store:c.store},r.a.createElement(c.Playground,{endpoint:n,tabs:[{name:"List Projects",endpoint:n,query:"\n# Projects in the current workspace\nquery {\n  workspace {\n    projects {\n      name\n    }\n  }\n}\n",headers:{clientId:o}},{name:"Send Metrics",endpoint:n,query:'\n# Send metrics about some event\nmutation {\n  sendMetrics(event:{\n    category: "prototype",\n    label: "initialized",\n    properties: [\n      {\n        name:"developer",\n        value:"graphmaster@somewhere.com"\n      }\n    ]\n  })\n}',headers:{clientId:o}}]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[270,1,2]]]);
//# sourceMappingURL=main.7ed46f4a.chunk.js.map