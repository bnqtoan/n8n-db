# Automate Figma Versioning and Jira Updates with n8n Webhook Integration

## Use cases:

- **Automated Jira Updates:** Automatically add comments to Jira issues when a new version of a design is committed in Figma, keeping project stakeholders informed about design changes.
- **Centralized Design Feedback:** Streamline the feedback process by linking Figma design versions directly to relevant Jira issues, enabling easier access and collaboration.
- **Real-time Version Tracking:** Maintain a clear and up-to-date record of design iterations within Jira, facilitating better project management and reducing the risk of working with outdated designs.

## How it works:

1.  **Figma Trigger:** The workflow is initiated when a new file version is created in Figma. This is done by the Figma Commit Plugin sending a webhook to n8n with details about the design version. The trigger is set up to listen for `fileVersionUpdate` event from a specific Figma team.
2.  **Find Jira Issue:** The workflow then uses the `issueLink` data from the Figma webhook to locate the corresponding issue in Jira.
3.  **Add Comment in Issue:** After successfully finding the issue, the workflow adds a comment to it. The comment includes details such as the Figma page name, version name, design link, and a timestamp, all extracted from the Figma webhook payload.

## Services:

-   Figma
-   Jira

## Hashtags:

#n8n #automation #Figma #Jira #designworkflow
