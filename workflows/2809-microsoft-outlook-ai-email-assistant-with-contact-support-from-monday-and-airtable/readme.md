# Microsoft Outlook AI Email Assistant

## Use cases:

- Automatically categorize incoming emails in Microsoft Outlook to improve inbox organization and prioritization.
- Flag emails from important clients or contacts for immediate action based on AI-driven analysis.
- Streamline email management by identifying and categorizing emails, enabling faster response times and improved productivity.

## How it works:

1.  **Triggers:** The workflow starts with either a manual trigger or a scheduled trigger to check for new emails in a specified Outlook folder. A separate scheduled trigger updates contacts from Monday.com.
2.  **Get Emails from Outlook:** Retrieves unflagged emails without categories from Microsoft Outlook using the `Microsoft Outlook` node. Filters are applied to exclude flagged emails and those already categorized.
3.  **CRM Contact Update:** A separate branch retrieves contacts from Monday.com and updates an Airtable database.
4.  **Email Sanitization:** Converts email body from HTML to Markdown and extracts relevant email fields (subject, sender, body, etc.) using `Markdown` and `Set` nodes, removing HTML tags and unnecessary information.
5.  **Data Retrieval from Airtable:** Fetches Rules, Categories, Delete Rules and Contacts from Airtable.
6.  **Contact Matching:** Checks if the sender's email address exists in the Airtable contacts.
7.  **AI-Powered Categorization:** An AI agent (`@n8n/n8n-nodes-langchain.agent`) analyzes the email content, subject, and sender information to categorize the email.  It uses the retrieved Categories, Rules, and Contacts information from Airtable to make informed decisions. The agent is configured with a system message to guide its categorization process based on predefined categories and rules.
8.  **Structured Output:** The AI agent outputs a JSON structure.
9.  **Set Category in Outlook:** Updates the email in Microsoft Outlook with the category determined by the AI agent using the `Microsoft Outlook` node.
10. **Conditional Importance Setting:** Checks if the subcategory is equal to "Action".
11. **Set Importance in Outlook:** If the subcategory is "Action", the workflow sets the importance of the email to high in Microsoft Outlook using the `Microsoft Outlook` node.

## Services:

-   Microsoft Outlook
-   OpenAI
-   Airtable
-   Monday.com

## Hashtags:

#n8n #automation #emailAssistant #AI #Outlook
