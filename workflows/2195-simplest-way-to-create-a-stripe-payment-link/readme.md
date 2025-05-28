# Create a payment link

## Use cases:

*   **E-commerce Product Sales:** Automatically generate payment links for new products added to your inventory, allowing customers to quickly purchase items without navigating a full checkout process.
*   **Donation Campaigns:** Create unique payment links for different donation tiers or campaigns, simplifying the process for supporters to contribute.
*   **Service Payments:** Generate payment links for one-time service fees, such as consulting sessions or project milestones, enabling easy online payments for clients.

## How it works:

1.  **Form Trigger:** The workflow starts with a "Creation Form" node, which presents a user interface to input the product title and price.
2.  **Configuration:** The "Config" node sets up the currency (defaulting to EUR) and multiplies the price by 100 to convert it to cents, as required by Stripe.
3.  **Create Stripe Product:** The "Create Stripe Product" node sends a request to the Stripe API to create a new product with the provided title, price (in cents), and currency. It uses the Stripe API credentials for authentication.
4.  **Create Payment Link:** The "Create payment link" node uses the Stripe API to generate a payment link associated with the created product. It links the product's default price to the payment link and sets the quantity to 1.
5.  **Respond to Webhook:** The "Respond to Webhook" node redirects the user to the generated Stripe payment link URL, enabling them to complete the purchase.

## Services:

*   Stripe

## Hashtags:

#n8n #stripe #paymentgateway #automation #ecommerce
