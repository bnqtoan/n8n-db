# Template | Stripe notifications for new purchases

## Use cases:

- **Real-time Sales Notifications:** Get instant notifications on Telegram, WhatsApp, or email whenever a new purchase is made through Stripe. This allows for immediate tracking of sales performance.
- **Personalized Customer Communication:** Trigger automated welcome messages or order confirmation via WhatsApp or email, enhancing customer experience after a purchase.
- **Internal Team Alerts:** Notify the sales or customer support team via Telegram about successful transactions, enabling prompt follow-up actions or issue resolution.

## How it works:

1.  **Stripe Trigger:** The workflow starts with a "Stripe Trigger" node, which listens for specific events (presumably successful payments) from your Stripe account using a webhook.
2.  **Filter by paid only:** Filter only paid event.
3.  **Stripe | Get checkout line items:** Retrieves the line items associated with the checkout session from Stripe.
4.  **split templates:** Split data to be used in the next nodes.
5.  **Stripe | Get product info:** For each line item, it fetches detailed product information from Stripe using an HTTP Request node.
6.  **Aggregate:** Combines the product information from each Stripe product.
7.  **Set Fields:** Formats and prepares the data for sending notifications.
8.  **Telegram:** Sends a notification message to a specified Telegram channel or user.
9.  **Email with HTML design:** Sends a customized email notification using Gmail, potentially with HTML formatting for better presentation.
10. **WhatsApp Business Cloud:** Sends a message via WhatsApp Business Cloud to notify about purchase.

## Services:

-   Stripe
-   Telegram
-   Gmail
-   WhatsApp Business Cloud

## Hashtags:

#n8n #Stripe #Automation #Notifications #Ecommerce
