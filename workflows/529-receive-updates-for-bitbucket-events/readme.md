# Bitbucket Repository Push Trigger Workflow

## Use cases

*   **Automated Notifications:** Send a notification to a Slack channel or via email whenever code is pushed to a specific Bitbucket repository.
*   **Continuous Integration Trigger:** Automatically trigger a CI/CD pipeline (e.g., Jenkins, GitLab CI) upon a code push to a designated Bitbucket repository.
*   **Backup Codebase:** Automatically backup the repository to a storage when a push is performed.

## How it works

This workflow is triggered whenever a `repo:push` event occurs on the specified Bitbucket repository ("test"). The workflow starts with the "Bitbucket Trigger" node. This node listens for the webhook event from Bitbucket.  Currently, this workflow only triggers on the event. To make use of the information sent by the trigger, additional nodes need to be added and connected to the "Bitbucket Trigger" node to perform the desired actions.

## Services

*   Bitbucket

## Hashtags

#n8n #Bitbucket #Automation #Webhook #CI/CD
