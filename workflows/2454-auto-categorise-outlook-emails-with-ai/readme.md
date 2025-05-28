# Auto Categorise Outlook Emails with AI

## Use cases:

- **Automated Email Organization:** Automatically categorize incoming emails in Outlook based on their content, sender, and other factors, saving users time and effort in manually sorting their inbox.
- **Prioritized Task Management:** Identify and categorize emails that require immediate action, ensuring that important tasks are not overlooked.
- **Efficient Information Retrieval:** Quickly locate specific types of emails by filtering based on the categories assigned by the workflow.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Fetch Emails:** Fetches unread and uncategorized emails from a specified Outlook folder using the Microsoft Outlook node. It uses filters to exclude flagged emails or those already categorized.
3.  **Loop Through Emails:** Splits the incoming emails into individual items using the "Loop Over Items" node, processing them one at a time.
4.  **Sanitize Email Content:** Extracts the email body and converts it from HTML to Markdown, removing unnecessary HTML tags and Markdown formatting using the "Markdown" node. It then sets several email fields (subject, importance, sender, from, and body) into variables. The email body is cleaned by removing HTML tags, Markdown links, and special characters.
5.  **Categorize with AI:** The "AI Agent" node uses a large language model (Ollama Chat Model) to analyze the email content and assign it to a category (action, junk, receipt, SaaS, community, business, or other) and a subcategory (optional). The AI is prompted to respond in JSON format.
6.  **Convert to JSON & Handle Errors:** The "Convert to JSON" node ensures the AI output is converted to JSON format. An error handling mechanism is in place to catch any errors during JSON conversion and continue processing.
7.  **Categorize base on AI output:** The "Switch" node routes emails based on the category assigned by the AI Agent, e.g., junk, receipt, SaaS, community, action, or business.
8.  **Set Categories & Move to Folders:** The workflow updates the email categories in Outlook based on the AI's output. The workflow also moves the categorized email to a specific folder (Junk Email, Receipt, SaaS, Community, Actioned, Business) based on the AI's category. If the email is already read, it will be moved to the "Actioned" folder
9.  **Merge:** All flows are merged back together at the end
10. **Repeat:** The workflow continues processing the next email in the loop.

## Services:

-   Microsoft Outlook
-   Ollama (AI Language Model)

## Hashtags:

#n8n #automation #emailManagement #AI #outlook
