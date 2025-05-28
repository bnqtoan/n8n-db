# AI-Powered Article Generation and Publishing Workflow

## Use cases:

- **Automated Content Creation:** Generate blog posts, articles, or marketing copy from uploaded text files, streamlining content creation for businesses and individuals.
- **Collaborative Writing and Editing:** Delegate writing tasks, gather chapter content, and refine articles through AI-powered editors and writers, facilitating team-based content production.
- **Ghost Blog Automation:** Automatically publish polished articles to a Ghost blog, automating the entire content lifecycle from initial text extraction to final publication.

## How it works:

1.  **Trigger:** The workflow starts with an "n8n Form Trigger" node, initiating the process when a form is submitted with an attached file.
2.  **Text Extraction:** The "Extract from File" node extracts text content from the uploaded file.
3.  **Content Analysis:** The "Content Analyst" node, powered by an OpenAI Chat Model, analyzes the extracted content, providing insights and guidance for further development.
4.  **Project Planning:** Based on the content analysis, the "Project Planner" node creates a project plan, defining the structure and tasks for the article.
5.  **Task Delegation:** The "Delegate to Writers" node splits the project into individual chapters or sections, assigning them to different writers or AI agents.
6.  **Chapter Writing:** "Writers" agents are used to write the individual chapters of the article, using another OpenAI Chat Model to assist in the writing process.
7.  **Content Merging:** The "Merge chapters title and text" node combines the content from all writers into one complete article.
8.  **Final Article Text:** The final article is passed to a "Code" node. The function of this node is not specified in the JSON.
9.  **AI-Powered Editing:** The "Editor" node, using an OpenAI Chat Model, refines the article's grammar, style, and overall quality.
10. **Title Generation:** The "Create title" node, based on an OpenAI Chat Model, generates a compelling title for the article.
11. **Publishing:** Finally, the "Ghost" node publishes the complete article, including the generated title, to a specified Ghost blog.

## Services:

-   **OpenAI:** Used via the Langchain nodes for content analysis, writing assistance, and editing.
-   **Ghost:** The target platform for publishing the final article.

## Hashtags:

#n8n #automation #contentcreation #AI #GhostCMS
