# Linear Project Status and End Date to Productboard feature Sync

## Use cases:

- **Automated Feature Status Updates:** Automatically update the status of Productboard features based on changes to the status of linked Linear projects, ensuring alignment between engineering and product teams.
- **Timeline Synchronization:** Keep the target dates of Productboard features synchronized with the target dates of corresponding Linear projects, providing a clear roadmap to stakeholders.
- **Real-time Notifications:** Receive Slack notifications whenever a Productboard feature is updated due to a change in the associated Linear project, keeping relevant teams informed.

## How it works:

1.  **Linear Trigger:** The workflow starts when a Linear project is updated. There are two Linear Trigger nodes to allow for webhooks on different teams.
2.  **Set Linear Project ID:** Extracts the project ID, URL, status, start date, and target date from the Linear project update.
3.  **Get Productboard Feature ID:** Uses a custom field in Productboard to find the associated feature ID based on the Linear project URL.
4.  **Split Out:** Splits the data from the Productboard API response into individual items for processing.
5.  **Edit Fields:** Extracts the Linear URL and Productboard feature ID from the Productboard API response.
6.  **Merge:** Merges the Linear project data with the Productboard feature ID, using the Linear project URL as a common key.
7.  **Map Linear to Productboard Status:** Maps the Linear project status to a corresponding Productboard status (e.g., "In Progress" in Linear becomes "In progress" in Productboard).
8.  **Code:** Converts the linear status to the corresponding productboard status.
9.  **Merge:** Combines the original data with the mapped Productboard status.
10. **Get Productboard Feature Details:** Retrieves the existing details of the Productboard feature to prevent redundant updates.
11. **Merge:** Merges the Productboard feature details with the other data.
12. **If:** Compares the mapped Productboard status to the current status in Productboard. Also compares target dates between Linear and Productboard. Proceeds only if there's a difference.
13. **Update Productboard Status & Timeframe:** Updates the status and timeframe of the Productboard feature with the new values from Linear.
14. **Slack Notification:** Sends a Slack message notifying the team that the Productboard feature has been updated, including a link to the feature in Productboard and details about the updates.

## Services:

-   Linear
-   Productboard
-   Slack

## Hashtags:

#n8n #automation #workflow #Linear #Productboard
