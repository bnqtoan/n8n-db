[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/google/oauth-generic.md "Edit this page")

# Google: OAuth2 generic[#](#google-oauth2-generic "Permanent link")

This document contains instructions for creating a generic OAuth2 Google credential for use with [custom operations](../../../../custom-operations/).

Note for n8n Cloud users

For the following nodes, you can authenticate by selecting **Sign in with Google** in the OAuth section:

*   [Google Calendar](../../../app-nodes/n8n-nodes-base.googlecalendar/)
*   [Google Contacts](../../../app-nodes/n8n-nodes-base.googlecontacts/)
*   [Google Drive](../../../app-nodes/n8n-nodes-base.googledrive/)
*   [Google Mail](../../../app-nodes/n8n-nodes-base.gmail/)
*   [Google Sheets](../../../app-nodes/n8n-nodes-base.googlesheets/)
*   [Google Sheets Trigger](../../../trigger-nodes/n8n-nodes-base.googlesheetstrigger/)
*   [Google Tasks](../../../app-nodes/n8n-nodes-base.googletasks/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Google Cloud](https://cloud.google.com/) account.

## Set up OAuth[#](#set-up-oauth "Permanent link")

There are five steps to connecting your n8n credential to Google services:

1.  [Create a Google Cloud Console project](#create-a-google-cloud-console-project).
2.  [Enable APIs](#enable-apis).
3.  [Configure your OAuth consent screen](#configure-your-oauth-consent-screen).
4.  [Create your Google OAuth client credentials](#create-your-google-oauth-client-credentials).
5.  [Finish your n8n credential](#finish-your-n8n-credential).

### Create a Google Cloud Console project[#](#create-a-google-cloud-console-project "Permanent link")

First, create a Google Cloud Console project. If you already have a project, jump to the [next section](#enable-apis):

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
    

### Configure your OAuth consent screen[#](#configure-your-oauth-consent-screen "Permanent link")

If you haven't used OAuth in your Google Cloud project before, you'll need to [configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent):

1.  Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.
    
    [![The project dropdown in the Google Cloud top navigation](../../../../../_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)](https://docs.n8n.io/_images/integrations/builtin/credentials/google/google-cloud-project-dropdown.png)
    
    Check the project dropdown in the Google Cloud top navigation
    
2.  Open the left navigation menu and go to **APIs & Services > OAuth consent screen**.
3.  Select **Get started** to begin configuring OAuth consent.
4.  Enter an **App name** and **User support email** to include on the Oauth screen.
5.  For the **Audience**, select **Internal** for user access within your organization's Google workspace or **External** for any user with a Google account. Refer to Google's [User type documentation](https://support.google.com/cloud/answer/15549945?sjid=17061891731152303663-EU#user-type) for more information on user types.
6.  Select the **Email addresses** Google should use to contact you about changes to your project.
7.  Read and accept the Google's User Data Policy and select **Create**.
8.  In the left-hand menu, select **Branding**.
9.  In the **Authorized domains** section, select **Add domain**:
    *   If you're using n8n's Cloud service, add `n8n.cloud`
    *   If you're [self-hosting](../../../../../hosting/), add the domain of your n8n instance.
10.  Select **Save** at the bottom of the page.

### Create your Google OAuth client credentials[#](#create-your-google-oauth-client-credentials "Permanent link")

Next, create the OAuth client credentials in Google:

1.  In the **APIs & Services** section, select [**Credentials**](https://console.cloud.google.com/apis/credentials).
2.  Select **\+ Create credentials** > **OAuth client ID**.
3.  In the **Application type** dropdown, select **Web application**.
4.  Google automatically generates a **Name**. Update the **Name** to something you'll recognize in your console.
5.  From your n8n credential, copy the **OAuth Redirect URL**. Paste it into the **Authorized redirect URIs** in Google Console.
6.  Select **Create**.

### Finish your n8n credential[#](#finish-your-n8n-credential "Permanent link")

With the Google project and credentials fully configured, finish the n8n credential:

1.  From Google's **OAuth client created** modal, copy the **Client ID**. Enter this in your n8n credential.
2.  From the same Google modal, copy the **Client Secret**. Enter this in your n8n credential.
3.  You must provide the scopes for this credential. Refer to [Scopes](#scopes) for more information. Enter multiple scopes in a space-separated list, for example:
    
    1
    
    `https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.addons.current.action.compose`
    
4.  In n8n, select **Sign in with Google** to complete your Google authentication.
5.  **Save** your new credentials.

## Video[#](#video "Permanent link")

The following video demonstrates the steps described above:

## Scopes[#](#scopes "Permanent link")

Google services have one or more possible access scopes. A scope limits what a user can do. Refer to [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes) for a list of scopes for all services.

n8n doesn't support all scopes. When creating a generic Google OAuth2 API credential, you can enter scopes from the **Supported scopes** list below. If you enter a scope that n8n doesn't already support, it won't work.

Supported scopes

Service

Available scopes

Gmail

*   `https://www.googleapis.com/auth/gmail.labels`
*   `https://www.googleapis.com/auth/gmail.addons.current.action.compose`
*   `https://www.googleapis.com/auth/gmail.addons.current.message.action`
*   `https://mail.google.com/`
*   `https://www.googleapis.com/auth/gmail.modify`
*   `https://www.googleapis.com/auth/gmail.compose`

Google Ads

*   `https://www.googleapis.com/auth/adwords`

Google Analytics

*   `https://www.googleapis.com/auth/analytics`
*   `https://www.googleapis.com/auth/analytics.readonly`

Google BigQuery

*   `https://www.googleapis.com/auth/bigquery`

Google Books

*   `https://www.googleapis.com/auth/books`

Google Calendar

*   `https://www.googleapis.com/auth/calendar`
*   `https://www.googleapis.com/auth/calendar.events`

Google Cloud  
Natural Language

*   `https://www.googleapis.com/auth/cloud-language`
*   `https://www.googleapis.com/auth/cloud-platform`

Google Cloud  
Storage

*   `https://www.googleapis.com/auth/cloud-platform`
*   `https://www.googleapis.com/auth/cloud-platform.read-only`
*   `https://www.googleapis.com/auth/devstorage.full_control`
*   `https://www.googleapis.com/auth/devstorage.read_only`
*   `https://www.googleapis.com/auth/devstorage.read_write`

Google Contacts

*   `https://www.googleapis.com/auth/contacts`

Google Docs

*   `https://www.googleapis.com/auth/documents`
*   `https://www.googleapis.com/auth/drive`
*   `https://www.googleapis.com/auth/drive.file`

Google Drive

*   `https://www.googleapis.com/auth/drive`
*   `https://www.googleapis.com/auth/drive.appdata`
*   `https://www.googleapis.com/auth/drive.photos.readonly`

Google Firebase  
Cloud Firestore

*   `https://www.googleapis.com/auth/datastore`
*   `https://www.googleapis.com/auth/firebase`

Google Firebase  
Realtime Database

*   `https://www.googleapis.com/auth/userinfo.email`
*   `https://www.googleapis.com/auth/firebase.database`
*   `https://www.googleapis.com/auth/firebase`

Google Perspective

*   `https://www.googleapis.com/auth/userinfo.email`

Google Sheets

*   `https://www.googleapis.com/auth/drive.file`
*   `https://www.googleapis.com/auth/spreadsheets`

Google Slide

*   `https://www.googleapis.com/auth/drive.file`
*   `https://www.googleapis.com/auth/presentations`

Google Tasks

*   `https://www.googleapis.com/auth/tasks`

Google Translate

*   `https://www.googleapis.com/auth/cloud-translation`

GSuite Admin

*   `https://www.googleapis.com/auth/admin.directory.group`
*   `https://www.googleapis.com/auth/admin.directory.user`
*   `https://www.googleapis.com/auth/admin.directory.domain.readonly`
*   `https://www.googleapis.com/auth/admin.directory.userschema.readonly`

## Troubleshooting[#](#troubleshooting "Permanent link")

### Google hasn't verified this app[#](#google-hasnt-verified-this-app "Permanent link")

If using the OAuth authentication method, you might see the warning **Google hasn't verified this app**. To avoid this, you can create OAuth credentials from the same account you want to authenticate.

If you need to use credentials generated by another account (by a developer or another third party), follow the instructions in [Google Cloud documentation | Authorization errors: Google hasn't verified this app](https://developers.google.com/nest/device-access/reference/errors/authorization#google_hasnt_verified_this_app).

### Google Cloud app becoming unauthorized[#](#google-cloud-app-becoming-unauthorized "Permanent link")

For Google Cloud apps with **Publishing status** set to **Testing** and **User type** set to **External**, consent and tokens expire after seven days. Refer to [Google Cloud Platform Console Help | Setting up your OAuth consent screen](https://support.google.com/cloud/answer/10311615?hl=en#zippy=%2Ctesting) for more information. To resolve this, reconnect the app in the n8n credentials modal.