# LinkedIn Leads Scraping & Enrichment (Main)

## Use Cases:

- **Automated Lead Generation:** Automatically find and gather leads from LinkedIn based on specific job titles and locations, streamlining the lead generation process for sales and marketing teams.
- **Enriched Lead Data for Personalized Outreach:** Enhance lead data with LinkedIn profile summaries and recent posts, enabling highly personalized cold outreach strategies that increase engagement and conversion rates.
- **Regular Data Refresh and Maintenance:** The workflow includes mechanisms to identify and re-evaluate leads with invalid email addresses or failed profile scraping attempts, ensuring the lead database remains up-to-date and accurate.

## How it works:

1.  **Form Submission:** The workflow starts with a form submission in n8n, where users input the desired job title, location, and the number of leads to search for.
2.  **Apollo.io Lead Generation:** The workflow then uses the Apollo.io API to search for leads based on the form input, extracting basic information such as name, LinkedIn URL, and job title.
3.  **Data Cleaning and Storage:** This node then extract and clean the lead information from Apollo, storing it in a Google Sheet, which also acts as the central database for lead enrichment status.
4.  **LinkedIn Username Extraction:** The workflow extracts LinkedIn usernames from the profile URLs and stores them in the Google Sheet.
5.  **Email Address Enrichment:** The workflow retrieves email addresses from Apollo.io, validates them using Mails.so, and updates the Google Sheet with the valid email addresses and contact scraping status. Leads with invalid emails are flagged, and a weekly trigger re-evaluates them.
6.  **LinkedIn Profile Enrichment:**
    *   **Profile Summary:** The workflow retrieves LinkedIn profile summaries using the LinkedIn Data API and OpenAI to summarize the data into more helpful information for sales emails.
    *   **Recent Posts Summary:** Similarly, the workflow scrapes recent LinkedIn posts, summarizes them using OpenAI, and stores the summaries in the Google Sheet.
7.  **Data Consolidation and Final Database Update:** Once the email address, profile summary, and recent posts are successfully scraped and summarized, the workflow consolidates all the enriched data and appends it to a final "Enriched Leads Database" Google Sheet.
8. **Retry Mechanism** In the event that the main API fails to retrieve LinkedIn information, workflow defaults to scraping with Apify and retrying with the main option to prevent as much downtime in the data enrichment pipeline as possible.
9.  **Error Handling:** There are nodes which are designed to identify leads for whom LinkedIn profile scraping or email validation failed and reset the status, in order to reattempt enrichment periodically.

## Services:

*   Google Sheets
*   Apollo.io API
*   OpenAI API
*   Mails.so API
*   LinkedIn Data API (RapidAPI)
*   Apify

## Hashtags:

#n8n #automation #leadgeneration #linkedin #datascraping
