# 📄🛠️PDF2Blog

## Use cases:

- **Content Creation Automation:** Automatically transform PDF reports, whitepapers, or articles into blog posts, saving time and effort for content creators.
- **Knowledge Base Population:** Convert internal documentation or user manuals in PDF format into a searchable and accessible online knowledge base.
- **Repurposing Existing Content:** Quickly adapt and republish older PDF documents as fresh blog content, maximizing the value of existing resources.

## How it works:

1.  **Upload PDF:** The workflow starts with a "Upload PDF" Form Trigger node that allows users to upload a PDF file through a web form.
2.  **Extract Text:** The "Extract Text" node extracts the text content from the uploaded PDF file.
3.  **Create Structured Blog Post:** The "Create Structured Blog Post" node takes the extracted text and send it to the "gpt-4o-mini" LLM to generate a structured blog post in JSON format, with a title and content, based on the provided specifications.
4.  **Structured Output - JSON** The "Structured Output - JSON" node is used to validate that the generated blog post is in JSON format.
5.  **Separate Title & Content:** The "Separate Title & Content" node parses the JSON output from the agent and extracts the title and content into separate variables. It performs validation to ensure both title and content exist and that the content is not empty after processing. It handles errors gracefully, logging error messages and returning a failure object if necessary.
6.  **If:** The "If" node checks if both the title and content are not empty.
7.  **Post to Ghost:** If both the title and content are valid, the "Post to Ghost" node publishes the blog post to a Ghost blog. This node uses the Ghost Admin API.
8. **Do Nothing:** If the title or content are empty, this node is triggered and do nothing.

## Services:

-   Ghost: A blogging platform where the generated blog post is published.
-   OpenAI: Used via the `gpt-4o-mini` model to generate the blog post content and title from the extracted text.

## Hashtags:

#n8n #automation #PDFtoBlog #contentcreation #GhostCMS
