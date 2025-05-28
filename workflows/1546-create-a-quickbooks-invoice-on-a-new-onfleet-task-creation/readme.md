# Create a QuickBooks Invoice on a New Onfleet Task Creation

## Use cases:

*   Automatically generate an invoice in QuickBooks when a new task is created in Onfleet, streamlining billing for delivery or service operations.
*   Trigger invoice creation for specific types of Onfleet tasks, such as those exceeding a certain value or requiring special handling.

## How it works:

1.  **Onfleet Trigger:** The workflow starts with the "Onfleet Trigger" node, which listens for the creation of new tasks within your Onfleet account. Whenever a new task is created in Onfleet, it triggers the workflow.
2.  **QuickBooks Online:** The "QuickBooks Online" node then takes the data from the Onfleet task and uses it to create a new invoice in your QuickBooks Online account. The node is configured to create an invoice with a zero balance, but fields like date and addresses can be mapped from the Onfleet task data.

## Services:

*   Onfleet
*   QuickBooks Online

## Hashtags:

#n8n #automation #Onfleet #QuickBooks #invoice
