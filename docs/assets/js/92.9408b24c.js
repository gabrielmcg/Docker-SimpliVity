(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{189:function(e,t,s){"use strict";s.r(t);var a=s(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),s("p",[e._v("Using the Sysdig software as a solution (SaaS) website "),s("a",{attrs:{href:"https://app.sysdigcloud.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://app.sysdigcloud.com"),s("OutboundLink")],1),e._v(", you are able to view, analyze and inspect various different dashboards.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"deploying-sysdig-monitoring-on-docker-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-sysdig-monitoring-on-docker-swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploying Sysdig monitoring on Docker Swarm")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The playbook "),s("code",[e._v("playbooks/install_sysdig.yml")]),e._v(" is used to automate the configuration of the SaaS setup. By default, this playbook is commented out in "),s("code",[e._v("site.yml")]),e._v(" and must be explicitly enabled. An access key variable must be set in the "),s("code",[e._v("group_vars/vault")]),e._v(" file as detailed in "),s("a",{attrs:{href:"#sysdig-config-table-content"}},[e._v("#sysdig-config-table-content")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cd Docker-SimpliVity\n# ansible-playbook -i vm_hosts playbooks/install_sysdig.yml --vault-password-file .vault_pass\n\n")])])])}],!1,null,null,null);i.options.__file="deploying-sysdig-swarm.md";t.default=i.exports}}]);