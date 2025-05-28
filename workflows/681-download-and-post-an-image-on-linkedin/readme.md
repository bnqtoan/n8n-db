# Post Image to LinkedIn

## Use cases:

*   Automatically share images on LinkedIn from a website or cloud storage whenever a new image is added.
*   Schedule image posts to LinkedIn at specific times or intervals.
*   Integrate with other systems to trigger image posts based on events, such as a successful build or a marketing campaign launch.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which is activated when you click the "Execute" button in n8n.
2.  The "HTTP Request" node downloads an image from the specified URL (`https://n8n.io/n8n-logo.png`). The response is configured to be returned as a file.
3.  The "LinkedIn" node then posts the downloaded image to LinkedIn. It uses the provided LinkedIn credentials and posts as a specific person ("gZG0JALzuy"). The post includes the text "this is a test image post". The `shareMediaCategory` parameter set to `IMAGE` ensures it is posted as an image.

## Services:

*   LinkedIn API
*   n8n

## Hashtags:

#n8n #LinkedIn #Automation #ImagePost #SocialMedia
