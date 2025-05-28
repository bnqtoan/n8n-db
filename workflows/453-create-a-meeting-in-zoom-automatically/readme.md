## n8n Workflow: Zoom Meeting Creation

This workflow automates the process of creating a meeting in Zoom directly from n8n.

### Use cases:

*   **Ad-hoc Meeting Scheduling:** Quickly create Zoom meetings for immediate or future use without navigating the Zoom interface.
*   **Automated Event Trigger:** Integrate with other n8n workflows to automatically create Zoom meetings based on specific triggers (e.g., a new lead in a CRM).
*   **Meeting Automation:** Create Zoom meetings from n8n, and send the created meeting information to other services.

### How it works:

1.  The workflow is initiated manually using the "On clicking 'execute'" node. This serves as the trigger.
2.  The "Zoom" node then creates a meeting in Zoom.
    *   It sets the meeting topic to "Something" by default.
    *   Additional meeting options can be configured within the "Zoom" node's settings.

### Services:

*   Zoom

### Hashtags:

#n8n #automation #zoom #meeting #workflow
