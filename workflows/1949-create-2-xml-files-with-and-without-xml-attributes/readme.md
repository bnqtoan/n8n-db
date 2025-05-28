# My Workflow

## Use cases:

- **Product Data Export:** Periodically extract a random selection of product data from a database and convert it into XML format for sharing with partners or uploading to a marketplace.
- **Data Transformation Practice:** Use this workflow as a template for learning how to convert JSON data from a database into different XML structures using n8n.
- **Generating XML Feeds:** Create an XML feed of featured products for a website or application, automatically updating the feed with new random selections.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "Execute Workflow" button.
2.  **Show 16 random products:** A MySQL node retrieves 16 random product entries from a "products" table in your database.
3.  **Define file structure:**
    -   Two Set nodes ("Define file structure" and "Define file structure1") format the data retrieved from the database to include relevant product information for XML conversion. The nodes are configured differently to create two XML file with different structures.
4.  **Concatenate Items:** The "Concatenate Items" and "Concatenate Items1" node aggregate all the formatted product data into a single array.
5.  **Convert to XML:** The "Convert to XML" and "Convert to XML1" nodes convert the structured JSON data into XML format. The "Convert to XML1" node is designed to create XML tags with attributes.
6.  **Move Binary Data:** The "Move Binary Data" and "Move Binary Data1" nodes convert the XML data into a binary format and defines the name of the final files.
7.  **Write Binary File:** Finally, the "Write Binary File" node writes the binary XML data to a file on the n8n server's file system.

## Services:

-   MySQL (or any other SQL database compatible with n8n's MySQL node)

## Hashtags:

#n8n #automation #MySQL #XML #dataTransformation
