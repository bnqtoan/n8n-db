[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/zep.md "Edit this page")

# Zep credentials[#](#zep-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Zep](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep/)
*   [Zep Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezep/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Zep's Cloud SDK documentation](https://help.getzep.com/sdks) and [Open Source SDK documentation](https://docs.getzep.com/sdk/) for more information about the service. Refer to [Zep's REST API documentation](https://getzep.github.io/zep/) for information about the API.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a [Zep server](https://www.getzep.com/) with at least one project and:

*   An **API URL**
*   An **API Key**

Setup depends on whether you're using Zep Cloud or self-hosted Zep Open Source.

### Zep Cloud setup[#](#zep-cloud-setup "Permanent link")

Follow these instructions if you're using [Zep Cloud](https://app.getzep.com):

1.  In Zep, open the [**Project Settings**](https://app.getzep.com/projects).
2.  In the **Project Keys** section, select **Add Key**.
3.  Enter a **Key Name**, like `n8n integration`.
4.  Select **Create**.
5.  Copy the key and enter it in your n8n integration as the **API Key**.
6.  Turn on the **Cloud** toggle.

### Self-hosted Zep Open Source setup[#](#self-hosted-zep-open-source-setup "Permanent link")

Follow these instructions if you're self-hosting [Zep Open Source](https://docs.getzep.com/deployment/quickstart/):

1.  Enter the JWT token for your Zep server as the **API Key** in n8n.
    *   If you haven't generated a JWT token for your Zep server before, refer to Zep's [Configuring Authentication](https://docs.getzep.com/deployment/auth/) for instructions.
2.  Make sure the **Cloud** toggle is off.
3.  Enter the URL for your Zep server as the **API URL**.