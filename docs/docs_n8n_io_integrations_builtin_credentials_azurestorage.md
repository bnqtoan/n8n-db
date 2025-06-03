[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/azurestorage.md "Edit this page")

# Azure Storage credentials[#](#azure-storage-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Azure Storage](../../app-nodes/n8n-nodes-base.azurestorage/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create an [Azure](https://azure.microsoft.com) subscription.
*   Create an [Azure storage account](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create).

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2
*   Shared Key

## Related resources[#](#related-resources "Permanent link")

Refer to [Azure Storage's API documentation](https://learn.microsoft.com/en-us/rest/api/storageservices/) for more information about the service.

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

## Using Shared Key[#](#using-shared-key "Permanent link")

To configure this credential, you'll need:

*   An **Account**: The name of your Azure Storage account.
*   A **Key**: A shared key for your Azure Storage account. Select **Security + networking** and then **Access keys**. You can use either of the two account keys for this purpose.

Refer to [Manage storage account access keys | Microsoft](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage) for more detailed steps.

## Common issues[#](#common-issues "Permanent link")

Here are the known common errors and issues with Azure Storage credentials.

### Need admin approval[#](#need-admin-approval "Permanent link")

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).