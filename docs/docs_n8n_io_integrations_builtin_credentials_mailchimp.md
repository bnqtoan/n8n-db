[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/mailchimp.md "Edit this page")

# Mailchimp credentials[#](#mailchimp-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Mailchimp](../../app-nodes/n8n-nodes-base.mailchimp/)
*   [Mailchimp Trigger](../../trigger-nodes/n8n-nodes-base.mailchimptrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Mailchimp](https://www.mailchimp.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key
*   OAuth2

Refer to [Selecting an authentication method](#selecting-an-authentication-method) for guidance on which method to use.

## Related resources[#](#related-resources "Permanent link")

Refer to [Mailchimp's API documentation](https://mailchimp.com/developer/marketing/api/) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: Generate an API key in the [API keys section](https://us1.admin.mailchimp.com/account/api/) of your Mailchimp account. Refer to [Mailchimp's Generate your API key documentation](https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key) for more detailed instructions.

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch, [register an application](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/#register-your-application). Refer to the [Mailchimp OAuth2 documentation](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/) for more information.

## Selecting an authentication method[#](#selecting-an-authentication-method "Permanent link")

Mailchimp suggests using an API key if you're only accessing your own Mailchimp account's data:

> Use an API key if you're writing code that tightly couples _your_ application's data to _your_ Mailchimp account's data. If you ever need to access _someone else's_ Mailchimp account's data, you should be using OAuth 2 ([source](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/#when-not-to-use-oauth-2))