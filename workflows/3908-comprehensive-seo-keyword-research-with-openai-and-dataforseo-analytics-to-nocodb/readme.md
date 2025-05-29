# AI powered SEO Keyword Research Automation - The vibe Marketer

## Use cases:

*   **Streamline SEO Content Planning:** Automate the process of researching and identifying relevant keywords for content creation, saving time and resources for marketing teams.
*   **Improve Content Performance:** Generate comprehensive SEO keyword strategies and content briefs to optimize content for search engines, increasing organic traffic and visibility.
*   **Competitive Content Analysis:** Analyze competitor content to identify gaps and opportunities, enabling businesses to create more effective and targeted content.

## How it works:

1.  **Input:** The workflow starts by receiving data from NocoDB, including the primary topic, target audience, content type, location, language, and competitor URLs.
2.  **Notifications and Status Updates**: The workflow updates the record status to started, and sends a slack notification.
3.  **Topic Expansion:** The "Topic Expansion" node uses an AI Agent (powered by OpenAI) to generate a list of primary keywords, long-tail keywords with search intent, question-based keywords, and related topics based on the input parameters.
4.  **Split primary keywords:** The primary keywords are split to get the volume, cost per click and keyword difficulty.
5.  **Search Volume & CPC and Keyword Difficulty:** The workflow uses DataForSeo API nodes to retrieve search volume and cost-per-click (CPC) data and keyword difficulty scores for the generated primary keywords.
6.  **Competitor Analysis:**
    *   The "Format Json and add Competitor URLs" uses a Code node to prepare the competitor URLs.
    *   The workflow splits the competitor URLs so each can be processed individually.
    *   The "Keyword Ranking per URL" node, again using DataForSeo, retrieves ranked keywords for each of the defined Competitor URLs. This information is sent to the AI Agent in the next step.
    *   The "Competitor Analysis" node analyzes the competitor content (using OpenAI) to identify primary keywords they are targeting, content gaps, unique angles, and questions they are answering.
7.  **Aggregation:** The workflow aggregates data from DataForSeo, topic expansion and Competitor Analysis to use in the next steps.
8.  **Final Keyword Strategy:** The "Final Keyword Strategy" node synthesizes all the collected information (keyword ideas, metrics, competitor analysis) using an AI Agent (powered by OpenAI) to create a comprehensive SEO keyword strategy and content brief in Markdown format. The output includes:
    *   Executive Summary
    *   Target Keyword Strategy & Rationale
    *   Competitive Landscape & Content Gaps
    *   Content Outline & Actionable Recommendations
    *   Proposed SEO Titles
9.  **Output:** The final keyword strategy and content brief are then written to NocoDB, the status is updated to "Done", and a notification is sent to Slack, completing the workflow.

## Services:

*   NocoDB
*   OpenAI
*   DataForSeo
*   Slack

## Hashtags:

#n8n #SEO #KeywordResearch #Automation #ContentMarketing
