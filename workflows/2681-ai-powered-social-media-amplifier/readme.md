# Social Media AI Agent - Telegram

## Use cases:

- **Automated Content Curation**: Automatically finds trending GitHub projects on Hacker News and generates social media posts to share them, saving time and effort in content discovery and creation.
- **Consistent Social Media Presence**: Maintains an active social media presence by regularly sharing interesting and relevant content with minimal manual intervention.
- **Cross-Platform Promotion**: Simultaneously promotes GitHub projects on both Twitter and LinkedIn, tailoring the message to each platform for maximum engagement.

## How it works:

1. **Crawl Hacker News**: The workflow starts by using the "Crawl HN Home" node to fetch the HTML content of the Hacker News homepage.
2. **Extract Meta**: The "Extract Meta" node parses the HTML to identify GitHub projects that are being discussed. It extracts the title, URL, score, author, age, and number of comments for each project.
3. **Search Item**: The "Search Item" node checks an Airtable base to see if the project has already been posted. This helps avoid duplicate posts.
4. **Filter Unposted Items**: The "Filter Unposted Items" node filters out projects that have already been posted, ensuring that only new content is processed.
5. **Visit GH Page**: The "Visit GH Page" node visits the GitHub page of the project.
6. **Convert HTML To Markdown**: The "Convert HTML To Markdown" node converts the HTML content of the GitHub page to Markdown.
7. **Generate Content**: The "Generate Content" node uses the OpenAI API to generate engaging Twitter and LinkedIn posts based on the project's title, description, and URL.
8. **Validate Generate Content**: The "Validate Generate Content" validates that the twitter and linkedin content was generated.
9. **Filter Errored**: The "Filter Errored" node filters out items with errors.
10. **Create Item**: The "Create Item" node creates a new record in the Airtable base for the posted project, storing the generated Twitter and LinkedIn posts.
11. **Ping Me**: The "Ping Me" node sends a message to a Telegram chat with the generated Twitter and LinkedIn posts, allowing for manual review before posting.
12. **Wait for 5 mins before posting**: The "Wait for 5 mins before posting" node pauses the workflow for 5 minutes.
13. **X (Twitter)**: The "X" node posts the generated content to Twitter.
14. **LinkedIn**: The "LinkedIn" node posts the generated content to LinkedIn.
15. **Update X Status**: The "Update X Status" node updates the Airtable record to indicate that the project has been posted on Twitter.
16. **Update L Status**: The "Update L Status" node updates the Airtable record to indicate that the project has been posted on LinkedIn.
17. **Schedule Trigger**: The "Schedule Trigger" node runs the workflow every 6 hours.

## Services:

- Hacker News
- GitHub
- OpenAI API
- Airtable
- Twitter (X)
- LinkedIn
- Telegram

## Hashtags:

#n8n #automation #socialmedia #github #ai
