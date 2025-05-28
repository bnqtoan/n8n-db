# Extract information from an image of a receipt

## Use cases:

*   **Automated Expense Tracking:** Automatically extract data from receipt images and import it into expense tracking software, eliminating manual data entry.
*   **Digital Archiving of Receipts:** Digitize and archive receipts by extracting relevant information like date, amount, and vendor, making them searchable and easily accessible.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "On clicking 'execute'" node.
2.  **Download Image:** The "HTTP Request" node downloads a receipt image from a specified URL (`https://miro.medium.com/max/1400/0*1T9GkAb93w5NSMsf`). The `responseFormat` parameter ensures the response is handled as a file.
3.  **Extract Data with Mindee:** The "Mindee" node processes the downloaded image using the Mindee Receipt API. It extracts key information such as the total amount, date, vendor, and other relevant details from the receipt.
4.  **Output:** The extracted information from the Mindee node can then be used in subsequent nodes (not defined in this workflow) for further processing, such as saving the data to a spreadsheet or database.

## Services:

*   [Mindee](https://www.mindee.com/): Receipt API for extracting data from receipts.

## Hashtags:

#n8n #automation #receipt #mindee #ocr
