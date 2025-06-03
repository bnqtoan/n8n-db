[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.airtabletrigger.md "Edit this page")

# Airtable Trigger node[#](#airtable-trigger-node "Permanent link")

[Airtable](https://airtable.com/) is a spreadsheet-database hybrid, with the features of a database but applied to a spreadsheet. The fields in an Airtable table are similar to cells in a spreadsheet, but have types such as 'checkbox', 'phone number', and 'drop-down list', and can reference file attachments like images.

On this page, you'll find a list of events the Airtable Trigger node can respond to and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/airtable/).

## Events[#](#events "Permanent link")

*   **New Airtable event**

## Related resources[#](#related-resources "Permanent link")

n8n provides an app node for Airtable. You can find the node docs [here](../../app-nodes/n8n-nodes-base.airtable/).

View [example workflows and related content](https://n8n.io/integrations/airtable-trigger/) on n8n's website.

Refer to [Airtable's documentation](https://airtable.com/developers/web/api/introduction) for details about their API.

## Node parameters[#](#node-parameters "Permanent link")

Use these parameters to configure your node.

### Poll Times[#](#poll-times "Permanent link")

n8n's Airtable node uses polling for check for updates on configured Airtable resources. The **Poll Times** parameter configures the querying frequency:

*   Every Minute
*   Every Hour
*   Every Day
*   Every Week
*   Every Month
*   Every X: Check for updates every given number of minutes or hours.
*   Custom: Customize the polling interval by providing a [cron expression](https://en.wikipedia.org/wiki/Cron).

Use the **Add Poll Time** button to add more polling intervals.

### Base[#](#base "Permanent link")

The [Airtable base](https://support.airtable.com/docs/airtable-bases-overview) you want to check for updates on. You can provide your base's URL or [base ID](https://support.airtable.com/docs/finding-airtable-ids#finding-base-table-and-view-ids-from-urls).

### Table[#](#table "Permanent link")

The [Airtable table](https://support.airtable.com/docs/tables-overview) within the Airtable base that you want to check for updates on. You can provide the table's URL or [table ID](https://support.airtable.com/docs/finding-airtable-ids#finding-base-table-and-view-ids-from-urls).

### Trigger Field[#](#trigger-field "Permanent link")

A created or last modified field in your table. The Airtable Trigger node uses this to determine what updates occurred since the previous check.

### Download Attachments[#](#download-attachments "Permanent link")

Whether to download attachments from the table. When enabled, the **Download Fields** parameter defines the attachment fields.

### Download Fields[#](#download-fields "Permanent link")

When you enable the **Download Attachments** toggle, this field defines which table fields to download. Field names are case sensitive. Use a comma to separate multiple field names.

### Additional Fields[#](#additional-fields "Permanent link")

Use the **Add Field** button to add the following parameters:

*   **Fields**: A comma-separated list of fields to include in the output. If you don't specify anything here, the output will contain only the **Trigger Field**.
*   **Formula**: An [Airtable formula](https://support.airtable.com/docs/formula-field-reference) to further filter the results. You can use this to add further constraints to the events that trigger the workflow. Note that formula values aren't taken into account for manual executions, only for production polling.
*   **View ID**: The name or ID of a table view. When defined, only returns records available in the given view.