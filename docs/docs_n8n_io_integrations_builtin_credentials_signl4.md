[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/signl4.md "Edit this page")

# SIGNL4 credentials[#](#signl4-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [SIGNL4](../../app-nodes/n8n-nodes-base.signl4/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [SIGNL4](https://www.signl4.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Webhook secret

## Related resources[#](#related-resources "Permanent link")

Refer to [SIGNL4's Inbound Webhook documentation](https://connect.signl4.com/webhook/docs/index.html) for more information about the service.

## Using webhook secret[#](#using-webhook-secret "Permanent link")

To configure this credential, you'll need:

*   A **Team Secret**: SIGNL4 includes this secret in the "✅ Sign up complete" email as the last part of the webhook URL. If your webhook URL is `https://connect.signl4.com/webhook/helloworld`, your team secret would be `helloworld`.