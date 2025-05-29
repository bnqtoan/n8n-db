# n8n Template Newsletter Builder

## Use cases:

-   **Daily n8n Template Digest:** Automatically sends a daily email to subscribers with a summary of new n8n templates in their chosen categories.
-   **Category-Specific Template Alerts:** Users receive tailored notifications whenever new templates are added to specific categories they are interested in.
-   **Streamline n8n template discovery:** Provides a method for n8n users to keep up with the official n8n template gallery.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a schedule trigger, running daily at 6 AM.
2.  **Get Subscribers from Excel:** It retrieves a list of subscribers (name, email, and comma-separated categories) from a Microsoft Excel sheet.
3.  **Fetch Latest Templates:** It determines unique categories among all subscribers and fetches the latest n8n templates from these categories using the n8n.io API.
4.  **Summarize Template Descriptions using AI:** It uses OpenAI to summarize each template's description, creating a concise summary suitable for email.
5.  **Filter and Collect Relevant Templates:** For each subscriber, the workflow filters the fetched n8n templates based on their specified categories. A "Remove duplicates" node can be used to keep track of duplicate templates.
6.  **Generate HTML Email:** The workflow generates an HTML email containing a list of new templates, categorized by the subscriber's preferences. Links to the templates and creators are included.
7.  **Send Daily Digest via Outlook:** Finally, the HTML email is sent to each subscriber using the Microsoft Outlook node.

## Services:

-   **Microsoft Excel:** Used to store subscriber information (name, email, categories).
-   **n8n.io API:** Fetches the latest n8n templates based on categories.
-   **OpenAI:** Summarizes the template descriptions using a chat model.
-   **Microsoft Outlook:** Sends the daily digest emails to subscribers.

## Hashtags:

#n8n #automation #newsletter #templates #dailyDigest
