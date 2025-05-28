# Dialpad to Syncro

## Use cases:

- Automatically create tickets in Syncro based on inbound Dialpad calls, ensuring that all incoming customer calls are logged and tracked for follow-up.
- Update existing tickets in Syncro with comments when an inbound call is received from a known contact, providing a call history within the ticket.
- Log all inbound Dialpad calls and associated Syncro tickets (created or updated) to a Google Sheet for reporting and auditing purposes.

## How it works:

1.  **Webhook (Dialpad):** Listens for inbound calls from Dialpad via a webhook.
2.  **IF:** Checks if the call `direction` is `inbound`.
3.  **EnvVariables:** Stores environment variables, including the Syncro base URL and user ID.
4.  **GetCustomer:** Uses the caller's phone number (`external_number`) to search for the customer or contact in Syncro via the Syncro API.
5.  **Contacts/Customers:** Extracts contact/customer information from the API response, handling both contacts and customers.
6.  **IFContacts/IFCustomers:** Checks if a matching contact/customer was found in Syncro.
7.  **GetTicket:** If a contact was found, retrieves any open tickets in Syncro associated with that contact.
8.  **IFMoreThanOne:** Checks if any open tickets exist for the contact in Syncro.
9.  **UpdateTicket:** If an open ticket exists, adds a comment to the existing ticket with information about the call.
10. **CreateTicket:** If no open ticket exists, creates a new ticket in Syncro with details about the call.
11. **CreateTicketForCustomer:** If the phone number matched a customer and not a contact, create a new ticket under the customer.
12. **ForGoogle/ForGoogle1/ForGoogle2:** Formats the Dialpad call ID and Syncro ticket ID to save on Google Sheets.
13. **Google Sheets:** Appends the call ID and ticket ID to a Google Sheet for logging purposes.

## Services:

-   Dialpad
-   Syncro
-   Google Sheets

## Hashtags:

#n8n #automation #Dialpad #Syncro #ticketing
