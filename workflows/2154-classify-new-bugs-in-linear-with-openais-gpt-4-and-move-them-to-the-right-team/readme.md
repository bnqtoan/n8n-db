# Linear Issue Auto-Classification Workflow

## Use cases:

- **Automated Ticket Routing:** Automatically route newly created Linear issues to the appropriate team based on the issue title and description.
- **Improved Team Focus:** Ensure that each team focuses on the issues that fall within their area of expertise, reducing context switching and improving efficiency.
- **Streamlined Bug Reporting:** Simplify the bug reporting process by automatically categorizing and assigning issues without manual intervention.

## How it works:

1.  **Linear Trigger:** The workflow starts when a new issue is created or updated in Linear.
2.  **Filter Tickets:** The workflow filters tickets to only process those that need classification, based on criteria like missing description and a specific label.
3.  **Set Teams:** A "Set me up" node contains the teams, area of responsibilities and slack channel name to report to.
4.  **OpenAI:** The OpenAI node uses the issue's title and description to determine which team is best suited to handle the issue. A prompt gives context to the model, the content of the ticket and which answer to give.
5.  **Get all linear teams:** Gets all the teams from Linear.
6.  **Merge Data:** Combines the original Linear issue data with the OpenAI's classification result and the list of all teams.
7.  **Check if AI was able to find a team:** This step verifies if OpenAI was able to identify a suitable team.
8.  **Set Team ID:** If a team is found, the corresponding team ID is retrieved from the "Get all linear teams" data based on the team name provided by OpenAI.
9.  **Update team:** Update the Linear ticket to assign it to the team that AI found.
10. **Notify in Slack:** If a team wasn't able to get identified, it notifies in a slack channel.

## Services:

-   Linear
-   OpenAI
-   Slack

## Hashtags:

#n8n #automation #workflow #linear #openai #slack
