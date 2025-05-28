# Typeform to HubSpot Lead Management

## Use cases:

- Automatically create new contacts in HubSpot from Typeform submissions, capturing lead information efficiently.
- Update the lifecycle stage of a contact in HubSpot to "opportunity" if they express interest in scaling their visual content.
- Send personalized emails to leads who have shown interest, providing relevant information and scheduling options.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new form is submitted on Typeform. The `formId` is set to `RPueloJC`.
2.  **Set values:** Extracts and renames values from the Typeform submission, assigning them to variables like `form_firstname`, `form_lastname`, `form_email`, etc. It specifically captures the email, first name, last name, company name, department and the lead's interest in scaling visual content. This node also sets the `keepOnlySet` option to true, which means that only the values set in this node are passed on to the next nodes.
3.  **Create new contact:** Creates a new contact in HubSpot using the data extracted from the Typeform submission.  The email, first name, last name, company name, and industry (department) are used to populate the contact's details.
4.  **lead interested:** Checks if the lead has expressed interest in scaling their visual content. If true, the workflow proceeds to update the lead stage and send an email.
5.  **update lead stage:** Updates the lifecycle stage of the contact in HubSpot to "opportunity".
6.  **send information:** Sends a personalized email to the lead using Gmail. The email includes a greeting with the lead's first name, information about scheduling a call, a link to a presentation, and a closing.

## Services:

-   Typeform
-   HubSpot
-   Gmail

## Hashtags:

#n8n #automation #Typeform #HubSpot #leadgeneration
