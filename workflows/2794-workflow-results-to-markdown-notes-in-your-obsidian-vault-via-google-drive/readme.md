# Workflow Results to Markdown Notes in Your Obsidian Vault, via Google Drive

## Use Cases:

- **Automated Note-Taking:** Capture insights from various sources (e.g., web articles, research papers, meeting notes) and automatically format them as Markdown notes in your Obsidian vault.
- **Content Curation:** Process content from different platforms or APIs, extract key information, and create structured notes in Obsidian for easy access and organization.
- **Real-time Knowledge Management:** Automatically create and update notes in your Obsidian Vault in real-time from n8n workflow results. Markdown files and attachments saved in Google Drive instantly appear in your Obsidian Vault.

## How it works:

1.  **Receive Workflow Results:** The workflow starts with an "Execute Workflow Trigger" node, which receives data from other n8n workflows. This could be any information you want to save as a note.
2.  **Conditional Attachment Handling:** An "If" node checks if the input data contains binary attachments (e.g., images, PDFs). If attachments are present, they are saved to Google Drive using the "Save attachment" node.
3.  **Zettelkasten Note Composition (Optional AI-assisted):**
    *   **(AI-assisted)** The workflow uses an AI agent ("Write Zettlekasten note from input1") to generate a Zettelkasten-style note from the input data. It extracts key insights, creates a title, content, and tags, and formats it as JSON. Structured output parsers and OpenAI chat models are used to format the output.
    *   **(AI-assisted)** YAML frontmatter (metadata) is generated for the note using another AI agent ("Write YAML Frontmatter").
4.  **Data Restructuring:** The "Restructure JSON" node extracts the title and content from the AI-generated Zettelkasten note and the frontmatter from the YAML.
5.  **Save Markdown File:** The "Save Markdown file" node creates a new Markdown file in a specified Google Drive folder. The content of the file includes the YAML frontmatter (metadata) at the top, followed by the main content of the Zettelkasten note.
6.  **Symlink:** A sticky note describes the next steps: Set up a Symlink between the Google Drive folder and a new folder in your Obsidian Vault.

## Services:

*   Google Drive
*   OpenAI API (via n8n's Langchain nodes)
*   Obsidian (via Google Drive sync and symlink)

## Hashtags:

#n8n #automation #Obsidian #Zettelkasten #GoogleDrive
