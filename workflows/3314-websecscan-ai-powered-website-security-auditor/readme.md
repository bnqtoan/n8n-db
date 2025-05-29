# Website Security Scanner

## Use cases:

-   **Automated Security Audits:** Regularly scan websites for common security vulnerabilities and misconfigurations, providing automated reports to security teams or website owners.
-   **Pre-Deployment Security Checks:** Integrate into a CI/CD pipeline to automatically check new website deployments for security issues before they go live.
-   **Competitive Analysis:** Analyze the security posture of competitor websites to identify their strengths and weaknesses.

## How it works:

1.  **Form Trigger:** The workflow starts with a "Landing Page Url" node, which is triggered by a webhook. It collects the URL of the website to be scanned via a form submission.
2.  **Scrape Website:** The "Scrape Website" node fetches the HTML content and headers of the specified URL using an HTTP request.
3.  **Extract Headers for Debug**: the raw headers are extracted
4.  **Parallel Security Analysis:** The workflow splits into two parallel paths:
    *   **Configuration Audit:** "Extract Headers for Debug" extract the response headers and then "Security Configuration Audit" uses an OpenAI Agent to analyze the headers, cookies, and overall configuration for security misconfigurations.
    *   **Vulnerability Audit:** "OpenAI Headers Analysis" and "OpenAI Content Analysis" read the http and generate a simple model. "Security Vulnerabilities Audit" uses an OpenAI Agent to analyze the HTML content for potential client-side vulnerabilities like XSS and information leakage.
5.  **Merge Results:** The "Merge Security Results" node combines the findings from both audit paths into a single data stream.
6.  **Aggregate Audit Results:** The "Aggregate Audit Results" node aggregates the information.
7.  **Process Audit Results:** The "Process Audit Results" node processes the combined results. The code extracts security headers, determines a security grade (A-F), and prepares the data for the email report.
8.  **Convert to HTML:** The "convert to HTML" node convert all the result in a rich email format.
9.  **Send Security Report:** The "Send Security Report" node sends an email containing a detailed security report to the specified recipient. The report includes the security grade, a summary of findings, and recommendations for remediation.

## Services:

-   OpenAI API: Used for analyzing security configurations and identifying vulnerabilities.
-   Gmail: Used for sending security audit reports via email.

## Hashtags:

#n8n #automation #security #websecurity #openai
