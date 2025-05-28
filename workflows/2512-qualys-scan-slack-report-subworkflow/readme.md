# Create Qualys Scan Slack Report Subworkflow

## Use cases:

- **Automated Vulnerability Reporting:** Automatically generate and post Qualys vulnerability scan reports to a Slack channel for immediate review by security teams.
- **Scheduled Compliance Reporting:** Schedule the generation of compliance reports and deliver them to stakeholders via Slack to ensure timely auditing and adherence to security policies.
- **On-Demand Security Assessments:** Allow users to initiate Qualys scans and receive reports directly in Slack, facilitating rapid security assessments and incident response.

## How it works:

1.  **Triggered by parent workflow**: Triggered via Slack Modal
2.  **Set Global Variables:** Sets global variables such as `base_url` for the Qualys API endpoint, `output_format` (e.g., "pdf"), `report_title`, and `template_name` which retrieves its data from the 'Demo Data' node.
3.  **Fetch Report IDs:** Retrieves a list of available report templates from Qualys using an HTTP GET request.
4.  **Convert XML to JSON:** Converts the XML response from Qualys into JSON format for easier data manipulation.
5.  **Launch Report:** Sends a POST request to the Qualys API to launch a new report based on the specified template ID, output format, and report title.  It dynamically retrieves the `template_id` from the `template_name`.
6.  **Convert Report Launch XML to JSON:** Converts the XML response from the report launch request to JSON.
7.  **Loop Over Items:** Initiates a loop to repeatedly check the status of the report.
8.  **Wait 1 Minute:** Pauses the workflow for one minute before checking the report status again.
9.  **Check Status of Report:** Sends an HTTP GET request to the Qualys API to retrieve the status of the launched report by report ID.
10. **Convert Report List to JSON:** Converts the XML response from the report status check into JSON format.
11. **Is Report Finished?:** Checks the report status. If the status is "Finished," the workflow proceeds to download the report. Otherwise, it loops back to the "Wait 1 Minute" node.
12. **Download Report:** Downloads the completed report from the Qualys API.
13. **Slack:** Posts the downloaded report as a file to a specified Slack channel along with a formatted message containing report details such as ID, launch time, output format, size, status, and expiration time.

## Services:

-   Qualys API
-   Slack API

## Hashtags:

#n8n #automation #Qualys #Slack #securityreporting
