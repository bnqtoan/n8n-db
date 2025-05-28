# Create Google Creds

## Use cases:
- **Bulk Credential Creation:** Streamline the process of creating multiple Google service credentials for different Google accounts or projects, eliminating manual setup for each service.
- **Credential Management:**  Automate credential creation with consistent naming conventions (based on email and service), making it easier to identify and manage credentials within n8n.
- **Simplified Setup for Multiple Services:** Quickly set up credentials for a range of Google services (Docs, Sheets, Slides, Drive, Gmail, Calendar, Contacts) for a specific account.

## How it works:
1.  **Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2.  **Google JSON Input:** The "Google JSON" node stores the Google OAuth 2.0 client configuration, including client ID and secret, obtained from the Google Cloud Console.  You will need to populate the empty values.
3.  **Google Email Input:** The "Google Email" node stores the email address associated with the Google account for which you are creating credentials. You will need to populate the empty values.
4.  **Service Definition:** The "Services" node defines an array of Google services (e.g., googleDocsOAuth2Api, googleSheetsOAuth2Api) for which credentials will be created.
5.  **Service Splitting:** The "Split Out" node iterates through the array of services defined in the "Services" node, creating a separate item for each service.
6.  **Credential Creation:** The "n8n Create Credentials" node uses the n8n API to create a new credential for each Google service. It dynamically generates the credential name using the Google email and service name. It uses the client ID and secret from the "Google JSON" node.
7.  **Sign In:** The sticky note reminds users that even after creation, each credential needs to be manually signed in.

## Services:
- Google Docs API
- Google Sheets API
- Google Slides API
- Google Drive API
- Gmail API
- Google Calendar API
- Google Contacts API
- n8n API

## Hashtags:
#n8n #google #automation #credentials #oauth2
