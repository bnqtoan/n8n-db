# Customer Count Workflow

## Use cases:

-   **Dashboard Metric:**  Periodically retrieve and display the total number of customers in a dashboard to monitor growth.
-   **Reporting:** Automatically include the customer count in weekly or monthly reports to track business performance.
-   **Notification Trigger:** Send an alert when the customer count reaches a specific threshold, indicating a milestone.

## How it works:

1.  **Manual Trigger:** The workflow is initiated manually by clicking the "Execute Workflow" button in n8n.
2.  **Get Customer Data:** The "Customer Datastore (n8n training)" node retrieves all customer records from the datastore. This node is configured to perform the `getAllPeople` operation.
3.  **Calculate Customer Count:** The "Set" node receives the list of customer records and calculates the total number of customers.  It then stores this count in a variable called `itemCount`. Finally, it is configured to `keepOnlySet`, therefore the output is the `itemCount` only.

## Services:

-   n8n Training Customer Datastore

## Hashtags:

#n8n #automation #customernumbers #reporting #datasources
