(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{204:function(t,e,n){"use strict";n.r(e);var i=n(0),o=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("For more information, see the relevant Sysdig documentation at "),n("a",{attrs:{href:"https://support.sysdig.com/hc/en-us/articles/204205969",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://support.sysdig.com/hc/en-us/articles/204205969"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v('If you are using a proxy, it must be configured to be "fully-transparent". Non-transparent proxies will not allow the agent to connect.')])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, the playbooks for deploying Sysdig are commented out in "),e("code",[this._v("site.yml")]),this._v(" and must be explicitly enabled in that file if you want it included in the initial deployment. Alternatively, you can run the specific playbooks detailed in this section in a stand-alone manner, subsequent to the initial deployment.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, you must have outgoing port 6666 open in your firewall, to allow data to flow to "),e("code",[this._v("collector.sysdigcloud.com")]),this._v(". You can configure the agent to use a different port using the variable "),e("code",[this._v("sysdig\\_collector_port")]),this._v(" in "),e("code",[this._v("group\\_vars/vars")]),this._v(".")])}],!1,null,null,null);o.options.__file="deploying-sysdig.md";e.default=o.exports}}]);