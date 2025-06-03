[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/jotform.md "Edit this page")

# JotForm credentials[#](#jotform-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [JotForm Trigger](../../trigger-nodes/n8n-nodes-base.jotformtrigger/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [JotForm's API documentation](https://api.jotform.com/docs/) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a [JotForm](https://www.jotform.com/) account and:

*   An **API Key**
*   The **API Domain**

To set it up:

1.  Go to **Settings >** [**API**](https://www.jotform.com/myaccount/api).
2.  Select **Create New Key**.
3.  Select the **Name** in JotForm to update the API key name to something meaningful, like `n8n integration`.
4.  Copy the **API Key** and enter it in your n8n credential.
5.  In n8n, select the **API Domain** that applies to you based on the forms you're using:
    *   **api.jotform.com**: Use this unless the other form types apply to you.
    *   **eu-api.jotform.com**: Select this if you're using JotForm [EU Safe Forms](https://www.jotform.com/eu-safe-forms/).
    *   **hipaa-api.jotform.com**: Select this if you're using JotForm [HIPAA forms](https://www.jotform.com/hipaa/).

Refer to the [JotForm API documentation](https://api.jotform.com/docs/) for more information on creating keys and API domains.