# Typeform to Pipedrive Integration

## Use cases:

- Automatically create leads in Pipedrive when a new form is submitted on Typeform.
- Capture information about potential customers, including their company, contact details, and specific questions, and store it in Pipedrive for sales follow-up.
- Streamline the lead generation process by automatically creating organizations, persons, and leads in Pipedrive based on Typeform submissions, saving time and improving data accuracy.

## How it works:

1.  **Typeform Trigger ("On form completion"):** The workflow starts when a new form is submitted on Typeform. It is triggered by a webhook.
2.  **Set:** Form data is received and relevant information such as company name, contact name, email, n8n familiarity, questions, and number of employees are extracted.
3.  **Code ("Map company size"):** The number of employees from the Typeform submission is mapped to a specific ID representing the employee size in Pipedrive.
4.  **Pipedrive - Create Organization:** An organization is created in Pipedrive using the company name from the Typeform and the mapped employee size.
5.  **Pipedrive - Create Person:** A person (contact) is created in Pipedrive, associated with the newly created organization, using the contact's name and email from the Typeform.
6.  **Pipedrive - Create Lead:** A lead is created in Pipedrive, associated with the organization and person, with the company name.
7.  **Pipedrive - Create Note:** Finally, a note is added to the lead in Pipedrive, containing the question and the company size from the form.

## Services:

-   Typeform
-   Pipedrive

## Hashtags:

#n8n #automation #Typeform #Pipedrive #CRM
