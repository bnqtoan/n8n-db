[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlebigquery.md "Edit this page")

# Google BigQuery node[#](#google-bigquery-node "Permanent link")

Use the Google BigQuery node to automate work in Google BigQuery, and integrate Google BigQuery with other applications. n8n has built-in support for a wide range of Google BigQuery features, including creating, and retrieving records.

On this page, you'll find a list of operations the Google BigQuery node supports and links to more resources.

Credentials

Refer to [Google BigQuery credentials](../../credentials/google/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Execute Query
*   Insert

## Templates and examples[#](#templates-and-examples "Permanent link")

**🗼 AI Powered Supply Chain Control Tower with BigQuery and GPT-4o**

by Samir Saci

[View template details](https://n8n.io/workflows/3305-ai-powered-supply-chain-control-tower-with-bigquery-and-gpt-4o/)

**Send location updates of the ISS every minute to a table in Google BigQuery**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/1049-send-location-updates-of-the-iss-every-minute-to-a-table-in-google-bigquery/)

**Auto-Generate And Post Tweet Threads Based On Google Trends Using Gemini AI**

by Amjid Ali

[View template details](https://n8n.io/workflows/3978-auto-generate-and-post-tweet-threads-based-on-google-trends-using-gemini-ai/)

[Browse Google BigQuery integration templates](https://n8n.io/integrations/google-bigquery/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Google BigQuery's documentation](https://cloud.google.com/bigquery/docs/reference/rest) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.