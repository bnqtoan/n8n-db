# Stripe Checkout Sessions with Custom Field Filtering

## Use cases

*   **Customer Segmentation:** Identify and segment customers based on specific custom fields collected during the checkout process (e.g., preferred product category, referral source).
*   **Personalized Marketing:** Trigger targeted marketing campaigns based on the values of custom fields (e.g., send a discount code to customers who indicated interest in a particular product).
*   **Data Analysis:** Extract and analyze specific custom field data from Stripe checkout sessions for reporting and business intelligence purposes.

## How it works

1.  **Retrieve Checkout Sessions:** The workflow starts by retrieving all checkout sessions from Stripe within the last 20 days using the "Stripe | Get latest checkout sessions1" node. It utilizes the Stripe API and handles pagination to fetch all results.
2.  **Split the Data:** The "split all data" node splits the "data" array of checkout sessions into individual items for processing.
3.  **Split Custom Fields:** The "split custom_fields" node separates custom fields into individual items for processing.
4.  **Filter by Custom Field:** The "Filter by custom_field" node filters the contacts to keep only the ones who contain specific custom_fields ("nickname" and "job_title").

## Services

*   Stripe API

## Hashtags

#n8n #stripe #automation #checkout #customfields
