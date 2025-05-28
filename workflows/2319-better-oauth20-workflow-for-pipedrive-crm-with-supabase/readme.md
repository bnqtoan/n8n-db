# 2. Refresh Pipedrive tokens

## Use cases:

- **Automated Token Refreshing:** Automatically refresh Pipedrive access tokens before they expire, ensuring uninterrupted integration functionality.
- **Centralized Token Management:** Store and manage Pipedrive access and refresh tokens in a Supabase database, simplifying token management across multiple n8n workflows or applications.
- **API Integration Resilience:** Ensure that API calls to Pipedrive remain operational even when access tokens expire, enhancing the reliability of integrations.

## How it works:

This workflow automates the process of refreshing Pipedrive access tokens using a refresh token, ensuring continuous access to Pipedrive's API. Here's a breakdown:

1.  **Receive API Request:** The workflow starts with a webhook ("Receive Request") that listens for incoming requests from a 3rd party to fetch data from Pipedrive.
2.  **Get Pipedrive Token from DB:** It fetches the current access token and refresh token for the Pipedrive app from a Supabase database.
3.  **Make API call to Pipedrive:** The workflow uses the access token to make an API request to Pipedrive (Get contact from Pipedrive). In this example, its searching for a person by email.
4.  **Check access token validity:** If the Pipedrive API returns an error indicating an invalid access token, the workflow proceeds to refresh the token.
5.  **Refresh Access Token:** Workflow calls another webhook (Refresh Access Token).
6.  **Find record in Supabase:** The workflow receives the call. It receives an app ID from the webhook. Based on the platform and appID. it finds the corresponding record in Supabase.
7.  **Combine Keys to make Auth Header:** Then combines the client ID and client secret to generate the authorization header.
8.  **Get access token:** The workflow uses the refresh token to obtain a new access token from Pipedrive's OAuth server (Get Pipedrive access token).
9.  **Update token in DB:** The Supabase database is updated with the new access token.
10. **Retry API call:** The workflow return to step 3.

## Services:

-   **Pipedrive API:** Interacts with Pipedrive to search for a person.
-   **Supabase:** Stores and retrieves access tokens and refresh tokens.

## Hashtags:

#n8n #automation #Pipedrive #OAuth #API
