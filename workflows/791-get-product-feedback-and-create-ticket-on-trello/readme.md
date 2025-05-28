# Get Product Feedback

## Use cases:

*   **Collect and manage product feedback:** Automatically gather customer feedback from Typeform submissions and store it in Airtable for easy analysis and tracking.
*   **Escalate critical feedback:** When a customer provides a score of 7 or higher, create a Trello card to ensure the team addresses the feedback promptly.
*   **Improve product quality:** By centralizing and analyzing feedback, identify areas for improvement and prioritize product development efforts.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new form is submitted in Typeform. The trigger is configured to listen to a specific form (you need to configure formId and the credentials).
2.  **Set:** This node extracts relevant data from the Typeform submission, such as the score, name, email, and description. It stores these values in easily accessible variables.
3.  **Airtable:** The extracted feedback data is then appended to an Airtable table called "Feedback". The Airtable API credentials need to be configured.
4.  **IF:** This node checks if the customer's score is greater than or equal to 7.
5.  **Trello:** If the score meets the condition, a new Trello card is created in a specified list (listId, and Trello API credentials need to be configured). The card includes the customer's name, email, score, and description.
6.  **NoOp:** If the score is less than 7, the workflow does nothing.

## Services:

*   Typeform
*   Airtable
*   Trello

## Hashtags:

#n8n #automation #feedback #productmanagement #typeform
