# Forms Submission to CRM with Email Validation

## Use cases:

- **Automated Lead Generation:** Capture leads from form submissions, validate their email addresses, and automatically create corresponding lead records in SuiteCRM.
- **Email Hygiene:** Ensure the quality of leads by validating email addresses, reducing bounce rates and improving email marketing campaign performance.
- **Centralized Notifications:** Receive real-time alerts in NextCloud when form submissions contain invalid email addresses or when CaptainVerify credits are running low.

## How it works:

1.  **Trigger:** The workflow starts when a form is submitted via Tally Forms (or any other webhook-enabled form service).
2.  **Email Validation:** The submitted email address is sent to CaptainVerify for validation.
3.  **Credit Check:** The workflow checks if the CaptainVerify account has sufficient credits. If credits are low, a notification is sent to NextCloud.
4.  **Invalid Email Handling:** If the email is invalid, a notification is sent to a specified NextCloud discussion.
5.  **SuiteCRM Authentication:** If the email is valid, the workflow retrieves an access token from SuiteCRM using client credentials.
6.  **Lead Creation:** A new lead record is created in SuiteCRM, populated with data from the form submission and the validated email address.
7. **Brevo Contact Creation:** The workflow will create a contact in Brevo and Link with the id of SuiteCRM
8.  **Lead Creation Notification:** A notification is sent to a NextCloud discussion channel to announce the new lead, including relevant details.

## Services:

-   **CaptainVerify:** Email validation service.
-   **SuiteCRM:** Customer Relationship Management system.
-   **NextCloud:** Collaboration platform for notifications.
-   **Brevo:** Marketing Automation Platform

## Hashtags:

#n8n #automation #CRM #emailvalidation #leadgeneration
