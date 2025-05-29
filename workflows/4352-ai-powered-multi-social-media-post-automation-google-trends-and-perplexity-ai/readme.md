# Social Media Post Automation from Google Trends and Perplexity

## Use cases:

- **Automated Content Creation:** Automatically generate social media posts based on trending Google search topics, saving time and effort in content creation.
- **Consistent Social Media Presence:** Schedule and post regular updates to social media platforms, maintaining an active presence and engaging your audience.
- **SEO Optimization:** Leverage trending topics to create content that is more likely to be discovered through search engines, driving traffic to your website or social media profiles.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger node that defines the intervals (6 AM and 6 PM) at which the workflow will run.
2.  **Google Trends:** Retrieves trending search queries from Google Trends using the SerpAPI. It uses the `ai agents` query, the US region, and the English language, filtering for the past 3 days.
3.  **2 Most Trending:** Extracts the top 2 trending queries from the Google Trends data, along with their score (extracted value)
4.  **High search volume keywords:** Filters high search volume keywords
5.  **Choosing Topic:** Uses the OpenAI node to pick the trending topic from the top 2 most trending searches from Google Trends to base a blog post on.
6.  **Research Topic - Perplexity:** Leverages the Perplexity API to generate content ideas based on the chosen topic. The AI is instructed to act as an editor, revising AI-generated text to sound authentically human, and crafting a LinkedIn post with a hook, body, bullet points, and a clear call to action.
7.  **Wait:** A wait node is used to pause the execution for 10 seconds before posting.
8.  **Split Out:** Splits the AI-generated content in order to facilitate posting to multiple platforms.
9.  **X1, Facebook Graph API1, LinkedIn1:** These nodes post the generated content to X (Twitter), Facebook, and LinkedIn, respectively. Note that the LinkedIn node has configurations that need to be updated.
10. **Google Sheets2:** Updates a Google Sheet with the topic, status, AI output, and date posted for tracking purposes.

## Services:

-   **Google Trends API (via SerpAPI):** Used to retrieve trending search queries.
-   **Perplexity API:** Used to generate social media post content.
-   **OpenAI API:** Used to choose blog topics.
-   **X (Twitter) API:** Used to post updates.
-   **Facebook Graph API:** Used to post updates.
-   **LinkedIn API:** Used to post updates.
-   **Google Sheets API:** Used to update a spreadsheet.

## Hashtags:

#n8n #automation #socialmedia #contentcreation #googletrends
