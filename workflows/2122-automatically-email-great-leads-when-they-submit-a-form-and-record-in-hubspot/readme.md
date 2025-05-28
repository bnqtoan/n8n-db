# Lead Qualification and Automated Outreach Workflow

## Use cases:

- **Automated Lead Qualification:** Automatically qualify leads coming from a form submission based on email validity and lead scoring from MadKudu.
- **Personalized Outreach:** Send personalized emails to qualified leads and log the engagement in HubSpot, ensuring timely and relevant follow-up.
- **Streamlined Sales Process:** Improve sales efficiency by focusing on high-potential leads and automating initial outreach, saving time and resources.

## How it works:

1.  **Form Submission (n8n Form Trigger):** The workflow starts when a user submits a form, capturing their business email.
2.  **Email Verification (Verify email with Hunter):** The Hunter.io service verifies the submitted email address for deliverability and validity.
3.  **Email Validation Check (Check if the email is valid):**  The workflow checks if the email is valid based on the response from Hunter. If not, the workflow stops and does nothing.
4.  **Lead Scoring (Score lead with MadKudu):** A request is sent to MadKudu to retrieve the lead score associated with the email address.
5.  **Customer Fit Check (if customer fit score > 60):** The workflow checks if the lead score from MadKudu is above a defined threshold (60).
6.  **HubSpot Contact Check (HubSpot):** Workflow checks if the lead is already a contact in HubSpot.
7.  **Email Content Setup (Set keys):** Sets the content for the email (html, subject, recipient, and id).
8.  **Outreach Email (Send outreach email):** Sends a personalized outreach email to the lead using Gmail, based on pre-defined content.
9.  **Engagement Logging (Record engagement in HubSpot):** Records the email engagement in HubSpot, linking it to the lead's contact record for tracking and reporting.

## Services:

-   **Hunter.io:** For email verification.
-   **MadKudu:** For lead scoring.
-   **Gmail:** For sending automated outreach emails.
-   **HubSpot:** For CRM and engagement tracking.

## Hashtags:

#n8n #automation #leadgeneration #salesautomation #hubspot
