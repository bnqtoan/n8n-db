[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches.md "Edit this page")

# Loop Over Items[#](#loop-over-items "Permanent link")

The Loop Over Items node helps you loop through data when needed.

The node saves the original incoming data, and with each iteration, returns a predefined amount of data through the **loop** output.

When the node execution completes, it combines all of the processed data and returns it through the **done** output.

## When to use the Loop Over Items node[#](#when-to-use-the-loop-over-items-node "Permanent link")

By default, n8n nodes are designed to process a list of input items (with some exceptions, detailed below). Depending on what you're trying to achieve, you often don't need the Loop Over Items node in your workflow. You can learn more about how n8n processes multiple items on the [looping in n8n](../../../../flow-logic/looping/) page.

These links highlight some of the cases where the Loop Over Items node can be useful:

*   [Loop until all items are processed](../../../../flow-logic/looping/#loop-until-all-items-are-processed): describes how the Loop Over Items node differs from normal item processing and when you might want to incorporate this node.
*   [Node exceptions](../../../../flow-logic/looping/#node-exceptions): outlines specific cases and nodes where you may need to use the Loop Over Items node to manually build looping logic.
*   [Avoiding rate limiting](../../rate-limits/): demonstrates how to batch API requests to avoid rate limits from other services.

## Node parameters[#](#node-parameters "Permanent link")

### Batch Size[#](#batch-size "Permanent link")

Enter the number of items to return with each call.

## Node options[#](#node-options "Permanent link")

### Reset[#](#reset "Permanent link")

If turned on, the node will reset with the current input-data newly initialized with each loop. Use this when you want the Loop Over Items node to treat incoming data as a new set of data instead of a continuation of previous items.

For example, you can use the Loop Over Items node with the reset option and an [If node](../n8n-nodes-base.if/) to query a paginated service when you don't know how many pages you need in advance. The loop queries pages one at a time, performs any processing, and increments the page number. The loop reset ensures the loop recognizes each iteration as a new set of data. The If node evaluates an exit condition to decide whether to perform another iteration or not.

Include a valid termination condition

For workflows like the example described above, it's critical to include a valid termination condition for the loop. If your termination condition never matches, your workflow execution will get stuck in an infinite loop.

When enabled, you can adjust the reset conditions by switching the parameter representation from **Fixed** to **Expression**. The results of your expression evaluation determine when the node will reset item processing.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape business emails from Google Maps without the use of any third party APIs**

by Akram Kadri

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Back Up Your n8n Workflows To Github**

by Jonathan

[View template details](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/)

**OpenAI GPT-3: Company Enrichment from website content**

by Lucas Perret

[View template details](https://n8n.io/workflows/1862-openai-gpt-3-company-enrichment-from-website-content/)

[Browse Loop Over Items (Split in Batches) integration templates](https://n8n.io/integrations/split-in-batches/), or [search all templates](https://n8n.io/workflows/)

### Read RSS feed from two different sources[#](#read-rss-feed-from-two-different-sources "Permanent link")

This workflow allows you to read an RSS feed from two different sources using the Loop Over Items node. You need the Loop Over Items node in the workflow as the RSS Feed Read node only processes the first item it receives. You can also find the [workflow](https://n8n.io/workflows/687-read-rss-feed-from-two-different-sources/) on n8n.io.

The example walks through building the workflow, but assumes you are already familiar with n8n. To build your first workflow, including learning how to add nodes to a workflow, refer to [Try it out](../../../../try-it-out/).

The final workflow looks like this:

[View workflow file](/_workflows/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/rss-feed-example.json)

Copy the workflow file above and paste into your instance, or manually build it by following these steps:

1.  Add the manual trigger.
2.  Add the Code node.
3.  Copy this code into the Code node:
    
     1
     2
     3
     4
     5
     6
     7
     8
     9
    10
    11
    12
    
    `return [ 	{ 		json: { 			url: 'https://medium.com/feed/n8n-io', 		} 	}, 	{ 		json: { 			url: 'https://dev.to/feed/n8n', 		} 	} ];`
    
4.  Add the Loop Over Items node.
5.  Configure Loop Over Items: set the batch size to `1` in the **Batch Size** field.
6.  Add the RSS Feed Read node.
7.  Select **Test Workflow**. This runs the workflow to load data into the RSS Feed Read node.
8.  Configure RSS Feed Read: map `url` from the input to the **URL** field. You can do this by dragging and dropping from the **INPUT** panel, or using this expression: `{{ $json.url }}`.
9.  Select **Test Workflow** to run the workflow and see the resulting data.

### Check that the node has processed all items[#](#check-that-the-node-has-processed-all-items "Permanent link")

To check if the node still has items to process, use the following expression: `{{$node["Loop Over Items"].context["noItemsLeft"]}}`. This expression returns a boolean value. If the node still has data to process, the expression returns `false`, otherwise it returns `true`.

### Get the current running index of the node[#](#get-the-current-running-index-of-the-node "Permanent link")

To get the current running index of the node, use the following expression: `{{$node["Loop Over Items"].context["currentRunIndex"];}}`.