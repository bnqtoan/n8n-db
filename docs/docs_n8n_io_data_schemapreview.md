[](https://github.com/n8n-io/n8n-docs/edit/main/docs/data/schema-preview.md "Edit this page")

# Schema Preview[#](#schema-preview "Permanent link")

Schema Preview exposes expected schema data from the previous node in the Node Editor without the user having to provide credentials or execute the node. This makes it possible to construct workflows without having to provide credentials in advance. The preview doesn't include mock data, but it does expose the expected fields, making it possible to select and incorporate them into the input of subsequent nodes.

## Using the preview[#](#using-the-preview "Permanent link")

1.  There must be a node with Schema Preview available in your workflow.
2.  When clicking on the details of the next node in the sequence, the Schema Preview data will show up in the Node Editor where schema data would typically be exposed.
3.  Use data from the Schema Preview just as you would other schemas - drag and drop fields as input into your node parameters and settings.