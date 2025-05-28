# Create, update, and get an entry in Strapi

## Use cases

*   **Automated Content Management:** Automatically create, update, and retrieve content entries in Strapi CMS when new information is available from other sources, like form submissions or data feeds.
*   **Scheduled Content Updates:** Regularly update content entries in Strapi based on a schedule, ensuring information is always current.
*   **Content Synchronization:** Keep Strapi content synchronized with other platforms by automatically updating entries in Strapi when changes occur in other systems.

## How it works

1.  **Trigger:** The workflow is manually triggered by clicking 'execute' in n8n.
2.  **Set Initial Content:** The "Set" node defines the initial content for a Strapi post, including "Title," "Content," and "Description."
3.  **Create Strapi Entry:** The "Strapi" node creates a new entry of content type "posts" in Strapi using the content defined in the "Set" node.
4.  **Set Update Data:** The "Set1" node sets the "id" (retrieved from the created Strapi entry) and "slug" for updating the entry.
5.  **Update Strapi Entry:** The "Strapi1" node updates the Strapi entry using the "id" and "slug" defined in the "Set1" node.
6.  **Get Strapi Entry:** The "Strapi2" node retrieves an entry from Strapi using the ID from the updated entry to confirm all actions.

## Services

*   Strapi CMS

## Hashtags

#n8n #Strapi #CMS #Automation #ContentManagement
