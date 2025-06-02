[](https://github.com/n8n-io/n8n-docs/edit/main/docs/data/index.md "Edit this page")

# Data[#](#data "Permanent link")

Data is the information that n8n nodes receive and process. For basic usage of n8n you don't need to understand data structures and manipulation. However, it becomes important if you want to:

*   Create your own node
*   Write custom [expressions](../glossary/#expression-n8n)
*   Use the Function or Function Item node

This section covers:

*   [Data structure](data-structure/)
*   [Data flow within nodes](data-flow-nodes/)
*   [Transforming data](transforming-data/)
*   [Process data using code](code/)
*   [Pinning](data-pinning/) and [editing](data-editing/) data during workflow development.
*   [Data mapping](data-mapping/) and [Item linking](data-mapping/data-item-linking/): how data items link to each other.

## Related resources[#](#related-resources "Permanent link")

### Data transformation nodes[#](#data-transformation-nodes "Permanent link")

n8n provides a collection of nodes to transform data:

*   [Aggregate](../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/): take separate items, or portions of them, and group them together into individual items.
*   [Limit](../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/): remove items beyond a defined maximum number.
*   [Remove Duplicates](../integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/): identify and delete items that are identical across all fields or a subset of fields.
*   [Sort](../integrations/builtin/core-nodes/n8n-nodes-base.sort/): organize lists of in a desired ordering, or generate a random selection.
*   [Split Out](../integrations/builtin/core-nodes/n8n-nodes-base.splitout/): separate a single data item containing a list into multiple items.
*   [Summarize](../integrations/builtin/core-nodes/n8n-nodes-base.summarize/): aggregate items together, in a manner similar to Excel pivot tables.