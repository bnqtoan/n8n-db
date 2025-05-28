# Contabo Backups Workflow

## Use cases:

-   **Automated Daily Backups:** Automatically creates daily snapshots of your Contabo VPS instances to ensure data is regularly backed up.
-   **Disaster Recovery:** Provides a reliable backup strategy, allowing you to quickly restore your VPS instances in case of data loss or system failure.
-   **Simplified Backup Management:** Simplifies the process of creating and managing VPS snapshots, saving time and effort.

## How it works:

1.  **Trigger:** The workflow is triggered either daily at midnight using the "Schedule Trigger" or manually using the "When clicking ‘Test workflow’" trigger.
2.  **Date & Time:** The "get Date & Time" node retrieves the current date and time. This timestamp will be used to name the snapshot.
3.  **Format Date:** The "Formatted Date" node formats the current date into `dd-MM-yyyy` format.
4.  **Credentials:**  The "Credential" node stores the necessary credentials (CLIENT\_ID, CLIENT\_SECRET, API\_USER, API\_PASSWORD) for authenticating with the Contabo API. *Important: You will need to populate these values with your actual Contabo API credentials.*
5.  **Authorization:** The "Authorization" node uses the credentials to obtain an access token from the Contabo authorization server.
6.  **UUID Generation:** The "UUID" and "TRACE ID" nodes generate UUIDs for the `x-request-id` and `x-trace-id` headers, which are required by the Contabo API.
7.  **List Instances:** The "List instances" node retrieves a list of your Contabo instances using the API.
8.  **Split Out Instances:**  The "Split Out" node splits the list of instances into individual items for processing.
9.  **UUID1 Generation:** The "UUID1" node generates a new UUID for the request
10. **List Snapshots:** For each instance, the "List snapshots" node retrieves a list of existing snapshots for that instance.
11. **Merge:** The "Merge" node combines the instance data with its snapshot list data.
12. **Check for existing snapshot:** "Whether snapshot there is no snapshot" node checks if the `List snapshots` is empty or not.
13. **Set snapshot attributes:** The "set snapshot attributes" or "Set snapshot attributes" nodes set `instanceId` and `displayName` to be used later when creating a new snapshot.
14. **Conditional Snapshot Creation:**
    *   **If there are no snapshots:** The workflow goes to the `set snapshot attributes` node and generates new UUID with `UUID2` node. The  "Create a new snapshot" node create a new snapshot for the instance, using the formatted date as the snapshot name and description.
    *   **If there are snapshots:** The workflow goes to the `Set snapshot attributes` node, generates new UUID with `UUID3` node and `UUID4` node. The  "Delete existing snapshot" node deletes the existing snapshot and "Create a new snapshot1" creates a new snapshot for the instance, using the formatted date as the snapshot name and description.

## Services:

-   Contabo API ([https://api.contabo.com/](https://api.contabo.com/))
-   [uuidgenerator](https://www.uuidgenerator.net/api)

## Hashtags:

#n8n #automation #Contabo #backup #VPS
