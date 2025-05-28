# My Workflow

## Use cases:

1.  **Notion Page Backup:** Automatically convert the content of a Notion page into Markdown format and update the same page by tripling the content.
2.  **Content Transformation and Synchronization:** Triggered by updates to a Notion database page, the workflow transforms the content into Markdown and updates the same Notion page with modified content.
3.  **Notion Content Migration:** Take content from one Notion page, convert it to Markdown, and add it as a child to the same page, effectively duplicating and formatting the content within Notion.

## How it works:

1.  **Notion Trigger:** The workflow starts when a page is updated within a specified Notion database ("Journal").
2.  **Get Notion Blocks:** It retrieves all blocks of content from the updated Notion page. There are two alternative processes to retrieve the blocks:
    *   The first one uses the official Notion node "getAll" on the block, removing formatting like bold and links.
    *   The second retrieves the block's rich text data with a custom HTTP request to the Notion API.
3.  **Split Out (only if using the HTTP Request node):** If the blocks were retrieved via HTTP Request, the "Split Out" node splits the `results` array from the Notion API response into individual items.
4.  **Convert to Markdown:** The Code node ("Notion Node Blocks to Md" or "Full Notion Blocks to Md") converts the Notion blocks into Markdown format. There are two different Code nodes doing the same, they only differ in the support of rich text formatting.
5.  **Convert Markdown to Notion Blocks:** The Code node "Md to Notion Blocks v3" converts the markdown back to Notion Blocks.
6.  **Add blocks as Children:** The HTTP Request node updates the original Notion page by adding the blocks generated in the previous step as children blocks.
    *   **Note:** As configured, this workflow effectively triple the content on the original page, because it's executed twice in sequence.

## Services:

*   Notion API

## Hashtags:

#n8n #Notion #Markdown #Automation #ContentManagement
