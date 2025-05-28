# Two Way Sync Pipedrive and MySQL

## Use cases

*   **Contact Synchronization:** Keep contact information consistent between a Pipedrive CRM and a MySQL database. When a new contact is added to either system, it's automatically created in the other.
*   **Data Consistency:** Ensure that updates to contact details (name, phone number, etc.) in Pipedrive are reflected in the MySQL database, and vice versa, to maintain a single source of truth.
*   **Scheduled Data Refresh:** Regularly check for discrepancies between Pipedrive and MySQL contact data to reconcile any differences and maintain data integrity.

## How it works

This workflow automates the two-way synchronization of contact data between Pipedrive and a MySQL database. Here's a step-by-step breakdown:

1.  **Schedule Trigger:** The workflow starts on a defined schedule using the `Schedule Trigger` node.
2.  **MySQL Data Retrieval:** The `MySQL` node retrieves contact data (id, name, email, phone, updated_on) from the MySQL database.
3.  **Pipedrive Data Retrieval:** The `Pipedrive` node fetches all person records from Pipedrive, retrieving their id, name, primary email, phone and updated time.
4.  **Data Preparation:** The `Set` node rename the Pipedrive fields to have the same name than the MySQL fields.
5.  **Compare Datasets:** The `Compare Datasets` node compares the data from MySQL and Pipedrive, identifying contacts that exist only in one system or have different information in both.
6.  **Create new item:** Depending on the output of the Compare Datasets the new items are created in Pipedrive or MySQL.
7.  **IF Data Changed:** The `IF Data Changed` node checks if critical data fields such as Name and Phone has been changed
8.  **Date & Time:** The `Date & Time` parse the Pipedrive time to the same format than MySQL
9.  **IF Updated On:** The `IF Updated On` node checks if the Pipedrive record has been updated
10. **Set Input1 and Set Input2:** The `Set Input1` and `Set Input2` nodes allows to structure the final data to be updated on Pipedrive and MySQL.
11. **Update Person/Contact:** The `Update Person` node updates the `person` record on Pipedrive and the `Update Contact` executes a query to update the register in MySQL.

## Services

*   **Pipedrive:** CRM platform.
*   **MySQL:** Relational database.

## Hashtags

#n8n #automation #CRM #MySQL #Pipedrive #dataSync
