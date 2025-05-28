# Generate SEO Keyword Search Volume Data using Google API

## Use cases:

*   **SEO Keyword Research:** Generate accurate search volume data for SEO keyword research to find keywords to target for your website SEO.
*   **Trend Identification:** Identify seasonal trends in keyword popularity for better content strategy and campaign planning.
*   **Keyword Difficulty Assessment:** Assess keyword difficulty and competition metrics to prioritize your SEO efforts.

## How it works:

1.  The workflow starts with a **"When clicking ‘Test workflow’"** node which triggers the workflow manually.
2.  The **"Set >=20 Keywords"** node defines an array of keywords (up to 20) for which to retrieve search volume data.
3.  The **"Get Search Data"** node sends a POST request to the Google Ads API, specifically the `generateKeywordHistoricalMetrics` endpoint. It uses the keywords from the previous node as input. It requires you to provide your Google Ads API credentials, customer ID, developer token, and login customer ID.
4.  The **"Split Out by KW"** node splits the data to work better on the data for storage.
5.  The **"Connect to your own database."** node (NoOp) represents a placeholder where you should connect to your own database (e.g., MySQL, PostgreSQL) or service (e.g. Google Sheets, Airtable) to store the retrieved keyword data. You need to configure this node to match your specific database setup.

## Services:

*   Google Ads API

## Hashtags:

#n8n #automation #SEO #GoogleAdsAPI #KeywordResearch
