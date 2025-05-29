# Generate LinkedIn Post from Ghost Blog Articles using AI Agent

## Use cases:

- **Automated Social Media Promotion:** Automatically create engaging LinkedIn posts for every new blog article published on a Ghost blog, saving time and ensuring consistent social media presence.
- **Content Repurposing:** Repurpose existing blog content into short, attention-grabbing LinkedIn updates, maximizing the reach and impact of each article.
- **Personalized Brand Messaging:** Customize the AI agent's system prompt to align with a specific brand voice and messaging guidelines, ensuring that all generated LinkedIn posts are on-brand.

## How it works:

1.  **Trigger:** The workflow is manually triggered, starting the process.
2.  **Extract Blog Posts:** The `Extract Blog Posts` node fetches the latest articles from a Ghost blog. It retrieves the specified number of blog posts along with their metadata (title, content, URL, featured image, etc.).
3.  **Extract Post Content:** The `Extract Post Content` node selects specific data (`id`, `title`, `featured_image`, `excerpt`, `content`, `link`) from each blog post for further processing.
4.  **Loop Over Posts:** The `Loop Over Posts` node splits the data into individual items, so the workflow executes for each blog post separately.
5.  **Clean HTML:** The `Clean HTML` node extracts the HTML content from the post and removes HTML tags, normalizes spaces, and decodes HTML entities, to provide clean text for the AI.
6.  **Add Clean HTML:** The `Add Clean HTML` node merges the post data with the cleaned content.
7.  **AI Agent:** The `AI Agent` node uses a large language model (LLM) to generate a LinkedIn post based on the article title, link, and cleaned content. The system prompt instructs the agent to create a hook, summarize the article's value, and include a call to action with a specific author signature.
8.  **OpenAI Chat Model:** The `OpenAI Chat Model` Node is connected to the AI Agent node and defines the model to use, here `gpt-4o-mini`.
9.  **Merge Linkedin:** The `Merge Linkedin` node merges the output of the AI Agent with the original post data.
10. **Record the posts:** The `Record the posts` node then takes the generated LinkedIn post and saves it, along with other article details (`id`, `title`, `content`, `excerpt`, `clean_content`, `featured_image`) into a Google Sheet.

## Services:

-   **Ghost:** Used to retrieve blog posts and their content.
-   **OpenAI:** Used via the "AI Agent" node with the `gpt-4o-mini` model to generate the LinkedIn post.
-   **Google Sheets:** Used to store the generated LinkedIn posts and article information.

## Hashtags:

#n8n #automation #linkedin #ghostcms #aiagent
