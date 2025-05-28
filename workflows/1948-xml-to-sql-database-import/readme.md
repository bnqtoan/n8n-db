# XML usecase: import XML data

## Use cases:

*   **Importing Product Catalogs:** Automatically import and update product information (name, description, price, etc.) from an XML file provided by a supplier into a database.
*   **Data Migration:** Migrate data stored in XML format to a MySQL database for better querying and reporting capabilities.
*   **Order Processing:** Ingest order details from XML files received from e-commerce platforms into a database for inventory management and fulfillment.

## How it works:

The workflow starts with a manual trigger to initiate the process. It then reads an XML file specified in the "Read Binary Files" node.  The "Extract binary data" node converts the binary data to a string, which is then converted from XML to JSON format using the "XML to JSON" node. The "Item Lists" node splits the data into individual product items. Finally, the "Add new records" node inserts each product's details into a MySQL database table named "new_table".  There is also a disabled node "Create new table" that could be used to create the table structure if it doesn't already exist.

Key Nodes:

*   **When clicking "Execute Workflow":**  A manual trigger to start the workflow.
*   **Read Binary Files:** Reads the XML file from the specified path.
*   **Extract binary data:** Converts the file content to a string.
*   **XML to JSON:** Converts the XML data into JSON format, which is easier to handle in n8n.
*   **Item Lists:** Splits the JSON data into individual product items based on the "Products.Product" element.
*   **Add new records:** Inserts the product data from each JSON item into a MySQL database table.

## Services:

*   MySQL Database

## Hashtags:

#n8n #automation #XML #MySQL #DataImport
