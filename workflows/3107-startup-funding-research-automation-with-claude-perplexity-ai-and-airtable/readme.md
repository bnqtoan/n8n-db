# Funding Rounds Tracker and Company Deep Dive

## Use cases:

- **Automated Investment Research:** Automatically identify and extract data about companies that have recently raised funding for initial screening and analysis.
- **Competitive Intelligence:** Track funding events in your industry to monitor competitors and identify emerging trends.
- **Data Enrichment for CRM:** Enhance your CRM data by automatically adding funding details and company information to relevant records.

## How it works:

1.  **Data Acquisition:** The workflow starts by fetching news sitemap XML feeds from TechCrunch and VentureBeat using HTTP Request nodes.
2.  **XML Parsing:** The XML data is parsed into JSON format, allowing for easier data extraction.
3.  **Article Splitting and Filtering:** The workflow splits the articles and filters those that contain the keyword "raise" in either the article title or URL, ensuring only relevant funding announcements are processed.
4.  **Article Content Extraction:**  The workflow retrieves the full HTML content of the filtered articles using HTTP Request nodes and extracts the main text and title using HTML Parser nodes.
5.  **Data Merging:**  The extracted data from TechCrunch and VentureBeat articles is merged into a unified dataset.
6.  **Structured Data Extraction (Initial):** The workflow uses a Language Model (LM) to extract structured data, such as company name, funding round, and funding amount, from the article text using the "Extract Structured Data" node.
7. **Website Research**: Uses Perplexity to find the company website
8. **Collect Data**: Collecting all data to pass on to detailed company research and store information in airtable
9. **Company Deep Dive (Subworkflow):** If all required information is present, the workflow triggers another workflow using the "Execute Workflow" node, passing the extracted company name, funding round, and funding amount as inputs. This sub-workflow performs a deep dive into the company, using Perplexity or Jina Deep Search to gather comprehensive information.
10. **Deep Research Prompts:** The "Prompts" node defines the specific information to gather about the company and it combines user and system prompts for clarity and guidance.
11. **Deep Research API Call:** The workflow uses the Deep Research API from Perplexity to access real-time information and in-depth analysis.
12. **Deep Research Response Parsing:** The workflow extracts the report and links from the Deep Research API response.
13. **Structured Data Extraction (Advanced):** The workflow use Claude model to extract more than 20 properties regarding the company
14.  **Airtable Integration:** The final step involves creating a new record in an Airtable base with the extracted funding information and company details.

## Services:

-   TechCrunch (API)
-   VentureBeat (API)
-   Perplexity (API)
-   Jina AI (API)
-   Airtable (API)
-   Anthropic (API)
-   OpenRouter

## Hashtags:

#n8n #automation #funding #investmentresearch #companydata #languagemodel #deepresearch
