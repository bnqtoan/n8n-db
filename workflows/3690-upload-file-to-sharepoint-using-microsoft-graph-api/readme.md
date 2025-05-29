# Upload Photo to SharePoint using Microsoft Graph API

## Use cases:

- **Automated Image Backup:** Automatically upload photos from a local folder or cloud storage to a designated SharePoint library for backup and archival purposes.
- **Content Management System Integration:** Integrate with a CMS to automatically upload images to SharePoint upon content creation or modification.
- **Mobile App Photo Upload:** Allow users of a mobile app to directly upload photos to a specific SharePoint folder, streamlining workflows for field teams or event photography.

## How it works:

This workflow automates the process of uploading a photo to a SharePoint library using the Microsoft Graph API. Here's a breakdown of the steps:

1.  **Manual Trigger:** The workflow starts when triggered manually (e.g., by clicking "Test workflow" in n8n).
2.  **Set Config (sensitive data):** Stores sensitive information like `TENANT_ID`, `CLIENT_ID`, and `CLIENT_SECRET` required for authentication with the Microsoft Graph API.  **Important:** The workflow contains a note stating that storing credentials this way is for demonstration only and should be replaced with a secure method in production.
3.  **Authentication:** Requests an access token from the Microsoft Azure Active Directory (Azure AD) using the stored credentials. This token is required to authorize subsequent requests to the Graph API.
4.  **Get photo (for testing purposes):** Downloads a sample photo from a public URL.  This step retrieves the image data that will be uploaded to SharePoint.
5.  **Set destination:** Defines the target folder path and desired filename within the SharePoint library where the photo will be uploaded.
6.  **Upload photo:** Uploads the downloaded photo to the specified SharePoint location using the Microsoft Graph API and the obtained access token. It constructs the API endpoint using the `TARGET_FOLDER` and `FILE_NAME` set in the previous step.

## Services:

-   **Microsoft Graph API:**  Used for interacting with SharePoint Online, specifically for uploading the photo.
-   **Microsoft Azure Active Directory (Azure AD):** Used for authentication and authorization to access the Microsoft Graph API.
-   **fastly.picsum.photos:** Used to get a photo to test the workflow.

## Hashtags:

#n8n #SharePoint #MicrosoftGraphAPI #Automation #FileUpload
