# Automated Content SEO Audit Report

## Use cases:
- **Client Reporting:** Generate comprehensive SEO audit reports for clients, showcasing the current state of their website's content and identifying areas for improvement.
- **Internal SEO Audits:** Automate the process of auditing your own website's content to identify and address SEO issues, ensuring optimal performance.
- **Competitor Analysis:** Adapt the workflow to analyze competitor websites, uncovering their content strategies and identifying opportunities to outperform them.

## How it works:

1.  **Trigger:** The workflow is initiated manually by clicking the "When clicking ‘Start’" node.
2.  **Configuration:** The "Set Fields" node defines key parameters such as the target domain (`dfs_domain`), crawl limits (`dfs_max_crawl_pages`), company information (name, website, logo, and brand colors), and Google Search Console property type (`gsc_property_type`).
3.  **DataForSEO Task Creation:** The "Create Task" node uses the DataForSEO API to schedule a crawl of the target domain.
4.  **Task Status Check:** The "Check Task Status" node polls the DataForSEO API to monitor the progress of the crawl. The "If" node checks if the crawl is finished. If not, the "Wait" node pauses the workflow for one minute before checking the status again.
5.  **Data Retrieval:** Once the crawl is complete, the "Get RAW Audit Data" node retrieves the raw audit data from DataForSEO.
6.  **URL Extraction:** The "Extract URLs" node parses the raw audit data and extracts all URLs with a status code of 200.
7. **404 and 301 URLs Extraction:** The "Extract 404 & 301" node parses the raw audit data and extracts all URLs with a status code of 404 or 301.
8.  **Google Search Console (GSC) Query:** The "Loop Over Items" node iterates through the extracted URLs in batches, and the "Query GSC API" node retrieves performance data (clicks and impressions) from the Google Search Console API for each URL.
9. **Source URL extraction:** The "Get Source URLs Data" retrieves the source URLs and their text used to link to the 404 and 301 URLs
10.  **Data Merging:** The "Merge GSC Data with RAW Data" node combines the raw audit data from DataForSEO with the GSC performance data for each URL.
11.  **Report Structure:** The "Build Report Structure" node analyzes the merged data and structures it into a format suitable for generating the final report, categorizing issues and providing recommendations.
12.  **HTML Report Generation:** The "Generate HTML Report" node takes the structured data and company information to generate a fully customized HTML report.
13.  **Report Download:** The "Download Report" node converts the HTML content into a downloadable file.

## Services:

*   DataForSEO API
*   Google Search Console API

## Hashtags:

#n8n #SEO #Automation #ContentAudit #DataForSEO