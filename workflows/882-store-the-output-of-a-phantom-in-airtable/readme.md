# Store the output of a phantom in Airtable

## Use cases:

- Automatically extract professional information (name, email, company) from a Phantombuster phantom's output and store it in an Airtable database for lead generation.
- Create a database of employee profiles by automatically storing data captured from LinkedIn or other professional websites using Phantombuster, directly into Airtable.
- Build and maintain a list of potential job candidates, sourcing candidate information from Phantombuster and populating an Airtable base for recruitment tracking.

## How it works:

1.  **On clicking 'execute'**: The workflow starts manually when you click the "Execute" button in n8n.
2.  **Phantombuster**: It executes a Phantombuster "agent" (likely a web scraping task). The node retrieves the output data from a specific Phantombuster agent. The specific agent ID is not dynamically set and needs to be preconfigured.
3.  **Set**: This node extracts specific data points from the Phantombuster output. It retrieves the person's full name from the `general.fullName` field, email address from `details.mail` and company name from the first job listed in `jobs[0].companyName`. The extracted data is then structured into a new JSON object, keeping only the explicitly set fields.
4.  **Airtable**: It appends a new record to a specified Airtable table, using the data prepared by the "Set" node. The Airtable application and table must be pre-configured.

## Services:

-   Phantombuster
-   Airtable

## Hashtags:

#n8n #automation #Phantombuster #Airtable #webscraping
