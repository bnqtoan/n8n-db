# Create a screenshot of a website and send it to a telegram channel

## Use cases:

*   **Website Monitoring:** Automatically capture screenshots of a website at regular intervals to monitor changes or uptime.
*   **Content Archival:** Create visual records of website content for archival purposes, especially for websites that frequently update.
*   **Sharing website previews:** Send automatic previews of a website via Telegram.

## How it works:

1.  The workflow is manually triggered by the "On clicking 'execute'" node.
2.  The "uProc" node takes a screenshot of the specified website (`https://n8n.io`) using the uProc API. It captures a full-page screenshot with a width of 1024 pixels.
3.  The "Telegram" node then sends the screenshot to a Telegram channel. The file is referenced from the message of the `uProc` node.

## Services:

*   Telegram
*   uProc API

## Hashtags:

#n8n #automation #screenshot #telegram #website
