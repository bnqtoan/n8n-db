# Social Media Publisher

## Use cases:

- **Automated Social Media Posting:**  A marketing team can use this workflow to schedule and automatically publish content (photos and videos) to multiple social media platforms based on form submissions, streamlining their content distribution process.
- **Content Repurposing:** A content creator can easily repurpose content by uploading a single file and distributing it across various social media channels, saving time and effort.
- **Campaign Management:**  Social media managers can use this workflow to quickly launch and manage social media campaigns by setting up a form for content submission and automatically posting it to the relevant platforms.

## How it works:

1. **Form Submission:** The workflow starts with an "On form submission" trigger. This node presents a form with fields for the platform, account, caption, and file upload (image or video).  The form also include the Facebook ID.
2. **Media Type Detection:** The "Video or Photo?" Switch node analyzes the MIME type of the uploaded file to determine if it's an image (image/jpeg) or a video (video/mp4).
3. **Platform Posting:**
    - **Photos:**  If it's an image, the "Post photo" HTTP Request node sends the image, caption, and other form data to the `https://api.upload-post.com/api/upload_photos` endpoint using the `Upload-post.com API` credential.
    - **Videos:** If it's a video, the "Post video" HTTP Request node sends the video, caption, and other form data to the `https://api.upload-post.com/api/upload` endpoint, also using the `Upload-post.com API` credential.
4. **Result Processing:**
    - "Result Photo" and "Result Video" node set the result with values from the API response.
5. **Success Check:** The "Success Photo?" and "Success Video?" If nodes check the `result` value to determine if the post was successful (result == true).
6. **Completion Messages:**
   - If successful, an "OK Photo" or "OK Video" Form node displays a success message.
   - If unsuccessful, a "KO Photo" or "KO Video" Form node displays an error message.

## Services:

- Upload-post.com API: Used for uploading and publishing content to various social media platforms.

## Hashtags:

#n8n #automation #socialmedia #contentmarketing #workflow
