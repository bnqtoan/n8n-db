# Calendly to Humantic AI to Notion Workflow

## Use cases:

*   **Automated Lead Enrichment:** Automatically analyze the personality traits of new Calendly meeting attendees using Humantic AI and store the insights in a Notion database for better lead qualification and personalized communication.
*   **Meeting Preparation:** Provide sales or customer success teams with personality insights before a meeting, enabling them to tailor their approach based on the attendee's DISC and OCEAN profiles.
*   **Centralized Contact Database:** Build a contact database enriched with personality data in Notion, facilitating targeted marketing campaigns and improved relationship management.

## How it works:

1.  **Calendly Trigger:** The workflow starts when a new invitee is created in Calendly. It is triggered by the `invitee.created` event.
2.  **Humantic AI (Initial User ID):** This node uses the response from the Calendly trigger to retrieve the user's ID from the `questions_and_responses` within the `payload`.  This User ID is then used to gather the AI personality analysis.
3.  **Humantic AI (Personality Analysis):** The previous node passes the User ID to this node to get an in-depth analysis of the contact's personality traits.
4.  **Notion:** The workflow then creates a new page in a specified Notion database. The page title is set to the invitee's name (extracted from Calendly data). The page content includes a detailed breakdown of the person's traits from Humantic AI like OCEAN and DISC personality assessments, and their summary.

## Services:

*   Calendly
*   Humantic AI
*   Notion

## Hashtags:

#n8n #automation #calendly #humanticai #notion
