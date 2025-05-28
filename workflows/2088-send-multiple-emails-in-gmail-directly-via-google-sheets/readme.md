# Automated Customer Message Workflow

## Use Cases:

- **Automated Email Notifications:** Automatically sends personalized email notifications to customers based on data from a Google Sheet. This could be used for appointment reminders, welcome emails, or promotional offers.
- **Customer Communication Management:** Streamlines customer communication by automatically sending emails to new customers added to a Google Sheet, ensuring timely follow-up.
- **Status Updates:** Keeps track of the status of sent messages by automatically updating a Google Sheet, providing a clear overview of communication efforts.

## How it works:

1.  **Schedule Trigger:** Initiates the workflow on a defined schedule (every minute in this case).
2.  **Retrieve Customer Messages Data (Google Sheets):** Retrieves customer data (Name, Email, Subject, Title, etc.) from a specified Google Sheet.
3.  **Filter Status (Waiting for sending):** Filters the data to only include entries where the "Status" column is "Waiting for sending" and other fields (Title, Subject, Email, Name, Date) exist. It also filters based on if the date equals the current date.
4.  **Send a message (Gmail):** Sends an email to the customer using the data from the Google Sheet for the recipient, subject, and message body.
5.  **Merge fields:** Merges the data to be able to set them in the Google sheet in the next step
6.  **Set data:** Sets specified fields with extracted values from input data.
7.  **Update Message Status (Google Sheets):** Updates the Google Sheet, marking the "Status" column as "Sent successfully" for the corresponding entry.

## Services:

-   Google Sheets
-   Gmail

## Hashtags:

#n8n #automation #workflow #gmail #googlesheets
