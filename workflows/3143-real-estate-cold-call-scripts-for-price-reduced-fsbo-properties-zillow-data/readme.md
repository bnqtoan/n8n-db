# FSBO Main

## Use Cases:

- **Lead Qualification for Real Estate Investors:** Automatically gather property details and market data for "For Sale By Owner" (FSBO) listings based on form submissions, then use AI to generate tailored call scripts, enabling efficient lead qualification.
- **Real Estate Investment Analysis:** Calculate potential investment returns based on Zillow data, rent estimates, and market overviews, providing investors with actionable insights on FSBO properties.
- **Personalized Outreach to FSBO Sellers:** Generate customized call scripts using AI based on property data and market analysis, helping real estate professionals engage FSBO sellers with targeted and informed conversations.

## How it works:

1.  **Form Submission:** The workflow starts when a form is submitted ("On form submission" node). This likely contains property details for a FSBO listing.
2.  **Trigger FSBO Sub-workflow:** The "Execute Workflow" node triggers a sub-workflow named "FSBO", passing the form data to it.
3.  **Property Criteria Set:** "FSBO Property Criteria Set" node likely sets some parameters based on user preferences or market conditions.
4.  **Zillow Search:** The workflow searches Zillow ("Zillow Search" node) for property information using the details provided.
5.  **Split Data:** Splits data into multiple streams ("Split Out" node).
6.  **Zestimate Retrieval:** Retrieves rental estimates ("RentZestimate" node).
7.  **Market Overview:** Gathers a market overview ("market_overview" node).
8.  **Edit Fields:** Edits and prepares data for use in the AI models ("Edit Fields1" node).
9.  **Historical Market Indicator:** "Historical Market Results Indicator" node likely calculates the indicator based on input data.
10. **Historical Market Summary:** Generates a summary of the historical market data using a summarization chain from Langchain ("Historical Market Summary" node).
11. **OpenAI Chat Model:** Leverages OpenAI's chat model ("OpenAI Chat Model1" node) likely to help refine and contextualize the historical market data.
12. **Investment Calculation:** Calculates potential investment returns based on the property data and rent estimates ("Investment Calculator" node).
13. **Call Script Generation:** Generates a call script using OpenAI ("Call Script Generator" node) based on property details, rent estimates, and market information.
14. **Airtable Update:** Updates an Airtable database ("Call Script Database Airtable" node) with the generated call script and property information.

## Services:

-   Zillow API (via HTTP Request)
-   OpenAI (for call script generation and market data analysis)
-   Airtable

## Hashtags:

#n8n #automation #realestate #FSBO #openai
