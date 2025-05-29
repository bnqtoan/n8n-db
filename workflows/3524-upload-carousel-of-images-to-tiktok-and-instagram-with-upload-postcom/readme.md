# Upload Post Images

## Use cases:

- **Automated Social Media Posting:** Automatically upload images to both Instagram and TikTok platforms, streamlining the content creation and distribution process for social media managers.
- **Content Repurposing:**  Easily repurpose visual content by simultaneously posting the same images to multiple social media platforms with a single workflow trigger.
- **Scheduled Image Uploads:** Integrate this workflow with a scheduler to automate the posting of images at specific times, ensuring consistent content delivery.

## How it works:

1. **Trigger:** The workflow is initiated by the "When clicking ‘Test workflow’" node, which serves as a manual trigger for testing purposes.
2. **Image Retrieval:** Two "HTTP Request" nodes ("Get Image 1" and "Get Image 2") fetch images from the specified URLs.
3. **Rename Images:** "Change name to photo1" and "Change name to photo2" rename the binary data fields to "photo1" and "photo2" respectively.
4. **Merge Images:** The "Merge" node combines the outputs from the previous two nodes into a single output.
5. **Merge to send:** The "Send as 1 merged file" node merges the binary data of both images into a single item with the binary properties photo1 and photo2.
6. **Post to Platforms:** Two "HTTP Request" nodes ("POST TO INSTAGRAM1" and "POST TO TIKTOK") then send the merged image data to the `https://api.upload-post.com/api/upload_photos` endpoint. The request includes the image data, along with title, user, platform, and authorization details.  These nodes differ in that one specifies `instagram` and the other `tiktok` in the `platform[]` field, allowing a single set of images to be deployed to different platforms.

## Services:

- **Upload Post API:** An external API (presumably `https://api.upload-post.com/api/upload_photos`) is used to handle the image uploading to social media platforms.
- **Instagram**
- **TikTok**

## Hashtags:

#n8n #automation #socialmedia #imageupload #workflow
