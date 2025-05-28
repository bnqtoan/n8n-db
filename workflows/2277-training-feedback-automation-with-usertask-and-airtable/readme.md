# Training Feedback Automation

## Use cases:

- Automatically create tasks in Usertask for addressing negative feedback from training sessions, ensuring prompt action and improvement.
- Share positive feedback and recognition on LinkedIn to highlight successful training sessions and acknowledge facilitators.
- Notify relevant personnel (trainers, HR) via email about urgent feedback requiring immediate attention and action.

## How it works:

1.  **Airtable Trigger:** The workflow starts when new training feedback is added or updated in an Airtable base.  The trigger is configured to monitor the "Created" field, so it reacts whenever a new record is created.
2.  **Switch (Feedback Rating):** The feedback score ("Content" field from Airtable) is evaluated.  Based on the score (1 to 5), the workflow branches into different paths corresponding to levels of satisfaction (Dissatisfaction, Fair, Good, Very Good, Excellent).
3.  **Usertask Task Creation:** For "Dissatisfaction," "Fair," and "Good" feedback, a task is created in Usertask using the "Call Usertask - Create Task" nodes.  These nodes send a POST request to the Usertask API to create a task related to the negative feedback, including details and a callback URL.
4.  **LinkedIn Posting (Positive Feedback):** For "Very Good" and "Excellent" feedback, a post is created on LinkedIn to share the positive feedback, highlighting the facilitator and training content.
5.  **Webhook (Usertask Response):** The "Webhook - Action Task Poor" node listens for updates from Usertask when the created task is completed (e.g., the feedback is validated).
6.  **Switch (Usertask Action):** After the webhook is triggered, the "Switch1" node determines if the Usertask action is "Validate".
7.  **Email Notifications:**
    *   If the Usertask action is validated, an email is sent to trainers and HR managers informing them of the feedback and recommending a meeting to discuss the details and improve the training program ("Send Email after WebHook").
    *   After a task is created on Usertask ("Call Usertask - Create Task - Pair and good" and "Call Usertask - Create Task - Dissatisfaction") the workflow calls usertask Detail Task, then sends and Email to contact@usertask.io

## Services:

*   Airtable
*   Usertask
*   LinkedIn
*   SMTP (Email)

## Hashtags:

#n8n #automation #workflow #training #feedback
