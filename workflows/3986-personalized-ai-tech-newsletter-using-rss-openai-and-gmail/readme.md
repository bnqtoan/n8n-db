# Personalized AI Tech Newsletter Using RSS, OpenAI and Gmail

## Use cases:

- Stay up-to-date on the latest tech news without having to browse multiple websites daily.
- Receive a personalized weekly digest of tech articles tailored to your specific interests.
- Automate the process of curating and sending out a tech newsletter to a group of colleagues or friends.

## How it works:

This workflow automates the process of collecting, summarizing, and sending a personalized tech newsletter. Here's a breakdown:

1.  **Daily RSS Feed Collection:** The "Get Articles Daily" node triggers the workflow daily, initiating the collection of tech news from various RSS feeds (defined in "Set Tech News RSS Feeds").
2.  **RSS Feed Processing:** The "Split Out," "Read RSS News Feeds," and "Set and Normalize Fields" nodes work together to read the RSS feeds, extract the relevant information (title, content, date, link), and normalize the data.
3.  **Embeddings and Storage:** Articles are converted into embeddings using OpenAI ("Embeddings OpenAI") to enable semantic searches.  These embeddings, along with the article data, are stored in an in-memory vector store ("Store News Articles"). A text splitter prepares the data to be store.
4.  **Weekly Newsletter Generation:**  The "Send Weekly Summary" node triggers the second part of the workflow weekly.
5.  **AI-Powered Summarization:** Based on your specified interests and the desired number of news items ("Your topics of interest"), the "News reader AI" node (an AI Agent) queries the vector store ("Get News Articles"), retrieves relevant articles, and generates a concise summary using OpenAI.
6.  **Email Formatting and Sending:** The "Convert Response to an Email-Friendly Format" node converts the AI-generated summary into HTML format. Finally, the "Send Newsletter" node sends the formatted summary to your email address using Gmail.

## Services:

-   **RSS Feeds:**  Engadget, Ars Technica, The Verge, Wired, Technology Review, TechCrunch (or any other RSS feed you configure)
-   **OpenAI:** Used for creating embeddings and generating summaries.
-   **Gmail:** Used for sending the weekly newsletter.

## Hashtags:

#n8n #automation #newsletter #AI #tech
