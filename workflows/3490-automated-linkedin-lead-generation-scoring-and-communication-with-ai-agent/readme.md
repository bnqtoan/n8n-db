# HDW Lead Geländewagen

## Use cases:

- Automate lead generation on LinkedIn based on a defined Ideal Customer Profile (ICP).
- Enrich lead data with company information, website analysis, and recent activities.
- Prioritize leads based on a scoring system and automatically send connection requests and personalized messages.

## How it works:

1.  **ICP Definition**: The workflow starts with an AI-driven conversation to define the Ideal Customer Profile (ICP). The user inputs the desired criteria, such as job titles, industries, locations, and company sizes.
2.  **LinkedIn Search**:  The ICP data is transformed into LinkedIn Sales Navigator search parameters using an AI Agent and the HDW LinkedIn node.
3.  **Data Storage**:  Leads found on LinkedIn are stored in a Google Sheets spreadsheet, including their profile information.
4.  **Data Enrichment**:
    -   The workflow retrieves company websites using the HDW LinkedIn node.
    -   AI models summarize company websites, lead's posts, company news, and posts.
5.  **Lead Scoring**: AI evaluates each lead based on their profile, company website content, and recent activities to assign a lead score, reflecting their potential interest in the product.
6.  **Automated Outreach**:
    -   The workflow filters leads based on their lead score and whether a connection request has already been sent.
    -   Connection requests are sent automatically.
    -   Upon connection, personalized messages are sent to the leads.
7.  **Connection Check**: The workflow checks the list of connected leads and if the automated message has not been sent yet, it will automatically send it.

## Services:

-   Google Sheets
-   OpenAI API
-   HDW LinkedIn API (horizondatawave.ai)

## Hashtags:

#n8n #automation #linkedin #leadgeneration #salesnavigator
