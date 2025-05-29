# Screenshot Automation from Google Sheets

## Use cases:

- **Website Archiving:** Automatically capture screenshots of websites listed in a Google Sheet for record-keeping or historical purposes.
- **Content Monitoring:** Monitor changes to websites by taking periodic screenshots and comparing them over time.
- **Competitive Analysis:** Track competitor websites by automatically saving screenshots of their landing pages or key features.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts when a new row is added to a specified Google Sheet. The trigger monitors the sheet named "Sheet1" in the Google Sheet document with the ID "1SP8Y-qffC96ZV3ueVUYWP5pjqtaycaM7Kbv5L-ztw5g". It specifically looks for the event `rowAdded` to be triggered.
2.  **Take a screenshot of a website:** The workflow takes the URL from the "Url" column in the newly added Google Sheet row and uses a custom node called "@custom-js/n8n-nodes-pdf-toolkit.websiteScreenshot" to capture a screenshot of the website.
3.  **Store Screenshots:** The screenshot is then saved to a Google Drive folder named "screenshots" with the ID "1oFbmzgG2fsRix45r5JtowYjAdwskJ0P6". The name of the screenshot file will be the value of the "Title" column from the Google Sheet with the .png extension.

## Services:

-   Google Sheets
-   Google Drive
-   @custom-js/n8n-nodes-pdf-toolkit.websiteScreenshot custom node

## Hashtags:

#n8n #automation #googlesheets #screenshot #googledrive
