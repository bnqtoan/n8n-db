# RSS Feed to BlueSky Post

## Use cases:

- Automatically share new blog posts from an RSS feed on BlueSky, increasing visibility and engagement.
- Curate content from specific news sources or industry blogs and post summaries on BlueSky.
- Promote podcast episodes by automatically creating BlueSky posts with a link to the episode and a brief description.

## How it works:

1.  **RSS Feed Trigger:** The workflow starts by monitoring an RSS feed for new items.  The `RSS Feed Trigger` node is configured with the feed's URL and checks for updates every minute.
2.  **Create Session:** Authenticates with BlueSky using username/password.
3.  **Get current datetime:** Gets the current date and time.
4.  **Download image:** Downloads the image from the RSS feed item, from the enclosure URL.
5.  **Upload image:** Uploads the downloaded image to BlueSky.
6.  **Create Post:** Creates a new post on BlueSky, including the content (truncated to 200 characters), the link to the original article, and the uploaded image. The `Create Post` node constructs the necessary JSON payload for the BlueSky API, using data extracted from the RSS feed and image node.  It uses the `accessJwt` obtained during the "Create Session" step for authorization.

## Services:

*   BlueSky API
*   RSS Feed

## Hashtags:

#n8n #BlueSky #RSS #Automation #SocialMedia
