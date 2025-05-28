# CallForge Sales Gong Call Processor

## Use cases:

- **Automated Sales Call Analysis:** Automatically extract and format key information from Gong calls for analysis, improving sales performance and identifying trends.
- **Enriched CRM Data:** Augment Salesforce data with insights derived from Gong calls, providing a holistic view of customer interactions and deal progress.
- **Streamlined Coaching and Training:** Facilitate targeted coaching by processing call recordings that meet specific criteria, such as opportunity stage or primary opportunity association.

## How it works:

1.  **Trigger:** The workflow is triggered either manually or on an hourly schedule.
2.  **Get Salesforce Gong Objects:** Retrieves custom Gong Call objects from Salesforce, filtering for records created within the last 4 hours.  It selects specific fields like Call ID, talk times, title, and opportunity details.
3.  **Sort by Date:** Sorts the retrieved Gong Call objects by creation date in descending order to process the newest calls first.
4.  **Check Opportunity Stage:**  Verifies if the opportunity stage is either "Meeting Booked" or "Discovery."
5.  **Check Primary Opportunity:** Checks if the "Gong\_\_Primary\_Opportunity\_\_c" field contains a value.
6.  **Get Gong Call Details:** If the conditions are true, it retrieves detailed information about the Gong call using the "Gong Call ID."
7.  **Format Call Data:** Formats the call details into a JSON object, extracting metadata such as ID, URL, title, duration, and other relevant properties. It also includes Salesforce Opportunity Id.
8.  **Pass to Preprocessor:**  Passes the formatted call data to a separate workflow ("Gong Call Preprocessor Demo") for further processing, presumably involving transcript analysis and AI-driven insights generation.

## Services:

-   **Salesforce:** Used to fetch Gong call objects and related data.
-   **Gong:** Used to retrieve detailed information and metadata about specific Gong calls.

## Hashtags:

#n8n #automation #sales #Gong #Salesforce #callanalysis
