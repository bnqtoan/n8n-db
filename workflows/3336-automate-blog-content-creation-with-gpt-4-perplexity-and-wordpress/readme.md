# 💥🛠️Automate Blog Content Creation with GPT-4, Perplexity & WordPress

## Use cases:
- **Automated Content Generation:** Quickly generate SEO-optimized blog posts from a research query, ideal for businesses or individuals looking to maintain an active blog without extensive manual effort.
- **Hands-Free Content Marketing:** Streamline the content creation process by automatically publishing articles to WordPress, notifying stakeholders via email and Slack, and logging the activity in Notion.
- **AI-Powered Research and Writing:** Leverage the capabilities of Perplexity and GPT-4 to perform in-depth research and produce high-quality content, freeing up time for strategic marketing initiatives.

## How it works:
1.  **Trigger**: The workflow starts with a form submission containing the topic or question for the blog post.
2.  **Perplexity Research**: The form input is passed to Perplexity AI, which conducts research on the specified topic and returns a detailed summary from reputable sources.
3.  **Format Research Output**: The research output from Perplexity is formatted to include source citations.
4.  **Edit Workflow Variables**: Allows you to set email address, Slack channel ID, and Notion database ID for publishing
5.  **Copywriting AI Agent**: This node uses the Langchain Agent to orchestrate several tasks:
    *   It uses the formatted research to generate an SEO-optimized article using GPT-4. The agent is instructed to create a catchy title, H2 subtitles, and optimize for readability.
    *   It publishes the generated article to WordPress.
    *   It sends an email notification with the article title and URL.
    *   It sends a notification to a specified Slack channel.
    *   It adds a new entry to a Notion database with article details and a 'publish' status.
6.  **Services Interact with the Agent to make the workflow more efficient**
    *   The agent get the tools available using the "Slack-List" node.
    *   The agent get the tools available using the "Notion-List" node.
    *   The agent uses the "Publish Article to WordPress" to publish to WordPress
    *   The agent uses the "Send Email Notification" to send Email
    *   The agent uses the "Notify Slack Channel" to publish to Slack
    *   The agent uses the "Insert Article in Notion" to insert in Notion

## Services:
- **Perplexity AI:** For research and information retrieval.
- **WordPress:** For blog post publishing.
- **Gmail:** For sending email notifications.
- **Slack:** For team notifications.
- **Notion:** For logging content and status tracking.
- **GPT-4:** For SEO Content generation.

## Hashtags:
#n8n #automation #contentcreation #AI #SEO #GPT4 #Perplexity #WordPress #Notion #Slack
