# Transparent Tracking Pixel for Email Open Detection

## Use cases:

- **Email Marketing Analytics:** Track email open rates to measure the effectiveness of email campaigns.
- **User Engagement Monitoring:** Identify when specific users open emails to trigger personalized follow-up actions.
- **Lead Scoring:** Use email open events as a factor in lead scoring to prioritize leads who are actively engaging with your content.

## How it works:

This workflow creates a 1x1 transparent PNG image and serves it via a webhook. When embedded in an email, the image acts as a tracking pixel. When the email recipient opens the email, their email client loads the image, triggering the webhook.

1.  **Webhook Trigger (`Request img`):** Listens for incoming HTTP requests on a specified path (e.g., `/webhook/db4880e7-2134-4994-94e5-a4a3aa120440`). It can also capture a query parameter (`id`) included in the image URL to identify the recipient.
2.  **Set Base64 Data (`Create data pix`):** Creates a variable named `data` containing a Base64-encoded string representing the transparent PNG image.
3.  **Convert to Binary (`Create img bin`):** Converts the Base64 string in the `data` variable into a binary image file, setting the MIME type to `image/png`.
4.  **Respond to Webhook (`Respond to Webhook`):** Sends the binary image data as the response to the webhook request. This serves the tracking pixel to the email client.
5.  **Logging (`Do anything to log`):** Placeholder node. It is important to log the email open events (including the timestamp, user id or request metadata.) in order to analyze the results.

## Services:

-   n8n

## Hashtags:

#n8n #automation #emailtracking #webhooks #analytics
