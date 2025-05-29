# My Workflow

## Use cases:

- **Automated Lead Enrichment:** Automatically extract contact information from incoming emails and update or create contact profiles in HubSpot.
- **Efficient Email Logging:** Automatically create email engagements in HubSpot to track communication history for contacts.
- **Streamlined Contact Management:** Parse email content for key details, check if a contact exists in HubSpot, and create a new contact if necessary, then log the email as an engagement.

## How it works:

1.  **Email Trigger:** The workflow starts when an email is received via the "When an email is received" node (IMAP).
2.  **AI Parsing:** The "Parse the mail with AI" node uses an OpenAI model to extract contact information (name, email, company, etc.) from the email content. The "Set the output Json" node defines the Json structure.
3.  **Contact Search:** The "Search for the contact via email" node searches for the contact in HubSpot based on the extracted email address.
4.  **Conditional Logic:** The "contact exists?" node checks if the contact was found in HubSpot.
    *   **If the contact exists:** The "Edit Fields" node adds the HubSpot contact ID (`vid`) to the data. An engagement is then created for the existing contact using the "Creates an email engagement" node.
    *   **If the contact does not exist:** The "Creates contact" node creates a new contact in HubSpot with the extracted information. An engagement is then created for the new contact using the "Creates an email engagement" node.
5.  **Create Engagement:** The "Creates an email engagement" node creates an email engagement record in HubSpot, linking the email to the contact.

## Services:

-   **HubSpot:** CRM platform used for contact management and engagement tracking.
-   **OpenAI:** AI platform used for parsing email content and extracting relevant information.
-   **IMAP:** Used to receive emails.

## Hashtags:

#n8n #automation #CRM #HubSpot #OpenAI #EmailParsing
