# Pipedrive Deal to Stripe Customer Creation

## Use cases:

- **Automated Customer Onboarding:** When a deal in Pipedrive reaches a "won" stage and the won time has changed, automatically create a new customer in Stripe, saving time and ensuring accurate customer data synchronization between sales and billing systems.
- **Data Enrichment:** Enrich Stripe customer data with organization details from Pipedrive, providing a more complete view of the customer.
- **Preventing Duplicate Customer Creation:** Check if a customer already exists in Stripe before creating a new one to avoid duplicates.

## How it works:

1.  **Pipedrive Trigger ("On deal updated"):** The workflow starts when a deal is updated in Pipedrive. It is triggered when the action is "updated" and the object is a "deal".
2.  **Check Won Time ("Current won time Not Equal to Previous"):** Checks whether the current won\_time of the deal is different from the previous won\_time. This ensure the workflow proceeds only when the deal status has changed and is won.
3.  **Get Organization Details ("Get organisation details"):** Retrieves the organization details from Pipedrive associated with the deal using the `org_id` from the trigger data.
4.  **Search Customer ("Search customer"):** Searches for an existing customer in Stripe using the organization's name retrieved from Pipedrive.
5.  **Customer Existence Check ("Customer does not exist"):** Checks if the customer search results from Stripe are empty. If the customer does not exist (`[]`), the workflow proceeds to create a new customer.
6.  **Continue with Organisation Data ("Continue with organisation data"):** A merge node that passes the organization data to the next node.
7.  **Create Customer ("Create customer"):** Creates a new customer in Stripe using the organization's name and address details retrieved from Pipedrive. The address fields are mapped from the Pipedrive organization data to the Stripe customer's address.

## Services:

-   Pipedrive
-   Stripe

## Hashtags:

#n8n #Pipedrive #Stripe #Automation #CustomerOnboarding
