[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/community-nodes/risks.md "Edit this page")

# Risks when using community nodes[#](#risks-when-using-community-nodes "Permanent link")

Installing community nodes from npm means you are installing unverified code from a public source into your n8n instance. This has some risks.

Risks include:

*   System security: community nodes have full access to the machine that n8n runs on, and can do anything, including malicious actions.
*   Data security: any community node that you use has access to data in your workflows.
*   Breaking changes: node developers may introduce breaking changes in new versions of their nodes. A breaking change is an update that breaks previous functionality. Depending on the node versioning approach that a node developer chooses, upgrading to a version with a breaking change could cause all workflows using the node to break. Be careful when upgrading your nodes.

n8n vets verified community nodes

In addition to publicly available community nodes from npm, n8n inspects some nodes and makes them available as [verified community node inside the nodes panel](../installation/verified-install/). These nodes have to meet a set of data and system security requirements for approval.

## Report bad community nodes[#](#report-bad-community-nodes "Permanent link")

You can report bad community nodes to [security@n8n.io](mailto: security@n8n.io)

## Disable community nodes[#](#disable-community-nodes "Permanent link")

If you are self-hosting n8n, you can disable community nodes by setting `N8N_COMMUNITY_PACKAGES_ENABLED` to `false`. On n8n cloud, visit the [Cloud Admin Panel](https://docs.n8n.io/manage-cloud/cloud-admin-dashboard/) and disable community nodes from there. See [troubleshooting](../troubleshooting/) for more information.