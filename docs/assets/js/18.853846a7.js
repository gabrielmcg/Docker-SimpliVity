(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{246:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("This reference configuration provides playbooks and scripts to help you back up and restore:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("The playbooks provided in this solution implement the backup and restore procedures as they are described in the Docker documentation at "),r("a",{attrs:{href:"https://docs.docker.com/enterprise/backup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/enterprise/backup/"),r("OutboundLink")],1),e._v(". The solution follows the recommendations in the Docker best practices document at "),r("a",{attrs:{href:"https://success.docker.com/article/backup-restore-best-practices",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://success.docker.com/article/backup-restore-best-practices"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(3),e._v(" "),e._m(4)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introduction-to-backup-and-restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-backup-and-restore","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction to backup and restore")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Docker UCP and DTR")]),this._v(" "),t("li",[this._v("Docker volumes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"backup-and-restore-ucp-and-dtr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-restore-ucp-and-dtr","aria-hidden":"true"}},[this._v("#")]),this._v(" Backup and restore UCP and DTR")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" It is important that you make copies of the backed up data and that you store the copies in a separate physical location. You must also recognize that the backed up data contains sensitive information such as private keys and so it is important to restrict access to the generated files. However, the playbooks do not backup the sensitive information in your "),t("code",[this._v("group_vars/vault")]),this._v(" file so you should make sure to keep track of the credentials for the UCP Administrator.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Warning:")]),this._v(" The restore procedures do not restore swarm data. You should follow infrastructure as code (IaC) guidelines and maintain your service, stack and network definitions using source code or configuration management tools. You must also ensure that you safely manage the credentials of your administration accounts as existing UCP Client bundles will not work when you restore UCP on a new swarm.")])}],!1,null,null,null);o.options.__file="backup-restore.md";t.default=o.exports}}]);