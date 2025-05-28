# My Workflow

## Use cases

*   **Enrich lead data and add to Lemlist for outreach:** Automatically enrich contact information from a Google Sheet using Dropcontact and then add the enriched lead to a Lemlist campaign.
*   **Automated lead generation and CRM update:** Populate a Google Sheet with basic lead information, and this workflow will enrich this data and push it into a Lemlist campaign for further engagement.

## How it works

1.  **Trigger:** The workflow starts when you manually click the "execute" button in n8n.
2.  **Read from Google Sheets:** The "Google Sheets" node reads data from a specified sheet (configured via the 'sheetId' parameter) and range ("A:K").  It's assumed the sheet contains at least email, company name, website, LinkedIn profile, full name, last name and first name.
3.  **Enrich with Dropcontact:** The "Dropcontact" node uses the email, company name, website and LinkedIn profile from the Google Sheet data to enrich the lead's contact information using the Dropcontact API. The language is set to french and the option to find the siren number is enabled.
4.  **Add to Lemlist:** The "Lemlist" node uses the enriched email, first name, last name, and company name from the "Dropcontact" node to add the lead to a specified Lemlist campaign.

## Services

*   Google Sheets
*   Dropcontact
*   Lemlist

## Hashtags

#n8n #automation #leadgeneration #sales #emailoutreach
