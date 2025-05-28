# Twitter Banner Updater with New Followers

## Use cases:

*   **Automated Twitter Banner Update:** Automatically updates your Twitter banner with the profile pictures of your latest followers.
*   **Community Engagement:** Showcases your new followers, encouraging more people to follow you.
*   **Dynamic Content:** Keeps your Twitter profile fresh and engaging with automatically updated content.

## How it works:

1.  **Trigger:** The workflow starts manually "On clicking 'execute'".
2.  **Fetch New Followers:** An HTTP Request node fetches the latest followers from the Twitter API (v2) using your `YOUR_USER_ID`. It retrieves their profile image URLs and limits the results to a maximum of 3 followers using the `max_results=3` parameter. The `user.fields=profile_image_url` parameter specifies that only the profile image URL is needed.
3.  **Split into Items:** The Item Lists node splits the returned data (followers) into individual items for processing.
4.  **Fetch Images:** For each follower, an HTTP Request node downloads their profile image from the URL obtained in the previous step. The image size is increased by replacing 'normal' with '400x400' in the URL. The image is saved as a binary file under the `avatar` property.
5.  **Resize:** The Edit Image node resizes each follower's profile image to 200x200 pixels.
6.  **Crop:** The Edit Image node crops the image into a circle with a black background and convert the format to PNG.
7.  **Resize Again:** The Edit Image node resizes the circular profile image to 75x75 pixels.
8.  **Prepare for Merging:** The Function node prepares the binary data of the follower avatars to be merged later, to rename binary properties to data0, data1 etc
9.  **Fetch Background:** An HTTP Request node fetches a template image from a URL defined in `TEMPLATE_IMAGE_URL`. This image serves as the base for the Twitter banner. The image is stored as a binary file under the `bg` property.
10. **Merge:** The Merge node merges the background image with the resized follower profile images.
11. **Composite Images:** The Edit Image node composites the follower profile images onto the background image at specified positions (1000x375, 1100x375, 1200x375).  It uses the `data0`, `data1`, and `data2` binary properties created in the Function node.
12. **Update Twitter Banner:** An HTTP Request node sends the combined image to the Twitter API (v1.1) to update your Twitter banner. It uses OAuth 1.0 authentication. The banner image data is sent as a multipart form data in the `banner:bg` property.

## Services:

*   Twitter API (v2 and v1.1)

## Hashtags:

#n8n #Twitter #Automation #BannerUpdate #SocialMedia
