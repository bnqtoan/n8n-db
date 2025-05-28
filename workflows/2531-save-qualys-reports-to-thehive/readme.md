# Save Qualys Reports to TheHive

## Use cases:
- Automatically create cases in TheHive for newly generated Qualys vulnerability reports.
- Streamline the process of vulnerability management by centralizing Qualys reports within TheHive for security analysts.
- Archive Qualys reports for compliance and historical tracking purposes.

## How it works:
1.  The workflow is triggered either manually or on a schedule (every hour).
2.  It sets global variables like the Qualys API base URL and a timestamp for tracking processed reports.
3.  The workflow retrieves the last timestamp from a dedicated "Timestamp Storage" sub-workflow.
4.  It fetches a list of finished reports from the Qualys API.
5.  The XML response is converted to JSON format.
6.  It filters the reports, excluding those already processed based on their creation timestamp.
7.  For each new report:
    *   A case is created in TheHive, prepopulated with report details like ID, type, and launch datetime.
    *   The Qualys report is downloaded.
    *   The downloaded report is attached to the newly created case in TheHive.
8.  Finally, the timestamp in the "Timestamp Storage" sub-workflow is updated to the current time, ensuring only new reports are processed on the next run.

## Services:
- Qualys API
- TheHive
- n8n API (for updating the timestamp in the sub-workflow)

## Hashtags:
#n8n #automation #Qualys #TheHive #vulnerabilitymanagement
