[](https://github.com/n8n-io/n8n-docs/edit/main/docs/workflows/executions/custom-executions-data.md "Edit this page")

# Custom executions data[#](#custom-executions-data "Permanent link")

You can set custom data on your workflow using the Code node or the [Execution Data node](../../../integrations/builtin/core-nodes/n8n-nodes-base.executiondata/). n8n records this with each execution. You can then use this data when filtering the executions list, or fetch it in your workflows using the Code node.

Feature availability

Custom executions data is available on:

*   Cloud: Pro, Enterprise
*   Self-Hosted: Enterprise, registered Community

Available in version 0.222.0 and above.

## Set and access custom data using the Code node[#](#set-and-access-custom-data-using-the-code-node "Permanent link")

This section describes how to set and access data using the Code node. Refer to [Execution Data node](../../../integrations/builtin/core-nodes/n8n-nodes-base.executiondata/) for information on using the Execution Data node to set data. You can't retrieve custom data using the Execution Data node.

### Set custom executions data[#](#set-custom-executions-data "Permanent link")

Set a single piece of extra data:

[JavaScript](#__tabbed_1_1)[Python](#__tabbed_1_2)

1

`$execution.customData.set("key", "value");`

1

`_execution.customData.set("key", "value");`

Set all extra data. This overwrites the whole custom data object for this execution:

[JavaScript](#__tabbed_2_1)[Python](#__tabbed_2_2)

1

`$execution.customData.setAll({"key1": "value1", "key2": "value2"})`

1

`_execution.customData.setAll({"key1": "value1", "key2": "value2"})`

There are limitations:

*   They must be strings
*   `key` has a maximum length of 50 characters
*   `value` has a maximum length of 255 characters
*   n8n supports a maximum of 10 items of custom data

### Access the custom data object during execution[#](#access-the-custom-data-object-during-execution "Permanent link")

You can retrieve the custom data object, or a specific value in it, during an execution:

[JavaScript](#__tabbed_3_1)[Python](#__tabbed_3_2)

1
2
3
4
5

`// Access the current state of the object during the execution const customData = $execution.customData.getAll();  // Access a specific value set during this execution const customData = $execution.customData.get("key");`

1
2
3
4
5

`# Access the current state of the object during the execution customData = _execution.customData.getAll();  # Access a specific value set during this execution customData = _execution.customData.get("key");`