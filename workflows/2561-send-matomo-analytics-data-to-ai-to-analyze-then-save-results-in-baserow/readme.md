# Matomo Analytics Report

## Use cases:

- **SEO Optimization:** Automatically analyze website visitor behavior to identify popular content, common user paths, and areas for improvement, providing actionable insights for SEO strategies.
- **Content Strategy Enhancement:** Understand how users interact with different pages and content types to tailor future content creation and improve user engagement.
- **Automated Website Performance Monitoring:** Regularly monitor visitor data and receive AI-driven recommendations for optimizing website performance and user experience.

## How it works:

1.  The workflow is triggered either manually ("When clicking ‘Test workflow’") or on a scheduled basis ("Schedule Trigger").
2.  It fetches visitor data from Matomo using the "Get data from Matomo" node, filtering for visitors with more than 3 visits in the last 30 days, and retrieves specific details like actions, IP, visitor ID, and visit count.
3.  The "Parse data from Matomo" node transforms the raw data into a structured prompt, detailing visitor behavior, popular pages, and engagement patterns.
4.  This structured prompt is sent to an AI model (meta-llama/llama-3.1-70b-instruct:free via OpenRouter) using the "Send data to A.I. for analysis" node. The AI analyzes the data and provides insights and recommendations.
5.  Finally, the AI-generated analysis is stored in a Baserow database using the "Store results in Baserow" node, along with the current date and blog name.

## Services:

-   Matomo: Web analytics platform for tracking website visitor behavior.
-   OpenRouter: Provides access to various AI models, including LLaMA.
-   Baserow: No-code database for storing and managing the AI-generated reports.

## Hashtags:

#n8n #automation #analytics #SEO #AI
