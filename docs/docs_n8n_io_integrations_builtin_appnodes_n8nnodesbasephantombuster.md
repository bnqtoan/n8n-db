[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.phantombuster.md "Edit this page")

# PhantomBuster node[#](#phantombuster-node "Permanent link")

Use the PhantomBuster node to automate work in PhantomBuster, and integrate PhantomBuster with other applications. n8n has built-in support for a wide range of PhantomBuster features, including adding, deleting, and getting agents.

On this page, you'll find a list of operations the PhantomBuster node supports and links to more resources.

Credentials

Refer to [PhantomBuster credentials](../../credentials/phantombuster/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Agent
    *   Delete an agent by ID.
    *   Get an agent by ID.
    *   Get all agents of the current user's organization.
    *   Get the output of the most recent container of an agent.
    *   Add an agent to the launch queue.

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse PhantomBuster integration templates](https://n8n.io/integrations/phantombuster/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.