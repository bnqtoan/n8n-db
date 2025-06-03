[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/acuityscheduling.md "Edit this page")

# Acuity Scheduling credentials[#](#acuity-scheduling-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Acuity Scheduling Trigger](../../trigger-nodes/n8n-nodes-base.acuityschedulingtrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create an [Acuity Scheduling](https://acuityscheduling.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Acuity's API documentation](https://developers.acuityscheduling.com/reference/quick-start) for more information about working with the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   A numeric **User ID**
*   An **API Key**

Refer to the [Acuity API Quick Start authentication instructions](https://developers.acuityscheduling.com/reference/quick-start#authentication) to generate an API key and view your User ID.

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to set this up from scratch, complete the [Acuity OAuth2 Account Registration page](https://acuityscheduling.com/oauth2/register). Use the **Client ID** and **Client Secret** provided from that registration.