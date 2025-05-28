# Visual Regression Testing with AI Vision Models

## Use cases:

- **Website Monitoring:** Automatically detect visual changes in a website's layout, content, or styling to ensure consistency and prevent unexpected design issues.
- **A/B Testing Validation:** Verify that A/B tests are implemented correctly and that the visual changes align with the intended variations.
- **Content Management System (CMS) Updates:** After updating a CMS or deploying new content, ensure that the visual integrity of the website remains intact.

## How it works:

This workflow performs visual regression testing using AI vision models. It compares base screenshots of web pages with new screenshots to identify visual differences.

1.  **Part A: Generate Base Images:**
    *   The workflow starts by getting a list of URLs from a Google Sheet.
    *   It loops through each URL and uses Apify to take a screenshot of the webpage.
    *   The screenshot is then uploaded to Google Drive.
    *   The Google Sheet is updated with the Google Drive ID of the base image.
2.  **Part B: Run Visual Regression Test:**
    *   A schedule trigger (or manual trigger) initiates the visual regression test.
    *   The workflow retrieves a list of webpages to test from Google Sheets.
    *   For each webpage:
        *   It downloads the base image from Google Drive using the stored ID.
        *   It uses Apify again to take a new screenshot of the webpage.
        *   The base image and the new screenshot are then sent to Google Gemini.
        *   Google Gemini identifies the difference between 2 pictures
        *   A structured output parser will parse the result into JSON format
        *   The workflow filters for webpages that have changes and combines the row data with the test results.
    *   Changes are aggregated and create issue report to Linear

## Services:

-   Google Sheets: Used to store the list of webpages to test and their base image references.
-   Google Drive: Used to store the base images.
-   Apify: Used to generate webpage screenshots.
-   Google Gemini: Used for visual regression testing.
-   Linear: Used to create report.

## Hashtags:

#n8n #automation #workflow #visualregressiontesting #AI #Gemini #Apify #GoogleSheets #GoogleDrive #Linear
