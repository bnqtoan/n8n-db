# Very quick quickstart

## Use cases:

- Extract customer data from a datastore for reporting purposes.
- Transform customer information into a specific format for integration with another system.
- Retrieve customer details for use in a personalized email campaign.

## How it works:

1.  The workflow starts when you manually click "Test Workflow".
2.  The "Customer Datastore" node retrieves all customer data.
3.  The "Edit Fields1" node extracts the id, name, and notes fields and assigns them to new fields named `customer_id`, `customer_name`, and `customer_description` respectively.
4.  The extracted data is then ready for further processing or use in subsequent nodes (not shown in this workflow).

## Services:

- Customer Datastore (likely a mock or internal database for training)

## Hashtags:

#n8n #automation #customerexraction #dataformatting
