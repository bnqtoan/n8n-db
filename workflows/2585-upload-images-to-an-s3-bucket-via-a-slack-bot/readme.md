# Slack Image Uploader Workflow

## Use Cases

- **Automated Image Archiving:** Automatically upload images shared in a Slack channel to an S3 bucket for long-term storage and archival.
- **Content Moderation:**  Allow users to upload potentially violating content to S3 through a modal in Slack.
- **File Sharing and Collaboration:** Provide a user-friendly way to upload files to a shared S3 bucket directly from Slack, improving team collaboration.

## How it works

1.  **Webhook Trigger:** The workflow starts when a user interacts with a Slack app, triggering a webhook.
2.  **Parse Webhook:** The `Parse Webhook` node extracts the necessary data from the Slack webhook payload.
3.  **Route Message:** This node routes the workflow based on the type of interaction with Slack. It checks the `callback_id` or `type` of the interaction and directs the flow accordingly (e.g., opening a modal, processing a block action, or submitting data).
4.  **Display Modal:** Depending on the routing, the workflow can present users with interactive modals in Slack. These modals allow users to either create a new folder or select an existing one for uploading files. The `Idea Selector Modal`, `Create Folder`, and `Select Folder` nodes handle the display of different modals.
5.  **Handle file creation flow** The `Route Message1` routes depending on if the file needs a new folder created, or if it needs to select a pre-existing one.
6.  **Split Out Files:** This node splits the array of files selected in Slack into individual items for processing.
7.  **Loop Over Items:** The workflow then iterates through each file.
8.  **Download File Binary:**  The `Download File Binary` node downloads the file content from Slack using the `url_private_download` URL provided in the Slack payload.
9.  **Upload to S3 Bucket:** The `Upload to S3 Bucket` node uploads the downloaded file to a specified S3 bucket, using the specified folder path derived from user inputs in the Slack modal.
10. **Check if uploaded successfully** This checks if each individual file was properly uploaded or not.
11. **Success/Failure Response:**, the workflow sends corresponding responses to Slack.
12. **Aggregation:** The workflow aggregates the success and failure messages.
13. **Send Confirmation to Slack:** Finally, the workflow posts a confirmation message to a Slack channel, providing links to the uploaded files.

## Services

-   Slack API
-   Amazon S3

## Hashtags

#n8n #Slack #S3 #FileUpload #Automation
