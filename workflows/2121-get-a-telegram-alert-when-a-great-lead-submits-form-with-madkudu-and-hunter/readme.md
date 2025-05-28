# Lead Qualification and Notification Workflow

## Use cases:

- **Automated Lead Scoring and Routing:** Automatically qualify leads from a contact form based on email validity, company data, and a customer fit score, then notify the sales team about high-potential leads.
- **Real-time Sales Alerts:** Get instant notifications in Telegram when a lead submits a form and meets the defined qualification criteria (valid email, high customer fit score).
- **Improved Lead Quality:** Filter out invalid or low-potential leads to focus sales efforts on promising prospects.

## How it works:

1.  **n8n Form Trigger:** The workflow starts when a user submits a form (configured in n8n) with their business email.
2.  **Verify email with Hunter:** The workflow validates the email address using the Hunter.io API to ensure deliverability.
3.  **Check if the email is valid:** An IF node checks the result of the Hunter.io verification. Only valid emails proceed.
4.  **Score lead with MadKudu:** A HTTP Request node sends the email address to MadKudu to retrieve lead scoring and company information.
5.  **if customer fit score > 60:** An IF node evaluates the "customer\_fit.score" property returned by MadKudu. If the score is above 60, the workflow continues; otherwise, it stops at the "Not interesting enough" node.
6.  **Telegram:**  Sends a message to a Telegram channel, including the email address and formatted top signals from MadKudu, alerting the sales team about a hot lead.
7.  **Email is not valid, do nothing:** If the email is invalid according to Hunter, the workflow stops.

## Services:

-   **Hunter.io:** For email verification.
-   **MadKudu:** For lead scoring and company data enrichment.
-   **Telegram:** For sending notifications.

## Hashtags:

#n8n #leadgeneration #leadscoring #automation #sales
