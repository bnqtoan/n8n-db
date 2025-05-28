# Analyze Screenshots with AI

## Use cases:

- **Website Monitoring:** Automatically analyze screenshots of websites on a regular basis to detect visual changes, layout issues, or content updates.
- **Competitive Analysis:** Capture and analyze screenshots of competitor websites to understand their offerings, design trends, and marketing strategies.
- **Content Moderation:** Analyze screenshots of user-generated content to identify inappropriate or policy-violating material based on visual elements.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Setup:** Sets the website name and URL using the "Setup" node. This is configurable for testing and can be expanded to load data from other sources.
3.  **URLbox API Request:** Takes the URL from the "Setup" node and sends a POST request to the URLbox API to capture a full-page screenshot of the website.  The API requires an API key for authorization.
4.  **Analyze the Screenshot:** The captured screenshot (image) is then passed to the OpenAI node, which uses a prompt to describe the website's content in one sentence. You have to set up your OpenAI credentials.
5.  **Merge Name & Description:** Merges the website name, URL and the AI-generated description into a single data structure.

## Services:

-   [URLbox](https://urlbox.com/) (Screenshot API)
-   OpenAI (AI Language Model)

## Hashtags:

#n8n #automation #AI #screenshot #webmonitoring
