# Competitor Research Agent

## Use cases:
- **Market Analysis:** Automatically gather and analyze competitor data to understand their strategies, funding, and product offerings.
- **Sales Intelligence:** Equip sales teams with up-to-date information on competitors, enabling them to better position their products and services.
- **Investment Research:** Quickly assess potential investment opportunities by evaluating the competitive landscape and key players in a specific industry.

## How it works:
1. **Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2. **Set Source Company:** Defines the target company for which you want to find competitors. You **must** set the `company_url` parameter in the "Set Source Company" node.
3. **Competitor Search via Exa.ai:** Uses the Exa.ai API to find similar companies based on the source company's URL.
4. **Results to List & Extract Domain:** Splits the results into individual competitor URLs and extracts the domain name.
5. **Remove Duplicates:** Removes duplicate competitor URLs to avoid redundant processing.
6. **Limit:** Limits the number of competitors to analyze (set to 10 by default)
7. **Loop Over Items:** Iterates through each competitor URL to perform in-depth analysis.
8. **Company Overview Agent:** This AI agent uses the SerpAPI and Firecrawl to search for company information on Crunchbase, Wellfound, and LinkedIn. It extracts key details like year founded, founders, funding status, and news.
9. **Company Product Offering Agent:** This AI agent uses the SerpAPI and Firecrawl to identify the product and services, tech stack, and pricing models of each competitor.
10. **Company Product Reviews Agent:** This AI agent uses the SerpAPI and Firecrawl to gather online customer reviews for each competitor, extracting positive and negative mentions, top pros and cons, and geographical breakdown.
11. **Collect Results:** Combines the outputs from the three agents into a single data structure.
12. **Insert Into Notion:** Creates a new page in a specified Notion database with a detailed competitor report. The report includes company overview, funding information, product offerings, and customer reviews. The Notion database ID **must** be configured in the "Insert Into Notion" node.
13. **Wait:** Pauses the workflow for 2 seconds before processing the next competitor.

## Services:
- Exa.ai: AI-powered search engine for finding similar companies.
- SerpAPI: Search engine results API for gathering company profiles, news, and product reviews.
- Firecrawl API: Web scraping API for extracting content from web pages.
- OpenAI: AI models for parsing information
- Notion: Note-taking and project management platform for storing competitor reports.

## Hashtags:
#n8n #automation #competitoranalysis #AI #marketresearch
