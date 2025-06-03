[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/crowddev.md "Edit this page")

# crowd.dev credentials[#](#crowddev-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [crowd.dev](../../app-nodes/n8n-nodes-base.crowddev/)
*   [crowd.dev Trigger](../../trigger-nodes/n8n-nodes-base.crowddevtrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a working instance of [crowd.dev](https://www.crowd.dev/).

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [crowd.dev's documentation](https://docs.crowd.dev/docs) for more information about the service, and their [API documentation](https://api.crowd.dev/api-reference) for working with the API.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   A **URL**:
    *   If your crowd.dev instance is hosted on crowd.dev, keep the default of `https://app.crowd.dev`.
    *   If your crowd.dev instance is [self-hosted](https://docs.crowd.dev/docs/technical-docs/self-hosting), use the URL you use to access your crowd.dev instance.
*   Your crowd.dev **Tenant ID**: Displayed in the **Settings** section of the crowd.dev app
*   An API **Token**: Displayed in the **Settings** section of the crowd.dev app

Refer to the [crowd.dev API documentation](https://api.crowd.dev/api-reference) for more detailed instructions.