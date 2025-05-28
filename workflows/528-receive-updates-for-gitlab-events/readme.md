# Gitlab Trigger Workflow

## Use cases:

- Trigger an n8n workflow whenever a change happens in a Gitlab repository.
- Create automated notifications in other platforms (e.g. Slack, Microsoft Teams) upon specific Gitlab events, such as new commits or merge requests.
- Automate tasks based on Gitlab events, such as updating documentation or deploying code.

## How it works:

This workflow is triggered by events in a specified Gitlab repository.  The "Gitlab Trigger" node listens for all events (`"events":["*"]`) occurring in the repository `"n8n-docs"` owned by `"n8n-io"`. The workflow uses the `"gitlab_creds"` credentials to authenticate with Gitlab. Once an event happens, the workflow will execute. Currently, there are no further nodes connected to the trigger node, meaning that upon trigger, the workflow execution will end. To do something with the event data, you would need to add further nodes and connect them to the Gitlab Trigger.

## Services:

- Gitlab

## Hashtags:

#n8n #gitlab #automation #webhook #git
