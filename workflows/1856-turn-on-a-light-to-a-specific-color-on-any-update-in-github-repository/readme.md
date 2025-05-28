# Turn a Light Red on GitHub Repository Update

## Use cases:

- **Notification System:** Use this workflow to visually signal updates to a critical GitHub repository, such as a production system's configuration or a security-related repository. A light turning red could indicate a new commit, issue, or pull request, alerting the team.
- **Build Status Indication:** Integrate this workflow with a CI/CD pipeline. Upon a successful or failed build (indicated by a GitHub update), change the light color to green or red, respectively, providing a physical build status indicator.
- **Collaborative Awareness:** In a shared workspace, this workflow can enhance awareness of repository activity. For example, a team working on a project could use this to know immediately when changes are pushed to the main branch.

## How it works:

This workflow monitors a specific GitHub repository for any updates and triggers a Home Assistant action to turn a light red.

1.  **GitHub Trigger ("On any update in repository"):** This node listens for any event (pushes, pull requests, issues, etc.) on the specified GitHub repository (`DemoRepo` owned by `dummydavid`). You will need to update the Github API credential.
2.  **Home Assistant ("Turn a light red"):** Upon receiving a trigger from the GitHub node, this node connects to your Home Assistant instance. It calls the `light.turn_on` service to turn on the light entity `light.lamp` and sets its color to red (RGB: 255, 0, 0). You may need to update the light entity with the `entity_id` of your light.

## Services:

-   GitHub API: Used to monitor updates in a specified repository.
-   Home Assistant API: Used to control smart home devices, specifically turning on a light and setting its color.

## Hashtags:

#n8n #GitHub #HomeAssistant #Automation #SmartHome
