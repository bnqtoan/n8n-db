# OIDC client workflow

## Use cases:

- **Centralized Authentication:** Implement a secure and standardized authentication process for various applications using an OIDC-compliant identity provider (IdP) like Keycloak.
- **Single Sign-On (SSO):** Enable users to log in once with their IdP credentials and access multiple applications without needing to re-authenticate.
- **User Profile Integration:** Retrieve user profile information (e.g., email, name) from the IdP after successful authentication and use it to personalize the user experience within your applications.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a user accesses a specific webhook URL.
2.  **Set Variables:** Configuration values for interacting with your OIDC provider (e.g., Keycloak), include:
    *   Authorization endpoint (auth\_endpoint)
    *   Token endpoint (token\_endpoint)
    *   User info endpoint (userinfo\_endpoint)
    *   Client ID (client\_id)
    *   Scope (scope, typically including "openid")
    *   Client Secret (client\_secret)
    *   Redirect URI (redirect\_uri): This is crucial and should be the same as the webhook URL.
    *   PKCE boolean to enable/disable PKCE flow
3.  **Extract Cookie Information:** Extract cookies present in the request headers.
4.  **Check for Authorization Code:** After the user authenticates with the IdP, they are redirected back to the webhook URL with an authorization code in the query parameters. The workflow checks if this code exists. Also checks if the workflow uses PKCE flow or not.
5.  **Get Access Token:** If an authorization code is present, the workflow exchanges it for an access token by making a POST request to the token endpoint.
6.  **Check for Existing Access Token:** The workflow checks if an access token has already been given by the OIDC (e.g. through a cookie)
7.  **Retrieve User Information:** With a valid access token, the workflow retrieves user profile information by making a request to the user info endpoint, passing the access token in the Authorization header.
8.  **Check User Info:** Verify if the user information has been retrieved successfully
9.  **Display Welcome/Login Page:**
    *   If user information is successfully retrieved, a welcome page is generated, displaying the user's email.
    *   If user information is not available (e.g., the user is not authenticated), the workflow generates and sends an HTML login form. This form initiates the OIDC authentication flow by redirecting the user to the authorization endpoint of the IdP. Javascript code is used to handle the PKCE flow if configured and to retrieve an authorization code.
10. **Send Response:** Respond to the original webhook request by sending either the welcome page or the login form.

## Services:

-   **OIDC Identity Provider (e.g., Keycloak):** The workflow relies on an OIDC-compliant IdP to handle user authentication and authorization.

## Hashtags:

#n8n #OIDC #SSO #Authentication #Keycloak
