# My Workflow

## Use Cases

- **Automated LinkedIn Outreach:**  This workflow automates the process of connecting with potential leads on LinkedIn, sending personalized connection requests, and following up with messages.
- **Lead Generation and Engagement:** It can be used to identify promising candidates based on their profile and company data, then automatically engage them with tailored messages.
- **Relationship Building:** The workflow helps to maintain and nurture relationships with existing connections by sending relevant content and updates.

## How it Works

1.  **Data Input:** The workflow starts with a `Manual Trigger` or `Schedule Trigger`, and then it uses a `Google Sheets` node called "Fetch Data" to retrieve a list of potential leads from a Google Sheet. The `Next Item` node processes each lead individually.
2.  **Profile Search:** It uses the `HTTP Request` node "Search for user profile" to find a user's LinkedIn profile using their name and company. If the username is empty, the workflow sets a response (using the `Set` node) and skips to company posts, otherwise it proceeds to fetch profile posts.
3.  **Content Aggregation:** The workflow retrieves recent posts from both the user's profile (`Get profile posts`) and their company's page (`Get company posts`) using `HTTP Request` nodes. These posts are split, limited, sorted and then aggregated.
4.  **AI-Powered Content Generation:** The workflow calls subworkflow using `Execute Workflow` node "Generate Email" which uses an `OpenAI Chat Model` to create personalized connection requests and messages based on the aggregated content. It uses `Structured Output Parser` to parse the openAI response.
5.  **Conditional Logic and Connection Status:**  The workflow checks if the user is already a connection, and whether a connection request or message has already been sent using the `If` nodes.
6.  **Automated Actions on LinkedIn:** The workflow uses `Browserflow` nodes named "Send connection request" and "Send message with LinkedIn" to automate the process of sending connection requests and messages.
7.  **Status Updates:** Finally, the workflow updates the Google Sheet to reflect whether a connection request and/or message was sent, by using Google Sheet node "Update invite sent" and "Update message sent"
8.  **Decision Making and branching**: Several `If` nodes are used to determine if actions should be taken. `If username is empty`, `If company ID is empty`, `If relation?`, `If connected`, `If not message sent`, `If not invite sent`.

## Services

*   Google Sheets
*   LinkedIn (via Browserflow)
*   OpenAI

## Hashtags

#n8n #automation #linkedin #leadgeneration #ai
