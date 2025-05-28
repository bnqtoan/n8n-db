# XML to JSON Converter

## Use cases:

- **API Integration:** Convert XML data received from an external API into JSON format for easier processing and integration with other systems.
- **Data Transformation:** Transform XML files into JSON for use in applications or databases that prefer JSON format.
- **Webhook Processing:** Process XML data sent via webhooks and convert it to JSON for further manipulation and storage.

## How it works:

1.  **Webhook Trigger (POST):** The workflow starts when it receives an HTTP POST request at the `/tool/xml-to-json` endpoint. It captures the request body (either as a file or data).
2.  **Switch:** The Switch node checks the request to determine if the data is sent as a file (`$binary` not empty) or as data via content-type (`text/plain` or `application/xml`).
3.  **File Processing (Extract From File):** If the data is a file, the "Extract From File" node extracts the XML content from the binary file.
4.  **Data Processing (Change Field):** If the data is sent in the body, the "Change Field" node assigns the request body to a variable named "xml".
5.  **Already JSON:** If the data is already json, just pass it to the success response.
6.  **XML to JSON Conversion (XML):** The "XML" node converts the XML data into JSON format.
7.  **Success Response:** If the conversion is successful, the workflow responds with a JSON object containing the status "OK" and the converted JSON data.
8.  **Error Handling:** If any error occurs during file extraction or XML to JSON conversion, the workflow sends an error response with a status of "error" and an error message to the user through respond to webhook. A Slack message is also sent to `#alerts-xml-to-json` channel to notify about the error.

## Services:

- Slack (for error notifications)

## Hashtags:

#n8n #automation #XML #JSON #DataTransformation
