# Extract LinkedIn Profile Information

## Use cases:

- **Lead Enrichment:** Automatically extract contact details, employment history, and skills from LinkedIn profiles to enrich lead data in CRM systems.
- **Recruiting Automation:** Gather candidate information from LinkedIn profiles to streamline the sourcing and screening process.
- **Market Research:** Collect information about professionals in a specific industry or company to gain insights into market trends and talent landscapes.

## How it works:

1.  The workflow is triggered either by a form submission or via another n8n workflow. The trigger node (`On form submission` or `When Executed by Another Workflow`) receives the LinkedIn profile URL and the Airtop profile name as input.
2.  The `Parameters` node assigns the values from the trigger input to the variables `Linkedi_URL` and `Airtop_profile`
3.  The `Airtop` node takes the LinkedIn URL and Airtop profile name and extracts the profile information. It uses a pre-defined prompt to extract specific fields such as name, headline, location, company, experience, education, skills, certifications, languages, connections, and recommendations. The `Airtop` node retrieves data by opening a real browser session
4.  The `Edit Fields` node takes the raw JSON output from the Airtop node and restructure it into a more organized JSON format.
5.  Finally the workflow returns the extracted data as output.

## Services:

- Airtop: Used to interact with web pages in a real browser environment and extract data.
- LinkedIn: Data is extracted from public LinkedIn profiles.

## Hashtags:

#n8n #automation #linkedin #datascraping #leadgeneration
