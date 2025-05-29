# 365 Service Alerts: Summarize and push alert to Slack

## Use cases:

- **Real-time Incident Notification:** Automatically post summarized Microsoft 365 service alerts to a dedicated Slack channel for IT support teams, ensuring they are immediately aware of any disruptions.
- **Proactive Communication:** Keep stakeholders informed about ongoing Microsoft 365 incidents and their potential impact, even outside of regular business hours.
- **Escalation and Triage:** Facilitate quicker triage and escalation of Microsoft 365 incidents by providing concise summaries, impact assessments, and direct links to official incident information.

## How it works:

1.  **Check for 365 Service Alert:** Monitors a specific Outlook inbox (`o365mc@microsoft.com`) for new emails, triggering the workflow whenever a new message arrives.
2.  **Extract M365 Incident text & link:** Extracts the incident description and the incident link from the HTML content of the email using the `cheerio` library.
3.  **Summarize service alert:** Uses an OpenAI model (GPT-4O-MINI) to summarize the extracted text into a concise message suitable for Slack, including the service name, a short issue summary, whether users may be affected and incident ID and link.
4.  **Generate Slack Block:** Formats the summarized message into a Slack Block Kit message, including a button that links to the full incident details.
5.  **Post outage to Slack:** Sends the formatted Slack message to a specified channel, alerting the team to the incident.
6.  **Clear email alert from mailbox:** Deletes the original email alert from the mailbox.

## Services:

-   Microsoft Outlook 365
-   Slack
-   OpenAI

## Hashtags:

#n8n #automation #Microsoft365 #Slack #ServiceAlerts
