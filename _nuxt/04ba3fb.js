(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{308:function(e,n){},313:function(e,n){},317:function(e,n,t){"use strict";t.r(n);var r=t(28),o=(t(60),t(316));function c(e,n){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function e(n,t){var r,address;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getBlockNumber();case 2:return e.next=4,n.getBalance("ethers.eth");case 4:return r=e.sent,o.a.utils.formatEther(r),e.next=8,t.getAddress();case 8:address=e.sent,console.log(address),o.a.utils.parseEther("1.0");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"undefined"!=typeof window&&(window.onload=Object(r.a)(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new o.a.providers.Web3Provider(window.ethereum),t=n.getSigner(),c(n,t);case 3:case"end":return e.stop()}}),e)}))));var f={name:"Login",data:function(){return{}},mounted:function(){},created:function(){},methods:{clickLogin:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("click"),n=new o.a.providers.Web3Provider(window.ethereum),n.getSigner();case 3:case"end":return e.stop()}}),e)})))()}}},l=t(66),component=Object(l.a)(f,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("button",{on:{click:e.clickLogin}},[e._v("Login")])])}),[],!1,null,null,null);n.default=component.exports}}]);