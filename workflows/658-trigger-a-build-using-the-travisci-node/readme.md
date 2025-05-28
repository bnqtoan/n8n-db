# Trigger a build using the TravisCI node

## Use cases:

*   **Automated Testing:** Automatically trigger a new build on Travis CI whenever you push code changes to your repository, ensuring continuous integration.
*   **Scheduled Builds:** Initiate builds on a set schedule (using a different trigger node) to perform tasks like nightly regression tests.
*   **On-Demand Builds:** Manually trigger builds for testing or deployment purposes.

## How it works:

This workflow is designed to trigger a build on Travis CI.

1.  **Trigger:** The workflow starts with the "On clicking 'execute'" node, a manual trigger. This means the workflow will only run when you click the "Execute Workflow" button in n8n.
2.  **Trigger Travis CI:** The "TravisCI" node then uses the Travis CI API to trigger a new build. It requires you to configure your Travis CI credentials and specify the repository slug (owner/repository name) and branch you want to build.

## Services:

*   Travis CI

## Hashtags:

#n8n #TravisCI #CI #Automation #BuildTrigger
