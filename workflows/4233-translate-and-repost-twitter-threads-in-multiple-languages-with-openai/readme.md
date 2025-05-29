# Twitter Thread (Flood) Translator & Poster

## Use cases:

- **Translate and post Twitter threads in different languages:** Automatically translate a long Twitter thread into another language (e.g., from English to Spanish) and post it as a new thread.
- **Repost someone else twitter thread:** Repost a fully twitter thread in your name.

## How it works:

1.  **Trigger:** The workflow is initiated either manually ("When clicking ‘Test workflow’") or by another workflow ("When Executed by Another Workflow").
2.  **Get Tweet Info:** If initiated by another workflow, extracts the Tweet ID and username of a given tweet.
3.  **Get the Flood:** The workflows is based on tweets and replies to it to extract the full thread.
4.  **Translation (optional):** Uses the OpenAI Language Model to translate each tweet in the thread to a desired language.
5.  **Rewriting (optional):** Uses the OpenAI Language Model to re-write each tweet.
6.  **Login Twitter:** Connects to Twitter API to post the tweet. This is done by saving a session ID and cookie to notion. In case the session is invalid, the workflow starts a 2FA procedure to gain access to the account.
7.  **Posting the tweet:** The workflow loops the translation, rewriting and connection to twitter for each tweet.

## Services:

-   n8n
-   Twitter API
-   OpenAI API
-   Notion API

## Hashtags:

#n8n #automation #twitter #thread #translator
