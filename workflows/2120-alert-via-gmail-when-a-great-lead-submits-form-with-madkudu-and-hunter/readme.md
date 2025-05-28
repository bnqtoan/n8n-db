# Contact us Form: Lead Scoring and Email Alert

## Use cases:

- Automatically qualify leads coming from a "Contact Us" form and notify sales teams about high-potential prospects.
- Enrich lead data with email verification and scoring information for better lead prioritization.
- Filter leads based on a customer fit score threshold and send personalized email alerts to relevant stakeholders.

## How it works:

1.  **n8n Form Trigger:** Listens for submissions on a designated "Contact Us" form.  The form has one field: "What's your business email?".
2.  **Verify email with Hunter:** Validates the submitted email address using the Hunter.io Email Verifier service.
3.  **Check if the email is valid:** Checks the status returned by Hunter, and continues only if the email address is considered valid.
4.  **Score lead with MadKudu:** Sends the email address to MadKudu to retrieve lead scoring information based on email.
5.  **if customer fit score > 60:** Evaluates the customer fit score provided by MadKudu. If the score is above 60, it proceeds to the next step.
6.  **Gmail:** Sends an email notification via Gmail containing details about the hot lead, including their name, company, location, and top signals.  The email is sent to a predefined email address.
7.  **Not interesting enough:** If the customer fit score is not over 60, the workflow will end here and do nothing.
8.  **Email is not valid, do nothing:** If the email is not valid, the workflow will end here and do nothing.

## Services:

-   Hunter.io: Email verification service.
-   MadKudu: Lead scoring platform.
-   Gmail: Email service.

## Hashtags:

#n8n #leadgeneration #automation #sales #leadscoring
