[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/magento2.md "Edit this page")

# Magento 2 credentials[#](#magento-2-credentials "Permanent link")

You can use these credentials to authenticate the following node:

*   [Magento 2](../../app-nodes/n8n-nodes-base.magento2/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Magento](https://magento.com/) account.
*   Set your store to **Allow OAuth Access Tokens to be used as standalone Bearer tokens**.
    *   Go to **Admin > Stores > Configuration > Services > OAuth > Consumer Settings**.
    *   Set the **Allow OAuth Access Tokens to be used as standalone Bearer tokens** option to **Yes**.
    *   You can also enable this setting from the CLI by running the following command:
        
        1
        
        `bin/magento config:set oauth/consumer/enable_integration_as_bearer 1`
        

This step is necessary until n8n updates the Magento 2 credentials to use OAuth. Refer to [Integration Tokens](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-token/#integration-tokens) for more information.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access token

## Related resources[#](#related-resources "Permanent link")

Refer to [Magento's API documentation](https://devdocs.magento.com/redoc/2.3/) for more information about the service.

## Using API access token[#](#using-api-access-token "Permanent link")

To configure this credential, you'll need:

*   A **Host**: Enter the address of your Magento store.
*   An **Access Token**: Get an access token from the [**Admin Panel**](https://docs.magento.com/user-guide/stores/admin.html):
    1.  Go to **System > Extensions > Integrations**.
    2.  Add a new Integration.
    3.  Go to the **API** tab and select the Magento resources you'd like the n8n integration to access.
    4.  From the **Integrations** page, **Activate** the new integration.
    5.  Select **Allow** to display your access token so you can copy it and enter it in n8n.