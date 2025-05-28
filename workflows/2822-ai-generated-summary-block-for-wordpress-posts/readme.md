# AI-Generated Summary Block for WordPress Posts - with OpenAI, WordPress, Google Sheets & Slack

## Use cases:
- **Content Enhancement:** Automatically add concise AI-generated summaries to WordPress posts to improve reader engagement and provide quick overviews of article content.
- **SEO Optimization:** Enhance search engine visibility by providing a well-structured summary of each post, making it easier for search engines to understand and index the content.
- **Content Management:** Streamline content management workflows by automating the creation and integration of summaries, saving time and effort for content creators and editors.

## How it works:
1. **Trigger:** The workflow starts with either a manual trigger for testing, a scheduled trigger for regular updates, or a webhook trigger that listens for new post publications on a WordPress site.
2. **Fetch Posts:** Based on the trigger, the workflow fetches either all posts, posts published after a specific date, or a single post via its ID from WordPress.
3. **Looping:** If multiple posts are fetched, the workflow iterates through each post individually to ensure proper processing.
4. **Check for existing summary:** The workflow consults a Google Sheet to check if a summary exists for the post by verifying the presence of the `post_id`.
5. **Conditional Branching:** The workflow proceeds to generate a summary only if no summary exists.
6. **Content Processing:** The content of the post is retrieved and converted from HTML to Markdown for better AI processing.
7. **Text Classification:** The workflow classifies the post to determine if it already contains an AI summary. This prevents redundant summaries.
8. **AI Summary Generation:** Using the OpenAI node, a summary is generated based on the post's content following specific instructions defined in a System Prompt. The summary is formatted as an HTML block.
9. **Update Post:** The generated summary is added to the top of the WordPress post using the WordPress API.
10. **Data Logging and Notification:** The post ID, summary, and links are saved to a Google Sheet. A notification is sent to a Slack channel to announce the updated post with the AI summary.

## Services:
- WordPress
- OpenAI
- Google Sheets
- Slack

## Hashtags:
#n8n #automation #WordPress #AISummary #ContentManagement
