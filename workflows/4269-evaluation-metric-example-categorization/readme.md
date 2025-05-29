# My Workflow

## Use cases:

*   **Automated Support Ticket Triage:** Automatically categorize and prioritize incoming support tickets based on their subject and body. This can help support teams route tickets to the appropriate personnel more efficiently.
*   **Workflow Evaluation Metric Calculation:** Evaluate the performance of an AI agent in categorizing and prioritizing support tickets by comparing its predictions with a ground truth dataset.
*   **AI Model Performance Monitoring:** Continuously monitor the accuracy of an AI model by regularly comparing its output with expected values and tracking the match rate over time.

## How it works:

This workflow is designed to evaluate the accuracy of an AI agent in categorizing and prioritizing support tickets.

1.  **Dataset Input:** The workflow starts with the "When fetching a dataset row" node, which reads support ticket data (subject, body, expected category, and expected priority) from a Google Sheets document.
2.  **AI Agent Interaction:** The "AI Agent" node receives the subject and body of the support ticket. This node uses an OpenAI Chat Model to predict the category and priority of the ticket.
3.  **Structured Output Parsing:** The "Structured Output Parser" node converts the AI agent's response into a structured JSON format.
4.  **Categorization Check:** The "Check categorization" node compares the AI agent's predicted category and priority with the expected values from the dataset. It generates boolean values (`category_match` and `priority_match`) indicating whether the predictions were correct.
5.  **Metric Setting:** The "Set metrics" node records the results of the comparison, storing the boolean match values as numerical metrics.
6.  **Webhook Trigger (Alternative):** An alternative path is triggered through a webhook that accepts a subject and body to be passed to the AI Agent.

## Services:

*   **Google Sheets:** Used as a data source for support ticket information (subject, body, expected category, and expected priority).
*   **OpenAI:** Used via the "OpenAI Chat Model" node to categorize and prioritize support tickets.

## Hashtags:

#n8n #automation #AI #workflow #evaluation
