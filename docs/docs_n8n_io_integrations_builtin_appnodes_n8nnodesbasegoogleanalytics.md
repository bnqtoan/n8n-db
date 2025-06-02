[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googleanalytics.md "Edit this page")

# Google Analytics node[#](#google-analytics-node "Permanent link")

Use the Google Analytics node to automate work in Google Analytics, and integrate Google Analytics with other applications. n8n has built-in support for a wide range of Google Analytics features, including returning reports and user activities.

On this page, you'll find a list of operations the Google Analytics node supports and links to more resources.

Credentials

Refer to [Google Analytics credentials](../../credentials/google/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Report
    *   Get
*   User Activity
    *   Search

## Templates and examples[#](#templates-and-examples "Permanent link")

**AI marketing report (Google Analytics & Ads, Meta Ads), sent via email/Telegram**

by Friedemann Schuetz

[View template details](https://n8n.io/workflows/2783-ai-marketing-report-google-analytics-and-ads-meta-ads-sent-via-emailtelegram/)

**Automate Google Analytics Reporting**

by Alex Kim

[View template details](https://n8n.io/workflows/2549-automate-google-analytics-reporting/)

**Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram**

by Friedemann Schuetz

[View template details](https://n8n.io/workflows/2673-create-a-google-analytics-data-report-with-ai-and-sent-it-to-e-mail-and-telegram/)

[Browse Google Analytics integration templates](https://n8n.io/integrations/google-analytics/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Google Analytics' documentation](https://developers.google.com/analytics) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.