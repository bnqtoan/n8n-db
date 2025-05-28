# My Workflow

## Use cases

- **Lead Qualification and Notification:** Automatically qualify leads submitted through a form and notify the sales team via Slack about high-potential prospects.
- **Smart Lead Collection:** Enhance lead collection by verifying email validity and scoring leads based on customer fit before alerting the team.
- **Real-time Lead Scoring and Alerting:** Capture leads, validate their email addresses, score their customer fit, and instantly notify the relevant team in Slack if they meet specific criteria.

## How it works

1.  **n8n Form Trigger:** A form is submitted, triggering the workflow.
2.  **Verify email with Hunter:** The Hunter.io API verifies the submitted email address for validity.
3.  **Check if the email is valid:** The workflow checks if the email is valid.
4.  **Score lead with MadKudu:** If the email is valid, the workflow uses the MadKudu API to score the lead based on the provided email.
5.  **if customer fit score > 60:** The workflow checks if the MadKudu customer fit score is above 60.
6.  **Slack:** If the score is above 60, a message is sent to a specified Slack channel with lead information.
7.  **Email is not valid, do nothing:** If the email is invalid, the workflow stops.
8.  **Not interesting enough:** If the score is below 60, the workflow stops.

## Services

-   **Hunter.io:** Email verification service.
-   **MadKudu:** Lead scoring platform.
-   **Slack:** Messaging platform for notifications.

## Hashtags

#n8n #automation #leadgeneration #leadscoring #salesautomation
