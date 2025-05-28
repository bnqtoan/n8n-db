# Sync Stripe charges to HubSpot contacts

## Use cases:
- **Automated Sales Reporting:** Automatically update HubSpot contact records with the total amount of Stripe charges, giving sales teams real-time insights into customer spending.
- **Targeted Marketing Campaigns:** Segment HubSpot contacts based on their Stripe spending habits to create more effective and personalized marketing campaigns. For example, target high-spending customers with exclusive offers.
- **Customer Service Enhancement:** Empower customer service representatives with immediate access to a customer's total spending in Stripe, enabling them to provide more informed and efficient support.

## How it works:
1. **Schedule Trigger:** The workflow starts on a predefined schedule (e.g., daily at midnight) using the "On schedule" node.
2. **Configuration:** The "Configure" node sets up default values for the HubSpot property ID (`stripe___total_spend`) and label (`Stripe - Total Spend`). It also allows you to enable or disable the HubSpot field creation check.
3. **Conditional HubSpot Field Check:** An "If" node ("Skip field checking") determines whether to check if the HubSpot field already exists based on the "checkFields" parameter in the "Configure" node. If `checkFields` is true, the workflow proceeds to check. Otherwise, it skips directly to fetching Stripe charges.
4. **HubSpot Field Check (Optional):** The "Get HubSpot field" node attempts to retrieve the HubSpot property. If the property doesn't exist (HTTP 404 error), the "Create field in HubSpot" node creates a custom property in HubSpot to store the total Stripe spend.
5. **Get All Charges:** The "Get all charges" node retrieves all charges from Stripe using the Stripe API.
6. **Check for Customer ID:** The "If charge has customer" node checks if a customer ID is associated with each charge.
7. **Get Customer Details (Conditional):** If a customer ID exists, the "Get customer" node retrieves the customer's details from Stripe. The "Remove duplicate customers" node ensures that you don't ask for the same information again from Stripe if multiple charges have the same customer.
8. **Merge Data:** The "Merge data" node combines the charge data from "Get all charges" and customer data from "Get customer" based on matching customer IDs.
9. **Aggregate Totals:** The "Aggregate totals" node (Code node) aggregates the `amount_captured` (converting from cents to dollars) for each customer based on their email address.
10. **Create or Update Customer:** The "Create or update customer" node updates the corresponding contact in HubSpot with the total Stripe spend using the custom property created earlier. The contact is identified by email.

## Services:
- Stripe API
- HubSpot API

## Hashtags:
#n8n #automation #workflow #stripe #hubspot
