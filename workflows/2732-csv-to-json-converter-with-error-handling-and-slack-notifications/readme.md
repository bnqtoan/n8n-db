# CSV to JSON Converter

## Use cases:

- **Automated Data Transformation:** Convert CSV files received via webhook into JSON format for further processing in other applications or systems.
- **API Integration:**  Accept CSV data from external sources (e.g., file uploads, raw text input) and transform it into JSON for use with APIs that require JSON payloads.
- **Data Validation and Processing:** Validate the structure and content of CSV data and transform it into a structured JSON format for data analysis or storage.

## How it works:

1.  **Webhook Trigger (POST):** The workflow starts when it receives a POST request at the `/tool/csv-to-json` webhook endpoint. It can receive data as a file or as raw text/data in the body.
2.  **Switch Node:** Based on the input type this node will route to correct flow.
    *   File input goes to the extract file node.
    *   Text data will be updated to a field called csv.
    *   If the data is in the application/json format the request will error out.
3.  **Extract From File:** Extracts the CSV content from the binary data received through the webhook.
4.  **Change Field:** If the data is recived through the body it is assigned to a field named "csv"
5.  **Convert Raw Text to CSV (Code Node):** This node takes the raw CSV text data and converts it into a JSON array. It splits the CSV data into lines, identifies headers, and creates JSON objects for each row. It automatically detects the delimiter (, or ;)
6.  **Check if Value:** Checks to see if there is an error if not aggregates the data.
7.  **Aggregate:** Aggregates all the JSON data into a single JSON object under the `jsondata` property.
8.  **Success Response:** Respond to the webhook with the JSON data. If something goes wrong, respond with an error response.
9.  **Slack Error Notification:** Sends a message to a specified Slack channel in case of any errors during the CSV conversion process, including details like the time, execution ID, and a link to the error.
10. **Raw CSV Data Example:** There is an example provided of how to send the raw CSV data to the webhook using the HTTP Request node.

## Services:

-   Slack: For error notifications.

## Hashtags:

#n8n #automation #CSV #JSON #DataTransformation
