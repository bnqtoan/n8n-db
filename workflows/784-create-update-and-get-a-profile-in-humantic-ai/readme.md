# Create, update, and get a profile in Humantic AI

## Use cases

*   **Lead Enrichment:** Automatically create and update profiles in Humantic AI when a new lead is identified, enriching lead data with personality insights for better targeting.
*   **Candidate Assessment:** Streamline candidate assessment by creating, updating, and retrieving Humantic AI profiles based on their LinkedIn URLs. This allows recruiters to quickly understand a candidate's personality traits and communication style.
*   **Personalized Outreach:** Create Humantic AI profiles for key contacts and update them with resume data, then retrieve these profiles to understand their preferences and tailor outreach strategies accordingly.

## How it works

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Create Humantic AI Profile:** The "Humantic AI" node creates a new profile in Humantic AI using a provided LinkedIn URL (`https://www.linkedin.com/in/harshil1712/`).  It uses the Humantic AI API to perform this operation.
3.  **Placeholder HTTP Request:** The "HTTP Request" node is present but configured with empty URL, so for now does nothing.
4.  **Update Humantic AI Profile:** The "Humantic AI1" node updates an existing Humantic AI profile. It retrieves the `userid` from the previous "Humantic AI" node's response and sends resume data to update the profile. This uses the Humantic AI API.
5.  **Get Humantic AI Profile:** The "Humantic AI2" node retrieves a Humantic AI profile. It uses the `userid` obtained from the "Humantic AI" node's response and retrieves persona information for 'hiring' purposes. This uses the Humantic AI API.

## Services

*   Humantic AI

## Hashtags

#n8n #HumanticAI #Automation #ProfileEnrichment #LeadGeneration
