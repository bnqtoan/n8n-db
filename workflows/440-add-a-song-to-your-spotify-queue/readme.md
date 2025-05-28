# n8n Workflow: Sample Spotify Track Retrieval

## Use cases:

*   **Quickly retrieve track information:** Fetch details of a specific Spotify track for review or sharing.
*   **Testing Spotify API connectivity:** Verify your Spotify API credentials and connection within n8n.
*   **Simple API call example:** Demonstrate a basic interaction with the Spotify API in n8n for learning purposes.

## How it works:

1.  The workflow starts with a **"On clicking 'execute'"** node, a manual trigger that initiates the workflow execution.
2.  The **"Spotify"** node retrieves information about a specific Spotify track. The `id` parameter is set to `spotify:track:6SPOM20nWbQSBvTwzgIzqg`, identifying the target track.  This node uses the `spotifyOAuth2Api` credential for authentication with the Spotify API.

## Services:

*   Spotify API

## Hashtags:

#n8n #Spotify #API #Automation #Music
