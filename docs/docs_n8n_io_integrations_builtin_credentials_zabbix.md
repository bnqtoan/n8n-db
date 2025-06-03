[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/zabbix.md "Edit this page")

# Zabbix credentials[#](#zabbix-credentials "Permanent link")

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Zabbix Cloud](https://www.zabbix.com/) account or self-host your own Zabbix server.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Zabbix's API documentation](https://www.zabbix.com/documentation/current/en/manual/api) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/zabbix/) on n8n's website.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   an **API Token**: An API key for your Zabbix user.
*   the **URL**: The URL of your Zabbix server. Don't include `/zabbix` as part of the URL.

Refer to [Zabbix's API documentation](https://www.zabbix.com/documentation/current/en/manual/api#authentication) for more information about authenticating to the service.