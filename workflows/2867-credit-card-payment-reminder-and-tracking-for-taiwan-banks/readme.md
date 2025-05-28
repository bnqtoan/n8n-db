# Credit Card Statement Automation

## Use cases:

- Automatically create Google Calendar events for credit card payment due dates based on email statements.
- Track credit card payment status in a Google Sheet and update calendar events accordingly.
- Consolidate due dates from multiple credit card providers into a single calendar.

## How it works:

1.  The workflow is triggered by incoming emails from several credit card companies (SINOPAC, CTBC, Cathay, Fubon, E.SUN, DBS, Union, Taishin) using Gmail Triggers.
2.  For SINOPAC, Fubon, E.SUN, DBS, Union and Taishin credit card companies:
    *   The attached PDF statement is extracted using the "Extract From File" node.
    *   Relevant information such as due date and amount due is extracted and set to variables using "Set" nodes.
3.  For CTBC and Cathay, relevant information such as due date and amount due is set to variables using "Set" nodes.
4.  All data extracted from each credit card provider will be organized using "Organize Data" to set them to a common structure.
5.  A Google Calendar event is created with the due date and amount due using the "Create Google Calendar Event" node.
6.  The creation of the new event in Google Calendar, triggers the workflow that uses the Webhook
7.  Webhook will trigger the "Get Google Calendar Event by id" node.
8.  Google Calendar event will be updated using the "Update Google Calendar event status"
9.  Finally, the Google Sheet is updated with the payment status using the "Update Google Sheets pay status" node.

## Services:

*   Gmail
*   Google Sheets
*   Google Calendar

## Hashtags:

#n8n #automation #creditcard #googlecalendar #googlesheets
