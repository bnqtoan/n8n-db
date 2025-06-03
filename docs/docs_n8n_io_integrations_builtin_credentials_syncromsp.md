[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/syncromsp.md "Edit this page")

# SyncroMSP credentials[#](#syncromsp-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [SyncroMSP](../../app-nodes/n8n-nodes-base.syncromsp/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [SyncroMSP](https://syncromsp.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [SyncroMSP's API documentation](https://api-docs.syncromsp.com/) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: Called an **API token** in SyncroMSP. To create an API token, go to your **user menu > Profile/Password > API Tokens** and select the option to **Create New Token**. Select **Custom Permissions** to enter a name for your token and adjust the permissions to match your requirements.
*   Your **Subdomain**: Enter your SyncroMSP subdomain. This is visible in the URL of your SyncroMSP, located between `https://` and `.syncromsp.com`. If your full URL is `https://n8n-instance.syncromsp.com`, you'd enter `n8n-instance` as the subdomain.

Refer to [API Tokens](https://community.syncromsp.com/t/api-tokens/2297) for more information on creating new tokens.