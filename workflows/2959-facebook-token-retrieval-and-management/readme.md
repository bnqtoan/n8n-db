# Facebook Token Mew

## Use cases:

- **Automated Facebook Login:** Automate the process of obtaining a user access token for Facebook, which can be used in various applications that require Facebook authentication.
- **Long-Lived Token Generation:** Convert a short-lived Facebook token into a long-lived one (60 days), reducing the need for frequent re-authentication.
- **Retrieve Facebook User Data:** Use the access token to retrieve user-specific data, post on their behalf, or manage Facebook pages programmatically.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook node that listens for incoming requests on the `/webhook/facebook-login` path.
2.  **Configuration:** The `Config` node sets the Facebook App ID, App Secret, and redirect URI. These values are essential for the OAuth flow.
3.  **Conditional Check:** The `If` node checks if the query parameter "code" is present in the incoming webhook request. This signifies that the user has been redirected back after authenticating with Facebook.
4.  **Short-Lived Token Request:** If the "code" parameter is present, the workflow sends a request to the Facebook Graph API to obtain a short-lived access token using the code received from the webhook.
5.  **Long-Lived Token Exchange:** The short-lived token is then exchanged for a long-lived token, valid for 60 days, by making another request to the Facebook Graph API.
6.  **Redirect to Facebook Authentication:** If the "code" parameter is not present, the workflow generates a Facebook authentication URL using the app ID, redirect URI, and requested scopes.
7.  **Redirect User:** The user is redirected to the Facebook authentication URL, where they grant permissions to the application.
8.  **Token Response:** The long-lived token is displayed in the response. The workflow includes a `Sticky Note` suggesting to save the token to a database.

## Services:

-   **Facebook Graph API:** Used for obtaining short-lived and long-lived access tokens.

## Hashtags:

#n8n #facebook #automation #oauth #accesstoken
