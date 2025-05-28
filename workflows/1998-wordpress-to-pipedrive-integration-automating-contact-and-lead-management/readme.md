# WordPress-to-Pipedrive Integration: Automating Contact & Lead Management

## Use cases:
- Automatically create leads in Pipedrive from new contact form submissions on a WordPress website.
- Update existing contact information in Pipedrive when a returning customer submits a form.
- Streamline the sales process by creating tasks and notes in Pipedrive related to new website leads.

## How it works:

1.  **Webhook:** Listens for new submissions to a Contact Form 7 form on a WordPress website via a webhook URL.
2.  **Search Person in Pipedrive:** Searches Pipedrive for an existing person with the same email address as submitted in the form.
3.  **Check if person is in Pipedrive and output the ID:** Uses a code node to determine if a matching person was found in Pipedrive, extracting their ID if present.
4.  **IF Person exists in Pipedrive:**  A conditional node that checks if a person with the submitted email address already exists in Pipedrive.
5.  **Pipedrive (Create Person):** If the person does NOT exist, create a new person in Pipedrive with the information from the contact form.
6.  **New Person ID:** Uses a code node to determine which ID to use to create a Lead. If the Person exists, take the existing Person ID, if not take the new Person ID.
7.  **Create Lead:** Creates a new lead in Pipedrive, associating it with the person (existing or new) identified in the previous steps.
8.  **Create Note:** Creates a note in Pipedrive linked to the newly created lead, containing the information submitted in the contact form.
9.  **Create Activity:** Creates an activity (task) in Pipedrive linked to the newly created lead, reminding the sales team to contact the new lead.

## Services:

*   WordPress (via Contact Form 7 plugin and CF7 Webhook extension)
*   Pipedrive

## Hashtags:

#n8n #automation #WordPress #Pipedrive #CRM #LeadGeneration
