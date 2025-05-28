# Calendly to Notion Lead Capture

## Use cases:

*   **Automatically capture new leads from Calendly appointments in a Notion database:** When someone schedules a meeting via Calendly, their information is automatically extracted and added as a new entry in your Notion database.
*   **Enrich lead data with Dropcontact:** Enhance lead information with data enrichment from Dropcontact, such as LinkedIn profiles, company details, and website URLs.

## How it works:

1.  **Calendly Trigger:** The workflow starts with a "Calendly Trigger" node, which listens for new "invitee.created" events (i.e., when someone schedules a meeting).
2.  **Dropcontact:** The "Dropcontact" node receives the invitee's email and name from the Calendly event. It uses the Dropcontact API to find additional information about the lead, such as their LinkedIn profile, website, and company details.
3.  **Notion:** The "Notion" node receives the enriched lead data from Dropcontact. It then creates a new page in the specified Notion database (databaseId). The node maps the data from Dropcontact to the corresponding properties in the Notion database, including name, email, LinkedIn profile, company information, meeting date and time, and a "Civility" field.

## Services:

*   Calendly
*   Dropcontact
*   Notion

## Hashtags:

#n8n #automation #calendly #notion #leadgeneration
