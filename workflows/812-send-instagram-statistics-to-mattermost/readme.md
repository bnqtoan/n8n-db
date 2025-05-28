# StatsInstagram

## Use cases:

- **Daily Instagram Stats Reporting:** Automatically post daily Instagram statistics to a Mattermost channel for quick team updates.
- **Progress Tracking:** Monitor Instagram growth (followers, posts) over time and identify trends.
- **Team Communication:** Keep marketing or social media teams informed about Instagram performance without manual data gathering and reporting.

## How it works:

This workflow is designed to automatically fetch and report Instagram statistics to a Mattermost channel every day at 8:00 AM.

1.  **Cron:** The workflow starts with a "Cron" node, which triggers the workflow execution at 8:00 AM every day.
2.  **Get the date today:** A "Function" node gets the current date and day of the week and saves them as variables.
3.  **Date & Time:** formats the date into DD-MM-YYYY format.
4.  **Read data on Google Sheets:** Reads data from a specified Google Sheet. This sheet is expected to contain the Instagram statistics (followers, posts, account name, etc.).
5.  **Mattermost:** Sends a formatted message to a specified Mattermost channel, including the date and the Instagram statistics fetched from Google Sheets. The message includes the account name, number of followers, and number of posts.

## Services:

-   Google Sheets
-   Mattermost

## Hashtags:

#n8n #automation #instagram #mattermost #socialmedia
