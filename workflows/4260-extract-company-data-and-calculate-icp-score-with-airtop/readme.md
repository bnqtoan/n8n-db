# Extract company data and calculate ICP

## Use cases:
1. **Lead Qualification:** Automatically qualify leads by identifying their LinkedIn profiles, extracting company information, and calculating an ICP score.
2. **Data Enrichment:** Enrich existing CRM data with up-to-date company information and ICP scores.
3. **Sales Automation:** Automate the process of identifying and prioritizing potential customers based on their ICP scores.

## How it works:
1. **Trigger:** The workflow starts either upon form submission ("On form submission" node) or when executed by another workflow ("When Executed by Another Workflow" node). The form requires a company domain, an Airtop Profile (connected to LinkedIn), and optionally a Company LinkedIn URL.
2. **Parameter Unification:** The "Unify Params" node consolidates the input parameters into a single data structure.
3. **LinkedIn Link Check:** The "LinkedIn link exists?" node checks if a Company LinkedIn URL was provided. If not, the "Extract company LinkedIn url" workflow is executed to find the company's LinkedIn URL using the provided domain and Airtop profile.
4. **LinkedIn Validation:** The "Is valid LinkedIn link?" node checks if the linkedin url is valid.
5. **Data Extraction and ICP Calculation:** The "Extract Company Information" and "Calclate ICP" workflows are executed in parallel to extract company information from LinkedIn and calculate the ICP score. Both workflows require an Airtop profile and the company's LinkedIn URL as input.
6. **Data Merging:** The "Merge" node combines the extracted company information, ICP score, and the LinkedIn URL (if found) into a single output.

## Services:
- Airtop (for LinkedIn profile extraction and web scraping)
- LinkedIn

## Hashtags:
#n8n #automation #leadgeneration #dataenrichment #icp
