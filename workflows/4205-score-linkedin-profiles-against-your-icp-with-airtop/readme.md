# Person ICP Scoring with Linkedin

## Use cases:

- **Lead Prioritization:** Automatically score LinkedIn profiles of potential leads to prioritize outreach efforts based on their alignment with your Ideal Customer Profile (ICP).
- **Sales Intelligence:** Enrich lead data with insights into their AI interest, technical depth, and seniority level, enabling sales teams to tailor their messaging and approach.
- **Market Research:** Analyze LinkedIn profiles in a target market segment to understand the prevalence of key ICP characteristics and refine your targeting strategies.

## How it works:

1.  **Trigger:** The workflow is triggered either by a form submission with a LinkedIn profile URL and an Airtop profile or by another n8n workflow providing the same information.
2.  **Parameter Assignment:** The "Parameters" node assigns the values from the trigger to variables that will be used in the Airtop node.
3.  **Airtop Enrichment & Scoring:** The "Calculate ICP PersonScoring" node uses the Airtop API to extract data from the provided LinkedIn profile URL, determine AI interest, technical depth, and seniority, and calculate an ICP score based on a predefined scoring system defined in node prompt.
4.  **Data Formatting:** The "Edit Fields" node takes the output from Airtop and formats the data.
5.  **Output:** The workflow outputs the extracted LinkedIn profile data, including the calculated ICP score, as JSON.

## Services:

*   Airtop API (for profile data extraction and ICP scoring based on Linkedin data).
*   LinkedIn (via Airtop).

## Hashtags:

#n8n #automation #leadgeneration #icpscoring #linkedin
