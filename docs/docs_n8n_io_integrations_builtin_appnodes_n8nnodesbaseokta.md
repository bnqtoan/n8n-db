[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.okta.md "Edit this page")

# Okta node[#](#okta-node "Permanent link")

Use the Okta node to automate work in Okta and integrate Okta with other applications. n8n has built-in support for a wide range of Okta features, which includes creating, updating, and deleting users.

On this page, you'll find a list of operations the Okta node supports, and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/okta/).

## Operations[#](#operations "Permanent link")

*   User
    *   Create a new user
    *   Delete an existing user
    *   Get details of a user
    *   Get many users
    *   Update an existing user

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Okta integration templates](https://n8n.io/integrations/{{ okta }}/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Okta's documentation](https://developer.okta.com/docs/guides/) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.