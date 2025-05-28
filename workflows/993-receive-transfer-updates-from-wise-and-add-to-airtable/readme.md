# Wise Transfer to Airtable

## Use cases:

- Automatically log Wise transfer details (ID, date, reference, and amount) to an Airtable base for tracking and reporting purposes.
- Create a backup of Wise transfer data in Airtable for auditing or analysis.
- Monitor Wise transfers and trigger further actions in Airtable based on specific transfer details.

## How it works:

1.  **Wise Trigger:** This node listens for `tranferStateChange` events from Wise, specifically for `profileId`: `16138858`.  When a transfer state changes, it triggers the workflow.
2.  **Wise:** This node retrieves the full transfer details from Wise using the transfer ID obtained from the trigger event (`{{$json["data"]["resource"]["id"]}}`).
3.  **Set:** This node extracts specific data points from the Wise transfer details, including Transfer ID, Date, Reference, and Amount. It then formats these values into a structured data object, discarding all other input data.
4.  **Airtable:** This node appends a new record to "Table 1" in a specified Airtable base using the data prepared by the Set node.  The data written to Airtable consists of the Transfer ID, Date, Reference and Amount.

## Services:

-   Wise (formerly TransferWise)
-   Airtable

## Hashtags:

#n8n #Wise #Airtable #Automation #TransferTracking
