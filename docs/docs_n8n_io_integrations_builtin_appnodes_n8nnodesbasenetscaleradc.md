[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.netscaleradc.md "Edit this page")

# Netscaler ADC node[#](#netscaler-adc-node "Permanent link")

Use the Netscaler ADC node to automate work in Netscaler ADC, and integrate Netscaler ADC with other applications. n8n has built-in support for a wide range of Netscaler ADC features, including creating and installing certificates and files.

On this page, you'll find a list of operations the Netscaler ADC node supports and links to more resources.

Credentials

Refer to [Netscaler ADC credentials](../../credentials/netscaleradc/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Certificate
    *   Create
    *   Install
*   File
    *   Delete
    *   Download
    *   Upload

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Netscaler ADC integration templates](https://n8n.io/integrations/netscaler-adc/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Netscaler ADC's documentation](https://docs.citrix.com/en-us/citrix-adc/current-release/) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.