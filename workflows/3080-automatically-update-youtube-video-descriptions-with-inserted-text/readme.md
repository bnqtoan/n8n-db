# Automatically Update YouTube Video Descriptions with Inserted Text

## Use cases:

- **Affiliate Link Updates:** Automatically insert updated affiliate links into the descriptions of multiple YouTube videos to ensure viewers always have access to the latest offers.
- **Promotional Content Insertion:** Insert consistent promotional messages or calls to action across a series of videos to drive engagement with new products or services.
- **Copyright/Attribution Updates:** Update video descriptions with standardized copyright information or attribution links after content usage rights change.

## How it works:

1.  **Trigger:** The workflow is initiated manually by clicking "Test workflow".
2.  **Define Text to Insert:** The "Set String to Insert" node defines the text to be added and the rows before and after which the text will be inserted, storing variables like `rowBefore`, `rowToInsert`, and `rowAfter`.
3.  **Get All Videos:** The "Get All Videos" node retrieves a list of your YouTube videos (limited to 3 in this example).
4.  **Loop Through Videos:** The "Loop Over Videos" node iterates through each video retrieved.
5.  **Get Specific Video:** For each video, the "Get Specific Video" node fetches the full video details, including the current description.
6.  **Create New Video Description with Row Inserted:** The "Create New Video Description with Row Inserted" node, using a Code node, splits the existing description into rows, finds the specified `rowBefore` and `rowAfter`, inserts `rowToInsert` between them, and joins the rows back into a new, updated description.
7.  **Update Video Description:** The "Update Video Description" node updates the YouTube video with the newly created description, preserving other metadata like title, category, and tags.

## Services:

-   YouTube API

## Hashtags:

#n8n #YouTube #Automation #VideoMarketing #ContentManagement
