# Transform Product Photos into 360° Videos with OpenAI & RunwayML

## Use cases:

- **E-commerce Product Showcase:** Automatically convert product photos submitted via a form into engaging 360° videos for online stores, enhancing the customer shopping experience.
- **Marketing Material Creation:** Generate visually appealing videos from static product images for use in marketing campaigns, social media, or advertisements.
- **Content Automation:** Streamline the process of creating dynamic video content from product photos, saving time and resources for businesses.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form ("On form submission").
2.  **Upload Original Photo:** The submitted photo is uploaded to Google Drive ("Upload Original Photo").
3.  **AI Agent & OpenAI Chat Model:** The image is processed using an AI Agent and OpenAI Chat Model to refine the original product photo ("AI Agent", "OpenAI Chat Model").
4.  **Download File:** The refined image is downloaded from Google Drive ("Download File").
5.  **Refine Image:** The image is further refined using an HTTP Request ("Create Refined Image").
6.  **Convert to File:** The refined image is converted to a file format suitable for video generation ("Convert to File").
7.  **Get URL:** Get the URL of the converted file using an HTTP Request("Get URL").
8.  **Generate Video:** A video is generated from the refined image using an HTTP Request ("Generate Video"), likely using RunwayML.
9.  **Wait 30 sec:** The workflow waits for 30 seconds to allow the video generation process to complete ("Wait 30 sec").
10. **Get Video:** The generated video is retrieved using an HTTP Request ("Get Video").
11. **Route Actions Based on Status from Video Generation Tool:** Determine whether the video generation was successful or not based on the status code ("Route Actions Based on Status from Video Generation Tool").
12. **Success/Failure Emails:** Based on the status of the video generation, either a success email with the video URL or a failure email is sent ("Video Generation Success Email with Video URL", "Video Generation Failure Email").
13. **Wait 5 Sec:** If the video generation fails, it waits for 5 seconds and gets the video again ("Wait 5 Sec", "Get Video").

## Services:

*   Google Drive
*   OpenAI
*   RunwayML (Inferred from the name)
*   Email (SMTP Server)

## Hashtags:

#n8n #automation #videogeneration #ecommerce #ai
