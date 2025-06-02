[](https://github.com/n8n-io/n8n-docs/edit/main/docs/data/data-mapping/data-item-linking/index.md "Edit this page")

# Data item linking[#](#data-item-linking "Permanent link")

An item is a single piece of data. Nodes receive one or more items, operate on them, and output new items. Each item links back to previous items.

You need to understand this behavior if you're:

*   Building a programmatic-style node that implements complex behaviors with its input and output data.
*   Using the Code node or expressions editor to access data from earlier items in the workflow.
*   Using the Code node for complex behaviors with input and output data.

This section provides:

*   A conceptual overview of [Item linking concepts](item-linking-concepts/).
*   Information on [Item linking for node creators](item-linking-node-building/).
*   Support for end users who need to [Work with the data path](item-linking-code-node/) to retrieve item data from previous nodes, and link items when using the Code node.
*   Guidance on troubleshooting [Errors](item-linking-errors/).