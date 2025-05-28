# New Tweets Workflow

## Use cases:

- Automatically collect new tweets mentioning a specific keyword (e.g., a brand, product, or topic) and store them in an Airtable database for sentiment analysis or tracking.
- Monitor tweets related to a competitor and log them in Airtable to analyze their marketing strategies and customer engagement.
- Archive tweets based on a specific hashtag or search term for research purposes, creating a searchable database in Airtable.

## How it works:

1.  **Trigger:** The workflow starts manually when you click the "Execute" button.
2.  **Search Twitter:** The "Twitter" node searches for tweets containing the keyword "verstappen" (with `resultType` set to `mixed`, including both popular and recent tweets) and retrieves the 100 most recent results.
3.  **Get Existing Airtable Data:** The "get airtable list" node retrieves all records from a specific Airtable table (`tbl6rexxFBodzKVoC` in the `app36P08S3Jzki6qJ` application). This table likely contains a list of previously archived tweets.
4. **Set Airtable List data:** The “Set_AT_list” node transforms the data that was extracted from airtable in order to match the format of the data to be extracted from Twitter.
5.  **Set Twitter Data:** The "set twitter data" node extracts specific data points from each tweet found by the "Twitter" node. It creates a structured data object containing the tweet text, ID, URL, author, number of likes, and timestamp.
6.  **Filter New Tweets:** The "Leave only new tweets" node (a Merge node in "removeKeyMatches" mode) compares the Tweet IDs from the new tweets (from Twitter) with the Tweet IDs already stored in Airtable.  It removes any tweets that already exist in Airtable, leaving only the new tweets.
7.  **Append to Airtable:** The "Append new tweets to airtable" node adds the newly found tweets to the Airtable table (`tbl6rexxFBodzKVoC` in the `app36P08S3Jzki6qJ` application), effectively archiving them.

## Services:

*   Twitter API
*   Airtable

## Hashtags:

#n8n #automation #twitter #airtable #dataarchiving
