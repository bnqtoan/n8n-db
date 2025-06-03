[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.mattermost.md "Edit this page")

# Mattermost node[#](#mattermost-node "Permanent link")

Use the Mattermost node to automate work in Mattermost, and integrate Mattermost with other applications. n8n has built-in support for a wide range of Mattermost features, including creating, deleting, and getting channels, and users, as well as posting messages, and adding reactions.

On this page, you'll find a list of operations the Mattermost node supports and links to more resources.

Credentials

Refer to [Mattermost credentials](../../credentials/mattermost/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Channel
    *   Add a user to a channel
    *   Create a new channel
    *   Soft delete a channel
    *   Get a page of members for a channel
    *   Restores a soft deleted channel
    *   Search for a channel
    *   Get statistics for a channel
*   Message
    *   Soft delete a post, by marking the post as deleted in the database
    *   Post a message into a channel
    *   Post an ephemeral message into a channel
*   Reaction
    *   Add a reaction to a post.
    *   Remove a reaction from a post
    *   Get all the reactions to one or more posts
*   User
    *   Create a new user
    *   Deactivates the user and revokes all its sessions by archiving its user object.
    *   Retrieve all users
    *   Get a user by email
    *   Get a user by ID
    *   Invite user to team

## Templates and examples[#](#templates-and-examples "Permanent link")

**Standup bot (4/4): Worker**

by Jonathan

[View template details](https://n8n.io/workflows/1475-standup-bot-44-worker/)

**Receive a Mattermost message when a user updates their profile on Facebook**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/785-receive-a-mattermost-message-when-a-user-updates-their-profile-on-facebook/)

**Send Instagram statistics to Mattermost**

by damien

[View template details](https://n8n.io/workflows/812-send-instagram-statistics-to-mattermost/)

[Browse Mattermost integration templates](https://n8n.io/integrations/mattermost/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Mattermost's documentation](https://api.mattermost.com/) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

## Channel ID field error[#](#channel-id-field-error "Permanent link")

If you're not the System Administrator, you might get an error: **there was a problem loading the parameter options from server: "Mattermost error response: You do not have the appropriate permissions.** next to the **Channel ID** field.

Ask your system administrator to grant you the `post:channel` permission.

## Find the channel ID[#](#find-the-channel-id "Permanent link")

To find the channel ID in Mattermost:

1.  Select the channel from the left sidebar.
2.  Select the channel name at the top.
3.  Select **View Info**.