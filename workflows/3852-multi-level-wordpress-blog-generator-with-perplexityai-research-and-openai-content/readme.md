# (Duc) Deeper Research Market Template

## Use cases:

- **Automated Blog Post Creation:** Automatically generate blog posts from topic ideas, including in-depth research, chapter planning, image generation, and posting to WordPress.
- **Content Repurposing:** Extract and repurpose content from existing sitemaps, creating new articles with updated information and relevant images.
- **Market Research Automation:** Schedule or trigger market research workflows based on specific topics, using AI to generate in-depth reports and blog outlines.

## How it works:

1.  **Trigger:** The workflow starts either on a schedule (`Schedule Trigger`) or upon form submission (`On form submission`), which adds a new topic to a Google Sheet. Alternatively it could also be triggered via another workflow using `When Executed by Another Workflow`
2.  **Topic Processing:** The workflow retrieves topics from a Google Sheet (`Google Sheets Create Topics` or `Google Sheets Create Topic - Add New Topic`) and loops through each one (`Loop Over Topics`).
3.  **Initial Research:** For each topic, an "Execute Workflow" node calls sub-workflows to perform initial research (`Initial Research` node which contains the AI Agent). This research involves fetching categories, extracting content from sitemaps, and using AI tools for deeper analysis.
4.  **Chapter Planning:** The researched data is then fed into a Langchain LLM Chain node (`Blog Planner`) for chapter planning, determining the structure and content of the blog post.
5.  **Content Creation:** The workflow then loops through each chapter (`Loop Over Chapter` or `Loop Over Chapters2`), and subchapter (`Loop Over Sub-Chapter`), using AI Agents for research (`Chapter Research`, `Subchapter Researcher`) and Langchain LLM Chain nodes (`Chapter Copywriter`, `Subchapter Copywriter`) to generate content.
6.  **Image Generation:** DALL-E is used to generate both featured images as well as images for each chapter based on the content.
7.  **Article Assembly:** The generated content is combined into a complete article (`Combine Into Article`), formatted in Markdown, converted to HTML, and prepared for posting.
8.  **WordPress Posting:** Finally, the workflow posts the article to WordPress (`Post On Wordpress`), including uploading images, setting excerpts, and applying tags.  The tags are also being created if they do not exist already.
9.  **Google Drive:** During several steps the generated files and images are uploaded into Google Drive (`Upload Chapter Images To Drive`, `Upload Featured Image To Drive`).
10. **Status update:** The last step of the workflow is to update the Google Sheet with the current status of the topic (`Google Sheets Status Update`).

## Services:

-   Google Sheets
-   Google Drive
-   Google Docs
-   WordPress
-   PerplexityAI API
-   OpenAI (DALL-E)

## Hashtags:

#n8n #automation #blogging #contentcreation #AI #langchain #wordpress #googleSheets
