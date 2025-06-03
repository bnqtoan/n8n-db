[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/qualys.md "Edit this page")

# Qualys credentials[#](#qualys-credentials "Permanent link")

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Qualys](https://www.qualys.com/) user account with any user role except Contact.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth

## Related resources[#](#related-resources "Permanent link")

Refer to [Qualys's documentation](https://qualysguard.qg2.apps.qualys.com/qwebhelp/fo_portal/api_doc/index.htm) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/qualys/) on n8n's website.

## Using basic auth[#](#using-basic-auth "Permanent link")

To configure this credential, you'll need:

*   A **Username**
*   A **Password**
*   A **Requested With** string: Enter a user description, like a user agent, or keep the default `n8n application`. This sets the required `X-Requested-With` header.