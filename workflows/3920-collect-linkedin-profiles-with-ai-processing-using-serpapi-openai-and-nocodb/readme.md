# Simple LinkedIn profile collector

## Use cases:

- **Lead Generation:** Automatically collect LinkedIn profiles of professionals based on specific keywords and locations for targeted outreach.
- **Market Research:** Gather data on employees and company information from LinkedIn profiles to understand industry trends and competitive landscapes.
- **Recruiting:** Identify potential candidates on LinkedIn based on skills, experience, and location, streamlining the sourcing process.

## How it works:

1.  **Trigger:** The workflow is manually triggered to start the process.
2.  **Search Parameter:** Sets parameters like keyword, location, and search engine for the Google search query using SerpAPI.
3.  **Google Search with SerpAPI:** Uses the SerpAPI service to perform a Google search for LinkedIn profiles based on the defined parameters.
4.  **Turn search results into individual items:** Splits the search results into individual LinkedIn profiles for further processing.
5.  **Edit Fields:** Extracts relevant information from each profile, such as name, LinkedIn URL, and snippet, and assigns it to new fields.
6.  **Company name & followers:** Uses OpenAI to identify the company name from the profile and transform the follower count into a numerical value.
7.  **Discard meta data:** Discards unnecessary OpenAI metadata
8.  **Discard meta data:** This node discards irrelevant OpenAI metadata
9.  **Generate final data via merge:** This node creates the final data output
10. **LinkedIn profiles in Excel for download:** Stores all the data in an Excel file which can be downloaded.
11. **Store data in a NocoDB table:** Stores all the data in an NocoDB database for further utilization.

## Services:

-   **SerpAPI:** Used for performing Google searches and extracting search results.
-   **OpenAI:** Used for extracting company names and converting follower counts into numbers.
-   **NocoDB:** Used as a database to store collected LinkedIn profile data.

## Hashtags:

#n8n #automation #linkedin #leadgeneration #serpapi
