# Github to TravisCI Trigger

## Use cases:

*   Automatically trigger a TravisCI build whenever a `push` event occurs on a specific GitHub repository.
*   Start a TravisCI build when a new pull request is `opened` in a GitHub repository.
*   Use a GitHub repository as a trigger and depending on the event or action execute different actions.

## How it works:

1.  The workflow starts with a "Github Trigger" node, configured to listen for `push` and `pull_request` events on the `n8n-io/n8n` GitHub repository. It uses OAuth2 authentication to access the GitHub API.
2.  The "IF" node checks the event type received from GitHub. It verifies if the event is either a "push" event or a "pull request" that was opened.
3.  If the condition in the "IF" node is met, the workflow triggers a TravisCI build using the "TravisCI" node. The repository slug is dynamically determined from the GitHub event data and passed to the TravisCI node. Additional fields can be configured, but in this case, no additional data is sent.
4.  If the condition in the "IF" node is not met, the workflow does nothing because goes to the "NoOp" node.

## Services:

*   GitHub
*   Travis CI

## Hashtags:

#n8n #GitHub #TravisCI #CI #Automation
