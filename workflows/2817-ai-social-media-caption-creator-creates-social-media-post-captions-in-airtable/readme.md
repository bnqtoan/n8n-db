# AI Social Media Caption Creator

## Use cases:

- **Automated Social Media Content Generation:**  Create engaging captions for social media posts based on a briefing and target audience data stored in Airtable, saving time and effort for marketing teams.
- **Editorial Planning & Execution:** Streamline social media planning by automatically generating caption drafts when new content ideas are added to an Airtable editorial calendar.
- **Consistent Brand Messaging:** Ensure consistent tone and messaging across social media channels by leveraging background information and predefined prompts within the workflow.

## How it works:

1.  **Airtable Trigger: New Record:** The workflow starts when a new record is created in the specified Airtable table (Redaktionsplanung).  It triggers when the "created\_at" field is populated, indicating a new content idea.
2.  **Wait 1 Minute:** A wait node pauses the workflow for one minute to ensure the Airtable record creator has enough time to fill in the "Briefing/Notizen" field.
3.  **Get Airtable Record Data:** Fetches the complete data of the newly created Airtable record, including the briefing for the social media post.
4.  **AI Agent:** This node acts as the core caption creator.
    *   It receives the "Briefing/Notizen" from the Airtable record.
    *   It uses the "Background Info" tool to retrieve additional information about the target audience and communication style from another Airtable table ("Good to know").
    *   Leverages an OpenAI Chat Model (gpt-4o) to generate the caption. The agent is given a detailed system prompt instructing it to create a creative, target audience-oriented caption with a clear call-to-action.
    *   It also uses "Window Buffer Memory" to manage context and improve the quality of the generated caption over time.
5.  **Format Fields:**  Formats the generated caption and assigns it to a field named "SoMe Text".
6.  **Post Caption into Airtable Record:** Updates the original Airtable record with the generated social media caption in the field "SoMe\_Text\_KI".

## Services:

*   **Airtable:** Used for triggering the workflow, storing content briefings, target audience data, and saving the generated captions.
*   **OpenAI:** Powers the AI Agent through the Chat Model node, enabling the generation of creative and engaging captions.

## Hashtags:

#n8n #automation #socialmedia #contentcreation #AI
