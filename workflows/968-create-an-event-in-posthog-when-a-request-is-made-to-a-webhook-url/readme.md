# Track Events with PostHog via Webhook

## Use cases:

*   **Track custom events:** Capture specific user interactions or system events triggered by external applications sending data to a webhook.
*   **Monitor application usage:** Collect data on feature usage or specific actions within an application to understand user behavior.
*   **Integrate external services with PostHog:** Forward events from various third-party services that can send data via webhooks to PostHog for analysis.

## How it works:

1.  **Webhook Node:** The workflow starts with a "Webhook" node that listens for incoming HTTP POST requests on a specific path (`/f6d0071e-3cf9-49fd-8bbd-afdbea6b0c67`).
2.  **Extract Event Name:** Upon receiving a request, the webhook extracts the event name from the `query` parameter, specifically the `event` field (`{{$json["query"]["event"]}}`).
3.  **PostHog Node:** The extracted event name is then sent to the "PostHog" node, which creates an event in PostHog. The `distinctId` is set to "n8n", and additional fields can be configured within the node.

## Services:

*   PostHog: A product analytics platform.

## Hashtags:

#n8n #PostHog #Webhook #EventTracking #Analytics
