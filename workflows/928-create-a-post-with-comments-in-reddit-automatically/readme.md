# Reddit Workflow

## Use cases:

*   **Automated Reddit Posting:** Automatically create Reddit posts on a specified subreddit, ideal for content creators or businesses looking to schedule and automate their social media presence.
*   **Reddit Post Interaction:** Fetch post details, then automatically add a comment to a post based on specific triggers, useful for community engagement or promotional activities.
*   **Dynamic Content Publication:** Use data from other services or APIs to dynamically generate Reddit posts or comments, allowing for personalized or data-driven content strategies.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which initiates the workflow when you click 'Execute'.
2.  The "Reddit" node creates a new post on the subreddit specified in its parameters ("n8n" in this case). It uses the provided title and text for the post.
3.  The "Reddit1" node then retrieves the newly created post's information (specifically, the post ID) using the `get` operation.
4.  The "Reddit2" node adds a comment to the retrieved post using the post ID obtained from the previous step. The comment text is predefined.

## Services:

*   Reddit API

## Hashtags:

#n8n #Reddit #Automation #SocialMedia #Workflow
