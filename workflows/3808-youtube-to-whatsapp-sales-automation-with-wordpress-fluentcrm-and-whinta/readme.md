# AccountCraft WhatsApp Automation - Infridet

## Use cases:

*   **Lead Capture and Nurturing:** Automatically capture leads from a web form (or other source) and immediately add them to your CRM, send a welcome email, and initiate a personalized WhatsApp conversation to engage with potential customers.
*   **Streamlined Onboarding:** When a new user signs up for AccountCraft, this workflow automatically adds their information to a Google Sheet for record-keeping, sends a welcome email with helpful resources, and triggers a personalized WhatsApp message from Gyan.
*   **Customer Tagging and Segmentation:** After initial engagement (e.g., a WhatsApp conversation), automatically update the contact's tag in FluentCRM to "Customer" for improved segmentation and targeted marketing campaigns.

## How it works:

1.  **Webhook - Lead Capture:**  Listens for incoming data from a webhook (presumably a form submission).  The `path` is set to "lead-capture," meaning it's expecting requests at the `/webhook/lead-capture` endpoint.
2.  **Google Sheets - Backup Log:**  Appends the data received from the webhook to a Google Sheet named "Leads".  *Important:*  Requires a valid `sheetId` and Google API credentials.
3.  **FluentCRM - Add Contact:** Adds a new contact to FluentCRM (a WordPress CRM plugin) using the submitted email and name, and tags them as a "New Lead." *Important:* This node relies on your FluentCRM API credentials for authentication.
4.  **Send Warmup Email:** Sends a welcome email to the new lead with a personalized message from Gyan.
5.  **Send WhatsApp via Whinta:** Sends a personalized WhatsApp message to the lead using the Whinta API. *Important:* This step requires an account with Whinta and the correct API configuration within the HTTP Request node.
6.  **Update CRM Tag to Customer:** Updates the contact in FluentCRM and adds the tag "Customer". This assumes the WhatsApp conversation was successful and the lead has converted. *Important:* As with the "Add Contact" node, this node requires valid FluentCRM API credentials.

## Services:

*   **Google Sheets:** For storing lead data.
*   **FluentCRM:** A WordPress CRM plugin for managing contacts and tags.
*   **Whinta:**  A WhatsApp API service for sending messages.
*   **SMTP:** Used for sending emails

## Hashtags:

#n8n #automation #whatsapp #crm #leadgeneration
