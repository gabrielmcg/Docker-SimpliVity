(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{208:function(e,t,s){"use strict";s.r(t);var a=s(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),s("p",[e._v("Using the Sysdig software as a solution (SaaS) website "),s("a",{attrs:{href:"https://app.sysdigcloud.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://app.sysdigcloud.com"),s("OutboundLink")],1),e._v(", you are able to view, analyze and inspect various different dashboards. Initially, you will just see the monitoring information for the infrastructure itself. Deploy a sample application, as detailed in the section "),s("code",[e._v("Kubernetes guestbook example with Redis")]),e._v(", and use the Sysdig solution to analyze the different facets of the deployed application.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"deploying-sysdig-monitoring-on-kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-sysdig-monitoring-on-kubernetes","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploying Sysdig monitoring on Kubernetes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Install the "),s("code",[e._v("kubectl")]),e._v(" binary on your Ansible box")]),e._v(" "),s("li",[e._v("Install the UCP Client bundle for the "),s("code",[e._v("admin")]),e._v(" user")]),e._v(" "),s("li",[e._v("Confirm that you can connect to the cluster by running a test command, for example, "),s("code",[e._v("kubectl get nodes")])]),e._v(" "),s("li",[e._v("Ensure that you have configured the required variables, as described in the section "),s("code",[e._v("Sysdig configuration for Kubernetes")]),e._v(". For example, you add the relevant variables in the "),s("code",[e._v("group_vars/vars")]),e._v(" file.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    sysdig_collector: 'collector.sysdigcloud.com'\n    sysdig_collector_port: '6666'\n    sysdig_tags: 'location:Enter city,role:Enter role,owner:Customer name'\n    k8s_cluster: 'ucp_hpe2-ucp.cloudra.local'\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You should add the access key to the encrypted "),t("code",[this._v("group_vars/vault")]),this._v(" using the command "),t("code",[this._v("ansible-vault edit group_vars/vault")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("sysdig_access_key: '10****97-9160-****-9061-84bfd0f****0'    \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-the-playbook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-the-playbook","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the playbook")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# cd Docker-SimpliVity\n# ansible-playbook -i vm_hosts playbooks/sysdig-k8s-rbac.yml --vault-password-file .vault_pass\n")])])])}],!1,null,null,null);i.options.__file="deploying-sysdig-k8s.md";t.default=i.exports}}]);