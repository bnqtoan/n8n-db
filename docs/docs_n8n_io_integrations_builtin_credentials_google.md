[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/google/index.md "Edit this page")

# Google credentials[#](#google-credentials "Permanent link")

This section contains:

*   [OAuth2 single service](oauth-single-service/): Create an OAuth2 credential for a specific service node, such as the Gmail node.
*   [OAuth2 generic](oauth-generic/): Create an OAuth2 credential for use with [custom operations](../../../custom-operations/).
*   [Service Account](service-account/): Create a [Service Account](https://cloud.google.com/iam/docs/service-account-overview) credential for some specific service nodes.
*   [Google PaLM and Gemini](../googleai/): Get a Google Gemini/Google PaLM API key.

## OAuth2 and Service Account[#](#oauth2-and-service-account "Permanent link")

There are two authentication methods available for Google services nodes:

*   [OAuth2](https://developers.google.com/identity/protocols/oauth2): Recommended because it's more widely available and easier to set up.
*   [Service Account](https://cloud.google.com/iam/docs/understanding-service-accounts): Refer to the [Google documentation: Understanding service accounts](https://cloud.google.com/iam/docs/understanding-service-accounts) for guidance on when you need a service account.

Note for n8n Cloud users

For the following nodes, you can authenticate by selecting **Sign in with Google** in the OAuth section:

*   [Google Calendar](../../app-nodes/n8n-nodes-base.googlecalendar/)
*   [Google Contacts](../../app-nodes/n8n-nodes-base.googlecontacts/)
*   [Google Drive](../../app-nodes/n8n-nodes-base.googledrive/)
*   [Google Mail](../../app-nodes/n8n-nodes-base.gmail/)
*   [Google Sheets](../../app-nodes/n8n-nodes-base.googlesheets/)
*   [Google Sheets Trigger](../../trigger-nodes/n8n-nodes-base.googlesheetstrigger/)
*   [Google Tasks](../../app-nodes/n8n-nodes-base.googletasks/)

## Compatible nodes[#](#compatible-nodes "Permanent link")

Once configured, you can use your credentials to authenticate the following nodes. Most nodes are compatible with OAuth2 authentication. Support for Service Account authentication is limited.

Node

OAuth

Service Account

[Google Ads](../../app-nodes/n8n-nodes-base.googleads/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Gmail](../../app-nodes/n8n-nodes-base.gmail/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![⚠](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/26a0.svg ":warning:")

[Google Analytics](../../app-nodes/n8n-nodes-base.googleanalytics/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google BigQuery](../../app-nodes/n8n-nodes-base.googlebigquery/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Books](../../app-nodes/n8n-nodes-base.googlebooks/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Calendar](../../app-nodes/n8n-nodes-base.googlecalendar/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google Chat](../../app-nodes/n8n-nodes-base.googlechat/)

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Cloud Storage](../../app-nodes/n8n-nodes-base.googlecloudstorage/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google Contacts](../../app-nodes/n8n-nodes-base.googlecontacts/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google Cloud Firestore](../../app-nodes/n8n-nodes-base.googlecloudfirestore/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Cloud Natural Language](../../app-nodes/n8n-nodes-base.googlecloudnaturallanguage/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google Cloud Realtime Database](../../app-nodes/n8n-nodes-base.googlecloudrealtimedatabase/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google Docs](../../app-nodes/n8n-nodes-base.googledocs/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Drive](../../app-nodes/n8n-nodes-base.googledrive/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Drive Trigger](../../trigger-nodes/n8n-nodes-base.googledrivetrigger/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Perspective](../../app-nodes/n8n-nodes-base.googleperspective/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google Sheets](../../app-nodes/n8n-nodes-base.googlesheets/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Slides](../../app-nodes/n8n-nodes-base.googleslides/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Tasks](../../app-nodes/n8n-nodes-base.googletasks/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[Google Translate](../../app-nodes/n8n-nodes-base.googletranslate/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

[Google Workspace Admin](../../app-nodes/n8n-nodes-base.gsuiteadmin/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

[YouTube](../../app-nodes/n8n-nodes-base.youtube/)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

Gmail and Service Accounts

Google technically supports Service Accounts for use with Gmail, but it requires enabling domain-wide delegation, which Google discourages, and its behavior can be inconsistent.

n8n recommends using OAuth2 with the Gmail node.