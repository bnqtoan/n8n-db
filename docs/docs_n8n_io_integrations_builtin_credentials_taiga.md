[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/taiga.md "Edit this page")

# Taiga credentials[#](#taiga-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Taiga](../../app-nodes/n8n-nodes-base.taiga/)
*   [Taiga Trigger](../../trigger-nodes/n8n-nodes-base.taigatrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Taiga](https://taiga.io/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth

## Related resources[#](#related-resources "Permanent link")

Refer to [Taiga's API documentation](https://docs.taiga.io/api.html) for more information about the service.

## Using basic auth[#](#using-basic-auth "Permanent link")

To configure this credential, you'll need:

*   A **Username**: Enter your username or user email address. Refer to [Normal login](https://docs.taiga.io/api.html#auth-normal-login) for more information.
*   A **Password**: Enter your password.
*   The **Environment**: Choose between **Cloud** or **Self-Hosted**. For **Self-Hosted** instances, you'll also need to add:
    *   The **URL**: Enter your Taiga URL.