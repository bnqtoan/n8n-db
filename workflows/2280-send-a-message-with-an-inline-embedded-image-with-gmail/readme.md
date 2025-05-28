# My Workflow

## Use Cases

*   **Automated Email Marketing:** Send out newsletters or promotional emails with embedded images to subscribers.
*   **Personalized Notifications:** Configure personalized email notifications containing dynamic images (e.g., charts, graphs) based on real-time data.
*   **Reporting:** Automatically generate and send reports via email with embedded visual data for better understanding.

## How it Works

This workflow automates the process of sending an email with an embedded image using Gmail. Here's a breakdown:

1.  **Trigger:** The workflow starts when you manually click "Test workflow."
2.  **Message Settings:** The "Message settings" node defines email parameters such as sender, recipient, subject, and the HTML body, which includes a placeholder for an image (`<img src='cid:image1'>`).
3.  **Get Image:**  The "Get image" node fetches an image from a specified URL.
4.  **Convert image to base64:** The "Convert image to base64" node converts the image data into a base64 encoded string.
5.  **Compose message:** The "Compose message" node assembles the complete email content. It constructs the email's raw data including headers and properly encodes the image and adds it as an attachment using MIME formatting. It uses the base64 encoded image from the previous node.
6.  **Send message:** The "Send message" node sends the email via the Gmail API using the constructed raw email data. It authenticates using a pre-defined Gmail OAuth 2.0 credential.

## Services

*   Gmail API (via HTTP Request)

## Hashtags

#n8n #gmail #email #automation #image
