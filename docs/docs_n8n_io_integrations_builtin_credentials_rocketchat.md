[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/rocketchat.md "Edit this page")

# Rocket.Chat credentials[#](#rocketchat-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Rocket.Chat](../../app-nodes/n8n-nodes-base.rocketchat/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Rocket.Chat](https://rocket.chat/) account.
*   Your account must have the `create-personal-access-tokens` permission to generate personal access tokens.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access token

## Related resources[#](#related-resources "Permanent link")

Refer to [Rocket.Chat's API documentation](https://developer.rocket.chat/reference/api/rest-api) for more information about the service.

## Using API access token[#](#using-api-access-token "Permanent link")

To configure this credential, you'll need:

*   Your **User ID**: Displayed when you generate an access token.
*   An **Auth Key**: Your personal access token. To generate an access token, go to your **avatar > Account > Personal Access Tokens**. Copy the token and add it as the n8n **Auth Key**.
*   Your Rocket.Chat **Domain**: Also known as your default URL or workspace URL.

Refer to [Personal Access Tokens](https://docs.rocket.chat/docs/manage-your-account-settings#personal-access-tokens) for more information.