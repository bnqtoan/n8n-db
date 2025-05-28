# Email Threat Analyzer Workflow

## Use cases:

- **Automated Threat Intelligence:** Automatically create TheHive alerts from email attachments and analyze them for malicious indicators (IOCs) like domains, emails, and IPs.
- **Incident Response Automation:** Streamline incident response by automatically creating and updating cases in TheHive with relevant IOCs extracted from email attachments.
- **Security Alert Enrichment:** Enrich security alerts with threat intelligence data from Cortex and OTX (AlienVault Open Threat Exchange) to provide security analysts with more context.

## How it works:

1.  **IMAP Email:** The workflow starts by monitoring an IMAP email inbox for new emails.
2.  **TheHive (Create Alert):** When a new email arrives, the workflow creates an alert in TheHive based on the email attachment. The alert includes the filename, source, and message ID.
3.  **Create Case:** It promotes the alert to a case in TheHive.
4.  **Case (Get):** Retrieves the created case's information.
5.  **Wait:** Pauses for 5 seconds to ensure the case has been created before moving forward
6.  **Observable (Get):** Retrieves observable based on case id
7.  **Analyzer Email (Execute Analyzer):** Executes a Cortex analyzer on the email attachment (specified by `attachment_0`) to extract IOCs.
8.  **Cortex (Job Report):** Retrieves the report from the Cortex analysis job.
9.  **IF:** It evaluates if the Cortex report has identified a domain, email, or IP as an IOC (Indicator of Compromise).
10. **Update Case Domain/Email/IP (Create Observable):** If any IOCs are identified, it creates or updates the case with observables containing the domain, email, or IP address and tags them as `Domain`.
11. **OTX IP/DOMAIN/Email (Execute Analyzer):** Execute analyzers for each observable previously created.

## Services:

-   **IMAP:** Reads emails from an IMAP server (e.g., Gmail, Outlook).
-   **TheHive:** Creates and updates alerts and cases in TheHive, a security incident response platform.
-   **Cortex:** Analyzes observables (files, domains, IPs, etc.) using various analyzers for threat intelligence.
-   **AlienVault OTX:** Provides threat intelligence data through Cortex analyzers.

## Hashtags:

#n8n #automation #security #thehive #cortex #email #threatintelligence #incidentresponse
