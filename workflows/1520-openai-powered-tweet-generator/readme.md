# Tweet Generator with OpenAI and Airtable

## Use cases:

*   **Automated Tweet Creation:** Generate tweet ideas with specific hashtags for social media marketing campaigns.
*   **Content Inspiration:** Quickly get a starting point for tweets, which can then be refined and customized.
*   **Populating a Content Calendar:** Automatically create a backlog of tweet drafts for future scheduling.

## How it works:

1.  The workflow starts with a **Manual Trigger** node, which is activated when you click "Execute".
2.  A **FunctionItem** node randomly selects a hashtag from a predefined list ("#techtwitter", "#n8n") and adds it to the item.
3.  The **HTTP Request** node sends a request to the OpenAI API (text-davinci-001 engine) to generate a tweet using the selected hashtag. The prompt instructs the API to create a short tweet (under 100 characters) including the hashtag.
4.  The **Set** node extracts the generated tweet content and the selected hashtag from the previous nodes and stores them in a structured format.
5.  Finally, the **Airtable** node appends the generated tweet and hashtag to a specified table in Airtable.

## Services:

*   OpenAI API (text-davinci-001)
*   Airtable

## Hashtags:

#n8n #automation #openai #twitter #airtable
