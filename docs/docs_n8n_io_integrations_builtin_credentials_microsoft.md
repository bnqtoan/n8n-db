[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/microsoft.md "Edit this page")

# Microsoft credentials[#](#microsoft-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Microsoft Dynamics CRM](../../app-nodes/n8n-nodes-base.microsoftdynamicscrm/)
*   [Microsoft Excel](../../app-nodes/n8n-nodes-base.microsoftexcel/)
*   [Microsoft Graph Security](../../app-nodes/n8n-nodes-base.microsoftgraphsecurity/)
*   [Microsoft OneDrive](../../app-nodes/n8n-nodes-base.microsoftonedrive/)
*   [Microsoft Outlook](../../app-nodes/n8n-nodes-base.microsoftoutlook/)
*   [Microsoft SharePoint](../../app-nodes/n8n-nodes-base.microsoftsharepoint/)
*   [Microsoft Teams](../../app-nodes/n8n-nodes-base.microsoftteams/)
*   [Microsoft Teams Trigger](../../trigger-nodes/n8n-nodes-base.microsoftteamstrigger/)
*   [Microsoft To Do](../../app-nodes/n8n-nodes-base.microsofttodo/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Microsoft Azure](https://azure.microsoft.com/) account.
*   Create at least one user account with access to the appropriate service.
*   If the user account is managed by a corporate Microsoft Entra account, the administrator account has enabled the option “User can consent to apps accessing company data on their behalf” for this user (see the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent)).

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to the linked Microsoft API documentation below for more information about each service's API:

*   Dynamics CRM: [Web API](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview)
*   Excel: [Graph API](https://learn.microsoft.com/en-us/graph/api/resources/excel)
*   Graph Security: [Graph API](https://learn.microsoft.com/en-us/graph/api/overview)
*   OneDrive: [Graph API](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/)
*   Outlook: [Graph API](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview) and [Outlook API](https://learn.microsoft.com/en-us/outlook/rest/reference)
*   Teams: [Graph API](https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview)
*   To Do: [Graph API](https://learn.microsoft.com/en-us/graph/todo-concept-overview)

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

Some Microsoft services require extra information for OAuth2. Refer to [Service-specific settings](#service-specific-settings) for more guidance on those services.

For self-hosted users, there are two main steps to configure OAuth2 from scratch:

1.  [Register an application](#register-an-application) with the Microsoft Identity Platform.
2.  [Generate a client secret](#generate-a-client-secret) for that application.

Follow the detailed instructions for each step below. For more detail on the Microsoft OAuth2 web flow, refer to [Microsoft authentication and authorization basics](https://learn.microsoft.com/en-us/graph/auth/auth-concepts).

### Register an application[#](#register-an-application "Permanent link")

Register an application with the Microsoft Identity Platform:

1.  Open the [Microsoft Application Registration Portal](https://aka.ms/appregistrations).
2.  Select **Register an application**.
3.  Enter a **Name** for your app.
4.  In **Supported account types**, select **Accounts in any organizational directory (Any Azure AD directory - Multi-tenant) and personal Microsoft accounts (for example, Skype, Xbox)**.
5.  In **Register an application**:
    1.  Copy the **OAuth Callback URL** from your n8n credential.
    2.  Paste it into the **Redirect URI (optional)** field.
    3.  Select **Select a platform** > **Web**.
6.  Select **Register** to finish creating your application.
7.  Copy the **Application (client) ID** and paste it into n8n as the **Client ID**.

Refer to [Register an application with the Microsoft Identity Platform](https://learn.microsoft.com/en-us/graph/auth-register-app-v2) for more information.

### Generate a client secret[#](#generate-a-client-secret "Permanent link")

With your application created, generate a client secret for it:

1.  On your Microsoft application page, select **Certificates & secrets** in the left navigation.
2.  In **Client secrets**, select **\+ New client secret**.
3.  Enter a **Description** for your client secret, such as `n8n credential`.
4.  Select **Add**.
5.  Copy the **Secret** in the **Value** column.
6.  Paste it into n8n as the **Client Secret**.
7.  If you see other fields in the n8n credential, refer to [Service-specific settings](#service-specific-settings) below for guidance on completing those fields.
8.  Select **Connect my account** in n8n to finish setting up the connection.
9.  Log in to your Microsoft account and allow the app to access your info.

Refer to Microsoft's [Add credentials](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials) for more information on adding a client secret.

### Service-specific settings[#](#service-specific-settings "Permanent link")

The following services require extra information for OAuth2:

#### Dynamics[#](#dynamics "Permanent link")

Dynamics OAuth2 requires information about your Dynamics domain and region. Follow these extra steps to complete the credential:

1.  Enter your Dynamics **Domain**.
2.  Select the Dynamics data center **Region** you're within.

Refer to the [Microsoft Datacenter regions documentation](https://learn.microsoft.com/en-us/power-platform/admin/new-datacenter-regions) for more information on the region options and corresponding URLs.

#### Microsoft (general)[#](#microsoft-general "Permanent link")

The general Microsoft OAuth2 also requires you to provide a space-separated list of **Scope**s for this credential.

Refer to [Scopes and permissions in the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc) for a list of possible scopes.

#### Outlook[#](#outlook "Permanent link")

Outlook OAuth2 supports the credential accessing a user's primary email inbox or a shared inbox. By default, the credential will access a user's primary email inbox. To change this behavior:

1.  Turn on **Use Shared Inbox**.
2.  Enter the target user's UPN or ID as the **User Principal Name**.

#### SharePoint[#](#sharepoint "Permanent link")

SharePoint OAuth2 requires information about your SharePoint **Subdomain**.

To complete the credential, enter the **Subdomain** part of your SharePoint URL. For example, if your SharePoint URL is `https://tenant123.sharepoint.com`, the subdomain is `tenant123`.

## Common issues[#](#common-issues "Permanent link")

Here are the known common errors and issues with Microsoft OAuth2 credentials.

### Need admin approval[#](#need-admin-approval "Permanent link")

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).