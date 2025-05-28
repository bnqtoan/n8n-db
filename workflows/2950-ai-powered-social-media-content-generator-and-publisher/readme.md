# Social Media Tutorial

## Use cases:

- **Automated Social Media Content Generation:** Automatically generate social media posts based on user-submitted forms, including text and images. This is ideal for businesses or individuals looking to maintain an active online presence without manual content creation.
- **Cross-Platform Social Media Posting:** Simultaneously publish content to multiple social media platforms like Facebook, LinkedIn, X (Twitter), and Instagram, ensuring consistent branding and messaging across different channels.
- **AI-Powered Content Enhancement:** Leverage AI to refine and optimize user-provided content for better engagement, including generating engaging captions and suggesting relevant hashtags.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form via the "On form submission" trigger node. This could include text, images, or any other relevant data.
2.  **Data Splitting and Preparation:** The "Split Form Input" node separates the submitted data, and the "Split Data" node further processes the information. "Data for AI" prepares the data to be sent to the AI agent.
3.  **AI Content Generation:** The "AI Agent" utilizes a language model ("Google Gemini Chat Model") to generate social media content based on the input from the form. The "Structured Output Parser" helps format the AI-generated content.
4.  **Content Aggregation:** The "Aggregate" node collects the AI-generated text.
5.  **Image Handling:** The "Upload Image" node stores the image from form submission. "Nest Top Meta" and "Rename Image Binary Top Image" nodes prepare the image for social media posts.
6.  **Social Media Publishing:** The workflow then publishes the generated content to multiple platforms:
    *   "X" (Twitter)
    *   "Publish to LinkedIn"
    *   "Publish to Facebook"
    *   "Upload Image to imgbb.com" and "Publish to Instagram"
7.  **Image Optimization:** The workflow prepares an image for Instagram using imgbb to host the image and then publishes it.
8.  **Content Finalization:** Merge1 node consolidate all contents to prepare for the final form.
9.  **Form completion**: Form node indicates the process is complete.

## Services:

-   **Google Gemini Chat Model:** Used for AI-powered content generation.
-   **Facebook Graph API:** Used for publishing content to Facebook and Instagram.
-   **LinkedIn API:** Used for publishing content to LinkedIn.
-   **X (Twitter) API:** Used for posting content to X.
-   **imgbb.com API**: Used to store image online.

## Hashtags:

#n8n #automation #socialmedia #AI #contentgeneration
