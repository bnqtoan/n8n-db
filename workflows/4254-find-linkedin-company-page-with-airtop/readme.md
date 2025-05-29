# Get Company LinkedIn Page

## Use cases:
- Automatically find the LinkedIn company page for a given company domain for lead enrichment purposes.
- Integrate with a CRM to automatically populate company profiles with their LinkedIn page URL.
- Use as a sub-workflow in a larger automation to gather company information before sending targeted outreach messages.

## How it works:
1. **On form submission/When Executed by Another Workflow:** The workflow starts either when a form is submitted or when triggered by another workflow, receiving the company domain and Airtop Profile as inputs.
2. **Unify parameters:** Stores the input parameters (Company domain and Airtop Profile) into variables.
3. **Webpage search:** Uses Airtop to extract the LinkedIn company page URL directly from the company's website.
4. **LinkedIn link found?:** Checks if a LinkedIn link was found on the webpage. If yes, proceeds to verify the link. Otherwise, it moves to the next step.
5. **Linkedin search:** If no link was found on the webpage, Airtop searches for the company's LinkedIn page using LinkedIn's search functionality.
6. **LinkedIn link found?1:** Checks if a LinkedIn link was found on the LinkedIn search. If yes, proceeds to verify the link. Otherwise, it moves to the next step.
7. **Google search:** If no link was found on the LinkedIn search, Airtop searches for the company's LinkedIn page using Google's search functionality.
8. **Company LinkedIn exists?:** Filters if there is a LinkedIn URL in the `data.modelResponse`.
9. **Verify LinkedIn link:** Calls another workflow ("AIRTOP — Verify Company LinkedIn by Domain") to verify if the extracted URL is a valid LinkedIn company page.
10. **Map data:**  Outputs the verified LinkedIn URL.

## Services:
- Airtop
- LinkedIn
- Google

## Hashtags:
#n8n #automation #linkedin #leadgeneration #companyresearch
