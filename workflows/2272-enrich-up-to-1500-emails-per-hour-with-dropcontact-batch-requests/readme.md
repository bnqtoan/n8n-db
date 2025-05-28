# DROPCONTACT 250 BATCH ASYNCHRONOUSLY

## Use cases:

1.  **Lead Enrichment:** Automatically enrich lead data in a database with email addresses and phone numbers using Dropcontact's API, ensuring that sales and marketing teams have the most up-to-date contact information.
2.  **Data Cleansing:** Clean and update outdated contact information in a database by leveraging Dropcontact to find valid email addresses and phone numbers for existing contacts.
3.  **Targeted Outreach:** Identify and qualify leads who are in "Bestuurder" roles by finding their emails to improve targeting and engagement.

## How it works:

This workflow automates the process of extracting contact information from a Postgres database, enriching it with Dropcontact, and updating the database with the enriched data. Here's a breakdown:

1.  **Schedule Trigger:** The workflow is triggered based on a predefined schedule.
2.  **PROFILES QUERY:** Queries a Postgres database to retrieve a list of contacts with "Bestuurder" title from the `accounts` table, joining with `profiles` table. It filters out common email domains (like gmail.com, hotmail.com) and contacts already processed. A limit of 1000 is added to the query.
3.  **Loop Over Items2:** Splits the retrieved contacts into batches of 250 for processing by the Dropcontact API asynchronously.
4.  **Aggregate:** Aggregates several values from the query results.
5.  **DATA TRANSFORMATION:** Transforms the data from the database query into a format suitable for the Dropcontact API. It combines first name, last name, and domain into a JSON structure.
6.  **BULK DROPCONTACT REQUESTS:** Sends a batch request to the Dropcontact API to find professional email addresses and phone numbers based on the provided names and company domains.
7.  **Wait2:** Pauses the workflow for 600 seconds (10 minutes) to allow Dropcontact to process the bulk request.
8.  **BULK DROPCONTACT DOWNLOAD:** Retrieves the results of the Dropcontact batch request using the `request_id` returned from the previous step.
9.  **Split Out:** Splits the `data` field into individual items for processing.
10. **Postgres:** Updates the Postgres database with the email address, phone number, `dropcontact_found` and `email_qualification` retrieved from Dropcontact for the corresponding contact if the email has been found.
11. **Slack:** Sends a Slack notification when there are issues with Dropcontact credits.

## Services:

*   Postgres: Used as the primary database to extract and update contact information.
*   Dropcontact: Used to enrich contact data with professional email addresses and phone numbers.
*   Slack: Used to send notification about Dropcontact's credits issue.

## Hashtags:

#n8n #automation #Dropcontact #leadgeneration #databaseenrichment
