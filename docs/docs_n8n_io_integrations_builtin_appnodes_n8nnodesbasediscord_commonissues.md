[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.discord/common-issues.md "Edit this page")

# Discord node common issues[#](#discord-node-common-issues "Permanent link")

Here are some common errors and issues with the [Discord node](../) and steps to resolve or troubleshoot them.

## Add extra fields to embeds[#](#add-extra-fields-to-embeds "Permanent link")

Discord messages can optionally include embeds, a rich preview component that can include a title, description, image, link, and more.

The Discord node supports embeds when using the **Send** operation on the **Message** resource. Select **Add Embeds** to set extra fields including Description, Author, Title, URL, and URL Image.

To add fields that aren't included by default, set **Input Method** to **Raw JSON**. From here, add a JSON object to the **Value** parameter defining the [field names](https://discord.com/developers/docs/resources/message#embed-object) and values you want to include.

For example, to include `footer` and `fields`, neither of which are available using the **Enter Fields** Input Method, you could use a JSON object like this:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14

`{     "author": "My Name", 	"url": "https://discord.js.org", 	"fields": [ 		{ 			"name": "Regular field title", 			"value": "Some value here" 		} 	], 	"footer": { 		"text": "Some footer text here", 		"icon_url": "https://i.imgur.com/AfFp7pu.png" 	} }`

You can learn more about embeds in [Using Webhooks and Embeds | Discord](https://discord.com/safety/using-webhooks-and-embeds).

If you experience issues when working with embeds with the Discord node, you can use the [HTTP Request](../../../core-nodes/n8n-nodes-base.httprequest/) with your existing Discord credentials to `POST` to the following URL:

1

`https://discord.com/api/v10/channels/<CHANNEL_ID>/messages`

In the body, include your embed information in the message content like this:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19

`{ 	"content": "Test", 	"embeds": [ 		{ 			"author": "My Name", 			"url": "https://discord.js.org", 			"fields": [ 				{ 					"name": "Regular field title", 					"value": "Some value here" 				} 			], 			"footer": { 				"text": "Some footer text here", 				"icon_url": "https://i.imgur.com/AfFp7pu.png" 			} 		} 	] }`

## Mention users and channels[#](#mention-users-and-channels "Permanent link")

To mention users and channels in Discord messages, you need to format your message according to [Discord's message formatting guidelines](https://discord.com/developers/docs/reference#message-formatting).

To mention a user, you need to know the Discord user's user ID. Keep in mind that the user ID is different from the user's display name. Similarly, you need a channel ID to link to a specific channel.

You can learn how to enable developer mode and copy the user or channel IDs in [Discord's documentation on finding User/Server/Message IDs](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).

Once you have the user or channel ID, you can format your message with the following syntax:

*   **User**: `<@USER_ID>`
*   **Channel**: `<#CHANNEL_ID>`
*   **Role**: `<@&ROLE_ID>`