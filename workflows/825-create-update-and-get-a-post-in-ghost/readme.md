# Create, update, and get a post in Ghost

## Use cases:

- **Automated Content Publishing:** Automatically create a draft post in Ghost, then update it to publish status.
- **Content Synchronization:** Trigger the creation of a post in Ghost based on an event in another system (e.g., a new product launch), then fetch the created post details for further processing.
- **Scheduled Content Updates:** Create a new draft post and update its status to published on a specific date and time.

## How it works:

This workflow automates the process of creating, updating, and retrieving a post in Ghost.

1.  **On clicking 'execute'**: This node triggers the workflow manually.
2.  **Ghost (Create Post)**: Creates a new draft post in Ghost with a predefined title and content using the Ghost Admin API. The "source" parameter is set to adminApi, the "operation" parameter is set to create, the "title" parameter is set to "Running ghost with n8n!" and the content parameter is set to "<p>In this article, you will learn how to automate your Ghost site with n8n!</p>".
3.  **Ghost1 (Update Post)**: Updates the post created in the previous step. It uses the ID of the newly created post (obtained from the "Ghost" node) to identify the post. Sets the post's status to "published". The "source" parameter is set to adminApi, the "operation" parameter is set to update, the "postId" parameter is an expression which gets the ID from the previous node and the "updateFields.status" parameter is set to published.
4.  **Ghost2 (Get Post)**: Retrieves the details of the updated post using its ID. The "source" parameter is set to adminApi, the "operation" parameter is set to get, the "by" parameter is set to id and the "identifier" parameter is an expression which gets the ID from the Ghost node.

## Services:

-   Ghost (Ghost Admin API)

## Hashtags:

#n8n #Ghost #Automation #ContentManagement #BlogPost
