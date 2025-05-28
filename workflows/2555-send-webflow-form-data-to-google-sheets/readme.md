# Webflow Form to Google Sheets

## Use cases:

-   **Contact Form Management:** Automatically capture and store contact form submissions from a Webflow site directly into a Google Sheet for easy review and follow-up.
-   **Survey Data Collection:** Collect survey responses from a Webflow form and organize them in a Google Sheet for analysis and reporting.
-   **Event Registration:** Record event registration details submitted via a Webflow form into a Google Sheet to manage attendee lists and track participation.

## How it works:

1.  **On Form Submission (Webflow Trigger):** The workflow starts when a form is submitted on a specified Webflow site.
2.  **Prepare Fields (Code Node):** This node takes the data from the Webflow form submission and transforms it. It extracts the form data, and add the submission Date .
3.  **Append New Row (Google Sheets):** This node takes the transformed data and appends it as a new row in a specified Google Sheet. It automatically creates column names and appends data, even on empty sheets.

## Services:

-   Webflow
-   Google Sheets

## Hashtags:

#n8n #webflow #googlesheets #automation #formdata
