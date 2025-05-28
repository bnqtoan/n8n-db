# Automated X (Twitter) Content Generation and Posting

## Use cases:

- **Consistent Content Creation:** Automatically generate and schedule tweets on a specific niche to maintain a consistent online presence.
- **Content Repurposing:** Automatically generate tweets to promote content that you have create (blog posts, videos, podcasts, etc.)
- **Hands-off Content Calendar:** Create a content calendar where n8n will automatically generate a tweet, validate that it meets requirements, and then post it to X.

## How it works:

This workflow automates the generation and posting of tweets to X (formerly Twitter). It can be triggered manually or scheduled to run at regular intervals. The workflow operates as follows:

1.  **Trigger:** The workflow is triggered either by a schedule (every 6 hours with randomized minutes) or manually.
2.  **Influencer Profile Configuration:** Sets the niche, writing style, and inspiration sources for the tweet generation. This is configured using a "Set" node.
3.  **Tweet Generation:** Generates a tweet based on the configured influencer profile using the OpenAI node. It leverages the GPT-4-turbo-preview model.
4.  **Tweet Validation:** Checks if the generated tweet's length is within the X limit (280 characters). If it exceeds the limit, it loops back to the "Configure your influencer profile" node to generate a new tweet.
5.  **Post Tweet:** If the tweet passes the length validation, it is posted to X using the Twitter node.

## Services:

-   **X (formerly Twitter):** Used for posting the generated tweets.
-   **OpenAI:** Used for generating tweet content using the GPT-4-turbo-preview model.

## Hashtags:

#n8n #automation #twitter #OpenAI #contentcreation
