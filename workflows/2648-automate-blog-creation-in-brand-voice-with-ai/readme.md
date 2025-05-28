# Automate On-Brand Articles Using AI

## Use cases:

- **Content Creation for Blogs:** Automatically generate blog post drafts that align with a specific brand voice and style, saving time and ensuring consistency.
- **Social Media Content Generation:** Adapt the workflow to create social media posts that resonate with the brand's established tone and messaging.
- **Internal Knowledge Base Content:** Populate internal documentation and knowledge bases with articles that maintain a consistent voice and style, improving readability and brand recognition.

## How it works:

1.  **Fetch Existing Content:** The workflow starts by fetching the latest blog posts from a specified URL using the "HTTP Request" node. In this case it uses n8n's blog.
2.  **Extract Article URLs:** The "HTML" node extracts the URLs of individual articles from the main blog page.
3.  **Split and Limit URLs:** The "Split Out" node separates the URLs into individual items, and the "Limit" node restricts the workflow to the five latest articles.
4.  **Extract Article Content:** For each article URL, another "HTTP Request" node fetches the article content, and an "HTML" node extracts the main content of the article.
5.  **Convert HTML to Markdown:** The "Markdown" node converts the HTML content to Markdown for better processing by the LLM.
6.  **Combine Articles:** The "Aggregate" node combines the content of all articles into a single input for analysis.
7.  **AI Analysis - Article Structure and Voice:**
    -   "ChainLLM" node leverages OpenAI to analyze the combined articles and identify common structures, layouts, and writing styles.
    -   "Information Extractor" node uses OpenAI to extract the brand voice characteristics from the articles (tone, style, and language).
8.  **Combine Article Style & Brand Voice:** The "Merge" node combines the outputs of the previous AI analysis steps.
9.  **Content Generation Agent:** The "Information Extractor" node serves as the content generation agent. It receives instructions and uses the previously extracted article style and brand voice characteristics as guidelines to generate a new article draft in Markdown format. The node is configured with a system prompt that instructs the AI to act as a blog content writer, adhering to the provided style and voice. The user defines new article instruction in "Set" node.
10. **Save Draft to WordPress:** Finally, the generated article (title and body) is saved as a draft in WordPress using the "WordPress" node.

## Services:

-   **n8n Blog**
-   **OpenAI API:** Used for analyzing article structure, extracting brand voice characteristics, and generating new content.
-   **WordPress API:** Used for saving the generated article as a draft.

## Hashtags:

#n8n #automation #AI #contentcreation #brandvoice
