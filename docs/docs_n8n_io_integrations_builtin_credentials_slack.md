[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/slack.md "Edit this page")

# Slack credentials[#](#slack-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Slack](../../app-nodes/n8n-nodes-base.slack/)
*   [Slack Trigger](../../trigger-nodes/n8n-nodes-base.slacktrigger/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access token:
    *   Required for the [Slack Trigger](../../trigger-nodes/n8n-nodes-base.slacktrigger/) node.
    *   Works with the [Slack](../../app-nodes/n8n-nodes-base.slack/) node, but not recommended.
*   OAuth2:
    *   Recommended method for the [Slack](../../app-nodes/n8n-nodes-base.slack/) node.
    *   Doesn't work with the [Slack Trigger](../../trigger-nodes/n8n-nodes-base.slacktrigger/) node.

## Related resources[#](#related-resources "Permanent link")

Refer to [Slack's API documentation](https://api.slack.com/apis) for more information about the service.

## Using API access token[#](#using-api-access-token "Permanent link")

To configure this credential, you'll need a [Slack](https://slack.com/) account and:

*   An **Access Token**

To generate an access token, create a Slack app:

1.  Open your [Slack API Apps](https://api.slack.com/apps) page.
2.  Select **Create New App > From scratch**.
3.  Enter an **App Name**.
4.  Select the **Workspace** where you'll be developing your app.
5.  Select **Create App**. The app details open.
6.  In the left menu under **Features**, select **OAuth & Permissions**.
7.  In the **Scopes** section, select appropriate scopes for your app. Refer to [Scopes](#scopes) for a list of recommended scopes.
8.  After you've added scopes, go up to the **OAuth Tokens** section and select **Install to Workspace**. You must be a Slack workspace admin to complete this action.
9.  Select **Allow**.
10.  Copy the **Bot User OAuth Token** and enter it as the **Access Token** in your n8n credential.
11.  If you're using this credential for the [Slack Trigger](../../trigger-nodes/n8n-nodes-base.slacktrigger/), follow the steps in [Slack Trigger configuration](#slack-trigger-configuration) to finish setting up your app.

Refer to the Slack API [Quickstart](https://api.slack.com/quickstart) for more information.

### Slack Trigger configuration[#](#slack-trigger-configuration "Permanent link")

To use your Slack app with the [Slack Trigger](../../trigger-nodes/n8n-nodes-base.slacktrigger/) node:

1.  Go to **Features** > **Event Subscriptions**.
2.  Turn on the **Enable Events** control.
3.  In n8n, copy the **Webhook URL** and enter it as the **Request URL** in your Slack app.
    
    Request URL
    
    Slack only allows one request URL per app. If you want to test your workflow, you'll need to do one of the following:
    
    *   Test with your **Test URL** first, then change your Slack app to use the **Production URL** once you've verified everything's working
    *   Use the **Production URL** with execution logging.
    
4.  Once verified, select the bot events to subscribe to. Use the **Trigger on** field in n8n to filter these requests.
    
    *   To use an event not in the list, add it as a bot event and select **Any Event** in the n8n node.

Refer to [Quickstart | Configuring the app for event listening](https://api.slack.com/quickstart#listening) for more information.

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting n8n](../../../../hosting/) and need to configure OAuth2 from scratch, you'll need a [Slack](https://slack.com/) account and:

*   A **Client ID**
*   A **Client Secret**

To get both, create a Slack app:

1.  Open your [Slack API Apps](https://api.slack.com/apps) page.
2.  Select **Create New App > From scratch**.
3.  Enter an **App Name**.
4.  Select the **Workspace** where you'll be developing your app.
5.  Select **Create App**. The app details open.
6.  In **Settings > Basic Information**, open the **App Credentials** section.
7.  Copy the **Client ID** and **Client Secret**. Paste these into the corresponding fields in n8n.
8.  In the left menu under **Features**, select **OAuth & Permissions**.
9.  In the **Redirect URLs** section, select **Add New Redirect URL**.
10.  Copy the **OAuth Callback URL** from n8n and enter it as the new Redirect URL in Slack.
11.  Select **Add**.
12.  Select **Save URLs**.
13.  In the **Scopes** section, select appropriate scopes for your app. Refer to [Scopes](#scopes) for a list of scopes.
14.  After you've added scopes, go up to the **OAuth Tokens** section and select **Install to Workspace**. You must be a Slack workspace admin to complete this action.
15.  Select **Allow**.
16.  At this point, you should be able to select the OAuth button in your n8n credential to connect.

Refer to the Slack API [Quickstart](https://api.slack.com/quickstart) for more information. Refer to the Slack [Installing with OAuth](https://api.slack.com/authentication/oauth-v2) documentation for more details on the OAuth flow itself.

## Scopes[#](#scopes "Permanent link")

Scopes determine what permissions an app has.

*   If you want your app to act on behalf of users who authorize the app, add the required scopes under the **User Token Scopes** section.
*   If you're building a bot, add the required scopes under the **Bot Token Scopes** section.

Here's the list of scopes the OAuth credential requires, which are a good starting point:

**Scope name**

**Notes**

`channels:read`

`channels:write`

Not available as a bot token scope

`chat:write`

`files:read`

`files:write`

`groups:read`

`im:read`

`mpim:read`

`reactions:read`

`reactions:write`

`stars:read`

Not available as a bot token scope

`stars:write`

Not available as a bot token scope

`usergroups:read`

`usergroups:write`

`users.profile:read`

`users.profile:write`

Not available as a bot token scope

`users:read`

## Common issues[#](#common-issues "Permanent link")

### Token expired[#](#token-expired "Permanent link")

Slack offers **token rotation** that you can turn on for bot and user tokens. This makes every tokens expire after 12 hours. While this may be useful for testing, n8n credentials using tokens with this enabled will fail after expiry. If you want to use your Slack credentials in production, this feature must be **off**.

To check if your Slack app has token rotation turned on, refer to the [Slack API Documentation | Token Rotation](https://api.slack.com/authentication/rotation).

If your app uses token rotation

Please note, if your Slack app uses token rotation, you can't turn it off again. You need to create a new Slack app with token rotation disabled instead.