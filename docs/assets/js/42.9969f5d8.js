(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{300:function(e,o,n){"use strict";n.r(o);var s=n(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"playbooks-for-adding-windows-workers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-for-adding-windows-workers","aria-hidden":"true"}},[e._v("#")]),e._v(" Playbooks for adding Windows workers")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("playbooks/create_vms.yml")]),e._v(" will create all the necessary Windows 2016 VMs for the environment based on the Windows VM Template defined in the "),n("code",[e._v("win_vm_template")]),e._v(" variable. Windows workers nodes are defined in the group "),n("code",[e._v("win_worker")]),e._v(" in the "),n("code",[e._v("vm_hosts")]),e._v(" inventory.")]),e._v(" "),n("li",[n("code",[e._v("playbooks/install_docker.yml")]),e._v(" installs Docker along with all its dependencies on your Windows VMs")]),e._v(" "),n("li",[n("code",[e._v("playbooks/scale_workers.yml")]),e._v(" installs and configures additional Windows workers on the target nodes defined by the group "),n("code",[e._v("win_worker")]),e._v(" in the "),n("code",[e._v("vm_hosts")]),e._v(" inventory.")]),e._v(" "),n("li",[n("code",[e._v("playbooks/splunk_uf_win.yml")]),e._v(" installs and configures the Splunk Universal Forwarder on each Windows machine in the inventory.")])])])}],!1,null,null,null);i.options.__file="add-windows-workers.md";o.default=i.exports}}]);