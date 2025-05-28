# Simple Social: Instagram single image post with Facebook API

## Use cases:

- **Automated Social Media Posting:** Schedule and automatically publish single-image posts to Instagram using data from a database or other sources.
- **Content Creation Pipeline:** Integrate with a content creation workflow to automatically post approved images with predefined captions.
- **Marketing Campaign Automation:**  Automatically publish promotional images to Instagram as part of a broader marketing campaign.

## How it works:

1.  **Trigger:** The workflow is initiated by a "When clicking 'Test workflow'" node (manual trigger).  This can be replaced with another trigger, such as a schedule or webhook.
2.  **Set Instagram Parameters:** The "Instagram params" node sets the `image_url`, `instagram_business_account_id`, and `instagram_post_caption` parameters.  You'll need to replace the placeholder values with your actual Instagram Business Account ID, image URL, and desired caption.
3.  **Prepare Media for Instagram:** The "Instagram prepare media" node uses the Facebook Graph API to create a media container on Instagram, using the parameters defined in the previous step. It uploads the image to Facebook servers and prepares it for publishing.
4.  **Check media status:** The "Instagram check status of media uploaded before" node retrieves status of media for know if is ready for publish
5.  **Verify Status Media:** The "If media status is finished" node verify if media is ready for publish if is ready continue, if not the workflow stop.
6.  **Publish Media:** The "Instagram publish media" node uses the Facebook Graph API to publish the prepared media container to Instagram. It uses the creation ID returned by the "Instagram prepare media" node.
7.  **Check publish status:** The "Instagram check status of media published before" node retrieves the media status for know if publish is already published
8.  **Verify Status Published Media:** The "If media status is finished1" node verify if the media is published, if is published it send an email.
9.  **Email Notifications:** The "Send Email" node is there for notify if the status of upload the media is unsuccess
10. **Email Notifications:** The "Send Email1" node is there for notify if the status of publish is success.
11. **Email Notifications:** The "Send Email2" node is there for notify if the status of publish is unsuccess.

## Services:

*   **Facebook Graph API:** Used to interact with Instagram via the Facebook platform.
*   **Email Send:** For send any email when the media is published or not.

## Hashtags:

#n8n #Instagram #FacebookAPI #SocialMedia #Automation
