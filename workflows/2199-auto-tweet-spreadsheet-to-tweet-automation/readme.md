# Tweet Scheduler from Google Sheets

## Use cases:

- **Automated Content Sharing:** Schedule and automatically post tweets from a Google Sheet to maintain a consistent online presence.
- **Curated Content Distribution:**  Organize a list of pre-written tweets in a Google Sheet and have them posted at regular intervals, perfect for sharing curated content or promotional messages.
- **Evergreen Content Recycling:**  Keep your audience engaged by automatically re-sharing evergreen content from a Google Sheet on a recurring schedule.

## How it works:

This workflow automates the process of posting tweets from a Google Sheet on a scheduled basis. Here's a breakdown:

1.  **Schedule Trigger:** The workflow starts with a "Schedule Trigger" node, which is configured to run every 6 hours.
2.  **Get Tweets:** The "Get Tweets" node connects to a specified Google Sheet named "Tweets". It retrieves the first tweet from the sheet based on "returnFirstMatch" parameter, which must be the first row in the sheet, this is the tweet to be posted.
3.  **Post on X:** The "Post on X" node takes the tweet content retrieved from the Google Sheet and posts it to your linked X (formerly Twitter) account.
4.  **Remove from list:** The "Remove from list" node removes the posted tweet from the google sheet.
5.  **Configuration**: Make sure that a Google Sheet exists with the name "Tweets", and that the first column is named "tweet", also make sure to configure the Google Sheet and X credentials.

## Services:

-   Google Sheets
-   X (Twitter)

## Hashtags:

#n8n #automation #twitter #googleSheets #scheduler
