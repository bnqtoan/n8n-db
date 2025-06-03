[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/gong.md "Edit this page")

# Gong credentials[#](#gong-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Gong](../../app-nodes/n8n-nodes-base.gong/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access token
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Gong's API documentation](https://gong.app.gong.io/settings/api/documentation) for more information about the service.

## Using API access token[#](#using-api-access-token "Permanent link")

To configure this credential, you'll need a [Gong](https://app.gong.io/welcome/sign-in) account and:

*   An **Access Key**
*   An **Access Key Secret**

You can create both of these items on the [Gong API Page](https://app.gong.io/company/api) (you must be a technical administrator in Gong to access this resource).

Refer to [Gong's API documentation](https://gong.app.gong.io/settings/api/documentation) for more information about authenticating to the service.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need a [Gong](https://app.gong.io/welcome/sign-in) account, a [Gong developer](https://gong.partnerfleet.app/application_forms/become-a-gong-technology-partner/partner_applications/new) account and:

*   A **Client ID**: Generated when you create an Oauth app for Gong.
*   A **Client Secret**: Generated when you create an Oauth app for Gong.

If you're [self-hosting](../../../../hosting/) n8n, you'll need to [create an app](https://help.gong.io/docs/create-an-app-for-gong) to configure OAuth2. Refer to [Gong's OAuth documentation](https://gong.app.gong.io/settings/api/documentation) for more information about setting up OAuth2.