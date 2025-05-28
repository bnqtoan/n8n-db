# YouTube Description Updater

## Use cases

-   **Automated Promotion:** Automatically update all your YouTube video descriptions with a consistent promotional message, affiliate link, or call to action.
-   **Content Refresh:** Easily add a new disclaimer, update social media links, or modify your standard video intro/outro text across all your videos.
-   **Branding Consistency:** Ensure all your videos have the same branding elements in the description, improving channel recognition.

## How it works

1.  **Trigger:** The workflow starts manually via the "Trigger Workflow" node.
2.  **Configuration:** The "Config" node sets a `splitter` (a unique string used to separate the original description from the added content) and the `description` which holds the text you want to add or update in all your videos.
3.  **List all videos:** The "List all videos" node retrieves all videos from your YouTube channel using the YouTube API.
4.  **Generate Description:** The "Generate Description" node creates a new video description based on the `splitter` configured on the first node, appending the new description to it.
5.  **Check if has changed:** The "Check if has changed" node verifies if the new description is different from the one already on YouTube.
6.  **Update Description:** If the description has changed, the "Update Description" node updates the YouTube video description with the new generated description using the YouTube API.

## Services

-   YouTube API

## Hashtags

#n8n #automation #youtube #youtubemarketing #workflow
