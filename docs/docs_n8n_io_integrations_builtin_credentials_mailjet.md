[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/mailjet.md "Edit this page")

# Mailjet credentials[#](#mailjet-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Mailjet](../../app-nodes/n8n-nodes-base.mailjet/)
*   [Mailjet Trigger](../../trigger-nodes/n8n-nodes-base.mailjettrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Mailjet](https://www.mailjet.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Email API key: For use with Mailjet's Email API
*   SMS token: For use with Mailjet's SMS API

## Related resources[#](#related-resources "Permanent link")

Refer to [Mailjet's Email API documentation](https://dev.mailjet.com/email/guides/) and [Mailjet's SMS API documentation](https://dev.mailjet.com/sms/guides/) for more information about each service.

## Using Email API key[#](#using-email-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: View and generate API keys in your Mailjet [API Key Management](https://app.mailjet.com/account/api_keys) page.
*   A **Secret Key**: View your API Secret Keys in your Mailjet [API Key Management](https://app.mailjet.com/account/api_keys) page.
*   _Optional:_ Select whether to use **Sandbox Mode** for calls made using this credential. When turned on, all API calls use Sandbox mode: the API will still validate the payloads but won't deliver the actual messages. This can be useful to troubleshoot any payload error messages without actually sending messages. Refer to Mailjet's [Sandbox Mode documentation](https://dev.mailjet.com/email/guides/send-api-v31/#sandbox-mode) for more information.

For this credential, you can use either:

*   Mailjet's primary API key and secret key
*   A subaccount API key and secret key

Refer to Mailjet's [How to create a subaccount (or additional API key) documentation](https://documentation.mailjet.com/hc/en-us/articles/360042561974-How-to-create-a-subaccount-or-additional-API-Key) for detailed instructions on creating more API keys. Refer to [What are subaccounts and how does it help me?](https://documentation.mailjet.com/hc/en-us/articles/360042561854-What-are-subaccounts-and-how-does-it-help-me) page for more information on Mailjet subaccounts and when you might want to use one.

## Using SMS Token[#](#using-sms-token "Permanent link")

To configure this credential, you'll need:

*   An access **Token**: Generate a new token from Mailjet's [SMS Dashboard](https://app.mailjet.com/sms). Refer to the [SMS API Getting Started guide](https://dev.mailjet.com/sms/guides/getting-started/) for more detailed instructions.