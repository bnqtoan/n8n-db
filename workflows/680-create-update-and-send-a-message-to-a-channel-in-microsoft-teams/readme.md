# My Workflow

## Use Cases

- **Team Provisioning Automation:** Automatically configure a Microsoft Teams team with specific settings when a button is clicked, streamlining the team setup process.
- **Configuration Change Propagation:** Ensure consistent configurations across multiple teams by updating team settings and sending notifications upon changes.
- **Automated Announcements:**  Send important messages or notifications to a Microsoft Teams channel following a manual trigger.

## How it works

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is triggered manually.
2.  **Create/Get Team:** The "Microsoft Teams" node checks for a team called "n8n-docs-demo".
3.  **Update Team:** The "Microsoft Teams1" node updates the team's settings (likely the name to "n8n-documentation-demo") with the ID received from the previous node.
4.  **Post Message:** The "Microsoft Teams2" node sends a message "n8n rocks!" to the channel with the ID received from the first Microsoft Teams node.

## Services

*   Microsoft Teams

## Hashtags

#n8n #MicrosoftTeams #Automation #TeamManagement #Workflow
