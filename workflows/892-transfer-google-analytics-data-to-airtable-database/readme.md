# Get analytics of a website and store it Airtable

## Use cases:

- **Website Performance Tracking:**  Automatically collect and store website analytics data (like sessions per country) in Airtable for easy monitoring and analysis of website performance trends over time.
- **Reporting Automation:**  Create automated reports in Airtable based on website analytics, eliminating the need for manual data extraction and entry. This can be useful for sharing key metrics with stakeholders.
- **Geographic Performance Analysis:**  Quickly identify which countries are contributing the most to website traffic and tailor marketing efforts accordingly by storing country-specific session data.

## How it works:

1.  The workflow starts with a **"On clicking 'execute'"** Manual Trigger node. This allows you to manually initiate the workflow execution.
2.  The **"Google Analytics"** node fetches website analytics data. It's configured to retrieve the number of sessions (`ga:sessions`) and the country (`ga:country`) from your Google Analytics account within a defined date range (December 31, 2019, to August 30, 2020). Note that you must provide the correct `viewId` and have properly configured the `googleAnalyticsOAuth2` credential.
3.  The **"Set"** node extracts the total number of sessions and the country from the Google Analytics data and stores them in variables called "Metric" and "Country", respectively. This formats the data into a structure suitable for Airtable. It also discards the initial payload and keeps only these two variables.
4.  The **"Airtable"** node then appends the "Metric" (number of sessions) and "Country" data as a new record to the specified "Table 1" in your Airtable base. You'll need to configure `application` and ensure the `airtableApi` credential is set up correctly.

## Services:

-   Google Analytics
-   Airtable

## Hashtags:

#n8n #googleanalytics #airtable #automation #websiteanalytics
