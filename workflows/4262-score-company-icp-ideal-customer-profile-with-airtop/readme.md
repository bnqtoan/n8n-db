# Company ICP Scoring

## Use cases:

- **Lead Qualification:** Automatically score leads based on their LinkedIn profiles to prioritize outreach efforts.
- **Market Research:** Analyze target companies' profiles to understand their alignment with your Ideal Customer Profile (ICP).
- **Sales Enablement:** Provide sales teams with a data-driven ICP score and justifications for each company, enabling them to tailor their approach.

## How it works:

1.  **Trigger:** The workflow starts either by a form submission containing a company's LinkedIn URL and Airtop Profile or when executed by another workflow, receiving the same information as input.
2.  **Unify Params:** The "Unify params" node combines data received by form submission and data received by another workflow.
3.  **Calculate ICP:** The "Calculate ICP" node takes the company's LinkedIn URL and Airtop Profile as input. It extracts data from the LinkedIn profile using the Airtop integration, applies a scoring rubric based on AI focus, technical level, employee count, agency status, and geography, and calculates a total ICP score with justifications for each category.
4.  **Parse to JSON:** The "Parse to JSON" node parses the Airtop response to standarize the data into JSON format.
5.  **Flat json:** The "Flat json" node extracts specific fields from the JSON output (total score, AI focus, employee count, technical level, agency status, and geography) into individual variables for easier use in subsequent nodes or systems.

## Services:

-   Airtop: Used to browse LinkedIn profiles and extract relevant information.
-   LinkedIn: Source of company data for ICP scoring.

## Hashtags:

#n8n #automation #icp #leadscoring #linkedin
