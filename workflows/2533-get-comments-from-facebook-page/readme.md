# Get Comments from Facebook Page

## Use cases

1.  **Social Media Monitoring:** Track comments on a Facebook page to understand audience engagement, identify trending topics, and monitor brand sentiment.
2.  **Customer Feedback Analysis:** Collect and analyze customer feedback from Facebook comments to improve products, services, or customer support.
3.  **Content Performance Analysis:** Identify which posts generate the most engagement through comments, helping to refine content strategy.

## How it works

This workflow retrieves comments from a specified Facebook page.

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Set Parameters:** Sets the Facebook Page ID and the number of latest posts to fetch using the "Set PageID & Number of Latest Posts" node.
3.  **Fetch Posts:** Retrieves posts from the specified Facebook page using the "Facebook Graph API : Get Post from Page" node.
4.  **Split Posts:** Splits the array of posts into individual items using the "Split Out Posts" node.
5.  **Fetch Comments for Each Post:** For each post, retrieves comments using the "Facebook : Get Each Post Comments" node. Handles errors by continuing to the next post if fetching comments fails.
6.  **Reverse Item to Match another Branch:** Reverse the comment items to match the corresponding post, ensure proper merging later using "Reverse Item to Match another Branch" Node
7.  **Merge Posts and Comments:** Combines each post with its comments using the "Merge Post & Comments" node.
8.  **Filter Null Comments:** Filters out any posts where there are no comments using the "Filter Out Null Comments" node.
9.  **Split Out Comments:** Splits the array of comments for each post into individual comment items using the "Split Out Comments" node.
10. **Select Result Field:** Select the desired fields from the post and comment data, creating a structured output with fields like Post ID, Post Created Time, Post Message, Comment ID, Comment Created Time, Comment Message, and Comment Author using the "Select Result Field" node.

## Services

*   **Facebook Graph API:** Used to retrieve posts and comments from Facebook pages.

## Hashtags

#n8n #Facebook #Automation #SocialMedia #Comments
