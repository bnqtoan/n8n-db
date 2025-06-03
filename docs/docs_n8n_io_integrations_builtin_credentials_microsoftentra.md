[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/microsoftentra.md "Edit this page")

# Microsoft Entra ID credentials[#](#microsoft-entra-id-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Microsoft Entra ID](../../app-nodes/n8n-nodes-base.microsoftentra/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a Microsoft Entra ID account or subscription.
*   If the user account is managed by a corporate Microsoft Entra account, the administrator account has enabled the option “User can consent to apps accessing company data on their behalf” for this user (see the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent)).

Microsoft includes an Entra ID free plan when you create a [Microsoft Azure](https://azure.microsoft.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Microsoft Entra ID's documentation](https://www.microsoft.com/en-us/security/business/identity-access/azure-active-directory) for more information about the service.

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

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
7.  Select **Connect my account** in n8n to finish setting up the connection.
8.  Log in to your Microsoft account and allow the app to access your info.

Refer to Microsoft's [Add credentials](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials) for more information on adding a client secret.

## Setting custom scopes[#](#setting-custom-scopes "Permanent link")

Microsoft Entra ID credentials use the following scopes by default:

*   [`openid`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-openid-scope)
*   [`offline_access`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-offline_access-scope)
*   [`AccessReview.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#accessreviewreadwriteall)
*   [`Directory.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadwriteall)
*   [`NetworkAccessPolicy.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#networkaccesspolicyreadwriteall)
*   [`DelegatedAdminRelationship.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#delegatedadminrelationshipreadwriteall)
*   [`EntitlementManagement.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#entitlementmanagementreadwriteall)
*   [`User.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)
*   [`Directory.AccessAsUser.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryaccessasuserall)
*   [`Sites.FullControl.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#sitesfullcontrolall)
*   [`GroupMember.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadwriteall)

To select different scopes for your credentials, enable the **Custom Scopes** slider and edit the **Enabled Scopes** list. Keep in mind that some features may not work as expected with more restrictive scopes.

## Common issues[#](#common-issues "Permanent link")

Here are the known common errors and issues with Microsoft Entra credentials.

### Need admin approval[#](#need-admin-approval "Permanent link")

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).