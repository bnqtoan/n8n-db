[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.aggregate.md "Edit this page")

# Aggregate[#](#aggregate "Permanent link")

Use the Aggregate node to take separate items, or portions of them, and group them together into individual items.

## Node parameters[#](#node-parameters "Permanent link")

To begin using the node, select the **Aggregate** you'd like to use:

*   [**Individual Fields**](#individual-fields): Aggregate individual fields separately.
*   [**All Item Data**](#all-item-data): Aggregate all item data into a single list.

### Individual Fields[#](#individual-fields "Permanent link")

*   **Input Field Name**: Enter the name of the field in the input data to aggregate together.
*   **Rename Field**: This toggle controls whether to give the field a different name in the aggregated output data. Turn this on to add a different field name. If you're aggregating multiple fields, you must provide new output field names. You can't leave multiple fields undefined.
    *   **Output Field Name**: This field is displayed when you turn on **Rename Field**. Enter the field name for the aggregated output data.

Refer to [Node options](#node-options) for more configuration options.

### All Item Data[#](#all-item-data "Permanent link")

*   **Put Output in Field**: Enter the name of the field to output the data in.
*   **Include**: Select which fields to include in the output. Choose from:
    *   **All fields**: The output includes data from all fields with no further parameters.
    *   **Specified Fields**: If you select this option, enter a comma-separated list of fields the output should include data from in the **Fields To Include** parameter. The output will include only the fields in this list.
    *   **All Fields Except**: If you select this option, enter a comma-separated list of fields the output should exclude data from in the **Fields To Exclude** parameter. The output will include all fields not in this list.

Refer to [Node options](#node-options) for more configuration options.

## Node options[#](#node-options "Permanent link")

You can further configure this node using these **Options**:

*   **Disable Dot Notation**: The node displays this toggle when you select the **Individual Fields** Aggregate. It controls whether to disallow referencing child fields using `parent.child` in the field name (turned on), or allow it (turned off, default).
*   **Merge Lists**: The node displays this toggle when you select the **Individual Fields** Aggregate. Turn it on if the field to aggregate is a list and you want to output a single flat list rather than a list of lists.
*   **Include Binaries**: The node displays this toggle for both Aggregate types. Turn it on if you want to include binary data from the input in the new output.
*   **Keep Missing And Null Values**: The node displays this toggle when you select the **Individual Fields** Aggregate. Turn it on to add a null (empty) entry in the output list when there is a null or missing value in the input. If turned off, the output ignores null or empty values.

## Templates and examples[#](#templates-and-examples "Permanent link")

**✨🤖Automate Multi-Platform Social Media Content Creation with AI**

by Joseph LePage

[View template details](https://n8n.io/workflows/3066-automate-multi-platform-social-media-content-creation-with-ai/)

**Scrape business emails from Google Maps without the use of any third party APIs**

by Akram Kadri

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Build Your First AI Data Analyst Chatbot**

by Solomon

[View template details](https://n8n.io/workflows/3050-build-your-first-ai-data-analyst-chatbot/)

[Browse Aggregate integration templates](https://n8n.io/integrations/aggregate/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Learn more about [data structure and data flow](../../../../data/) in n8n workflows.