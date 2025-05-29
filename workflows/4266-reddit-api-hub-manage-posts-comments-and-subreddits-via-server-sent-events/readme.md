# MCP_reddit

## Use cases:

- **Content Moderation:** Automate tasks such as deleting inappropriate comments or posts based on predefined criteria.
- **Reddit Data Extraction:** Retrieve information about subreddits, posts, or comments for analysis or reporting purposes.
- **Automated Posting:** Automatically create posts or comments on Reddit based on specific triggers or data inputs, such as news articles.

## How it works:

1.  The workflow starts when it is triggered by another workflow, receiving a JSON payload defining the operation to perform. The `When Executed by Another Workflow` node receives this payload.
2.  The `operation_switch` node determines which operation to execute based on the `operation` parameter in the input JSON. Operations include post-related, comment-related, and subreddit-related actions.
3.  Based on the identified operation type, the workflow routes the data to the corresponding switch node (`post_switch`, `comment_switch`, `subreddit_switch`).
4.  Each switch node further refines the operation and triggers the specific Reddit node to execute the desired action:

    *   **Post Operations:** Create, retrieve (single/multiple), delete, or search posts.
    *   **Comment Operations:** Create, retrieve (multiple), delete, or reply to comments.
    *   **Subreddit Operations:** Get information about a subreddit or its rules.

5. For `get_many` post and comment operations the workflow maps the returned data to a desired output structure and splits each element on differents items, the main propeties of these are:
    *   **Post**:
        *   subreddit
        *   selftext
        *   author_fullname
        *   title
        *   total_awards_received
        *   link_flair_text
        *   score
        *   thumbnail
        *   created
        *   num_comments
        *   permalink
    *   **Comment**:
        *   subreddit
        *   author
        *   author_is_blocked
        *   body
        *   score
        *   total_awards_received
        *   created
        *   permalink
        *   replies
    

## Services:

-   Reddit API

## Hashtags:

#n8n #automation #reddit #workflow #contentmoderation
