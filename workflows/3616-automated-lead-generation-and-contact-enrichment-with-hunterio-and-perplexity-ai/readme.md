# LeadAIgen-basic

## Use cases:

- **Lead Generation for Marketing Agencies:** Automatically generate lists of potential leads by scraping company data and contact information based on specific criteria like industry, location, and technologies used.
- **Enriching Existing Lead Lists:** Enhance existing lead lists with up-to-date contact details, employee information, and company insights using data from various sources.
- **Chatbot-Driven Lead Discovery:** Allow a chatbot to initiate lead generation based on user queries, providing a dynamic way to discover new prospects.

## How it works:

1.  The workflow starts with a manual trigger ("When clicking 'Test workflow'") or a chat message trigger ("When chat message received").
2.  If triggered manually, it reads a list of companies from a Google Sheet named "new Leads".
3.  It then takes a slice of the leads down to 10, for testing purposes.
4.  The "Find real user data with Hunter" node enriches the lead data by finding contact information and company details using the Hunter.io API.
5.  The "Clean Hunter output" node processes the data received from Hunter.io to get a list of leads, and send them to an "If" node.
6.  After the "If" node, it will ask the OpenRouter Chat Model for leads
7.  If triggered by chat, it sends the chat message to an OpenRouter Chat Model for processing.
8.  The OpenRouter Chat Model passes the message to the Company Finder node.
9.  The AI-generated lead data is cleaned and structured using a "JSON cleaner code" node, then split into individual items.
10. The workflow reads all existing domains from google sheet named "Leads List".
11. The existing domains are merged with the ai-generated leads.
12. Duplicates are removed
13. Finally, the data gets written to a Google sheet name "Leads List4"

## Services:

-   Google Sheets
-   Hunter.io
-   OpenRouter
-   Telegram

## Hashtags:

#n8n #leadgeneration #automation #googlesheets #openai
