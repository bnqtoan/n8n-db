# Create, update, and get a document in Google Cloud Firestore

## Use cases:

- **Data Synchronization:** Keep data in Google Cloud Firestore synchronized with other systems by creating, updating, and retrieving documents based on changes elsewhere.
- **Content Management:** Use n8n to manage content within a Firestore database, allowing for automated creation, updates, and retrieval of articles, product descriptions, or user profiles.
- **Backend for Apps:** Automate backend tasks for mobile or web applications that use Google Cloud Firestore as their database. This can include creating user accounts, updating profiles, or retrieving application settings.

## How it works:

1.  **Trigger:** The workflow starts when you manually click 'execute' within n8n.
2.  **Set Initial Data:** The "Set" node creates a JSON object with `id` set to 1 and `name` set to "n8n". This data will be used for creating the document in Firestore.
3.  **Create Document in Firestore:** The "Google Cloud Firestore" node creates a new document in the "n8n" collection within the specified Google Cloud Firestore project ("docs-f8925"). The document's fields are based on the `id` and `name` from the "Set" node.
4.  **Set Document ID and New Name:** The "Set1" node takes the `_id` (Firestore-generated document ID) from the created document and sets it to a new variable called `document_id`. It also sets a new name, "nodemation".
5.  **Update/Upsert Document:** The "Google Cloud Firestore1" node updates the document in the "n8n" collection. It uses the `document_id` to find the document and update the `name` field to "nodemation". If the document doesn't exist it will be created.
6.  **Get Document:** The "Google Cloud Firestore2" node retrieves the document from the "n8n" collection using the `document_id` obtained from the "Set1" node.

## Services:

-   Google Cloud Firestore

## Hashtags:

#n8n #googlecloud #firestore #automation #database
