[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/eventbrite.md "Edit this page")

# Eventbrite credentials[#](#eventbrite-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Eventbrite Trigger](../../trigger-nodes/n8n-nodes-base.eventbritetrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create an [Eventbrite](https://www.eventbrite.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API private key
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Eventbrite's API documentation](https://www.eventbrite.com/platform/api) for more information about the service.

## Using API private key[#](#using-api-private-key "Permanent link")

To configure this credential, you'll need:

*   A **Private Key**: Refer to the [Eventbrite API Authentication Get a Private Token documentation](https://www.eventbrite.com/platform/api#/introduction/authentication/1.-get-a-private-token) for detailed steps to generate a Private Token. Use this private token as the **Private Key** in the n8n credential.

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch or need more detail on what's happening in the OAuth web flow, refer to the instructions in the [Eventbrite API authentication For App Partners documentation](https://www.eventbrite.com/platform/api#/introduction/authentication/2.-\(for-app-partners\)-authorize-your-users) to set up OAuth.