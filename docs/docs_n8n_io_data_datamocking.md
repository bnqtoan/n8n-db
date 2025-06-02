[](https://github.com/n8n-io/n8n-docs/edit/main/docs/data/data-mocking.md "Edit this page")

# Data mocking[#](#data-mocking "Permanent link")

Data mocking is simulating or faking data. It's useful when developing a workflow. By mocking data, you can:

*   Avoid making repeated calls to your data source. This saves time and costs.
*   Work with a small, predictable dataset during initial development.
*   Avoid the risk of overwriting live data: in the early stages of building your workflow, you don't need to connect your real data source.

## Mocking with real data using data pinning[#](#mocking-with-real-data-using-data-pinning "Permanent link")

Using [data pinning](../data-pinning/), you load real data into your workflow, then pin it in the output panel of a node. Using this approach you have realistic data, with only one call to your data source. You can [edit pinned data](../data-editing/).

Use this approach when you need to configure your workflow to handle the exact data structure and parameters provided by your data source.

To pin data in a node:

1.  Run the node to load data.
2.  In the **OUTPUT** view, select **Pin data** ![Pin data icon](../../_images/data/data-pinning/data-pinning-button.png). When data pinning is active, the button is disabled and a "This data is pinned" banner is displayed in the **OUTPUT** view.

Nodes that output binary data

You can't pin data if the output data includes binary data.

## Generate custom data using the Code or Edit Fields nodes[#](#generate-custom-data-using-the-code-or-edit-fields-nodes "Permanent link")

You can create a custom dataset in your workflow using either the [Code node](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) or the [Edit Fields (Set) node](../../integrations/builtin/core-nodes/n8n-nodes-base.set/).

In the Code node, you can create any data set you want, and return it as the node output. In the Edit Fields node, select **Add fields** to add your custom data.

The Edit Fields node is a good choice for small tests. To create more complex datasets, use the Code node.

## Output a sample data set from the Customer Datastore node[#](#output-a-sample-data-set-from-the-customer-datastore-node "Permanent link")

The Customer Datastore node provides a fake dataset to work with. Add and execute the node to explore the data.

Use this approach if you need some test data when exploring n8n, and you don't have a real use-case to work with.