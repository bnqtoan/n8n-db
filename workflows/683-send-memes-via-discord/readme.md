# cheems

## Use cases

*   **Recurring Meme Delivery:** Schedule and automatically post popular memes to a Discord channel on specific days (e.g., "Wednesday, my dudes" on Wednesdays).
*   **Automated TGIF Announcement:** Announce "Friday" with a relevant meme or message every Friday morning to boost team morale.
*   **Nightly Sleep Announcement:** Post a "Good night" message with an image to a Discord channel every night at a set time.

## How it works

This workflow consists of three independent automated tasks:

1.  **Wednesday Meme:** The first task uses a "Cron" node to trigger every Saturday at 9 AM. It then sends a pre-defined "Wednesday, my dudes!" meme to a specified Discord channel via the "Discord" node using a webhook URL.

2.  **Friday Announcement:** The second task similarly uses a "Cron" node, triggered every Friday at 9 AM. The subsequent "Discord" node posts a "It's Friday" message with a Rebecca Black GIF to the same Discord channel, also using the provided webhook URL.

3.  **Nightly Sleep Message:** The final task uses a "Cron" node set to trigger every 30 minutes and a "Discord" node to send a good night message to the channel.

## Services

*   Discord (via Webhooks)

## Hashtags

#n8n #Discord #Automation #Memes #Scheduler
