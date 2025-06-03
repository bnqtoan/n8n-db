If If node if if node

[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.if.md "Edit this page")

# If[#](#if "Permanent link")

Use the If node to split a workflow conditionally based on comparison operations.

## Add conditions[#](#add-conditions "Permanent link")

Create comparison **Conditions** for your If node.

*   Use the data type dropdown to select the data type and comparison operation type for your condition. For example, to filter for dates after a particular date, select **Date & Time > is after**.
*   The fields and values to enter into the condition change based on the data type and comparison you select. Refer to [Available data type comparisons](#available-data-type-comparisons) for a full list of all comparisons by data type.

Select **Add condition** to create more conditions.

### Combining conditions[#](#combining-conditions "Permanent link")

You can choose to keep data:

*   When it meets all conditions: Create two or more conditions and select **AND** in the dropdown between them.
*   When it meets any of the conditions: Create two or more conditions and select **OR** in the dropdown between them.

## Templates and examples[#](#templates-and-examples "Permanent link")

**AI agent that can scrape webpages**

by Eduard

[View template details](https://n8n.io/workflows/2006-ai-agent-that-can-scrape-webpages/)

**Pulling data from services that n8n doesn’t have a pre-built integration for**

by Jonathan

[View template details](https://n8n.io/workflows/1748-pulling-data-from-services-that-n8n-doesnt-have-a-pre-built-integration-for/)

**✨🤖Automate Multi-Platform Social Media Content Creation with AI**

by Joseph LePage

[View template details](https://n8n.io/workflows/3066-automate-multi-platform-social-media-content-creation-with-ai/)

[Browse If integration templates](https://n8n.io/integrations/if/), or [search all templates](https://n8n.io/workflows/)

## Branch execution with If and Merge nodes[#](#branch-execution-with-if-and-merge-nodes "Permanent link")

0.236.0 and below

n8n removed this execution behavior in version 1.0. This section applies to workflows using the **v0 (legacy)** workflow execution order. By default, this is all workflows built before version 1.0. You can change the execution order in your [workflow settings](../../../../workflows/settings/).

If you add a Merge node to a workflow containing an If node, it can result in both output data streams of the If node executing.

One data stream triggers the Merge node, which then goes and executes the other data stream.

For example, in the screenshot below there's a workflow containing an Edit Fields node, If node, and Merge node. The standard If node behavior is to execute one data stream (in the screenshot, this is the **true** output). However, due to the Merge node, both data streams execute, despite the If node not sending any data down the **false** data stream.

[![Screenshot of a workflow. The workflow has an Edit Fields node, followed by an If node. It ends with a Merge node.](../../../../_images/integrations/builtin/core-nodes/merge/if-merge-node.png)](https://docs.n8n.io/_images/integrations/builtin/core-nodes/merge/if-merge-node.png)

## Related resources[#](#related-resources "Permanent link")

Refer to [Splitting with conditionals](../../../../flow-logic/splitting/) for more information on using conditionals to create complex logic in n8n.

If you need more than two conditional outputs, use the [Switch node](../n8n-nodes-base.switch/).

## Available data type comparisons[#](#available-data-type-comparisons "Permanent link")

### String[#](#string "Permanent link")

String data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is equal to
*   is not equal to
*   contains
*   does not contain
*   starts with
*   does not start with
*   ends with
*   does not end with
*   matches regex
*   does not match regex

### Number[#](#number "Permanent link")

Number data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is equal to
*   is not equal to
*   is greater than
*   is less than
*   is greater than or equal to
*   is less than or equal to

### Date & Time[#](#date-time "Permanent link")

Date & Time data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is equal to
*   is not equal to
*   is after
*   is before
*   is after or equal to
*   is before or equal to

### Boolean[#](#boolean "Permanent link")

Boolean data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is true
*   is false
*   is equal to
*   is not equal to

### Array[#](#array "Permanent link")

Array data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   contains
*   does not contain
*   length equal to
*   length not equal to
*   length greater than
*   length less than
*   length greater than or equal to
*   length less than or equal to

### Object[#](#object "Permanent link")

Object data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty