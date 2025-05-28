# Content to 9:16 Aspect Image Generator v1

## Use cases:

- **Automated Social Media Content Creation:** Transforms blog posts or articles into short-form video content with corresponding visuals, ideal for platforms like TikTok, Instagram Reels, or YouTube Shorts.
- **Content Repurposing:** Quickly generates engaging visual content from existing long-form content, maximizing reach and engagement across different platforms.
- **Streamlined Marketing Campaigns:** Creates visually appealing thumbnails and scene images to complement marketing content, improving click-through rates and overall campaign performance.

## How it works:

1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" trigger node.
2.  **Retrieve Brand Guidelines:** Fetches brand guidelines such as imagery style, tone, voice, and brand assets from an Airtable base.
3.  **Retrieve Blog Post/s:** Retrieves SEO keywords and related content from an Airtable base.
4.  **Filter and Deduplicate:** Filters relevant keywords based on criteria (e.g., "ai automation") and removes duplicate entries to ensure content uniqueness.
5.  **Prepare Short Form Video Content:**
    *   Leverages OpenAI's GPT-4o-mini to generate a script for a short-form video (less than 30 seconds) based on the retrieved blog post content and creates image prompts for each scene and a thumbnail.
6.  **Generate Thumbnail Image:** Uses Leonardo.ai, improving thumbnail prompts, then generating thumbnail images.
7.  **Generate Scene Images:** For each scene in the generated script, the workflow uses Leonardo.ai to generate images from the image prompts and add those images to the Airtable.
8.  **Asset Storage:** Stores the generated thumbnail and scene images, along with relevant metadata, in an Airtable "Assets" table.

## Services:

-   **Airtable:** Used to store and retrieve brand guidelines, blog post content, SEO keywords, and generated assets.
-   **OpenAI:** Utilized for generating video scripts and image prompts via the GPT-4o-mini model.
-   **Leonardo.ai:** Employed for improving the image prompts and generating images based on the prompts.

## Hashtags:

#n8n #automation #contentcreation #ai #generativeai
