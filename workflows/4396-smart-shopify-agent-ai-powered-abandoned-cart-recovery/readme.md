# Abandoned Checkout Recovery Workflow

## Use cases:

- **E-commerce Sales Recovery:** Automatically sends personalized emails to customers who have left items in their cart without completing the purchase, encouraging them to return and finalize their order.
- **Reducing Cart Abandonment Rate:** Proactively engages potential customers, providing a gentle reminder and potentially a discount to incentivize purchase completion, thereby reducing the overall cart abandonment rate.
- **Customer Engagement and Retention:** Improves customer engagement by offering tailored assistance and a seamless shopping experience, fostering customer loyalty and repeat purchases.

## How it works:

1.  **Initialization:** The workflow starts either manually or on a schedule. It fetches a list of abandoned checkouts from a Shopify store using the Shopify API.
2.  **Wait Period:** The workflow waits for one hour to allow customers to complete their purchase naturally.
3.  **Recheck:** After the wait period, the workflow re-fetches the list of abandoned checkouts from Shopify.
4.  **Conditional Check:** The workflow compares the initial and updated lists to determine if a customer is still in the abandoned state.
    *   **If Abandoned:** If the customer's checkout is still abandoned, the workflow generates a personalized recovery email using an AI (GPT-based) content generation node, then send it to the customer via Gmail. After that the customer name, email, and email response are log into Google Sheet.
    *   **If Purchase Completed:** If the customer has completed the purchase, the workflow does nothing and ends.

## Services:

-   Shopify API
-   GPT (via n8n Langchain nodes)
-   Gmail
-   Google Sheets

## Hashtags:

#n8n #automation #ecommerce #abandonedcart #emailmarketing
