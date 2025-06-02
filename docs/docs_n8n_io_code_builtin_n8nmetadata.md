[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/n8n-metadata.md "Edit this page")

# n8n metadata[#](#n8n-metadata "Permanent link")

Methods for working with n8n metadata.

This includes:

*   Access to n8n environment variables for self-hosted n8n.
*   Metadata about workflows, executions, and nodes.
*   Information about instance [Variables](../../variables/) and [External secrets](../../../external-secrets/).

Python support

You can use Python in the Code node. It isn't available in expressions.

[JavaScript](#__tabbed_1_1)[Python](#__tabbed_1_2)

Method

Description

Available in Code node?

`$env`

Contains n8n instance configuration [environment variables](../../../hosting/configuration/environment-variables/).

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$execution.customData`

Set and get custom execution data. Refer to [Custom executions data](../../../workflows/executions/custom-executions-data/) for more information.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$execution.id`

The unique ID of the current workflow execution.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$execution.mode`

Whether the execution was triggered automatically, or by manually running the workflow. Possible values are `test` and `production`.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$execution.resumeUrl`

The webhook URL to call to resume a workflow waiting at a [Wait node](../../../integrations/builtin/core-nodes/n8n-nodes-base.wait/).

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$getWorkflowStaticData(type)`

View an [example](../../cookbook/builtin/get-workflow-static-data/). Static data doesn't persist when testing workflows. The workflow must be active and called by a trigger or webhook to save static data. This gives access to the static workflow data.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$("<node-name>").isExecuted`

Check whether a node has already executed.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$itemIndex`

The index of an item in a list of items.

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

`$nodeVersion`

Get the version of the current node.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$prevNode.name`

The name of the node that the current input came from. When using the Merge node, note that `$prevNode` always uses the first input connector.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$prevNode.outputIndex`

The index of the output connector that the current input came from. Use this when the previous node had multiple outputs (such as an If or Switch node). When using the Merge node, note that `$prevNode` always uses the first input connector.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$prevNode.runIndex`

The run of the previous node that generated the current input. When using the Merge node, note that `$prevNode` always uses the first input connector.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$runIndex`

How many times n8n has executed the current node. Zero-based (the first run is 0, the second is 1, and so on).

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$secrets`

Contains information about your [External secrets](../../../external-secrets/) setup.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$vars`

Contains the [Variables](../../variables/) available in the active environment.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$version`

The node version.

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

`$workflow.active`

Whether the workflow is active (true) or not (false).

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$workflow.id`

The workflow ID.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$workflow.name`

The workflow name.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

Method

Description

`_env`

Contains n8n instance configuration [environment variables](../../../hosting/configuration/environment-variables/).

`_execution.customData`

Set and get custom execution data. Refer to [Custom executions data](../../../workflows/executions/custom-executions-data/) for more information.

`_execution.id`

The unique ID of the current workflow execution.

`_execution.mode`

Whether the execution was triggered automatically, or by manually running the workflow. Possible values are `test` and `production`.

`_execution.resumeUrl`

The webhook URL to call to resume a workflow waiting at a [Wait node](../../../integrations/builtin/core-nodes/n8n-nodes-base.wait/).

`_getWorkflowStaticData(type)`

View an [example](../../cookbook/builtin/get-workflow-static-data/). Static data doesn't persist when testing workflows. The workflow must be active and called by a trigger or webhook to save static data. This gives access to the static workflow data.

`_("<node-name>").isExecuted`

Check whether a node has already executed.

`_nodeVersion`

Get the version of the current node.

`_prevNode.name`

The name of the node that the current input came from. When using the Merge node, note that `_prevNode` always uses the first input connector.

`_prevNode.outputIndex`

The index of the output connector that the current input came from. Use this when the previous node had multiple outputs (such as an If or Switch node). When using the Merge node, note that `_prevNode` always uses the first input connector.

`_prevNode.runIndex`

The run of the previous node that generated the current input. When using the Merge node, note that `_prevNode` always uses the first input connector.

`_runIndex`

How many times n8n has executed the current node. Zero-based (the first run is 0, the second is 1, and so on).

`_secrets`

Contains information about your [External secrets](../../../external-secrets/) setup.

`_vars`

Contains the [Variables](../../variables/) available in the active environment.

`_workflow.active`

Whether the workflow is active (true) or not (false).

`_workflow.id`

The workflow ID.

`_workflow.name`

The workflow name.