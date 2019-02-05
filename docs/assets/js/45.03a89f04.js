(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{247:function(e,o,n){"use strict";n.r(o);var t=n(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"installing-docker-ucp-and-dtr-on-rhel-vms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-docker-ucp-and-dtr-on-rhel-vms","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Docker UCP and DTR on RHEL VMs")]),e._v(" "),n("p",[e._v("The following playbooks are used to install Docker UCP and DTR on RHEL VMs.")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("playbooks/config_storage_driver.yml")]),e._v(" prepares drives for local Docker volumes and container images. It also configures Docker with either the "),n("code",[e._v("overlay2")]),e._v(" storage driver (the default) or the "),n("code",[e._v("devicemapper")]),e._v(" storage driver, depending on the value of the "),n("code",[e._v("docker_storage_driver")]),e._v(" variable in "),n("code",[e._v("group_vars/vars")]),e._v(". This playbook was previously called "),n("code",[e._v("playbooks/config_docker_lvs.yml")]),e._v(" in earlier releases of the solution.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/install_docker.yml")]),e._v(" installs Docker along with all of its dependencies.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/install_rsyslog.yml")]),e._v(" installs and configures "),n("strong",[e._v("rsyslog")]),e._v(" in the logger node and in all Docker nodes. The logger node will be configured to receive all "),n("code",[e._v("syslogs")]),e._v(" on port 514 and the Docker nodes will be configured to send all logs (including container logs) to the logger node.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/docker_post_config.yml")]),e._v(" performs a variety of tasks to complete the installation of the Docker environment, including configuration of the HTTP/HTTPS proxies, if any, and installation of the VMware vSphere Storage for Docker volume plugin.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/install_nfs_server.yml")]),e._v(" installs and configures an NFS server on the NFS node.")]),e._v(" "),n("p",[e._v("This playbook has been updated to configure a third drive which is used to hold the data of the persistent volumes created with the NFS provisioner. This default size for this drive is purposefully kept small because using the NFS VM to store persistent volumes is not recommended for production use. However, this can be useful for demo purposes.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/install_nfs_clients.yml")]),e._v(" installs the required packages on the Docker nodes to be able to mount an NFS share.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/create_main_ucp.yml")]),e._v(" installs and configures the first Docker UCP instance on the target node defined by the group "),n("code",[e._v("ucp_main")]),e._v(" in the "),n("code",[e._v("vm_hosts")]),e._v(" inventory.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/scale_ucp.yml")]),e._v(" installs and configures additional instances of UCP on the target nodes defined by the group "),n("code",[e._v("ucp")]),e._v(" in the "),n("code",[e._v("vm_hosts")]),e._v(" inventory, except for the node defined in the group "),n("code",[e._v("ucp_main")]),e._v(".")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/create_main_dtr.yml")]),e._v(" installs and configures the first Docker DTR instance on the target node defined by the group "),n("code",[e._v("dtr_main")]),e._v(" in the "),n("code",[e._v("vm_hosts")]),e._v(" inventory.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/config_scheduler.yml")]),e._v(" configures the scheduler to prevent regular users (i.e. non-admin users) scheduling containers on the Docker nodes running instances of UCP and DTR.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/scale_dtr.yml")]),e._v(" installs and configures additional instances (or replicas) of DTR on the target nodes defined by the group "),n("code",[e._v("dtr")]),e._v(" in the "),n("code",[e._v("vm_hosts")]),e._v(" inventory, with the exception of the node defined in the group "),n("code",[e._v("dtr_main")]),e._v(".")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("playbooks/reconfigure_dtr.yml")]),e._v(" is used to reconfigure DTR with the FQDN of the UCP Load Balancer and also enables image scanning.")])])])])}],!1,null,null,null);s.options.__file="install-docker-ucp-dtr.md";o.default=s.exports}}]);