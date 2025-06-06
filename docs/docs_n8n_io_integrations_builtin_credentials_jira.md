[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/jira.md "Edit this page")

# Jira credentials[#](#jira-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Jira](../../app-nodes/n8n-nodes-base.jira/)
*   [Jira Trigger](../../trigger-nodes/n8n-nodes-base.jiratrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Jira](https://www.atlassian.com/software/jira) Software Cloud or Server account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   [SW Cloud API token](#using-sw-cloud-api-token): Use this method with [Jira Software Cloud](https://www.atlassian.com/software/jira).
*   [SW Server account](#using-sw-server-account): Use this method with [Jira Software Server](https://www.atlassian.com/software/jira/download.).

## Related resources[#](#related-resources "Permanent link")

Refer to [Jira's API documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#about) for more information about the service.

## Using SW Cloud API token[#](#using-sw-cloud-api-token "Permanent link")

To configure this credential, you'll need an account on [Jira Software Cloud](https://www.atlassian.com/software/jira).

Then:

1.  Log in to your Atlassian profile > **Security > API tokens** page, or jump straight there using this [link](https://id.atlassian.com/manage-profile/security/api-tokens).
2.  Select **Create API Token**.
3.  Enter a good **Label** for your token, like `n8n integration`.
4.  Select **Create**.
5.  Copy the API token.
6.  In n8n, enter the **Email** address associated with your Jira account.
7.  Paste the API token you copied as your **API Token**.
8.  Enter the **Domain** you access Jira on, for example `https://example.atlassian.net`.

Refer to [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) for more information.

New tokens

New tokens may take up to a minute before they work. If your credential verification fails the first time, wait a minute before retrying.

## Using SW Server account[#](#using-sw-server-account "Permanent link")

To configure this credential, you'll need an account on [Jira Software Server](https://www.atlassian.com/software/jira/download.).

Then:

1.  Enter the **Email** address associated with your Jira account.
2.  Enter your Jira account **Password**.
3.  Enter the **Domain** you access Jira on.