# Phishing Analysis: URLScan.io and VirusTotal

## Use cases:

- **Automated Phishing Detection:** Automatically scan URLs from emails for potential phishing threats using URLScan.io and VirusTotal.
- **Security Alerting:** Send a Slack message with a detailed report of the scan results, including the email subject, sender, date, and verdicts from both URLScan.io and VirusTotal.
- **Email Triage:** Efficiently process and triage unread emails, marking them as read after analysis to prevent re-processing and maintain an organized inbox.

## How it works:

1.  **Trigger:** The workflow is initiated either manually (When clicking "Execute Workflow") or on a schedule (Schedule Trigger).
2.  **Get Unread Messages:** Fetches all unread emails from a Microsoft Outlook account (Get all unread messages).
3.  **Mark as Read:** Marks the fetched emails as read to avoid re-processing (Mark as read).
4.  **Split and Extract URLs:** Splits the emails into individual items and extracts URLs from the email body using a Python script (Split In Batches, Find indicators of compromise). The `ioc-finder` Python library is used to identify potential URLs.
5.  **URL Validation:** Checks if URLs have been found, continuing the work flow only when a URL has been found (Has URL?).
6.  **URL Scanning:** Scans the extracted URL with URLScan.io (URLScan: Scan URL) and VirusTotal (VirusTotal: Scan URL) to identify potential threats.
7.  **Wait for Scan Completion:** Pauses execution for 1 minute to allow URLScan.io to complete its scan and generate a report (Wait 1 Minute).
8.  **Get Scan Reports:** Retrieves the scan reports from URLScan.io (URLScan: Get report) and VirusTotal (VirusTotal: Get report).
9.  **Error Handling:** Checks to see if the URLScan scan had an error. If it did not have an error, then merge the report. if it did have an error, skip to the wait and then the urlscan: get report node.
10. **Merge Reports:** Combines the URLScan.io and VirusTotal reports for a comprehensive view (Merge Reports).
11. **Filter Valid Data:** Filters the data to ensure only URLs with completed analysis are processed (Not empty?).
12. **Slack Notification:** Sends a message to a specified Slack channel with a summary of the email details and the scan results from URLScan.io and VirusTotal (sends slack message). The message includes the email subject, sender, date, URLScan report URL, VirusTotal report URL, and a combined verdict.

## Services:

-   Microsoft Outlook (via Microsoft Outlook API)
-   URLScan.io (via URLScan.io API)
-   VirusTotal (via VirusTotal API)
-   Slack (via Slack API)

## Hashtags:

#n8n #automation #phishing #security #workflow
