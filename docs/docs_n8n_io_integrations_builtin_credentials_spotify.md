[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/spotify.md "Edit this page")

# Spotify credentials[#](#spotify-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Spotify](../../app-nodes/n8n-nodes-base.spotify/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Spotify's Web API documentation](https://developer.spotify.com/documentation/web-api) for more information about the service.

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](../../../../hosting/) n8n, you'll need a [Spotify Developer](https://developer.spotify.com/) account so you can create a Spotify app:

1.  Open the [Spotify developer dashboard](https://developer.spotify.com/dashboard).
2.  Select **Create an app**.
3.  Enter an **App name**, like `n8n integration`.
4.  Enter an **App description**.
5.  Copy the **OAuth Redirect URL** from n8n and enter it as the **Redirect URI** in your Spotify app.
6.  Check the box to agree to the Spotify Terms of Service and Branding Guidelines.
7.  Select **Create**. The **App overview** page opens.
8.  Copy the **Client ID** and enter it in your n8n credential.
9.  Copy the **Client Secret** and enter it in your n8n credential.
10.  Select **Connect my account** and follow the on-screen prompts to finish authorizing the credential.

Refer to [Spotify Apps](https://developer.spotify.com/documentation/web-api/concepts/apps) for more information.