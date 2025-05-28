# Create Threads on Bluesky

## Use cases:

- **Automated Content Series:** Schedule and automatically publish a series of related posts (a thread) on Bluesky at a specific time each day. This could be used for daily tips, facts, or story snippets.
- **Engagement Campaigns:** Automatically create engaging threads based on user interactions or events, driving conversation and increasing visibility on the Bluesky platform.
- **Scheduled Announcements:** Structure and schedule announcements as a thread on Bluesky, ensuring that related information is presented in a coherent and timely manner.

## How it works:

This workflow automates the process of creating a thread on Bluesky. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow starts daily at 9 AM, as set by the "Run Daily at 9 AM" node.
2.  **Authentication Setup:** The "Set Bluesky Credentials" node stores your Bluesky handle and app password, which are required to authenticate with the Bluesky API.
3.  **Create Bluesky Session:** Authenticates with the Bluesky API using the provided credentials to obtain an access token.
4.  **Initial Post Creation:** The "Create Post Text" node defines the content of the initial post and creates the initial post via the Bluesky API
5.  **First Reply Post:** The "Create Reply Text" node will create the first reply, using the URI and CID from the initial post.
6. **Sibling Post Creation:** The "Create Sibling Text" node will create the first sibling to the first reply.
7.  **Loop for Sibling Posts:** The "Create Sibling Array" creates an array of content for additional sibling posts. The "Loop Posts" node then iterates over this array.
8.  **Create Sibling Post (Loop):** Within the loop, the "Create Sibling Text (Loop)" node dynamically creates the text for each sibling post, referencing the initial post as the root and the previous post as the parent. After the first sibling post, the parent will be the post created inside the loop.
9.  **Create Post:** Posts the sibling post to Bluesky via the Bluesky API.
10. **Wait:** A "Wait" node introduces a delay to help avoid rate limits.
11. **Loop continues:** Control returns to the "Loop Posts" to continue the process until every item has been processed.

## Services:

-   Bluesky API

## Hashtags:

#n8n #automation #bluesky #socialmedia #threads
