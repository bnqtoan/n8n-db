# Send the Astronomy Picture of the day daily to a Telegram channel

## Use cases:

*   **Daily Astronomy Updates:** Automatically send the Astronomy Picture of the Day (APOD) to a Telegram channel, keeping members engaged with beautiful space imagery and interesting facts.
*   **Educational Content Sharing:** Use this workflow to distribute educational content related to astronomy to students, enthusiasts, or the general public.
*   **Content Curation for Telegram Channels:** Streamline the process of posting visually appealing and informative content to a Telegram channel focused on science or astronomy.

## How it works:

This workflow automates the process of fetching the Astronomy Picture of the Day from NASA and sending it to a Telegram channel.

1.  **Cron Node:** Triggers the workflow daily at 8 PM based on the configured cron schedule.
2.  **NASA Node:** Retrieves the Astronomy Picture of the Day (APOD) from the NASA API. It's configured to not download the image directly, instead using the URL provided by the API.
3.  **Telegram Node:** Sends the APOD image to the specified Telegram channel. The image URL is extracted from the NASA node's output, and the image title is used as the caption for the Telegram message.

## Services:

*   NASA API
*   Telegram API

## Hashtags:

#n8n #automation #telegram #nasa #astronomy
