[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/community-nodes/installation/manual-install.md "Edit this page")

# Manually install community nodes from npm[#](#manually-install-community-nodes-from-npm "Permanent link")

You can manually install community nodes from the npm registry on self-hosted n8n.

You need to manually install community nodes in the following circumstances:

*   Your n8n instance runs in queue mode.
*   You want to install [private packages](https://docs.npmjs.com/creating-and-publishing-private-packages).

## Install a community node[#](#install-a-community-node "Permanent link")

Access your Docker shell:

1

`docker exec -it n8n sh`

Create `~/.n8n/nodes` if it doesn't already exist, and navigate into it:

1
2

`mkdir ~/.n8n/nodes cd ~/.n8n/nodes`

Install the node:

1

`npm i n8n-nodes-nodeName`

Then restart n8n.

## Uninstall a community node[#](#uninstall-a-community-node "Permanent link")

Access your Docker shell:

1

`docker exec -it n8n sh`

Run npm uninstall:

1

`npm uninstall n8n-nodes-nodeName`

## Upgrade a community node[#](#upgrade-a-community-node "Permanent link")

Breaking changes in versions

Node developers may introduce breaking changes in new versions of their nodes. A breaking change is an update that breaks previous functionality. Depending on the node versioning approach that a node developer chooses, upgrading to a version with a breaking change could cause all workflows using the node to break. Be careful when upgrading your nodes. If you find that an upgrade causes issues, you can [downgrade](#upgrade-or-downgrade-to-a-specific-version).

### Upgrade to the latest version[#](#upgrade-to-the-latest-version "Permanent link")

Access your Docker shell:

1

`docker exec -it n8n sh`

Run npm update:

1

`npm update n8n-nodes-nodeName`

### Upgrade or downgrade to a specific version[#](#upgrade-or-downgrade-to-a-specific-version "Permanent link")

Access your Docker shell:

1

`docker exec -it n8n sh`

Run npm uninstall to remove the current version:

1

`npm uninstall n8n-nodes-nodeName`

Run npm install with the version specified:

1
2

`# Replace 2.1.0 with your version number npm install n8n-nodes-nodeName@2.1.0`