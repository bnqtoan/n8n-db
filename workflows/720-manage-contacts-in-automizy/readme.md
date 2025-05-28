# Create a new list, add a new contact to the list, update the contact, and get all contacts in the list

## Use cases:

*   **Contact Management:** Automatically create contact lists from various sources (e.g., form submissions, event registrations) and add new contacts to them.
*   **Lead Enrichment and Segmentation:** Segment and enrich leads by automatically adding them to specific lists based on their attributes and updating their information with tags.
*   **CRM Synchronization:** Keep contact lists synchronized between Automizy and other systems by creating new lists and adding/updating contacts whenever new information is available.

## How it works:

1.  **Trigger:** The workflow starts when you manually execute it using the "On clicking 'execute'" trigger node.
2.  **Create a List:** The "Automizy" node creates a new list in Automizy with the name "n8n-docs."
3.  **Add a Contact:** The "Automizy1" node adds a new contact with the email "example@n8n.io" to the newly created list and sets their status to "ACTIVE."
4.  **Update the Contact:** The "Automizy2" node updates the contact that was previously added with the email fetched dynamically from the "Automizy1" node, adding the tag "reviewer" to their profile.
5.  **Get All Contacts:** The "Automizy3" node retrieves all contacts from the list created in step 2, returning all results.

## Services:

*   Automizy

## Hashtags:

#n8n #automation #Automizy #contactmanagement #CRM
