# Stripe Charges to Pipedrive Notes

## Use cases:

- **Automatically record successful Stripe charges in Pipedrive:** Whenever a customer makes a successful payment in Stripe, a note is created in Pipedrive under the corresponding organization. This provides a real-time overview of customer transactions within the CRM.
- **Track customer payment history within Pipedrive:**  Sales and customer success teams can easily access a customer's payment history directly from their Pipedrive profile, aiding in account management and support.
- **Enrich Pipedrive data with financial information:**  Link financial transactions from Stripe to customer profiles in Pipedrive, providing a more complete picture of the customer relationship.

## How it works:

1.  **Trigger (Every day at 8 am):** The workflow starts every day at 8 am.
2.  **Get last execution timestamp:** Retrieves the timestamp of the last workflow execution to fetch only new charges.
3.  **Search for charges in Stripe:** Searches for successful Stripe charges created after the last execution timestamp.
4.  **Split array of charges to items:** Splits the array of charges into individual items for processing.
5.  **Get customers:** Retrieves all customers data from Stripe.
6.  **Rename fields and keep only needed fields:** From Stripe customer data rename and keeps only customerId and customerName.
7.  **Add customer name to charge data:** Merges the Stripe charge data with the customer name using the "customer" and "customerId" fields.
8.  **Search organisation:** Searches for the corresponding organization in Pipedrive using the customer name.
9.  **Add organisation Information to charge data:** Merges the charge data with the organization information found in Pipedrive.
10. **Create note with charge information:** Creates a note in Pipedrive with the charge amount, currency, and description, linking it to the organization.
11. **Set new last execution timestamp:** Updates the timestamp of the last workflow execution to the current time.

## Services:

-   **Stripe:** Payment processing platform.
-   **Pipedrive:** CRM and sales management tool.

## Hashtags:

#n8n #Stripe #Pipedrive #Automation #CRM
