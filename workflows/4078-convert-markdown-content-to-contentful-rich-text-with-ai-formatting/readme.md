# Convert Markdown Content to Contentful Rich Text with AI Formatting.

## Use Cases:

- **Automated Content Migration:** Convert existing Markdown-based documentation or blog posts into Contentful's rich text format for easier content management and delivery.
- **Streamlined Content Creation:** Automatically format Markdown content generated from other sources (e.g., user submissions, scripts) into Contentful entries.
- **AI-Powered Content Transformation:** Leverage AI to ensure Markdown content is properly structured and formatted according to Contentful's rich text specifications, minimizing manual adjustments.

## How it Works:

1.  **Trigger:** The workflow is initiated when executed by another n8n workflow, receiving content details such as title, slug, category, description, keywords, and the Markdown content itself.
2.  **Split by Headings:** The Markdown content is split into smaller chunks based on headings (##) to improve processing and formatting by the AI.
3.  **Markdown to Contentful format:** Each chunk of Markdown content is sent to an AI Agent (Langchain) using the `gpt-4.1` model to convert it into Contentful's Rich Text JSON format, following specific guidelines and examples to avoid validation errors.  This AI Agent converts markdown into Contentful Rich Text by considering rules like including the "data": {} property in every node, especially heading and paragraph types, and ensuring consistent structure for text nodes.  It adheres to examples provided, encompassing paragraphs, headings, bold and italic text, lists, links, and images.
4.  **Combine Rich Text Objects:** The Rich Text JSON outputs from the AI Agent are combined into a single, complete Rich Text document.
5.  **Merge:** The original content metadata (title, slug, etc.) is merged with the formatted Rich Text content.
6.  **Format:** The merged data is then formatted into the specific JSON structure required by the Contentful API for creating a new entry.
7.  **Create Contentful Entry:** Finally, an HTTP request is made to the Contentful API to create a new entry with the formatted content, using the provided space ID and management token.

## Services:

-   **Contentful:** A content management system (CMS) that provides the API to create and manage content entries.
-   **OpenAI (gpt-4.1):** An AI model used to convert Markdown content into Contentful Rich Text format.

## Hashtags:

#n8n #Contentful #Automation #Markdown #AI #ContentManagement #Varritech
