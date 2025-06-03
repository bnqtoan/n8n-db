[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/google/service-account.md "Edit this page")

# Google: Service Account[#](#google-service-account "Permanent link")

Using service accounts is more complex than OAuth2. Before you begin:

*   Check if your node is [compatible](../#compatible-nodes) with Service Account.
*   Make sure you need to use Service Account. For most use cases, [OAuth2](../oauth-single-service/) is a better option.
*   Read the Google documentation on [Creating and managing service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts).

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Google Cloud](https://cloud.google.com/) account.

## Set up Service Account[#](#set-up-service-account "Permanent link")

There are four steps to connecting your n8n credential to a Google Service Account:

1.  [Create a Google Cloud Console project](#create-a-google-cloud-console-project).
2.  [Enable APIs](#enable-apis).
3.  [Set up Google Cloud Service Account](#set-up-google-cloud-service-account).
4.  [Finish your n8n credential](#finish-your-n8n-credential).

### Create a Google Cloud Console project[#](#create-a-google-cloud-console-project "Permanent link")

First, create a Google Cloud Console project. If you already have a project, jump to the next section:

1.  Log in to your [Google Cloud Console](https://console.cloud.google.com) using your Google credentials.
2.  In the top menu, select the project dropdown in the top navigation and select **New project** or go directly to the [New Project](https://console.cloud.google.com/projectcreate) page.
3.  Enter a **Project name** and select the **Location** for your project.
4.  Select **Create**.
5.  Check the top navigation and make sure the project dropdown has your project selected. If not, select the project you just created.
    
    [![The project dropdown in the Google Cloud top navigation](../../../../../_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)](https://docs.n8n.io/_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)
    
    Check the project dropdown in the Google Cloud top navigation
    

### Enable APIs[#](#enable-apis "Permanent link")

With your project created, enable the APIs you'll need access to:

1.  Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.
    
    [![The project dropdown in the Google Cloud top navigation](../../../../../_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)](https://docs.n8n.io/_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)
    
    Check the project dropdown in the Google Cloud top navigation
    
2.  Go to **APIs & Services > Library**.
3.  Search for and select the API(s) you want to enable. For example, for the Gmail node, search for and enable the Gmail API.
4.  Some integrations require other APIs or require you to request access:
    
    *   Google Perspective: [Request API Access](https://developers.perspectiveapi.com/s/docs-get-started).
    *   Google Ads: Get a [Developer Token](https://developers.google.com/google-ads/api/docs/first-call/dev-token).
    
    Google Drive API required
    
    The following integrations require the Google Drive API, as well as their own API:
    
    *   Google Docs
    *   Google Sheets
    *   Google Slides
    
    Google Vertex AI API
    
    In addition to the Vertex AI API you will also need to enable the [Cloud Resource Manager API](https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com/).
    
5.  Select **ENABLE**.
    

### Set up Google Cloud Service Account[#](#set-up-google-cloud-service-account "Permanent link")

1.  Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.
    
    [![The project dropdown in the Google Cloud top navigation](../../../../../_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)](https://docs.n8n.io/_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)
    
    Check the project dropdown in the Google Cloud top navigation
    
2.  Select the hamburger menu **\> APIs & Services > Credentials**. Google takes you to your **Credentials** page.
    
3.  Select **\+ CREATE CREDENTIALS > Service account**.
4.  Enter a name in **Service account name** and an ID in **Service account ID**. Refer to [Creating a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts?hl=en#creating) for more information.
5.  Select **CREATE AND CONTINUE**.
6.  Based on your use-case, you may want to **Select a role** and **Grant users access to this service account** using the corresponding sections.
7.  Select **DONE**.
8.  Select your newly created service account under the **Service Accounts** section. Open the **KEYS** tab.
9.  Select **ADD KEY > Create new key**.
10.  In the modal that appears, select **JSON**, then select **CREATE**. Google saves the file to your computer.

### Finish your n8n credential[#](#finish-your-n8n-credential "Permanent link")

With the Google project and credentials fully configured, finish the n8n credential:

1.  Open the downloaded JSON file.
2.  Copy the `client_email` and enter it in your n8n credential as the **Service Account Email**.
3.  Copy the `private_key`. Don't include the surrounding `"` marks. Enter this as the **Private Key** in your n8n credential.
    
    Older versions of n8n
    
    If you're running an n8n version older than 0.156.0, replace all instances of `\n` in the JSON file with new lines.
    
4.  **Optional**: Choose if you want to [**Impersonate a User**](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority) (turned on).
    
    1.  To use this option, you must [Enable domain-wide delegation](#enable-domain-wide-delegation) for the service account as a Google Workspace super admin.
    2.  Enter the **Email** of the user you want to impersonate.
5.  If you plan to use this credential with the [HTTP Request](../../../core-nodes/n8n-nodes-base.httprequest/) node, turn on **Set up for use in HTTP Request node**.
    1.  With this setting turned on, you'll need to add **Scope(s)** for the node. n8n prepopulates some scopes. Refer to [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes) for more information.
6.  **Save** your credentials.

## Video[#](#video "Permanent link")

The following video demonstrates the steps described above.

## Troubleshooting[#](#troubleshooting "Permanent link")

### Service Account can't access Google Drive files[#](#service-account-cant-access-google-drive-files "Permanent link")

A Service Account can't access Google Drive files and folders that weren't shared with its associated user email.

1.  Access your [Google Cloud Console](https://console.cloud.google.com) and copy your Service Account email.
2.  Access your [Google Drive](https://drive.google.com) and go to the designated file or folder.
3.  Right-click on the file or folder and select **Share**.
4.  Paste your Service Account email into **Add People and groups**.
5.  Select **Editor** for read-write access or **Viewer** for read-only access.

### Enable domain-wide delegation[#](#enable-domain-wide-delegation "Permanent link")

To impersonate a user with a service account, you must enable domain-wide delegation for the service account.

Not recommended

Google recommends you [avoid using domain-wide delegation](https://cloud.google.com/iam/docs/best-practices-service-accounts#domain-wide-delegation), as it allows impersonation of any user (including super admins) and can pose a security risk.

To delegate domain-wide authority to a service account, you must be a super administrator for the Google Workspace domain. Then:

1.  From your Google Workspace domain's [Admin console](https://admin.google.com/), select the hamburger menu, then select **Security > Access and data control > API Controls**.
2.  In the **Domain wide delegation** pane, select **Manage Domain Wide Delegation**.
3.  Select **Add new**.
4.  In the **Client ID** field, enter the service account's **Client ID**. To get the Client ID:
    *   Open your Google Cloud Console project, then open the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) page.
    *   Copy the **OAuth 2 Client ID** and use this as the **Client ID** for the **Domain Wide Delegation**.
5.  In the **OAuth scopes** field, enter a list of comma-separate scopes to grant your application access. For example, if your application needs domain-wide full access to the Google Drive API and the Google Calendar API, enter: `https://www.googleapis.com/auth/drive, https://www.googleapis.com/auth/calendar`.
6.  Select **Authorize**.

It can take from 5 minutes up to 24 hours before you can impersonate all users in your Workspace.