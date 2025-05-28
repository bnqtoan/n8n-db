# My Workflow

## Use cases:

1.  **Automated Threat Intelligence Enrichment for SIEM Alerts:** This workflow automatically enriches SIEM alerts with MITRE ATT&CK framework data, providing cybersecurity analysts with immediate context and remediation steps.
2.  **Incident Response Automation for Zendesk Tickets:** By integrating with Zendesk, the workflow can automatically update tickets with relevant MITRE ATT&CK information, aiding in faster incident analysis and resolution.
3.  **Chat Interface for Cybersecurity Knowledge:** The workflow allows users to query a MITRE ATT&CK-based vector store through a chat interface, facilitating quick access to cybersecurity knowledge and best practices.

## How it works:

1.  **Data Ingestion:** The workflow starts either with a chat message or by fetching all open tickets from Zendesk, or by manually triggering a pull of Mitre Data from a Google Drive file.
2.  **MITRE ATT&CK Enrichment:** An AI Agent (powered by OpenAI) analyzes the alert data or ticket description, identifying relevant Tactics, Techniques, and Procedures (TTPs) from the MITRE ATT&CK framework. A vector store (Qdrant) is used to quickly retrieve pertinent information related to MITRE attack framework.
3.  **Remediation and Contextualization:** The AI Agent also suggests actionable remediation steps, cross-references historical patterns, and recommends external resources, outputting the response in HTML format.
4.  **Zendesk Ticket Update/Chat Response:** The Zendesk ticket is updated with a summary of the analysis, the identified MITRE ATT&CK technique ID and tactic, or the result is delivered through chat.
5.  **Vector Store Update (Optional):** The workflow can update a Qdrant vector store with data from a Google Drive file, preparing the data to be queried in the previous steps.

## Services:

*   OpenAI
*   Qdrant
*   Google Drive
*   Zendesk

## Hashtags:

#n8n #automation #cybersecurity #mitreattack #incidentresponse
