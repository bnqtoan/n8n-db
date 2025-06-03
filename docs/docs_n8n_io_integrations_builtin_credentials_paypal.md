[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/paypal.md "Edit this page")

# PayPal credentials[#](#paypal-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [PayPal](../../app-nodes/n8n-nodes-base.paypal/)
*   [PayPal Trigger](../../trigger-nodes/n8n-nodes-base.paypaltrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [PayPal developer](https://developer.paypal.com/home) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API client and secret

## Related resources[#](#related-resources "Permanent link")

Refer to [Paypal's API documentation](https://developer.paypal.com/api/rest/) for more information about the service.

## Using API client and secret[#](#using-api-client-and-secret "Permanent link")

To configure this credential, you'll need:

*   A **Client ID**: Generated when you create an app.
*   A **Secret**: Generated when you create an app.
*   An **Environment**: Select **Live** or **Sandbox**.

To generate the **Client ID** and **Secret**, log in to your Paypal [developer dashboard](https://developer.paypal.com/dashboard/). Select **Apps & Credentials > Rest API apps > Create app**. Refer to [Get client ID and client secret](https://developer.paypal.com/api/rest/#link-getclientidandclientsecret) for more information.