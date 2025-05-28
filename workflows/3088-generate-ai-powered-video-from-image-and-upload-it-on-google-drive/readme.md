# AI generated video from image

## Use cases:

- **Automated Content Creation:** Automatically generate short videos from user-submitted images for social media marketing campaigns.
- **Personalized Video Greetings:** Allow users to upload a photo and create personalized video greetings for special occasions.
- **E-learning Material Generation:** Quickly create engaging video content from static images for online courses.

## How it works:

1.  **On form submission:** The workflow starts when a user submits a form (likely with an image).
2.  **Set data:** The data from the form submission is saved to be used in the following steps.
3.  **Create Video:** An HTTP request is made to an external service to generate a video based on the submitted image.
4.  **Wait 60 sec.:** The workflow pauses for 60 seconds to allow the video generation service to process the request.
5.  **Get status:** An HTTP request is made to check the status of the video generation process.
6.  **Completed?:** An "If" node checks if the video generation is complete. If it is not complete, the workflow loops back to the "Wait 60 sec." node.
7.  **Get Url Video:** Once the video is generated, an HTTP request is made to get the URL of the generated video.
8.  **Get File Video:** An HTTP request retrieves the video file from the URL.
9.  **Upload Video:** The video file is uploaded to Google Drive.

## Services:

-   Google Drive
-   External Video Generation API (Likely, inferred from the "Create Video" and "Get status" nodes)

## Hashtags:

#n8n #automation #videoGeneration #imageToVideo #googleDrive
