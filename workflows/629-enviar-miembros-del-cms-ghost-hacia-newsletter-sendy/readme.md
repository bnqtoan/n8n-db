# RegisterSendly

## Use cases:

- **Automated Newsletter Subscription:** Automatically subscribe new members to a Sendy newsletter upon a specific event (e.g., new user registration on a website).
- **Real-time Subscription Notification:** Receive instant Telegram notifications whenever a new member subscribes to the newsletter.
- **Simplified Member Management:** Streamline the process of adding new members to your email list without manual intervention.

## How it works:

1.  **Webhook:** The workflow starts with a `Webhook` node, configured to listen for `POST` requests at the specified path (`06cfbe404338f125f6cdeab8d2b7ff1e`). This webhook is triggered when an event occurs (likely from a Ghost integration, based on the node's notes). The webhook receives data about the new member in the `body` of the request.
2.  **HTTP Request (Sendy Subscription):** The `HTTP Request1` node then takes the data received by the webhook, specifically the member's email from `{{$node["Webhook"].json["body"]["member"]["current"]["email"]}}`, and sends a `POST` request to the Sendy subscription API (`https://yoursendyinstallation.com/subscribe`). It includes parameters like `api_key`, `boolean`, `silent`, `name`, `email` and `list` in the request body, subscribing the member to the specified list in Sendy.
3.  **Telegram Notification:** Simultaneously, the `Telegram` node sends a notification to a Telegram group (`@yourtelegramgroup`) informing about the new subscriber. The notification includes the email address of the newly subscribed member using data from the Webhook.

## Services:

-   **Sendy:** A self-hosted email newsletter application.
-   **Telegram:** A messaging app used for sending notifications.
-   **Ghost:** A headless Node.js CMS (inferred from the node notes).

## Hashtags:

#n8n #automation #newsletter #sendy #telegram
