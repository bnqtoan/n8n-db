[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/splunk.md "Edit this page")

# Splunk credentials[#](#splunk-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Splunk](../../app-nodes/n8n-nodes-base.splunk/)

## Prerequisites[#](#prerequisites "Permanent link")

*   [Download and install](https://www.splunk.com/en_us/download/splunk-enterprise.html) Splunk Enterprise.
*   [Enable token authentication](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/EnableTokenAuth) in **Settings > Tokens**.

Free trial Splunk Cloud Platform accounts can't access the REST API

Free trial Splunk Cloud Platform accounts don't have access to the REST API. Ensure you have the necessary permissions. Refer to [Access requirements and limitations for the Splunk Cloud Platform REST API](https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/RESTTUT/RESTandCloud) for more details.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API auth token

## Related resources[#](#related-resources "Permanent link")

Refer to [Splunk's Enterprise API documentation](https://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTprolog) for more information about the service.

## Using API auth token[#](#using-api-auth-token "Permanent link")

To configure this credential, you'll need:

*   An **Auth Token**: Once you've enabled token authentication, create an auth token in **Settings > Tokens**. Refer to [Creating authentication tokens](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/CreateAuthTokens) for more information.
*   A **Base URL**: For your Splunk instance. This should include the protocol, domain, and port, for example: `https://localhost:8089`.
*   **Allow Self-Signed Certificates**: If turned on, n8n will connect even if SSL validation fails.

## Required capabilities[#](#required-capabilities "Permanent link")

Your Splunk platform account and role must have certain capabilities to create authentication tokens:

*   `edit_tokens_own`: Required if you want to create tokens for yourself.
*   `edit_tokens_all`: Required if you want to create tokens for any user on the instance.

Refer to [Define roles on the Splunk platform with capabilities](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/Rolesandcapabilities) for more information.