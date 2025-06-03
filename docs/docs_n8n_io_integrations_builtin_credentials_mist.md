[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/mist.md "Edit this page")

# Mist credentials[#](#mist-credentials "Permanent link")

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Mist](https://www.mist.com/) account and organization. Refer to [Create a Mist account and Organization](https://www.mist.com/documentation/create-mist-org/) for detailed instructions.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API token

## Related resources[#](#related-resources "Permanent link")

Refer to [Mist's documentation](https://www.mist.com/documentation/mist-api-introduction/) for more information about the service. If you're logged in to your Mist account, go to [https://api.mist.com/api/v1/docs/Home](https://api.mist.com/api/v1/docs/Home) to view the full API documentation.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/mist/) on n8n's website.

## Using API token[#](#using-api-token "Permanent link")

To configure this credential, you'll need:

*   An **API Token**: You can use either a User API token or an Org API token. Refer to [How to generate a user API token](https://www.mist.com/documentation/using-postman/) for instructions on generating a User API token. Refer to [Org API token](https://www.mist.com/documentation/org-api-token/) for instructions on generating an Org API token.
*   Select the **Region** you're in. Options include:
    *   **Europe**: Select this option if your cloud environment is in any of the EMEA regions.
    *   **Global**: Select this option if your cloud environment is in any of the global regions.