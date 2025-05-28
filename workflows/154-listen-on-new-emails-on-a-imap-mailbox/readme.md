# n8n Workflow: Email to HTTP POST Request

## Use cases:

*   **Automated Order Processing:** Process sales order information received as XML attachments in emails and automatically send it to a backend system for processing via an HTTP POST request.
*   **Data Extraction and Transformation:** Extract data from XML attachments in emails, transform it, and send it to a specific API endpoint. This can be used to integrate legacy systems with modern APIs.
*   **Customer Feedback Integration:** Receive customer feedback in XML format via email, convert it to JSON, and forward it to a feedback analysis service via an HTTP POST request.

## How it works:

1.  **IMAP Email:** The workflow starts by listening for new emails in an IMAP inbox. It's configured to download attachments and allows unauthorized certificates.
2.  **Move Binary Data:** The workflow extracts the first attachment (attachment\_0) from the email, assumes it's an XML file, and moves its content to a new property called "xml". It also sets the encoding to UTF-8. The original binary data is deleted.
3.  **XML:** The XML data is then parsed into a JSON structure. The "ignoreAttrs" and "explicitRoot" options are enabled, suggesting the need to handle potentially complex XML structures, and sets the data property name to xml.
4.  **Set:** This node initializes or sets a field named "number". Currently, the parameter `values` is set to `{"number":[]}`. This node appears to be a placeholder as the value remains empty and is not dynamically populated, before the HTTP request.
5.  **HTTP Request:** Finally, the transformed data is sent as a POST request to `http://localhost:5679/api/sales-order`. The request body is formatted as `form-urlencoded`, and the `orderRequest` parameter contains the data from the "Set" node. The workflow expects a string response and stores it in the "status" property. Unauthorized certificates are allowed.

## Services:

*   **IMAP Server:** The workflow connects to an IMAP server to read emails.
*   **HTTP API:** The workflow sends data to an HTTP API endpoint (`http://localhost:5679/api/sales-order`).

## Hashtags:

#n8n #emailautomation #xml #httprequest #dataintegration
