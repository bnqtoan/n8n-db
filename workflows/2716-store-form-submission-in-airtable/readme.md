# Automated Form Submission Data Storage in Airtable

## Use cases:

- **User Registration:** Automatically collect user data from a registration form and store it in Airtable for easy management of user accounts.
- **Feedback Collection:** Capture feedback submitted through a form and store it in Airtable for analysis and tracking.
- **Survey Responses:** Store survey responses directly into Airtable, allowing for real-time data aggregation and analysis.

## How it works:

This workflow automates the process of capturing data from form submissions and storing it in Airtable.

1.  **On form submission (Form Trigger Node):** This node acts as a trigger, listening for new submissions on a specified form ("Create User"). It captures the data entered by the user, including Name, Age, Email, Address, and Subscription preference.
2.  **User Data Storage (Airtable Node):** This node receives the data from the form submission and creates a new record in the specified Airtable base and table.  It maps the form fields (Name, Age, Email, Address, and "You have Subscription ?") to corresponding columns in Airtable, along with the submission timestamp.

## Services:

-   Airtable

## Hashtags:

#n8n #automation #Airtable #formsubmission #dataCollection
