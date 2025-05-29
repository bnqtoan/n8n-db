# Snapshot API VPS Hostinger

## Use cases:

- **Automated VPS Backups:** Schedule daily snapshots of all your Hostinger VPS servers at a specific time (e.g., 4:00 AM) to ensure regular data backups.
- **Performance Monitoring and Alerting:** Monitor VPS metrics like CPU usage, RAM usage, and disk space, and receive notifications via WhatsApp (or other messaging service) upon snapshot creation, including the current resource utilization.
- **Disaster Recovery:** In case of server failure or data loss, quickly restore a VPS to a previous state using the created snapshots.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("When clicking ‘Test workflow’") or scheduled to run daily at 4:00 AM ("Every day 4:00am").
2.  **List VPS:** The "Hostinger API list VPS" node retrieves a list of all VPS servers associated with the configured Hostinger API credentials.
3.  **Split Data:** The "Split Out" node splits the response from the Hostinger API into individual VPS objects.
4.  **Filter Running VPS:** The "Avaliables VPS" node filters the list of VPS servers, keeping only those in the "running" state.
5.  **Get VPS Metrics:** For each running VPS, the "Get VPS Metrics" node retrieves performance metrics from the Hostinger API for the last 30 minutes.
6.  **Calculate metrics**: The "Calculate metrics" node calculates the metrics and the values of avaliables VPS
7.  **Loop Over Items:** The "Loop Over Items" node iterates through each of the filtered and running VPS servers.
8.  **WhatsApp Message (success/error):** Sends message to WhatsApp (Evolution API) including the values of VPS
9.  **Create Snapshot:** The "Create Snapshot" node triggers the creation of a snapshot for the current VPS. The workflow is configured to continue even if the snapshot creation fails ("onError": "continueErrorOutput").
10. **Wait:** Wait for 2 seconds
11. **Next VPS:** The "Next VPS" node is a no-op node that triggers the start of the next interaction of the loop
12. **Notification (Success/Failure):**
    -   On success, sends a WhatsApp message with status, date, server details, IP and metrics (CPU, RAM, Disk, OS, Uptime).
    -   On failure, sends a WhatsApp message with the error status, date, server details and IP.
13. **Loop Continuation:** After a 2-second wait, the workflow loops back to process the next VPS in the list.

## Services:

-   Hostinger API: For managing VPS servers and retrieving metrics.
-   Evolution API (WhatsApp): For sending notifications via WhatsApp.

## Hashtags:

#n8n #automation #hostinger #vps #snapshot #backup #WhatsApp
