# AI Sales Call Insights Processor

## Use cases

- Automatically extract and categorize marketing insights from sales calls to improve targeting and messaging.
- Identify recurring topics in sales calls to understand customer pain points and product feedback trends.
- Generate actionable insights from sales calls to guide sales reps on next steps and improve close rates.

## How it works

1.  The workflow starts with an "Execute Workflow Trigger" node, which receives data from another workflow, presumably CallForge, after processing a sales call with AI. This data includes metadata about the call, AI-generated insights, and Notion data.
2.  The workflow then branches into three parallel paths, each checking for the presence of specific types of AI-generated insights: Marketing Insights, Recurring Topics, and Actionable Insights.
3.  For each type of insight found, the workflow waits for a specified amount of time (3 seconds) for rate limiting purposes, then splits the insights into individual items.
4.  Each insight item is then used to create a page in a corresponding Notion database (Marketing Insights, Recurring Topics, or Actionable Insights). The properties of each Notion page are populated with data from the AI-generated insights and the original call metadata.
5.  Finally, the created Notion entries are bundled and merged with the original AI response.

## Services

-   Notion
-   CallForge (Inferred from Sticky Notes - external AI call processing service).

## Hashtags

#n8n #automation #sales #AI #notion
