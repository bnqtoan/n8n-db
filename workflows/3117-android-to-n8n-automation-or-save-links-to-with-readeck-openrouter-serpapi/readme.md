# Sell: Android Webhooks

## Use cases:

- Automatically bookmark content from Android apps by sending URLs via webhook.
- Categorize and tag bookmarked content for improved organization and searchability in ReadDeck.
- Integrate with SEO analysis tools to derive relevant tags for bookmarked content based on its online presence.

## How it works:

1.  The workflow starts when it receives a POST request to the `/android` webhook endpoint from an Android app. The webhook captures data (presumably a URL) from the request body.
2.  The "Extractor URL & Title" node uses an AI model (OpenRouter GPT 40 Mini) to extract the title and URL from the received data.
3.  The "If Title and URL provided" node checks if both the URL and title were successfully extracted.
    *   If both are present, the workflow proceeds to the "Content Tagging Agent" node. If not, the flow jumps to a respond node "Title & URL Not Found".
4.  The "Content Tagging Agent" node uses the SerpAPI tool and an AI agent (OpenRouter GPT 40 Mini) to analyze the URL's content and generate relevant tags. The agent is configured to act as an SEO analyst and derive tags using natural language phrases. Buffer memory is used to provide context to the AI agent.
5.  The "Create Bookmark" node sends a POST request to the ReadDeck API to create a bookmark. The request includes the extracted title, URL, and generated tags. It authenticates using HTTP Header Authentication
6.  The "If Bookmark Created" node checks the response from the ReadDeck API to verify if the bookmark was successfully created (HTTP status 202 and message "Link submitted").
    *   If the bookmark creation was successful, the "Bookmark Created" node sends a success message as a response to the webhook.
    *   If bookmark creation failed, the "Bookmark Not Created" node sends an error message as a response to the webhook.

## Services:

-   ReadDeck API: Used to create and store bookmarks.
-   SerpAPI: Used to retrieve detailed SEO information about URLs.
-   OpenRouter: Used to get access to different LLMs models like GPT 40 Mini.

## Hashtags:

#n8n #automation #android #bookmarking #SEO
