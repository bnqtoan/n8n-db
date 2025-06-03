[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/actionnetwork.md "Edit this page")

# Action Network credentials[#](#action-network-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Action Network](../../app-nodes/n8n-nodes-base.actionnetwork/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Action Network's API documentation](https://actionnetwork.org/docs/) for more information about working with the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need an [Action Network](https://actionnetwork.org/) account with [API key access enabled](#request-api-access) and:

*   An **API Key**

To get an API key:

1.  Log in to your Action Network account.
2.  From the **Start Organizing** menu, select **Details >** [**API & Sync**](https://actionnetwork.org/apis).
3.  Select the list you want to generate an API key for.
4.  Generate an API key for that list.
5.  Copy the **API Key** and enter it in your n8n credential.

Refer to the [Action Network API Authentication instructions](https://actionnetwork.org/docs/v2/#auth) for more information.

## Request API access[#](#request-api-access "Permanent link")

Each user account and group on the Action Network has a separate API key to access that user or group's data.

You must explicitly request API access from Action Network, which you can do in one of two ways:

1.  If you're already a paying customer, [contact them](https://actionnetwork.org/contact) to request partner access. Partner access includes API key access.
2.  If you're a developer, [request a developer account](https://actionnetwork.org/developers). Once your account request is granted, you'll have API key access.