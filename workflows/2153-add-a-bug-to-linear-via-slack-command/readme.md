# Bug Reporter for Linear Issues

## Use cases:

- **Streamline Bug Reporting:** Allow users to quickly report bugs via a Slack slash command, automatically creating corresponding issues in Linear.
- **Centralized Bug Tracking:** Consolidate bug reports from Slack into a structured issue management system (Linear), facilitating prioritization and resolution.
- **Improved Communication:** Automatically send a message to the reporter in Slack with a direct link to the newly created Linear issue, encouraging them to add detailed information.

## How it works:

1.  **Slack Slash Command Trigger:** A user executes a `/bug` slash command in Slack, providing a brief description of the bug. (Node: `Bug Webhook`)
2.  **Issue Creation in Linear:** The workflow captures the bug description and user information from the Slack command. It then uses the Linear API to create a new issue with the provided title, a predefined team, labels, and a template description prompting the user to add further details (reproduction steps, expected vs. actual behavior, etc.). (Node: `Create linear issue`)
3.  **Setup team and labels:** Some `Set` nodes with IDs for team and labels are prepared for the issue creation in linear. (Node: `Set me up`)
4.  **Confirmation Message in Slack:** A hidden message is sent back to the user in Slack, confirming the bug report and providing a direct link to the newly created Linear issue. This encourages the user to add comprehensive details to the issue directly in Linear. (Node: `Hidden message to add bug details`)
5.  **Helper nodes for set up:** There are also helper nodes that help you set up the workflow (Nodes: `Get all linear teams`, `Get linear labels for a team`, `Set team ID`).

## Services:

-   Slack
-   Linear

## Hashtags:

#n8n #automation #workflow #bugreporting #linear #slack
