# Monitor_security_advisories

## Use Cases

- **Automated Security Alerting:** Automatically monitors Palo Alto security advisories and notifies the relevant team members about critical vulnerabilities, ensuring timely responses.
- **Incident Management Integration:** Creates Jira tickets for specific advisories, such as those related to GlobalProtect or Traps, streamlining the incident response process.
- **Targeted Communication:** Sends customized email notifications to customers, informing them about security advisories relevant to their products, enhancing customer support and security awareness.

## How it Works

1.  **Trigger:** The workflow is triggered either manually or automatically every 24 hours at 1 AM, using the "When clicking 'Execute Workflow'" or "Run workflow every 24 hours at 1am" node respectively.
2.  **Fetch Advisories:** The "Get Palo Alto security advisories" node fetches the latest security advisories from the specified RSS feed.
3.  **Extract Information:** The "Extract info" node parses the title of each advisory to extract the type, subject, and severity of the vulnerability.
4.  **Deduplication:** The "Check if posted in last 24 hours" node filters out advisories that have already been processed in the last 24 hours, preventing duplicate notifications.
5.  **Filter by Product:** The "GlobalProtect advisory?" and "Traps advisory?" nodes filter the advisories based on whether they contain "GlobalProtect" or "Traps" in their titles, respectively.
6.  **Create Jira Ticket (If Applicable):** If an advisory matches the "GlobalProtect advisory?" filter, the "Create Jira issue" node creates a new Jira ticket with the advisory details.
7.  **Get Customers:** The "Get customers" node retrieves a list of customers and their email addresses from a data source (e.g., a database or Google Sheet).
8.  **Email Notification:** The "Email customers" node sends a customized email notification to each customer, informing them about the relevant security advisory, including a link to the full advisory.

## Services

-   Palo Alto Networks RSS Feed
-   Jira
-   Gmail

## Hashtags

#n8n #automation #security #vulnerability #incidentmanagement
