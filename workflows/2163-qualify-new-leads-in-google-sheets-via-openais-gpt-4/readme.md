# Qualify new leads in Google Sheets via OpenAI's GPT-4

## Use cases:

*   **Automated Lead Qualification:** Automatically qualify new leads submitted through a Google Forms connected to Google Sheets, saving sales or community management teams time and effort.
*   **Prioritize High-Quality Leads:** Identify and prioritize leads that meet specific criteria, such as decision-makers with significant team sizes or those using corporate email domains.
*   **Improve Lead Conversion Rates:** By quickly identifying qualified leads, sales teams can focus their efforts on the most promising prospects, potentially improving conversion rates.

## How it works:

1.  **Trigger:** The workflow starts when a new row is added to a specified Google Sheet, usually after submitting the Google Form.
2.  **Fetch New Lead Data:** The "Check for new entries" node triggers the workflow when a new entry is added to the Google Sheet.
3.  **Qualify Leads with GPT:** The "Qualify leads with GPT" node sends the lead's information (name, email, business area, team size) to OpenAI's GPT-4 model along with a system message defining the criteria for a qualified lead. The system message instructs GPT-4 to determine if a lead is qualified based on whether the lead is a decision-maker, has a significant team size, and uses a corporate email domain. GPT-4 responds with a JSON object containing a rating ("qualified" or "not qualified") and an explanation.
4.  **Extract JSON reply:** Parses the string response from Open AI to a JSON object that can be used for the next nodes.
5.  **Merge Data:** The "Merge" node combines the original lead data from Google Sheets with the qualification result (rating and explanation) from OpenAI.
6.  **Update Google Sheet:** The "Update lead status" node updates the Google Sheet with the "rating" determined by GPT-4 using the timestamp as a key.

## Services:

*   Google Sheets
*   OpenAI (GPT-4)

## Hashtags:

#n8n #automation #leadqualification #googlesheets #openai
