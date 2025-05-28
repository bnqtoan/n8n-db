# Bubble Data Management Workflow

## Use cases

*   **Create and Update Records:** Automatically create new data entries in a Bubble.io database and subsequently update them with additional information or changes.
*   **Data Synchronization:** Keep data synchronized between different parts of your Bubble.io application by creating a record in one area and updating it based on changes in another.

## How it works

This workflow performs a sequence of actions on a Bubble.io database:

1.  **Create New Record (Bubble):** The workflow starts by creating a new record in a Bubble.io database using the "Bubble" node. It sets the "Name" property of the new record to "Bubble". The API credentials used for this node are defined in the "Bubble API Credentials" setting.
2.  **Update Record (Bubble1):** The "Bubble1" node updates the record created in the previous step. It retrieves the ID of the created record from the previous node (`{{$json["id"]}}`) and updates its "Name" property to "Bubble node". The type of the record is dynamically set from the previous node's "typeName" parameter.
3.  **Get Record (Bubble2):** The "Bubble2" retrieves the record updated in the previous step. It retrieves the ID of the updated record from the previous node (`{{$node["Bubble"].json["id"]}}`) and gets it based on the previous node's "typeName" parameter.

## Services

*   Bubble.io

## Hashtags

#n8n #automation #Bubble #database #dataManagement
