# LinkedIn Profile Discovery w Verification

## Use cases:

- **Lead Generation:** Automatically find and verify LinkedIn profiles of potential leads based on their name, company, or other known information, ensuring accuracy for targeted outreach.
- **Recruiting:** Quickly identify and validate candidate profiles on LinkedIn, streamlining the sourcing process and improving the quality of candidates.
- **Contact Enrichment:** Enhance existing CRM or database records with verified LinkedIn profile URLs, providing sales and marketing teams with valuable insights and engagement opportunities.

## How it works:

1.  **Trigger:** The workflow is triggered either by a form submission or when executed by another workflow, receiving "Person Info" and an optional "Airtop Profile".
2.  **Unify Parameters:** Standardizes the input parameters, merging form submission or workflow execution data into a consistent format.
3.  **Search Profile URL:** Uses the "Person Info" to search for a LinkedIn profile URL on Google using Airtop. It extracts the most likely LinkedIn URL from the search results.
4.  **Is valid Linkedin link?:** Checks if the profile URL exists, is not NA and belongs to linkedin.com
5.  **Verify Profile URL:** If an "Airtop Profile" is provided, the workflow verifies the extracted LinkedIn profile by analyzing the page's content and matching it against the "Person Info" using Airtop.  If the profile is a match, the URL is returned. If no Airtop Profile is provided, the verification step is skipped.

## Services:

-   **Google Search:** Used to initially find potential LinkedIn profile URLs.
-   **Airtop:** Used to perform web searches, extract data from webpages, and optionally verify the LinkedIn profile (requires an Airtop account and API key).
-   **LinkedIn:** Profiles discovery and verification.

## Hashtags:

#n8n #automation #linkedin #datascraping #leadgeneration
