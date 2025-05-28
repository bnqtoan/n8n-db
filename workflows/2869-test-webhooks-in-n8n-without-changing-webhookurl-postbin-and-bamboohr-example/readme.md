# Test Webhooks in n8n Without Changing WEBHOOK_URL (PostBin & BambooHR Example)

## Use cases:

- Rapidly prototype and test webhook integrations with external services like BambooHR without altering the global n8n `WEBHOOK_URL` setting.
- Verify the structure and content of webhook payloads from services like BambooHR.
- Automate employee onboarding notifications in Slack.

## How it works:

This workflow demonstrates how to test webhooks using PostBin to capture webhook data and BambooHR as a webhook source, without the need to configure a publicly accessible `WEBHOOK_URL` for n8n.

1.  **Create a PostBin:** Generates a unique PostBin URL for capturing webhook data.
2.  **Register the PostBin URL as a Webhook in BambooHR:** Configures BambooHR to send webhook events to the generated PostBin URL.
3.  **Fetch BambooHR fields to monitor:** Retrieves all possible fields from BambooHR for monitoring changes.
4.  **Configure BambooHR webhook:** Sets the parameters in BambooHR what fields to monitor.
5.  **Simulate BambooHR event:** Creates dummy employee data in BambooHR to trigger the registered webhook.
6.  **Capture and display webhook data:** The workflow retrieves the data sent to PostBin.
7.  **Format the data:** The employee information are extracted, and a Slack message is composed.
8.  **Send Welcome message to Slack:** Sends a formatted message to a Slack channel announcing the new employee(s).
9.  **Delete the webhook (testing)**: Deletes the webhook created in BambooHR.

## Services:

-   n8n
-   [PostBin](https://www.postb.in/)
-   [BambooHR](https://www.bamboohr.com/)
-   Slack
-   OpenAI

## Hashtags:

#n8n #webhook #automation #BambooHR #Slack #PostBin
