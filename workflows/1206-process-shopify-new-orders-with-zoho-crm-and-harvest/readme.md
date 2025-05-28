# Shopify Order Automation

## Use cases:

- **CRM & Project Management Integration**: When a new order is created in Shopify, automatically create or update a contact in Zoho CRM and create a Trello card for order tracking.
- **Customer Engagement**: Automatically send a "thank you" email or a special coupon code via Gmail to customers based on their order value. Also subscribe high-value customers to a specific list in Mailchimp.
- **Invoice Creation**: Automatically create an invoice in Harvest with details pulled from the Shopify order.

## How it works:

1.  **Shopify Trigger**: The workflow starts when a new order is created in Shopify (`order created` node).
2.  **Set Fields**: Extracts and transforms relevant data from the Shopify order, such as customer details (name, email, phone, address) and order value, using the `Set fields` node.
3.  **Zoho CRM**: Creates or updates a contact in Zoho CRM with the customer's information.
4.  **Harvest Invoice Creation**: Creates an invoice in Harvest using order details such as currency, issue date, and order number.
5.  **Trello Card Creation**: Creates a Trello card to track the order, including the order number and a link to the order status page.
6.  **Conditional Coupon Email**: Evaluates if the order value is greater than 50.
    *   If it is, a "thank you" email with a 15% coupon code is sent via Gmail (`Gmail - coupon` node), and the customer is added to a "high-order" tag in Mailchimp.
    *   If it isn't, a simple "thank you" email is sent via Gmail (`Gmail - thankyou` node).

## Services:

*   Shopify
*   Zoho CRM
*   Trello
*   Gmail
*   Mailchimp
*   Harvest

## Hashtags:

#n8n #shopify #automation #crm #ecommerce
