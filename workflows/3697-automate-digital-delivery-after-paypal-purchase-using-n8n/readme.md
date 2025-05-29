# Paypal Payment Capture to Customer Email with n8n Template Attachment

## Use cases:

-   **Automated Order Fulfillment:** Automatically sends an email to customers upon successful payment capture in PayPal, delivering purchased n8n templates.
-   **Personalized Customer Communication:** Delivers a customized email experience by including customer-specific details such as name, purchased product, and helpful resources.
-   **Streamlined Digital Product Delivery:** Simplifies the process of providing digital products (n8n templates) to customers post-purchase.

## How it works:

1.  **Webhook (PayPal):** Listens for `PAYMENT.CAPTURE.COMPLETED` events from PayPal via a configured webhook.
2.  **Wait:** Pauses execution to ensure the payment transaction is fully completed.
3.  **Event Capture Type:** Filters the webhook events, specifically looking for `PAYMENT.CAPTURE.COMPLETED` events to trigger the workflow.
4.  **Get Order Details:** Retrieves detailed order information from the PayPal API using the `order_id` included in the webhook data.
5.  **Email Data:** Extracts relevant customer information (First Name, Last Name, Email ID, and Product Purchased) from the order details to personalize the email.
6.  **Event Capture Type1:** Filters the product for which the custom action is to be taken place.
7.  **getJSON:** Downloads n8n template JSON file.
8.  **Convert to File:** Converts the JSON content of the n8n template into a file attachment in base64 format.
9.  **Send Email:** Sends a customized email to the customer.  The email includes customer's name and the purchased product name. The n8n template is attached to the email.

## Services:

-   PayPal API
-   Email (SMTP)

## Hashtags:

#n8n #automation #paypal #email #workflow
