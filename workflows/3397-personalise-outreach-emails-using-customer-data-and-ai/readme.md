# AI-Powered Personalized Sales Email Generator

## Use cases:

*   **Personalized Outreach Campaigns:** Generate highly customized sales emails for potential customers based on their past email interactions and communication styles, improving engagement and conversion rates.
*   **Lead Nurturing:** Automate the creation of personalized follow-up emails for leads, tailoring the message to their specific interests and pain points identified through email analysis.
*   **Sales Team Efficiency:** Enable sales representatives to quickly create individualized emails for a list of targeted customers, saving time and effort while increasing the relevance of their outreach.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger to initiate the process.
2.  **Get Targeted Customers from HubSpot:** Retrieves a list of targeted customers from HubSpot based on defined criteria (e.g., buying role).
3.  **Split into Batches:** Splits the customer list into individual items to process each contact separately using the "For Each Contact" node.
4.  **Set Variables:** Sets the variables of `firstname`, `lastname`, `email` and `product_to_sell`.
5.  **Retrieve Customer Emails:** Connects to a Gmail account and retrieves recent email correspondence from the customer.
6.  **Analyze Emails and Build Persona:** Uses the "Analyse and Build Persona" node and Google Gemini to analyze the customer's emails. The system prompt template defines attributes for LLM extraction like decision-making style, communication preferences, pain points, professional goals, personality traits, buying habits, and industry awareness, thereby constructing a detailed persona.
7.  **Generate Sales Email:** Based on the persona, uses Google Gemini to generate a personalized sales email tailored to the customer's individual preferences and needs. It uses the `product_to_sell` variable to guide the email's focus.
8.  **Create Draft Email:** Creates a draft email in Gmail containing the generated sales pitch, ready for human review and approval. The subject and body of the email are populated from the AI-generated content.
9.  **Loop:** The workflow iterates through each customer, creating a personalized email for each one.

## Services:

*   **Google Gemini:** Used to analyze customer emails and generate personalized sales email content.
*   **Gmail:** Used to retrieve customer emails and create draft emails for review.
*   **HubSpot:** Used to get targeted customer information.

## Hashtags:

#n8n #automation #sales #email #AI #personalization #workflow
