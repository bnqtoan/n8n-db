# SEO Blog Generator with GPT-4o, Perplexity, and Telegram Integration

## Use cases:

- **Automated Blog Post Creation:** Generate SEO-optimized blog content based on a given research query, ideal for content marketing strategies.
- **Content Idea Generation:** Quickly brainstorm and develop blog post ideas with compelling titles, slugs, and meta descriptions.
- **Telegram Content Publishing:** Automatically publish generated blog content to a Telegram channel for immediate audience engagement.

## How it works:

1.  **Trigger:** The workflow is initiated either via a form submission ("On form submission" node) or a Telegram message ("Tele HoangSP\_Social\_Media" node). Both triggers send a research query or message text to an AI Agent node.
2.  **AI Research Agent:** The "AI Agent" node uses the provided query (from either the form or Telegram) to create content by using an OpenAI Chat Model. The purpose of this agent is to find the latest information for the new blog.
3.  **Blog Content Generation:** The core content generation happens in the "Blog Content Generator" node, which receives a query from "Perplexity_Searcher" and uses it to draft a complete blog post. It then uses the OpenAI model to generate the post based on specific SEO and content guidelines.
4.  **Metadata Creation:** The "Metadata Generator" node takes the generated blog post and creates a slug, title, and meta description optimized for SEO.
5.  **Content Enhancement:** The content from the generated post is passed into another OpenAI Chat Model (OpenAI Chat Model2) to extract a title, subtitle, content, and hashtags.
6.  **Data combination:** The blog details, extracted with "Metadata Generator", are combined through a Merge node.
7.  **Telegram Posting:** Finally, the "Telegram" node sends the generated blog post title, subtitle, and content to a specified Telegram channel.

## Services:

-   **OpenAI:** Used via the Langchain integrations for content generation and metadata extraction.
-   **Perplexity:** Used for research and gathering information for the blog content.
-   **Telegram:** Used for triggering the workflow and publishing the generated content.

## Hashtags:

#n8n #automation #blogging #seo #contentgeneration
