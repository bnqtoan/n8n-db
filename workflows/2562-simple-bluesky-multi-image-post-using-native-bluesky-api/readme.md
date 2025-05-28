# Publish Image Post to Bluesky

## Use cases:
- Automatically publish posts with images to your Bluesky social feed.
- Schedule and automate content sharing on Bluesky, saving time and effort.
- Quickly share images from various sources (e.g., websites, image repositories) to Bluesky.

## How it works:
1. **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2. **Define Credentials:** Sets your Bluesky credentials (identifier and app password) in the "Define Credentials" node. Remember to replace the placeholder values with your actual credentials.
3. **Create Bluesky Session:** Authenticates with Bluesky using the provided credentials to create a session. It retrieves the `did` (Decentralized Identifier) and `accessJwt` from the response, which are necessary for subsequent API requests.
4. **Set Caption:** Sets the text content of the post, including any desired formatting or links. The "Set Caption" node allows you to define the post's text, with a reminder that Bluesky has a 300 character limit.
5. **Set Images:** Defines the image URLs to be included in the post. This node uses dummy images from picsum.photos, but can be modified to accept images from other sources.
6. **Split Out:** Splits the array of image URLs in "Set Images" into individual items for processing.
7. **Download Images:** Downloads each image from the specified URL.
8. **Post Image to Bluesky:** Uploads each downloaded image as a "blob" to Bluesky using the `uploadBlob` endpoint. The `Authorization` header with the `accessJwt` obtained earlier is required.
9. **Code:** Transforms the output of the "Post Image to Bluesky" node to create the image object needed for the embed.
10. **Aggregate:** Combines the data (image blob references) from all the uploaded images into a single item.
11. **Post to Bluesky:** Creates the final post on Bluesky using the `com.atproto.repo.createRecord` endpoint.  It includes the post text (from "Set Caption"), the current timestamp, and embeds the uploaded images using the blob references generated in the previous steps.

## Services:
- Bluesky Social API (bsky.social)

## Hashtags:
#n8n #automation #Bluesky #socialmedia #contentcreation
