# Enrich Person Data

## Use cases:

- **Lead Enrichment**: Automatically enrich new leads captured via forms or other sources with LinkedIn data, ICP scores, and other relevant information to improve lead qualification and prioritization.
- **Contact Data Enhancement**: Enhance existing contact data in your CRM with up-to-date information on job title, company, location, and professional interests.
- **Sales Intelligence**: Provide sales teams with detailed insights into prospects, enabling them to personalize their outreach and improve engagement.

## How it works:

This workflow automates the process of enriching person data from various sources and updating a CRM (Hubspot). Here's a breakdown:

1.  **Trigger**: The workflow starts either via a form submission ("On form submission" node) or when executed by another workflow ("When Executed by Another Workflow" node). The form or workflow trigger requires these inputs: Person name, Work email, Airtop Profile (connected to LinkedIn), and Hubspot object id.
2.  **Unify Parameters**: ("Unify Params" node)This node takes the input data (either from the form or another workflow) and standardizes the parameter names to be used consistently throughout the rest of the workflow.
3.  **Extract Person Info and Calculate ICP**: ("Extract person info and calculate ICP" node) This node executes another workflow (AIRTOP — Extract person data and calculate ICP) to extract information about the person using their name, email, and Airtop Profile. This includes data from LinkedIn, such as job title, company, location, and an Ideal Customer Profile (ICP) score.
4.  **Aggregate**: ("Aggregate" node) This node combines all the data received from the "Extract person info and calculate ICP" workflow into a single item.
5.  **Edit Fields**: ("Edit Fields" node) This node formats and structures the extracted and calculated data into a format suitable for updating Hubspot. It retrieves the aggregated data and maps fields like email, current\_company, linkedin\_company\_url, linkedin\_connections, etc.
6.  **Save Data in Hubspot**: ("Save data in Hubspot" node) This node executes another workflow (AIRTOP — Update Hubspot contact) to update the Hubspot contact record using the enriched data, using the object ID of the person.

## Services:

-   **Hubspot**: The CRM where the enriched contact data is stored and updated.
-   **LinkedIn**: Used via Airtop to extract person and company information.
-   **Airtop**: Used to connect to LinkedIn.

## Hashtags:

#n8n #automation #crm #dataenrichment #salesintelligence
