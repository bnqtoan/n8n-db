# Webflow Content Management Workflow

## Use cases:

- **Automated Content Creation:** Automatically create new content items in Webflow when triggered manually.
- **Content Synchronization:** Keep Webflow content updated by creating and subsequently updating entries based on a trigger event.
- **Content Enrichment:** Add or update information to existing Webflow items, such as adding an avatar to a created item.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which initiates the process when manually executed in n8n.
2.  The "Webflow" node creates a new item in a specified Webflow collection using predefined values for fields like "name" and "slug".
3.  The "Webflow2" node updates the item created in the previous step. It retrieves the ID of the created item and updates fields like "name", "slug", and "avatar".
4.  The "Webflow1" node retrieves the item updated on the previous step.

## Services:

-   Webflow

## Hashtags:

#n8n #Webflow #Automation #ContentManagement #nocode
