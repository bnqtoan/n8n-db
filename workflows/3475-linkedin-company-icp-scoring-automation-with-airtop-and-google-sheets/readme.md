# ICP Company Scoring

## Use cases:

- **Lead Qualification:** Automatically score potential leads based on their LinkedIn company profile data to prioritize outreach efforts.
- **Market Research:** Evaluate and rank companies within a specific industry or niche to identify key players and potential partners.
- **Sales Intelligence:** Enhance CRM data with ICP scores to provide sales teams with actionable insights for targeted selling.

## How it works:

This workflow automates the process of scoring companies based on their LinkedIn profile to determine their Ideal Customer Profile (ICP) fit.

1. **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2. **Get companies:** Retrieves a list of companies and their LinkedIn URLs from a specified Google Sheets document.
3. **Calculate ICP Scoring:** Uses the Airtop node to extract data from each company's LinkedIn page. The prompt instructs Airtop to extract company information like name, tagline, location, employee count, AI implementation level, and technical sophistication, and then calculate an ICP score based on predefined criteria.
4. **Format Response:** Extracts the LinkedIn URL, the row number and the calculated total ICP score from the Airtop response to create a simplified JSON object.
5. **Update row:** Updates the Google Sheet with the calculated ICP score for each company, using the row number as a unique identifier.

## Services:

- **Google Sheets:** Used as a data source for company information and to store the calculated ICP scores.
- **Airtop:** Used to extract and analyze data from LinkedIn company pages to calculate the ICP score.
- **LinkedIn:** Used by Airtop to get companies data

## Hashtags:

#n8n #automation #ICP #leadscoring #salesintelligence
