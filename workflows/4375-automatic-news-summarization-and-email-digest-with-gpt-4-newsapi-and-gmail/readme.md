# AI News Digest Agent: Auto News Summarizer & Emailer

## Use cases:

- **Automated Newsletter Creation:** Automatically fetch top news headlines, generate AI-powered summaries, and send personalized digests to a subscriber list.
- **Team and Organizational Updates:** Keep teams informed with regular, summarized news updates relevant to their industry or interests.
- **Content Curation:** Transform raw news data into digestible insights for blogs, social media, or internal reports.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a schedule trigger that runs every 10 minutes.
2.  **Pull News:** The `HTTP Request` node fetches the latest top headlines from the News API for the US.
3.  **AI Agent:** The  `AI Agent` node uses the text from the news articles to generate a concise, 5-bullet summary using the `OpenAI Chat Model`.
4.  **Email list:** The `Google Sheets` node retrieves a list of subscribers' names and email addresses from a specified Google Sheet.
5.  **Send Mail:** The `Gmail` node sends personalized emails to each subscriber, including their name and the generated news summary.

## Services:

-   **News API:** Used to fetch the latest news headlines.
-   **OpenAI:** Used for generating the news summaries.
-   **Google Sheets:** Used to store and retrieve the list of email subscribers.
-   **Gmail:** Used to send out the personalized news digest emails.

## Hashtags:

#n8n #automation #news #AI #emailmarketing
