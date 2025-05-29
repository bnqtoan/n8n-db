# Monitor X

## Use cases:

1.  **Real-time Brand Monitoring:** Track mentions of your brand, products, or services on X to identify customer feedback, potential PR crises, or marketing opportunities.
2.  **Competitor Analysis:** Monitor competitor activity on X, such as product launches, marketing campaigns, or customer engagement strategies, to inform your own business decisions.
3.  **Lead Generation:** Identify potential leads on X by monitoring relevant keywords or hashtags and engaging with users who express interest in your products or services.

## How it works:

This workflow automates the process of monitoring X (formerly Twitter) search results for relevant posts based on specified categories.

1.  **Trigger:** The workflow is triggered by another n8n workflow, receiving input parameters such as an Airtop profile, an X search URL, and a list of relevant categories.
2.  **Input Setup:** Uses the input from the trigger workflow to set variables.
3.  **Session:** Starts a browser session using Airtop, authenticating with the provided Airtop profile.
4.  **Window Navigation:** Opens the specified X search URL in the Airtop browser window.
5.  **Extraction:** Extracts up to 10 non-sponsored posts from the search results, including the writer, time, text, and URL of each post. It uses a prompt for the Airtop node specifying that a valid post URL includes `/status/`.
6.  **Classification:** Classifies each extracted post based on the provided categories. If a post doesn't fall into any of the specified categories, it's labeled as `[NA]`.
7.  **Filtering:** Filters out posts that have been classified as `[NA]`, ensuring that only relevant posts are processed further.
8.  **End Session:** Terminates the Airtop session.
9.  **Output:** Returns a JSON array of posts, each including the writer, time, text, URL, and assigned category.

## Services:

*   **X (formerly Twitter):** The social media platform being monitored.
*   **Airtop:** A browser automation service used to interact with X, handle logins, and scrape data.

## Hashtags:

#n8n #automation #X #twitter #monitoring #webscraping
