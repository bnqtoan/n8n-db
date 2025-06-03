[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/wolframalpha.md "Edit this page")

# Wolfram|Alpha credentials[#](#wolframalpha-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Wolfram|Alpha](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Wolfram|Alpha's Simple API documentation](https://products.wolframalpha.com/simple-api/documentation) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a registered [Wolfram ID](https://account.wolfram.com) and:

*   An **App ID**

To get an App ID:

1.  Open the Wolfram|Alpha Developer Portal and go to [**API Access**](https://developer.wolframalpha.com/access).
2.  Select **Get an App ID**.
3.  Enter a **Name** for your application, like `n8n integration`.
4.  Enter a **Description** for your application.
5.  Select **Simple API** as the **API**.
6.  Select **Submit**.
7.  Copy the generated **App ID** and enter it in your n8n credential.

Refer to **Getting Started** in the [Wolfram|Alpha Simple API documentation](https://products.wolframalpha.com/simple-api/documentation) for more information.

## Resolve Forbidden connection error[#](#resolve-forbidden-connection-error "Permanent link")

If you enter your App ID and get an error that the credential is **Forbidden**, make sure that you have verified your email address for your Wolfram ID:

1.  Go to your [Wolfram ID Details](https://account.wolfram.com/wolframid).
2.  If you don't see the **Verified** label underneath your **Email address**, select the link to **Send a verification email**.
3.  You must open the link in that email to verify your email address.

It may take several minutes for the verification to populate to the API, but once it does, retrying the n8n credential should succeed.