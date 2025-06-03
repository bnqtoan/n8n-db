[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.postgrestrigger.md "Edit this page")

# Postgres Trigger node[#](#postgres-trigger-node "Permanent link")

Use the Postgres Trigger node to respond to events in [Postgres](https://www.postgresql.org/) and integrate Postgres with other applications. n8n has built-in support responding to insert, update, and delete events.

Credentials

You can find authentication information for this node [here](../../credentials/postgres/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Postgres Trigger integrations](https://n8n.io/integrations/postgres-trigger/) page.

## Events[#](#events "Permanent link")

You can configure how the node listens for events.

*   Select **Listen and Create Trigger Rule**, then choose the events to listen for:
    *   Insert
    *   Update
    *   Delete
*   Select **Listen to Channel**, then enter a channel name that the node should monitor.

## Related resources[#](#related-resources "Permanent link")

n8n provides an app node for Postgres. You can find the node docs [here](../../app-nodes/n8n-nodes-base.postgres/).

View [example workflows and related content](https://n8n.io/integrations/postgres-trigger/) on n8n's website.