[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlecontacts.md "Edit this page")

# Google Contacts node[#](#google-contacts-node "Permanent link")

Use the Google Contacts node to automate work in Google Contacts, and integrate Google Contacts with other applications. n8n has built-in support for a wide range of Google Contacts features, including creating, updating, retrieving, deleting, and getting contacts.

On this page, you'll find a list of operations the Google Contacts node supports and links to more resources.

Credentials

Refer to [Google Contacts credentials](../../credentials/google/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Contact
    *   Create a contact
    *   Delete a contact
    *   Get a contact
    *   Retrieve all contacts
    *   Update a contact

## Templates and examples[#](#templates-and-examples "Permanent link")

**Manage contacts in Google Contacts**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/637-manage-contacts-in-google-contacts/)

**Daily Birthday Reminders from Google Contacts to Slack**

by WeblineIndia

[View template details](https://n8n.io/workflows/2731-daily-birthday-reminders-from-google-contacts-to-slack/)

**Enrich Google Sheet contacts with Dropcontact**

by Pauline

[View template details](https://n8n.io/workflows/1304-enrich-google-sheet-contacts-with-dropcontact/)

[Browse Google Contacts integration templates](https://n8n.io/integrations/google-contacts/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.