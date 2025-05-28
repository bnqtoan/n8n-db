# Streamline data from an n8n form into Google Sheet and Airtable

## Use cases:

*   **Customer Feedback Collection:** Automatically gather customer feedback from a form, store it in Google Sheets for analysis, save it to Airtable for structured data management, and send a thank-you email to the customer.
*   **Event Registration:** Streamline event registration by capturing registrant information via a form, recording it in Google Sheets for attendance tracking and Airtable for contact management, and sending a confirmation email to the registrant.
*   **Lead Generation:** Capture leads through an n8n form, store the data in Google Sheets for sales team access, save it in Airtable for CRM integration, and send an introductory email to the lead.

## How it works:

The workflow starts with an **n8n Form Trigger** node that activates when a user submits a form. The form captures Name, City, and Email. The **Extracting Date and Time Fields from 'submittedAt' Field** node then extracts date and time data from the submission timestamp and separates it into distinct fields. The **Format the Fields** node formats these extracted fields and prepares them for use in other nodes. Next, the workflow simultaneously sends the formatted data to **Google Sheets** to append a new row and to **Airtable** to create a new record. Finally, two **Gmail** nodes send customized emails to the submitter using data captured in the form.

## Services:

*   n8n Form
*   Google Sheets
*   Airtable
*   Gmail

## Hashtags:

#n8n #automation #formdata #googlesheets #airtable
