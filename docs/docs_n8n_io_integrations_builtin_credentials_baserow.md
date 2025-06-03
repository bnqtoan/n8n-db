[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/baserow.md "Edit this page")

# Baserow credentials[#](#baserow-credentials "Permanent link")

You can use these credentials to authenticate the following node:

*   [Baserow](../../app-nodes/n8n-nodes-base.baserow/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Baserow](https://baserow.io/) account on any hosted Baserow instance or a self-hosted instance.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth

## Related resources[#](#related-resources "Permanent link")

Refer to [Baserow's documentation](https://baserow.io/docs/index) for more information about the service.

Refer to [Baserow's auto-generated API documentation](https://baserow.io/api-docs) for more information about the API specifically.

## Using basic auth[#](#using-basic-auth "Permanent link")

To configure this credential, you'll need:

*   Your Baserow **Host**
*   A **Username** and **Password** to log in with

Follow these steps:

1.  Enter the **Host** for the Baserow instance:
    *   For a Baserow-hosted instance: leave as `https://api.baserow.io`.
    *   For a self-hosted instance: set to your self-hosted instance API URL.
2.  Enter the **Username** for the user account n8n should use.
3.  Enter the **Password** for that user account.

Refer to [Baserow's API Authentication documentation](https://baserow.io/docs/apis/rest-api#authentication) for information on creating user accounts.