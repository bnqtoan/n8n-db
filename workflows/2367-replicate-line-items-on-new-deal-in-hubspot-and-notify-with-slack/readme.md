# Replicate Line Items on New Deal in HubSpot Workflow

## Use cases:

- **Automated Deal Replication:** Automatically copies line items from a won deal to a newly created deal in HubSpot, ensuring all relevant products/services are included without manual entry.
- **Sales Process Efficiency:** Streamlines the sales process by reducing the time and effort required to replicate deal information, allowing sales reps to focus on closing deals.
- **Error Reduction:** Minimizes the risk of human error associated with manually copying line items, ensuring data consistency between related deals.

## How it works:

1.  **Webhook Trigger:** The workflow is initiated by a webhook call from a HubSpot workflow. The webhook includes the IDs of both the "won" deal (the original deal with line items) and the newly created deal.
2.  **Extract Deal IDs:** The "Retrieve deals Ids" node extracts the `deal_id_won` and `deal_id_created` from the webhook's query parameters.
3.  **Get Line Items from Won Deal:** The "Get deal won line items" node uses the `deal_id_won` to retrieve all line items associated with the won deal from HubSpot using the HubSpot API.
4.  **Get SKUs from Line Items:** The "Get batch SKUs from line items" node extracts the SKUs (`hs_sku`) from the retrieved line items.
5.  **Get Product IDs by SKUs:**  The "Get Batch Product IDs by SKUs" node uses the extracted SKUs to retrieve the corresponding Product IDs (`hs_object_id`) from HubSpot.
6.  **Create Line Items and Associate to New Deal:** The "Create Batch line items based on productId and associate to deals" node creates new line items in HubSpot for the newly created deal (`deal_id_created`). These new line items are based on the Product IDs obtained in the previous step and associates them to the `deal_id_created`.
7.  **Slack Notification:** The "Slack" node sends a message to a specified Slack channel, notifying users that the line items have been successfully replicated. The message includes links to the n8n workflow execution, the won deal, and the new deal in HubSpot.

## Services:

*   HubSpot
*   Slack

## Hashtags:

#n8n #automation #hubspot #sales #workflow
