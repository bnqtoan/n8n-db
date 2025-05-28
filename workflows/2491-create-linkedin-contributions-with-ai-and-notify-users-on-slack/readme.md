# Become A LinkedIn Top Voice with AI

## Use cases:

- **Content Creation for LinkedIn:** Generate unique and engaging contributions to LinkedIn advice articles, enhancing your professional profile and establishing thought leadership.
- **Automated Engagement:** Regularly contribute valuable insights to LinkedIn discussions without manual effort, saving time and ensuring consistent engagement.
- **Lead Generation Through Content:** By providing thoughtful advice, attract attention and potential leads from your target audience on LinkedIn.

## How it works:

1.  **Trigger:** The workflow starts either manually (When clicking ‘Test workflow’) or automatically every Monday at 8:00 AM (Schedule Trigger).
2.  **Set Topic:** A specific topic is set for the Google search to focus on relevant LinkedIn advice articles (Set Topic for Google search). In this case "Paid Advertising".
3.  **Google Search:** Uses an HTTP Request node to search Google for LinkedIn advice articles related to the defined topic using the `site:linkedin.com/advice` search operator (Get advice articles from a Google search).
4.  **Extract Article Links:** The workflow extracts all LinkedIn advice article links from the Google search results using a Code node and regular expressions (Extract Article links for LinkedIn advice articles).
5.  **Split Links:** The extracted links are split into individual items, allowing the workflow to process each article separately (Split Out all links for LinkedIn advice articles).
6.  **Get Existing Contributions:** Retrieves existing LinkedIn contributions from a NocoDB database (Get all LinkedIn contributions from database NocoDB (GetRows)).
7.  **Merge Unique Links:** Merges the extracted article links with existing data, ensuring only unique URLs are processed (Merge data and keep unique google search results).
8.  **Fetch Article Content:** Sends an HTTP request to retrieve the HTML content of each unique LinkedIn article (HTTP Request to get LinkedIn advice articles).
9.  **Extract Article Details:** Extracts the article title, topics, and other user contributions from the HTML content using CSS selectors (HTML extract LinkedIn article & other users contributions).
10. **Generate AI Advice:** Uses an OpenAI node to generate unique, helpful advice for each topic within the article based on the extracted content. The prompt guides the AI to provide original insights (LinkedIn Contribution Writer).
11. **Post to Slack:** Posts the AI-generated contribution, along with the article link and title, to a specified Slack channel for team visibility and record-keeping (Post new LinkedIn contributions to Slack channel).
12. **Store in NocoDB:** Stores the AI-generated contribution, article title, and link in a NocoDB database for future reference and tracking (Post new LinkedIn contributions to NocoDB (CreateRows)).

## Services:

-   Google (via HTTP Request)
-   LinkedIn (via scraping)
-   OpenAI
-   Slack
-   NocoDB (can be replaced with Airtable or Google Sheets)

## Hashtags:

#n8n #automation #linkedin #ai #contentcreation
