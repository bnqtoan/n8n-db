[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.crowddev.md "Edit this page")

# crowd.dev node[#](#crowddev-node "Permanent link")

Use the crowd.dev node to automate work in crowd.dev and integrate crowd.dev with other applications. n8n has built-in support for a wide range of crowd.dev features, which includes creating, updating, and deleting members, notes, organizations, and tasks.

On this page, you'll find a list of operations the crowd.dev node supports, and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/crowddev/).

## Operations[#](#operations "Permanent link")

*   Activity
    *   Create or Update with a Member
    *   Create
*   Automation
    *   Create
    *   Destroy
    *   Find
    *   List
    *   Update
*   Member
    *   Create or Update
    *   Delete
    *   Find
    *   Update
*   Note
    *   Create
    *   Delete
    *   Find
    *   Update
*   Organization
    *   Create
    *   Delete
    *   Find
    *   Update
*   Task
    *   Create
    *   Delete
    *   Find
    *   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse crowd.dev integration templates](https://n8n.io/integrations/crowddev/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

n8n provides a trigger node for crowd.dev. You can find the trigger node docs [here](../../trigger-nodes/n8n-nodes-base.crowddevtrigger/).

Refer to [crowd.dev's documentation](https://docs.crowd.dev/reference/getting-started-with-crowd-dev-api) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.