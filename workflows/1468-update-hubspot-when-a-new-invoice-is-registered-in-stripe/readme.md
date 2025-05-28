# On new Stripe Invoice Payment update Hubspot and notify the team in Slack

## Use cases:

- Automatically update HubSpot deals to reflect successful invoice payments in Stripe.
- Notify a designated Slack channel when a Stripe invoice is paid, providing key details like amount, currency, and customer information.
- Alert the team if a Stripe payment is received without a corresponding Purchase Order (PO) number or if a deal cannot be found in HubSpot for a specific payment.

## How it works:

1.  **Stripe Trigger ("When Invoice Paid"):** This node listens for `invoice.payment_succeeded` events from Stripe. When an invoice is successfully paid, the workflow is triggered.
2.  **Check for PO Number ("If no PO Number"):** Checks if the Stripe payment has a PO number attached. If the PO Number field is empty, it will trigger a notification on slack to inform that the invoice has no PO Number. If the PO Number field is not empty, the workflow continues to find the deal to update.
3.  **Find Deal in Hubspot ("Find Deal based on PO Number"):** This node uses the PO number from the Stripe payment to search for a corresponding deal in HubSpot.
4.  **Check if deal was found ("If no deal found for PO"):** This node checks if the previous step has found a deal. If not, send a notification to Slack stating that the Deal was not found. If a deal was found, continue.
5.  **Update Deal in HubSpot ("Update Deal to Paid"):** The identified HubSpot deal is updated, setting the "paid" property to "Yes".
6.  **Send Invoice Paid Notification to Slack ("Send invoice paid message"):** A message is sent to the "team-accounts" Slack channel, notifying the team that an invoice has been paid. The message includes details such as amount, currency, customer name, customer email, and the PO number, accompanied by the transaction ID.
7.  **Send "No PO Number" Notification to Slack ("Send no PO Message"):** If the "If no PO Number" node determines that no PO number exists, a message is sent to the "team-accounts" Slack channel, alerting the team about the payment without a PO number.
8. **Send "Deal Not Found" Notification to Slack ("Send Deal not found message"):** If the "If no deal found for PO" node determines that no deal was found for that payment, a message is sent to the "team-accounts" Slack channel, alerting the team about the payment without a deal.

## Services:

-   Stripe
-   HubSpot
-   Slack

## Hashtags:

#n8n #automation #stripe #hubspot #slack
