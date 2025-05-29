# Linkedin Post with Group

## Use Cases

- Automatically generate and post engaging content to LinkedIn based on topics fetched from a Google Sheet, saving time and effort for social media managers.
- Schedule and automate the creation of LinkedIn posts for multiple groups, increasing brand visibility and engagement within specific communities.
- Streamline content creation by using AI to generate post drafts, which can then be reviewed and published with minimal manual input.

## How it Works

1.  **Google Sheets Trigger (Linkedin-Post-Topic):** The workflow starts by monitoring a Google Sheet for new entries. It looks for a specific sheet ("Sheet1") within the "Linkedin Post" spreadsheet (ID: 147NIoP4NAZtmXdjciHyKdOWqpPvJ9ifoS8P6HJxikY8) and triggers when new rows are added.
2.  **Validate Status (Validate-Status):** Checks if the "Status" column in the Google Sheets is set to "Pending".
3.  **Limit:** Limits the execution to control the rate of post generation (presumably to avoid overwhelming the system or violating API limits).
4.  **AI-Powered Content Creation (Linedin-Post-Creator):** The LinkedIn Post Title from the Google sheet is passed to an "OpenAI Chat Model" (gpt-4o) via the Agent node to generate a LinkedIn post. The Agent node is configured with a prompt that instructs the AI to create an engaging post with a hook, informative content, a question for engagement, and relevant hashtags.
5.  **Output Parsing (Structured Output Parser):** Parses the output of the OpenAI Chat Model to extract the post content.
6.  **Format Content (Format-Content):** Formats the AI-generated content, ensuring proper JSON escaping.
7.  **Retrieve LinkedIn User Details (Linkedin-User-Detail):** Retrieves the user's LinkedIn details (specifically, the user ID) using the LinkedIn API.  Requires a "Header Auth account" credential for authentication.
8.  **Post to LinkedIn (Linkedin-post):** Posts the generated content to the user's LinkedIn feed using the LinkedIn API.
9.  **Get Group IDs (Get-Group-id):** Fetches group IDs from a Google Sheet ("Groups" sheet within the "Linkedin Post" spreadsheet).
10. **Split in Batches (Pick 1 by 1):** Splits the group IDs into individual batches for separate processing.
11. **Post to LinkedIn Groups (Post-Linkedin-Groups):** Posts the same generated content to each LinkedIn group using the LinkedIn API, iterating through the group IDs.  This uses a different "Header Auth account" credential.
12. **Update Status in Google Sheets (Update-Status):** Updates the "Status" column in the original Google Sheet to "Posted" for the processed row.

## Services

-   Google Sheets
-   LinkedIn API
-   OpenAI API

## Hashtags

#n8n #automation #linkedin #contentcreation #socialmedia
