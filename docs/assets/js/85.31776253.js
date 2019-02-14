(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{249:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("To address "),r("a",{attrs:{href:"https://nvd.nist.gov/vuln/detail/CVE-2018-1002105",target:"_blank",rel:"noopener noreferrer"}},[e._v("CVE-2018-1002105"),r("OutboundLink")],1),e._v(", a critical security issue in the Kubernetes API Server, Docker is using a custom build of Kubernetes 1.8.15 for UCP 3.0.7.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("This release of the Docker-SimpliVity playbooks is based on the recent release of the corresponding Docker-Synergy playbooks with some specific additions:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("The principal features inherited from this release include:")]),e._v(" "),e._m(5)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"critical-security-issue-in-the-kubernetes-api-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#critical-security-issue-in-the-kubernetes-api-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Critical security issue in the Kubernetes API Server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It is recommened that you specify "),t("code",[this._v("ucp_version: 3.0.7")]),this._v(" in your Docker configuration - see the section "),t("a",{attrs:{href:"#"}},[this._v("#")]),this._v(" for more information.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features","aria-hidden":"true"}},[this._v("#")]),this._v(" New features")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("Load balancers:")]),e._v(" The playbooks now support load balancers based on VRRP, using "),r("code",[e._v("HAproxy")]),e._v(" and "),r("code",[e._v("keepalived")]),e._v(". The solution can be deployed using these loadbalancers, external load balancers, no load balancers or the legacy version of standalone load balancers.")]),e._v(" "),r("li",[r("strong",[e._v("Default storage driver:")]),e._v(" The default storage driver is now "),r("code",[e._v("overlay2")]),e._v(", as recommended by Docker. Previously, the "),r("code",[e._v("devicemapper")]),e._v(" was configured in "),r("code",[e._v("direct-lvm")]),e._v(" mode.")]),e._v(" "),r("li",[r("strong",[e._v("Windows workers behind proxy:")]),e._v(" Windows worker nodes can now be deployed behind a proxy. Simple HTTP proxy support is provided and the playbooks do not support any type of authentication with the proxy (on either RHEL or Windows nodes).")]),e._v(" "),r("li",[r("strong",[e._v("Windows boot drive:")]),e._v(" The OS partition of Windows worker nodes is now resized to occupy all the boot disk, whereas, previously, there would have been some unallocated space.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"features-taken-from-docker-synergy-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features-taken-from-docker-synergy-release","aria-hidden":"true"}},[this._v("#")]),this._v(" Features taken from Docker-Synergy release")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Docker 2.0 with Kubernetes 1.8")]),this._v(" "),t("li",[this._v("Splunk support for monitoring Kubernetes logs and metrics")]),this._v(" "),t("li",[this._v("Sysdig support for monitoring Kubernetes clusters")]),this._v(" "),t("li",[this._v("Updated versions of Prometheus and Grafana")])])}],!1,null,null,null);i.options.__file="release-notes.md";t.default=i.exports}}]);