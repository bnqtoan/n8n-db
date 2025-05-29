# Automated URL Screenshots: Google Sheets + ScreenshotOne with Email Alerts

## Use cases:

- **Website Monitoring:** Automatically capture screenshots of websites listed in a Google Sheet to monitor for visual changes, broken links, or content updates over time.
- **Competitor Analysis:** Regularly take screenshots of competitor websites and store them in Google Drive for easy comparison and analysis.
- **Compliance Archiving:** Create an archive of website screenshots for compliance purposes, documenting the state of web pages at specific points in time.

## How it works:

1.  **Google Drive Trigger:** The workflow starts when a new Google Sheets file is created in a specified Google Drive folder. This file is expected to contain a column named 'Url' with a list of URLs.
2.  **Get URLs:** The workflow reads the Google Sheet and extracts the URLs from the 'Url' column.
3.  **Get screenshots:** For each URL, the workflow uses the ScreenshotOne API to capture a screenshot of the website. It automatically blocks cookie banners.  **Important:** You must provide your ScreenshotOne Access Key.
4.  **Upload images to the same folder:** Uploads the screenshot to the same folder on google drive where the google sheet was created.
5.  **Send email with folder link:** Once all screenshots are generated and uploaded, the workflow sends an email with a link to the Google Drive folder containing the screenshots. **Important:** You must provide your email address.

## Services:

-   **Google Sheets:** Used as a data source to provide the list of URLs to be screenshotted.
-   **Google Drive:** Used for triggering the workflow on new file creation, and to store the generated screenshots.
-   **ScreenshotOne API:** A service that captures website screenshots based on provided URLs.
-   **Gmail:** Used to send email notifications with a link to the folder where the screenshots are saved.

## Hashtags:

#n8n #automation #screenshot #googlesheets #googledrive
