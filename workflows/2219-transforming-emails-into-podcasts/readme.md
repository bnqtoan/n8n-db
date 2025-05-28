# Gmail to Telegram Audio Newsletter

## Use cases:

- **Automated Promotion Digests:** Converts promotional emails from Gmail into audio newsletters delivered to a Telegram channel, allowing users to consume content hands-free.
- **Accessibility Enhancement:** Provides an alternative way to access email content for users who prefer listening over reading or have visual impairments.
- **Content Repurposing:** Transforms written content into audio format for wider distribution and engagement.

## How it works:

This n8n workflow automates the process of converting Gmail promotional emails into audio messages and sending them to a Telegram channel.

1.  **Gmail Trigger:** The workflow starts with a "Gmail Trigger" node that monitors a specified Gmail inbox (specifically the "CATEGORY_PROMOTIONS" label) for new emails every minute.
2.  **Get Message Content:** When a new email is detected, the "Get message content1" node retrieves the email's content.
3.  **Delete the unnecessary items:** Deletes unnecessary email headers
4.  **Summarization Chain3:** Uses an OpenAI model to summarize the email content into a concise newsletter-style text under 247 characters, including emojis.
5.  **Text to TTS:** Converts the summarized text into speech using a free Text-to-Speech API.
6.  **Convert from base64 to File:** Converts the audio data from base64 to a binary file.
7.  **Merge Text with Audio:** Merges the summarized text and audio.
8.  **Aggregate in same cell:** Aggregates data.
9.  **Send Message to Telegram:** Finally, the "Send Message to Telegram" node sends the audio file along with a caption (the summarized text) to a specified Telegram channel.

## Services:

*   Gmail
*   OpenAI
*   Telegram
*   TikTok Text-to-Speech API (tiktok-tts.weilnet.workers.dev)

## Hashtags:

#n8n #automation #gmail #telegram #audio #newsletter
