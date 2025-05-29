# LinkedIn AI Agent: Auto-Post Creator & Distributor

## Use cases:

- **Content Creation at Scale:** Automatically generate and publish engaging LinkedIn posts from a list of topics in a Google Sheet, ideal for content creators looking to maintain a consistent presence.
- **LinkedIn Group Engagement:** Share content to multiple LinkedIn groups to amplify reach and engage with relevant communities, saving time and effort in manual posting.
- **Marketing Automation:** Schedule LinkedIn posts by updating a status in Google Sheets, enabling marketers to automate their social media content calendar.

## How it works:

1.  **Google Sheets Trigger:** Monitors a Google Sheet for new rows with a "Pending" status in the "Status" column. The sheet contains a "Linkedin Post Title" column with topics for generating posts.
2.  **Validate Status:** Checks if the status of the row is "Pending."
3.  **AI Content Generation:** Uses the "Linedin-Post-Creator" node with an OpenAI Chat Model. It takes the "Linkedin Post Title" from the Google Sheet as input and generates a LinkedIn post based on a predefined prompt.  The prompt instructs the AI to create a compelling hook, 3-4 informative paragraphs, an engagement question, and relevant hashtags, ensuring JSON-safe formatting and character limits.
4.  **Format Content:**  The "Format-Content" node makes sure the JSON output is properly formatted.
5.  **LinkedIn User Details:** Retrieves the user's LinkedIn ID using the LinkedIn API, which is required for posting.
6.  **LinkedIn Post:** Publishes the generated content to the user's LinkedIn profile using the LinkedIn API.
7.  **Get Group IDs:** Retrieves a list of LinkedIn group IDs from another Google Sheet.
8.  **Pick 1 by 1:** Splits the group IDs into individual items for posting to each group separately.
9.  **Post to LinkedIn Groups:** Publishes the generated content to each LinkedIn group using the LinkedIn API. Error handling is implemented to continue the workflow even if posting to a specific group fails.
10. **Update Status:** Updates the "Status" column in the Google Sheet to "Posted" for the processed row, preventing duplicate posts.

## Services:

-   **Google Sheets:** Used as a data source for post topics and group IDs, and to track the status of each post.
-   **OpenAI (GPT-4o):** Used to generate the LinkedIn post content based on the provided title.
-   **LinkedIn API:** Used to retrieve user details and post content to the user's profile and LinkedIn groups.

## Hashtags:

#n8n #automation #linkedin #contentcreation #socialmedia
