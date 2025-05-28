# #️⃣Nostr #damus AI Powered Reporting + Gmail + Telegram

## Use cases:

1.  **Social Media Monitoring and Reporting:** Automatically monitor the Nostr social network for mentions of "#damus", analyze the themes and sentiments, and generate reports sent via email and Telegram.
2.  **Community Engagement Analysis:** Understand the key topics and discussions happening within the Damus community on Nostr, identify trends, and gain insights into user behavior to improve community engagement strategies.
3.  **Competitor Analysis:** Track discussions around Damus (a Nostr client) to understand user sentiment, feature requests, and overall perception compared to other Nostr clients.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via "When clicking 'Test workflow'" or automatically via "Schedule Trigger".
2.  **Nostr Data Collection:** The "Nostr Read #damus" node fetches recent posts from the Nostr network that include the hashtag "#damus".  It utilizes the `n8n-nodes-nostrobots` community node.
3.  **Content Aggregation:** The "Aggregate #damus Content" node collects data fields from the Nostr reads.
4.  **AI-Powered Theme Extraction:** The "@n8n/n8n-nodes-langchain.chainLlm" nodes, combined with Google Gemini, analyze the aggregated Nostr threads to identify prevalent themes and common threads associated with the #damus hashtag.
5.  **Report Generation:** The "@n8n/n8n-nodes-langchain.chainLlm" node utilizes Google Gemini to create a detailed report summarizing the key themes, user sentiments, and insights derived from the #damus threads.
6.  **HTML Conversion:** The "Get HTML" and "Get HTML Report" nodes convert the AI-generated markdown reports into HTML format for improved readability in emails and Telegram messages.
7.  **Notifications:** The workflow sends two notifications:
    *   A summary of the Nostr themes, and highlights of the most common threads to Telegram and Gmail.
    *   Detailed report summarizing themes in the Nostr messages to Gmail and Telegram.

## Services:

*   **Nostr:** A decentralized social network protocol.
*   **Damus:** A Nostr client, specifically for iOS, iPad and macOS.
*   **Google Gemini (PaLM) API:** Used for AI-powered text analysis and report generation.
*   **Gmail:** Used for sending email reports.
*   **Telegram:** Used for sending instant message notifications.

## Hashtags:

#n8n #automation #nostr #damus #socialmediaanalysis
