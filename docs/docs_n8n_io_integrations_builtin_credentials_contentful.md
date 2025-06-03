[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/contentful.md "Edit this page")

# Contentful credentials[#](#contentful-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Contentful](../../app-nodes/n8n-nodes-base.contentful/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Contentful](https://www.contentful.com/) account.
*   Create a [Contentful space](https://www.contentful.com/help/contentful-101/#step-2-create-a-space).

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access token

## Related resources[#](#related-resources "Permanent link")

Refer to [Contentful's API documentation](https://www.contentful.com/developers/docs/references/) for more information about the service.

## Using API access token[#](#using-api-access-token "Permanent link")

To configure this credential, you'll need:

*   Your Contentful **Space ID**: The Space ID displays as you generate the tokens; You can also refer to the [Contentful Find space ID documentation](https://www.contentful.com/help/find-space-id/) to view the Space ID.
*   A **Content Delivery API Access Token**: Required if you want to use the [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/). Leave blank if you don't intend to use this API.
*   A **Content Preview API Access Token**: Required if you want to use the [Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/). Leave blank if you don't intend to use this API.

View and generate access tokens in Contentful in **Settings > API keys**. Contentful generates tokens for both Content Delivery API and Content Preview API as part of a single key. Refer to [Contentful Creating and managing API keys](https://training.contentful.com/student/activity/1050378-creating-and-managing-api-keys) for detailed instructions.