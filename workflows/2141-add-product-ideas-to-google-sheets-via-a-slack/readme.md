# Slack Idea to Google Sheets Workflow

## Use cases:

- **Idea Collection:** Collect feature requests or suggestions from a Slack channel using a slash command and store them in a Google Sheet for tracking and prioritization.
- **Feedback Management:**  Gather feedback from users via Slack commands, recording the feedback and the user's identity in a Google Sheet for analysis.
- **Quick Logging:** Allow team members to quickly log issues or notes during a meeting directly from Slack, populating a Google Sheet for later review and action.

## How it works:

1.  **Webhook (Slack Trigger):** Listens for a POST request from a Slack slash command (e.g., `/idea`). The slash command is configured in a Slack App.
2.  **Set me up:** Sets the Google Sheets URL that is used on the next node.
3.  **Switch:** Determines the flow of the workflow based on the command used in Slack. In this case it is configured to filter by the `/idea` command.
4.  **Add to Google Sheets:** Appends the idea (text from the Slack command) and the user's name to a specified Google Sheet.  It uses the Google Sheets URL defined in the "Set me up" node.
5.  **Hidden message to Slack to add feature details:** Sends a hidden message back to the user in Slack as a "side-effect" to confirm that the idea was received and encourages the user to add more details to the Google Sheets document to clarify the idea.

## Services:

-   Slack API (via Webhooks and HTTP Request)
-   Google Sheets API

## Hashtags:

#n8n #Slack #GoogleSheets #Automation #IdeaManagement
