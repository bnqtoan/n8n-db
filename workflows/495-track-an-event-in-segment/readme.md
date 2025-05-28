## Workflow: Track Events in Segment

This n8n workflow automates the process of sending tracking events to Segment.

**Use cases:**

*   **Event Tracking:** Track specific user actions (e.g., button clicks, form submissions) in your application and send them to Segment for analytics and marketing purposes.
*   **Data Enrichment:** Enrich user profiles in Segment with custom events, enabling more personalized experiences.

**How it works:**

1.  The workflow is initiated manually using the "On clicking 'execute'" node (Manual Trigger).
2.  The "Segment" node then sends a tracking event to your Segment account.  The specific event details must be configured within the "Segment" node parameters. Crucially, the `event` parameter in the Segment node MUST be populated to specify *what* event to track. This workflow, as provided, is incomplete because the event name is blank, but the workflow's purpose is clearly to track events. You also need to connect the Segment node to your Segment account using the correct credentials.

**Services:**

*   Segment

**Hashtags:**

#n8n #segment #analytics #eventtracking #automation
