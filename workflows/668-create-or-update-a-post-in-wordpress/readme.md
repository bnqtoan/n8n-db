# Create a post and update the post in WordPress

## Use cases:

*   **Automated Content Publishing:** Automatically create draft posts in WordPress with a basic title and then update them with content from other sources.
*   **Scheduled Content Updates:** Create a skeleton post in advance and then use a scheduled trigger to update the content at a later time.
*   **Dynamic Content Integration:** Integrate content from external APIs or databases into WordPress posts, creating and updating posts with the latest information.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "execute" button in n8n.
2.  **Create WordPress Post:** The `Wordpress` node creates a new post in your WordPress site. The title is set to "created from n8n".
3.  **Update WordPress Post:** The `Wordpress1` node updates the post created in the previous step.  It retrieves the post ID from the newly created post and adds content: "This post was created using the n8n workflow."

## Services:

*   WordPress

## Hashtags:

#n8n #WordPress #Automation #ContentManagement #BlogPost
