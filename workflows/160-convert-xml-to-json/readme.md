## n8n Workflow: XML Conversion

This workflow converts an XML string into a JSON object.

**Use cases:**

*   **Data Transformation:** Convert XML data received from a legacy system or API into a more modern JSON format for easier processing.
*   **API Integration:** Prepare XML data for submission to an API that requires JSON format.
*   **Data Extraction:** Extract specific data points from an XML document by converting it to JSON and then accessing the relevant fields.

**How it works:**

1.  **Manual Trigger:** The workflow starts when you manually click the "Execute" button in n8n.
2.  **Set Node:**  This node defines the XML string that needs to be converted. It assigns the provided XML string to a variable named "xml".
3.  **XML Node:** The XML node parses the XML string (from the 'xml' variable set in the previous node) into a JSON object.  The `attrkey` parameter is set to `$` which renames XML attributes with a `$` prefix. `mergeAttrs` is false so attributes are not merged into the root element. `explicitRoot` is set to true so the root element in the XML is included in the output. The resulting JSON object replaces the input data.

**Services:**

*   None (This workflow primarily uses n8n's built-in nodes for data manipulation.)

**Hashtags:**

#n8n #automation #XML #JSON #DataTransformation
