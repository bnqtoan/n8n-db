[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.twist.md "Edit this page")

# Twist node[#](#twist-node "Permanent link")

Use the Twist node to automate work in Twist, and integrate Twist with other applications. n8n has built-in support for a wide range of Twist features, including creating conversations in a channel, as well as creating and deleting comments on a thread.

On this page, you'll find a list of operations the Twist node supports and links to more resources.

Credentials

Refer to [Twist credentials](../../credentials/twist/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Channel
    *   Archive a channel
    *   Initiates a public or private channel-based conversation
    *   Delete a channel
    *   Get information about a channel
    *   Get all channels
    *   Unarchive a channel
    *   Update a channel
*   Comment
    *   Create a new comment to a thread
    *   Delete a comment
    *   Get information about a comment
    *   Get all comments
    *   Update a comment
*   Message Conversation
    *   Create a message in a conversation
    *   Delete a message in a conversation
    *   Get a message in a conversation
    *   Get all messages in a conversation
    *   Update a message in a conversation
*   Thread
    *   Create a new thread in a channel
    *   Delete a thread
    *   Get information about a thread
    *   Get all threads
    *   Update a thread

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Twist integration templates](https://n8n.io/integrations/twist/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

## Get the User ID[#](#get-the-user-id "Permanent link")

To get the User ID for a user:

1.  Open the **Team** tab.
2.  Select a user's avatar.
3.  Copy the string of characters located after `/u/` in your Twist URL. This string is the User ID. For example, if the URL is `https://twist.com/a/4qw45/people/u/475370` the User ID is `475370`.