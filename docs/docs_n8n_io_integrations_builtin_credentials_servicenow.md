[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/servicenow.md "Edit this page")

# ServiceNow credentials[#](#servicenow-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [ServiceNow](../../app-nodes/n8n-nodes-base.servicenow/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [ServiceNow](https://developer.servicenow.com/dev.do#!/reference) developer account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [ServiceNow's API documentation](https://developer.servicenow.com/dev.do#!/reference/api/washingtondc/rest/) for more information about the service.

## Using basic auth[#](#using-basic-auth "Permanent link")

To configure this credential, you'll need:

*   A **User** name: Enter your ServiceNow username.
*   A **Password**: Enter your ServiceNow password.
*   A **Subdomain**: The subdomain for your servicenow instance is in your instance URL: `https://<subdomain>.service-now.com/`. For example, if the full URL is `https://dev99890.service-now.com`, then the subdomain is `dev99890`.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need:

*   A **Client ID**: Generated once you register a new app.
*   A **Client Secret**: Generated once you register a new app.
*   A **Subdomain**: The subdomain for your servicenow instance is in your instance URL: `https://<subdomain>.service-now.com/`. For example, if the full URL is `https://dev99890.service-now.com`, then the subdomain is `dev99890`.

To generate your **Client ID** and **Client Secret**, register a new app in **System OAuth > Application Registry > New > Create an OAuth API endpoint for external clients**. Use these settings for your app:

*   Copy the **Client ID** and add it to your n8n credential.
*   Enter a **Client Secret** or leave it blank to automatically generate a random secret. Add this secret to your n8n credential.
*   Copy the n8n **OAuth Redirect URL** and add it as a **Redirect URL**.

Refer to [How to setup OAuth2 authentication for RESTMessageV2 integrations](https://www.servicenow.com/community/in-other-news/how-to-setup-oauth2-authentication-for-restmessagev2/ba-p/2271823) for more information.