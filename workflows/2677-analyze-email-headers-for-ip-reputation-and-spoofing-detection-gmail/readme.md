# Email Header Analyzer

## Use cases:

- **Phishing Detection:** Analyze email headers to identify potential phishing attempts by checking the originating IP address, SPF, DKIM, and DMARC records.
- **Spam Filtering Enhancement:** Integrate the workflow with a spam filtering system to improve accuracy by evaluating email authentication results and IP reputation.
- **Email Forensics:** Investigate the source and authenticity of suspicious emails by examining the email headers and associated metadata.

## How it works:

1.  **Trigger:** The workflow is triggered either by a Gmail trigger that monitors a Gmail inbox or a Webhook, listening for HTTP POST requests containing email headers.
2.  **Header Extraction:** The workflow extracts and prepares email headers for analysis.
3.  **IP Address Analysis:** It extracts the originating IP address from the email headers and queries the IPQualityScore API and IP-API to gather information about the IP's reputation, geographic location, and associated organization.
4.  **Authentication Checks:** The workflow checks for the presence and validity of SPF, DKIM, and DMARC records in the email headers. It extracts the authentication results and categorizes them as "pass," "fail," "neutral," "error," or "unknown."
5.  **Data Aggregation:** The extracted IP information, reputation data, and authentication results are combined into a structured JSON object.
6.  **Response:** Finally, the workflow sends the structured data as a response to the webhook request, providing a comprehensive analysis of the email's legitimacy.

## Services:

-   **Gmail:** Used as a trigger to monitor incoming emails.
-   **IPQualityScore API:** Used to assess the reputation and risk associated with the originating IP address.
-   **IP-API:** Used to retrieve geographic location and organizational details of the originating IP address.

## Hashtags:

#n8n #emailanalysis #security #automation #phishingdetection
