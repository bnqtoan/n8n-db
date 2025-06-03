[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.sendemail.md "Edit this page")

# Send Email[#](#send-email "Permanent link")

The Send Email node sends emails using an SMTP email server.

Credential

You can find authentication information for this node [here](../../credentials/sendemail/).

## Node parameters[#](#node-parameters "Permanent link")

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

Configure this node using the following parameters.

### Credential to connect with[#](#credential-to-connect-with "Permanent link")

Select or create an [SMTP account credential](../../credentials/sendemail/) for the node to use.

### Operation[#](#operation "Permanent link")

The Send Email node supports the following operations:

*   **Send**: Send an email.
*   **Send and Wait for Response**: Send an email and wait for a response from the receiver. This operation pauses the workflow execution until the user submits a response.

Choosing **Send and Wait for Response** will activate parameters and options as discussed in [waiting for a response](#waiting-for-a-response).

### From Email[#](#from-email "Permanent link")

Enter the email address you want to send the email from. You can also include a name using this format: `Name Name <email@sample.com>`, for example: `Nathan Doe <nate@n8n.io>`.

### To Email[#](#to-email "Permanent link")

Enter the email address you want to send the email to. You can also include a name using this format: `Name Name <email@sample.com>`, for example: `Nathan Doe <nate@n8n.io>`.

### Subject[#](#subject "Permanent link")

Enter the subject line for the email.

### Email Format[#](#email-format "Permanent link")

Select the format to send the email in. This parameter is available when using the **Send** operation. Choose from:

*   **Text**: Send the email in plain-text format.
*   **HTML**: Send the email in HTML format.
*   **Both**: Send the email in both formats. If you choose this option, the email recipient's client will set which format to display.

## Node options[#](#node-options "Permanent link")

Use these **Options** to further refine the node's behavior.

### Append n8n Attribution[#](#append-n8n-attribution "Permanent link")

Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

### Attachments[#](#attachments "Permanent link")

Enter the name of the binary properties that contain data to add as an attachment. Some tips on using this option:

*   Use the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to upload the file to your workflow.
*   Add multiple attachments by entering a comma-separated list of binary properties.
*   Reference embedded images or other content within the body of an email message, for example `<img src="cid:image_1">`.

### CC Email[#](#cc-email "Permanent link")

Enter an email address for the `cc:` field.

### BCC Email[#](#bcc-email "Permanent link")

Enter an email address for the `bcc:` field.

### Ignore SSL Issues[#](#ignore-ssl-issues "Permanent link")

Set whether n8n should ignore failures with TLS/SSL certificate validation (turned on) or enforce them (turned off).

### Reply To[#](#reply-to "Permanent link")

Enter an email address for the Reply To field.

## Waiting for a response[#](#waiting-for-a-response "Permanent link")

By choosing the **Send and Wait for a Response** operation, you can send an email message and pause the workflow execution until a person confirms the action or provides more information.

### Response Type[#](#response-type "Permanent link")

You can choose between the following types of waiting and approval actions:

*   **Approval**: Users can approve or disapprove from within the message.
*   **Free Text**: Users can submit a response with a form.
*   **Custom Form**: Users can submit a response with a custom form.

Different options are available depending on which type you choose.

### Approval parameters and options[#](#approval-parameters-and-options "Permanent link")

When using the Approval response type, the following options are available:

*   **Type of Approval**: Whether to present only an approval button or both an approval and disapproval buttons.
*   **Button Label**: The label for the approval or disapproval button. The default choice is `Approve` and `Decline` for approval and disapproval actions respectively.
*   **Button Style**: The style (primary or secondary) for the button.

This mode also offers the following options:

*   **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
*   **Append n8n Attribution**: Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

### Free Text parameters and options[#](#free-text-parameters-and-options "Permanent link")

When using the Free Text response type, the following options are available:

*   **Message Button Label**: The label to use for message button. The default choice is `Respond`.
*   **Response Form Title**: The title of the form where users provide their response.
*   **Response Form Description**: A description for the form where users provide their response.
*   **Response Form Button Label**: The label for the button on the form to submit their response. The default choice is `Submit`.
*   **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
*   **Append n8n Attribution**: Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

### Custom Form parameters and options[#](#custom-form-parameters-and-options "Permanent link")

When using the Custom Form response type, you build a form using the fields and options you want.

You can customize each form element with the settings outlined in the [n8n Form trigger's form elements](../n8n-nodes-base.formtrigger/#form-elements). To add more fields, select the **Add Form Element** button.

The following options are also available:

*   **Message Button Label**: The label to use for message button. The default choice is `Respond`.
*   **Response Form Title**: The title of the form where users provide their response.
*   **Response Form Description**: A description for the form where users provide their response.
*   **Response Form Button Label**: The label for the button on the form to submit their response. The default choice is `Submit`.
*   **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
*   **Append n8n Attribution**: Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

## Templates and examples[#](#templates-and-examples "Permanent link")

**Personalize marketing emails using customer data and AI**

by n8n Community

[View template details](https://n8n.io/workflows/1978-personalize-marketing-emails-using-customer-data-and-ai/)

**AI marketing report (Google Analytics & Ads, Meta Ads), sent via email/Telegram**

by Friedemann Schuetz

[View template details](https://n8n.io/workflows/2783-ai-marketing-report-google-analytics-and-ads-meta-ads-sent-via-emailtelegram/)

**Effortless Email Management with AI-Powered Summarization & Review**

by Davide

[View template details](https://n8n.io/workflows/2862-effortless-email-management-with-ai-powered-summarization-and-review/)

[Browse Send Email integration templates](https://n8n.io/integrations/send-email/), or [search all templates](https://n8n.io/workflows/)