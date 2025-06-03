[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.activationtrigger.md "Edit this page")

# Activation Trigger node[#](#activation-trigger-node "Permanent link")

The Activation Trigger node gets triggered when an event gets fired by n8n or a workflow.

Warning

n8n has deprecated the Activation Trigger node and replaced it with two new nodes: the [n8n Trigger node](../n8n-nodes-base.n8ntrigger/) and the [Workflow Trigger node](../n8n-nodes-base.workflowtrigger/). For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01170) page.

Keep in mind

If you want to use the Activation Trigger node for a workflow, add the node to the workflow. You don't have to create a separate workflow.

The Activation Trigger node gets triggered for the workflow that it gets added to. You can use the Activation Trigger node to trigger a workflow to notify the state of the workflow.

## Node parameters[#](#node-parameters "Permanent link")

*   Events
    *   **Activation**: Run when the workflow gets activated
    *   **Start**: Run when n8n starts or restarts
    *   **Update**: Run when the workflow gets saved while it's active

## Templates and examples[#](#templates-and-examples "Permanent link")

**Host your own Uptime Monitoring with Scheduled Triggers**

by Jimleuk

[View template details](https://n8n.io/workflows/2327-host-your-own-uptime-monitoring-with-scheduled-triggers/)

**Automated Work Attendance with Location Triggers**

by Rui Borges

[View template details](https://n8n.io/workflows/2530-automated-work-attendance-with-location-triggers/)

**Auto Invoice & Receipt OCR to Google Sheets – Drive, Gmail, & Telegram Triggers**

by Daniel Ng

[View template details](https://n8n.io/workflows/3618-auto-invoice-and-receipt-ocr-to-google-sheets-drive-gmail-and-telegram-triggers/)

[Browse Activation Trigger integration templates](https://n8n.io/integrations/activation-trigger/), or [search all templates](https://n8n.io/workflows/)