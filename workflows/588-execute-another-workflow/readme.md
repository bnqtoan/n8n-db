# My Workflow

## Use cases:

*   **Triggering a Sub-Workflow:** This workflow can be used as a parent workflow to trigger another pre-defined workflow (ID: 1) on demand. This allows for modular workflow design and reusability.
*   **Manual Orchestration:** This workflow enables a user to manually initiate a complex process that is defined in a separate, reusable workflow. This is useful for situations where a task needs to be started by a human.

## How it works:

The workflow is initiated manually using the "On clicking 'execute'" node. This trigger then activates the "Execute Workflow" node, which, in turn, starts another workflow identified by the ID '1'. Essentially, it's a button that launches another workflow.

## Services:

*   This workflow orchestrates other n8n workflows; it doesn't directly interact with external services. The services used will depend on the workflow with ID 1.

## Hashtags:

*   #n8n
*   #workflow
*   #automation
*   #subworkflow
*   #orchestration
