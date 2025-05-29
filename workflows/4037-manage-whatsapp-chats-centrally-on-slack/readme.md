# My Workflow

## Use cases:

- **Cross-platform Communication:** Forward WhatsApp messages to a dedicated Slack channel for team collaboration and archiving, and vice versa.
- **Centralized Support System:** Route customer inquiries from WhatsApp to Slack, allowing support teams to manage conversations efficiently in a familiar environment and back to WhatsApp.
- **Notification Aggregation:** Receive important alerts or updates via WhatsApp and have them automatically posted to a relevant Slack channel for increased visibility.

## How it works:

This workflow facilitates bidirectional communication between WhatsApp and Slack. It consists of two main flows:

**WhatsApp to Slack:**

1.  **WhatsApp Trigger:** Listens for new messages on WhatsApp.
2.  **Slack Channel Management**: Checks if a private Slack channel exists for the WhatsApp contact using the phone number. If not, creates a new private channel.
3.  **Message Type Routing:** Determines if the message is text, audio, image, or document.
4.  **Media Processing:** If media, it retrieves the media URL from WhatsApp, downloads the media and uploads it to the corresponding Slack channel.
5.  **Text Handling:** If text, sends the message directly to the Slack channel.

**Slack to WhatsApp:**

1.  **Slack Trigger:** Listens for new messages in Slack.
2.  **Get Channel by ID:** Retrieves details of the channel where the message was sent.
3.  **Checking Message Type:** Determines if the message contains media (files) or is just text.
4.  **Media Handling:** If media is attached, gets the media URL, downloads the media, and sends it to WhatsApp.
5.  **Text Handling:** Extracts the text content from the Slack message and sends it to WhatsApp.

## Services:

-   WhatsApp API
-   Slack API

## Hashtags:

#n8n #WhatsApp #Slack #Automation #CrossPlatform
