# Get Long Lived Facebook User or Page Access Token

## Use cases:

- **Automated Social Media Management:**  Automatically refresh Facebook Page access tokens to maintain uninterrupted posting schedules and analytics tracking for social media management tools.
- **Long-Term Data Collection:** Ensure continuous access to Facebook user or page data for marketing analysis, research, or archiving purposes, avoiding frequent manual re-authentication.
- **Chatbot Integration:** Maintain a stable connection between a chatbot and a Facebook Page, allowing the bot to respond to messages and perform actions without token expiration issues.

## How it works:

This workflow automates the process of obtaining long-lived Facebook access tokens for both users and pages.

1.  **Manual Trigger:** The workflow starts when triggered manually using the "When clicking ‘Test workflow’" node.
2.  **Set Parameters:** The "Set Parameter" node defines the necessary credentials which are: `client_id`, `client_secret`, `user_access_token`, and `app_scoped_user_id`.
3.  **Get Long Lived FB User Token:** The "Get Long Lived FB User Token" node exchanges a short-lived user access token for a long-lived one using the Facebook Graph API. It sends a request to the `oauth/access_token` endpoint with the `client_id`, `client_secret`, and the `fb_exchange_token` (short-lived token).
4.  **Get Long Lived FB Page Token:** The "Get Long Lived FB Page Token" node then retrieves a long-lived page access token, using the long-lived user access token obtained in the previous step. It queries the `/accounts` endpoint of the Facebook Graph API, passing the user access token.

## Services:

-   Facebook Graph API

## Hashtags:

#n8n #FacebookAPI #AccessToken #Automation #SocialMedia
