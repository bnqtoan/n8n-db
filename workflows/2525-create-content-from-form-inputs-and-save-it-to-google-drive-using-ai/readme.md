# My Workflow

## Use cases:
- Content Creation: Generate articles for a blog or website by providing a title, keywords, and specific instructions.
- SEO Optimization: Automate the creation of SEO-optimized content with targeted keywords and internal/external links.
- Streamline Content Workflows: Automate the process of content generation, from outline creation to final article publication.

## How it works:
1.  **Trigger:** The workflow starts with a "Form Trigger" node that collects user inputs such as content title, word count, primary/secondary keywords, internal/external links, and additional instructions.
2.  **Data Processing:** The inputs are then processed by "Set" nodes to define variables for later use.
3.  **Google Sheets Integration:** User inputs are appended to a Google Sheet using the "Google Sheets" node.
4.  **Google Drive Folder Creation:** A new folder is created in Google Drive using the "Google Drive" node to store the generated content.
5.  **AI Outline Generation:** The user inputs are passed to an OpenAI node, which generates a detailed content outline in Markdown format.
6.  **Outline Storage:** The generated outline is saved as a text file and uploaded to the Google Drive folder.
7.  **Content Sectioning:** The outline is split into sections, and each section is processed individually.
8.  **AI Section Refinement:** Each section is passed to another OpenAI node, which enhances formatting, adjusts tone, and improves readability.
9.  **Content Aggregation:** The refined sections are merged, sorted, and aggregated into a final article.
10. **Final Article Storage:** The aggregated article is converted to a text file and uploaded to the Google Drive folder.
11. **Google Sheets Update:** The Google Sheets document is updated with links to the generated outline and article in Google Drive.

## Services:
- Google Sheets: Used for storing and tracking user inputs and generated content links.
- Google Drive: Used for storing the generated content outlines and final articles.
- OpenAI: Used for generating content outlines and refining content sections.

## Hashtags:
#n8n #automation #contentcreation #googleSheets #googleDrive #OpenAI
