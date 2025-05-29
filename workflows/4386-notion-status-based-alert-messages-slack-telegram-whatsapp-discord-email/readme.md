# Notion → Alert Message

## Use cases:

- **Project Status Updates:** Automatically send a Slack message whenever a task's status in a Notion project database changes (e.g., from "On Deck" to "In Progress").
- **Content Workflow Notifications:** Alert a content team via Slack when a document in Notion moves to the "Ready for Review" or "Ready to Publish" stage.
- **Personal Task Management:** Receive a Slack notification when a personal task in a Notion database is updated, ensuring you stay on top of your to-do list.

## How it works:

1.  **Notion Trigger:** The workflow starts with a `Notion Trigger (Polling)` or `Notion Trigger (Webhook)` node. This node monitors a specified Notion database for changes. The webhook is disabled, meaning the polling trigger will be used.
2.  **Set Notion Page Info:** After a change is detected, `Set Notion Page Info` node likely prepares the data for subsequent steps. The parameters for this node are not specified in this workflow.
3.  **Switch:** The `Switch` node routes the workflow based on the status of the Notion page. The specific criteria for the switch are not defined in the parameters.
4.  **Status Setting:**  Depending on the status, one of the "Set" nodes (`Set On Deck`, `Set In Progress`, `Set Ready For Review`, `Set Ready To Publish`) is triggered. These likely prepare specific data or messages based on the status. The parameters for these nodes are not specified in this workflow.
5.  **Build Message:** The `Build Message` node constructs the notification message that will be sent to Slack.  The message is likely constructed using the Notion page data and the status change. The parameters for this node are not specified in this workflow.
6.  **Send Slack Msg:** The `Send Slack Msg` node sends the constructed message to a specified Slack channel. Other messaging services are disabled.

## Services:

-   Notion
-   Slack

## Hashtags:

#n8n #Notion #Slack #Automation #Notifications
