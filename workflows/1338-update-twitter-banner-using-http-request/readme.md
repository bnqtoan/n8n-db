# Twitter Banner Updater

## Use cases:

*   **Automated Banner Updates:** Automatically update your Twitter banner with a fresh image from Unsplash on a recurring schedule or based on specific triggers.
*   **Dynamic Content Display:** Use the Twitter banner to display dynamically changing content or promotional material fetched from external sources.

## How it works:

1.  The workflow is initiated manually using the "On clicking 'execute'" node.
2.  The "HTTP Request" node fetches an image file from a specified Unsplash URL. This URL downloads a specific image. The `responseFormat` is set to "file", indicating that the node retrieves the image as a binary file.
3.  The downloaded image data is passed to the "HTTP Request1" node, which makes a POST request to the Twitter API endpoint `/1.1/account/update_profile_banner.json` to update the profile banner.
4.  The "HTTP Request1" node is configured to use OAuth1 authentication to access the Twitter API. The `sendBinaryData` option is set to true, indicating that the image data is sent as a binary file in the request body. The `binaryPropertyName` is set to "banner:data", which tells n8n where to find the binary data within the incoming data structure.

## Services:

*   Unsplash API (via direct image URL)
*   Twitter API

## Hashtags:

#n8n #automation #twitter #banner #unsplash
