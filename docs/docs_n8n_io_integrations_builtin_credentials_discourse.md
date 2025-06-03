[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/discourse.md "Edit this page")

# Discourse credentials[#](#discourse-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Discourse](../../app-nodes/n8n-nodes-base.discourse/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Host an instance of [Discourse](https://discourse.org/)
*   Create an account on your hosted instance and make sure that you are an admin

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Discourse's API documentation](https://docs.discourse.org/) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   The **URL** of your Discourse instance, for example `https://community.n8n.io`
*   An **API Key**: Create an API key through the Discourse admin panel. Refer to the [Discourse create and configure an API key documentation](https://meta.discourse.org/t/create-and-configure-an-api-key/230124) for instructions on creating an API key and specifying a username.
*   A **Username**: Use your own name, `system`, or another user.

Refer to the Authentication section of the [Discourse API documentation](https://docs.discourse.org/) for examples.