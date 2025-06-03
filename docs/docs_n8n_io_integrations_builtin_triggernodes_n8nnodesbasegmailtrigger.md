[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/index.md "Edit this page")

# Gmail Trigger node[#](#gmail-trigger-node "Permanent link")

[Gmail](https://www.gmail.com) is an email service developed by Google. The Gmail Trigger node can start a workflow based on events in Gmail.

Credentials

You can find authentication information for this node [here](../../credentials/google/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Gmail Trigger integrations](https://n8n.io/integrations/gmail-trigger/) page.

## Events[#](#events "Permanent link")

*   **Message Received**: The node triggers for new messages at the selected **Poll Time**.

## Node parameters[#](#node-parameters "Permanent link")

Configure the node with these parameters:

*   **Credential to connect with**: Select or create a new Google credential to use for the trigger. Refer to [Google credentials](../../credentials/google/) for more information on setting up a new credential.
*   **Poll Times**: Select a poll **Mode** to set how often to trigger the poll. Your **Mode** selection will add or remove relevant fields. Refer to [Poll Mode options](poll-mode-options/) to configure the parameters for each mode type.
*   **Simplify**: Choose whether to return a simplified version of the response (turned on, default) or the raw data (turned off).
    *   The simplified version returns email message IDs, labels, and email headers, including: From, To, CC, BCC, and Subject.

## Node filters[#](#node-filters "Permanent link")

Use these filters to further refine the node's behavior:

*   **Include Spam and Trash**: Select whether the node should trigger on new messages in the Spam and Trash folders (turned on) or not (turned off).
*   **Label Names or IDs**: Only trigger on messages with the selected labels added to them. Select the Label names you want to apply or enter an expression to specify IDs. The dropdown populates based on the **Credential** you selected.
*   **Search**: Enter Gmail search refine filters, like `from:`, to trigger the node on the filtered conditions only. Refer to [Refine searches in Gmail](https://support.google.com/mail/answer/7190?hl=en) for more information.
*   **Read Status**: Choose whether to receive **Unread and read emails**, **Unread emails only** (default), or **Read emails only**.
*   **Sender**: Enter an email or a part of a sender name to trigger only on messages from that sender.

## Related resources[#](#related-resources "Permanent link")

n8n provides an app node for Gmail. You can find the node docs [here](../../app-nodes/n8n-nodes-base.gmail/).

View [example workflows and related content](https://n8n.io/integrations/gmail-trigger/) on n8n's website.

Refer to [Google's Gmail API documentation](https://developers.google.com/gmail/api/guides) for details about their API.

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common issues](common-issues/).