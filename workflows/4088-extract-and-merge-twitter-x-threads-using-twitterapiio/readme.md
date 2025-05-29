# Twitter Thread Fetcher: Extract and Merge Tweets from Threads

## Use cases:
- **Content Aggregation:** Automatically collect all tweets within a Twitter thread for archival or analysis purposes.
- **Brand Monitoring:** Track conversations related to a specific tweet or hashtag to monitor brand sentiment and engagement.
- **Research and Analysis:** Gather tweets from a thread to study discussions, opinions, or trends related to a particular topic.

## How it works:

This workflow extracts tweets from a Twitter thread and merges them into a single output.

1.  **Trigger:** The workflow is initiated either manually ("When clicking ‘Test workflow’") or by another workflow ("When Executed by Another Workflow").
2.  **Extract Tweet ID and Username:** Extracts the initial Tweet ID and username from the input.
3.  **Get first tweet:** Retrieves the first tweet in the thread using the Tweet ID.
4.  **Extract Conversation and Author ID:** Extracts the conversation and author ID from the first tweet.
5.  **Merge all tweet infos:** Merges the information from the first tweet with data gathered from replies.
6.  **Get Tweet Replies:** Retrieves replies to the first tweet (conversation).
7.  **Fetch tweets which are connected to first tweet:** Processes replies to find subsequent tweets in the thread.
8.  **Merge first tweet and others:** Combines the first tweet with all fetched replies.
9.  **Filter empty ones:** Removes any empty or irrelevant entries.
10. **No Operation, do nothing:** A placeholder to end the workflow.

## Services:

*   **Twitter API:** Used via the HTTP Request node to retrieve tweet data.

## Hashtags:

#n8n #automation #twitter #thread #dataextraction
