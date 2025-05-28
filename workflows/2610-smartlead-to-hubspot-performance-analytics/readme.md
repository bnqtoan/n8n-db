# Smartlead Campaign Data and HubSpot Lifecycle Stage Automation

## Use cases:

- **Automated Campaign Performance Reporting:** Automatically collect campaign data from Smartlead, analyze lead progression in HubSpot, and generate a comprehensive report in Google Sheets. This allows marketers to easily track campaign performance and identify areas for improvement.
- **Real-time Lead Status Updates:** Monitor lead lifecycle stages in HubSpot based on campaign activity. Update lead records in a Postgres database with the latest lifecycle stage, ensuring sales and marketing teams have the most up-to-date information.
- **Data Enrichment and Synchronization:** Enrich campaign activity data with lead information from HubSpot (e.g., lifecycle stage, number of open deals). Synchronize this data between Smartlead, HubSpot, and a Postgres database to create a unified view of campaign performance and customer interactions.

## How it works:

1.  **Schedule Trigger:** The workflow is initiated by a schedule trigger, which can be configured to run at specific intervals.
2.  **Set Smartlead API Key:** Sets the Smartlead API key, which is needed to connect to the Smartlead platform.
3.  **Fetch All Campaigns:** Retrieves all campaigns from Smartlead using the Smartlead API.
4.  **Loop Over Items:** Iterates through each campaign fetched from Smartlead.
5.  **Extract Campaign Data:** Extracts lead data from each campaign using the Smartlead API.
6.  **Code:** Transforms the CSV-like data received from Smartlead into structured JSON data. It parses the CSV content, extracts the headers, and maps the values to create individual JSON objects for each lead.
7.  **UPSERT CAMPAIGN ACTIVITY:** Inserts or updates campaign activity data in a Postgres database (`ce_campaign_activity` table). It takes the transformed data from the "Code" node and maps it to the corresponding columns in the database table.
8.  **UPDATE CAMPAIGN:** Updates campaign data from each campaign inside the `ce_campaign` table in postgres
9.  **Merge:** Merges data from "UPDATE CAMPAIGN" and "UPSERT CAMPAIGN ACTIVITY"
10. **Search:** Executes a SQL query on a Postgres database to find campaign activities where the HubSpot lifecycle stage (`hb_lifecyclestage_check_timestamp`) hasn't been checked or needs to be updated (older than 24 hours).
11. **Loop Over Items1:** Iterates through each campaign activity item retrieved from the Postgres database.
12. **HubSpot:** Retrieves company data from HubSpot using the HubSpot API for each item.
13. **If:** Checks if the `companyId` field in the HubSpot data is empty.
14. **HUBSPOT TABLE:** Inserts or updates HubSpot company data (lifecycle stage, number of open deals) into the `hubspot` table in a Postgres database. This step is executed if the `companyId` is not empty.
15. **Postgres1:** Updates the `hb_lifecyclestage_check_timestamp` column in the `ce_campaign_activity` table in the Postgres database with the current timestamp. This is executed if the `companyId` is empty.
16. **UPDATE HUBSPOT ACTIVITY TABLE:** Updates the `hb_lifecyclestage_check_timestamp` column in the `ce_campaign_activity` table in the Postgres database with the current timestamp.
17. **Postgres:** Executes a SQL query to generate a campaign analytics report by aggregating data from the `hubspot` and `ce_campaign` tables in the Postgres database.
18. **Google Sheets:** Appends or updates the campaign analytics report data into a Google Sheet.

## Services:

-   Smartlead: Used to retrieve campaign and lead data.
-   HubSpot: Used to retrieve company and lifecycle stage information.
-   Postgres: Used as a database to store campaign activity and HubSpot data.
-   Google Sheets: Used to generate a report of campaign analytics.

## Hashtags:

#n8n #automation #marketing #sales #crm #Smartlead #Hubspot #Postgres #GoogleSheets #campaignanalytics
