# Seller Data Enrichment Workflow

## Use cases:

- **Enriching Seller Data:** Automatically updates seller information in a database (Postgres) with verified email addresses and domain names.
- **Email Discovery:** Discovers email addresses associated with sellers using web scraping via Bright Data and Google searches, even when the information isn't directly available.
- **Data Cleansing:** Standardizes and cleans seller data by extracting relevant information (domain, email) and updating the database.

## How it works:

1. **Trigger:** The workflow is initiated either manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger").
2. **Read from Database:** It reads seller data from a Postgres database where the `primary_email` field is null ("Read the Database"). A limit of 60 records at a time are read.
3. **Batch Processing:** The data is processed in batches of 5 ("Process by Batch").
4. **Domain Existence Check:** A Switch node ("Switch") checks if a domain exists for the seller.
   - **If Domain Exists:** It searches Google for "domain + email" using Bright Data's web unlocking service ("BrightData"). The HTML content of the search result is extracted ("HTML"), emails are extracted ("Extract Emails"), filtered ("Filter"), and aggregated. Then if the email exists, it saves it to the postgres DB. If there are no results, it waits for 2 seconds and continues to the next batch.
   - **If No Domain, but Business Address and Trade Name Exist:** It searches Google for "email + trade_name/seller_name + business_address" using Bright Data ("BrightData1"). Similar HTML extraction ("HTML1"), email extraction ("Code2"), filtering ("Filter1"), aggregation ("Aggregate1"), and field editing ("Edit Fields3") steps are performed.
   - **No Domain, Business Address or Trade Name:** Update the postgres DB with the "seller_id" to retry the process.
5. **Email Verification and Domain Extraction:** It uses JavaScript code ("Code") to normalize company names and extract root domains from URLs.
6. **Data Cleaning and Updates:** A Switch node ("Switch1") check the extracted email and root domain to make sure if the domain matches the extracted email. According to each condition it saves the info to the Postgres DB.
7. **Database Update:** Updates the Postgres database ("Postgres1", "Postgres2", "Postgres3", "Postgres4") with the extracted domain and email information based on certain conditions.
8. **Waiting:** A Wait node ("Wait") pauses the workflow.

## Services:

- **PostgreSQL:** Database to store and update seller information.
- **Bright Data:** Web unlocking service to scrape Google search results.
- **Google:** Search engine used to find email addresses and domain information.

## Hashtags:

#n8n #automation #datacleaning #webscraping #postgres
