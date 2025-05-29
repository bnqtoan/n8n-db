# Define ICP from Customers v3

## Use Cases

- **Automated Ideal Customer Profile (ICP) Definition:** Automatically define or refine your ICP by analyzing LinkedIn profiles of existing customers, saving time and effort compared to manual research.
- **Lead Scoring and Qualification:** Use the generated ICP and scoring methodology to quickly evaluate new leads and prioritize outreach to those who best fit your ideal customer profile.
- **Targeted Lead Generation:** Leverage the Google Boolean search query to find similar prospects on LinkedIn or other platforms, improving the efficiency of your lead generation efforts.

## How It Works

This workflow automates the process of defining your Ideal Customer Profile (ICP) based on the LinkedIn profiles of your existing customers.

1.  **Trigger:** The workflow is initiated when a chat message containing one or more LinkedIn profile URLs is received.
2.  **AI Agent:** Parses the chat input, extracts LinkedIn URLs, and orchestrates the subsequent data enrichment and analysis steps.
3.  **Airtop Data Enrichment:** For each LinkedIn profile URL, the Airtop tool extracts key information such as job title, company, skills, experience, and education.
4.  **Anthropic Chat Model:** Uses Claude 3.7 Sonnet to analyze the enriched data and synthesize a comprehensive ICP definition, including key attributes, weighting, exclusion criteria, and a scoring methodology.
5.  **Google Docs (Optional):** Creates a new Google Doc (or updates an existing one) with the generated ICP analysis, providing a structured and easily shareable document.
6.  **Memory:** Simple memory node to give more context to the Anthropic Chat Model.

## Services

-   **LinkedIn:** Used as the source of customer profile data.
-   **Airtop:** A data enrichment tool to extract information from LinkedIn profiles.
-   **Anthropic:** Claude 3.7 Sonnet Language Model used for ICP analysis.
-   **Google Docs (Optional):** Used for storing and sharing the generated ICP definition.

## Hashtags

#n8n #automation #ICP #leadgeneration #AI #Airtop #LinkedIn #CustomerProfiling #IdealCustomer
