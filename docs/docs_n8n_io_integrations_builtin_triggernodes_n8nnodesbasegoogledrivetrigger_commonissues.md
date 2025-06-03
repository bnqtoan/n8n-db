[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/common-issues.md "Edit this page")

# Google Drive Trigger node common issues[#](#google-drive-trigger-node-common-issues "Permanent link")

Here are some common errors and issues with the [Google Drive Trigger node](../) and steps to resolve or troubleshoot them.

## 401 unauthorized error[#](#401-unauthorized-error "Permanent link")

The full text of the error looks like this:

1

`401 - {"error":"unauthorized_client","error_description":"Client is unauthorized to retrieve access tokens using this method, or client not authorized for any of the scopes requested."}`

This error occurs when there's an issue with the credential you're using and its scopes or permissions.

To resolve:

1.  For [OAuth2](../../../credentials/google/oauth-single-service/) credentials, make sure you've enabled the Google Drive API in **APIs & Services > Library**. Refer to [Google OAuth2 Single Service - Enable APIs](../../../credentials/google/oauth-single-service/#enable-apis) for more information.
2.  For [Service Account](../../../credentials/google/service-account/) credentials:
    1.  [Enable domain-wide delegation](../../../credentials/google/service-account/#enable-domain-wide-delegation).
    2.  Make sure you add the Google Drive API as part of the domain-wide delegation configuration.

## Handling more than one file change[#](#handling-more-than-one-file-change "Permanent link")

The Google Drive Trigger node polls Google Drive for changes at a set interval (once every minute by default).

If multiple changes to the **Watch For** criteria occur during the polling interval, a single Google Drive Trigger event occurs containing the changes as items. To handle this, your workflow must account for times when the data might contain more than one item.

You can use an [if node](../../../core-nodes/n8n-nodes-base.if/) or a [switch node](../../../core-nodes/n8n-nodes-base.switch/) to change your workflow's behavior depending on whether the data from the Google Drive Trigger node contains a single item or multiple items.