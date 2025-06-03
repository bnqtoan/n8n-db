[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/erpnext.md "Edit this page")

# ERPNext credentials[#](#erpnext-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [ERPNext](../../app-nodes/n8n-nodes-base.erpnext/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create an [ERPNext](https://erpnext.com) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [ERPNext's documentation](https://docs.erpnext.com/docs/user/manual/en/introduction) for more information about the service.

Refer to [ERPNext's developer documentation](https://frappeframework.com/docs/user/en/introduction) for more information about working with the framework.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: Generate this from your own ERPNext user account in **Settings > My Settings > API Access**.
*   An **API Secret**: Generated with the API key.
*   Your ERPNext **Environment**:
    *   For **Cloud-hosted**:
        *   Your ERPNext **Subdomain**: Refer to the [FAQs](#how-to-find-the-subdomain-of-an-erpnext-cloud-hosted-account)
        *   Your **Domain**: Choose between `erpnext.com` and `frappe.cloud`.
    *   For **Self-hosted**:
        *   The fully qualified **Domain** where you host ERPNext
*   Choose whether to **Ignore SSL Issues**: When selected, n8n will connect even if SSL certificate validation is unavailable.

If you are an ERPNext System Manager, you can also generate API keys and secrets for other users. Refer to the [ERPNext Adding Users documentation](https://docs.erpnext.com/docs/user/manual/en/adding-users) for more information.

## How to find the subdomain of an ERPNext cloud-hosted account[#](#how-to-find-the-subdomain-of-an-erpnext-cloud-hosted-account "Permanent link")

You can find your ERPNext subdomain by reviewing the address bar of your browser. The string between `https://` and either `.erpnext.com` or `frappe.cloud` is your subdomain.

For example, if the URL in the address bar is `https://n8n.erpnext.com`, the subdomain is `n8n`.