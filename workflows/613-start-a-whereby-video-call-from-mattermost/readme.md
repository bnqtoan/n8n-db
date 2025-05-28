# My Workflow

## Use Cases

- **Automated Meeting Invitations:** When a user triggers a webhook, automatically generate and send a meeting link to a Mattermost channel.
- **Quick Ad-hoc Video Calls:** Enable team members to initiate impromptu video calls directly from Mattermost using a simple command or trigger.

## How it works

1.  **Webhook:** Listens for incoming POST requests at a specific path (`/822cce61-ff5f-4cea-b8ba-1822651786e3`). Assumes the webhook payload contains `channel_id` and `user_name` within the `body`.
2.  **Set:** Sets a new data structure that only contains the value `n8n-rocks` with the field name `amudhan`. This is likely a placeholder or incomplete step.
3.  **Mattermost:** Sends a message to a specified Mattermost channel using the credentials defined in `mm_creds`. The channel ID is dynamically extracted from the `channel_id` provided in the webhook payload. The message includes a text "Join me in a video call:" and an attachment containing a dynamically generated Whereby meeting link based on the `user_name` from the webhook payload.

## Services

-   Mattermost
-   Whereby (implicitly, based on the URL structure)

## Hashtags

#n8n #automation #mattermost #videocall #webhook
