# ✨🤖Automated AI Powered Social Media Content Factory for X + Facebook + Instagram + LinkedIn

## Use cases:

1.  **Content Creation for Multiple Platforms**: Automatically generate tailored content for various social media platforms like X, Facebook, Instagram, and LinkedIn, saving time and ensuring brand consistency.
2.  **Streamlined Social Media Management**: Simplify the process of creating and scheduling social media posts by automating content generation and approval workflows.
3.  **AI-Driven Content Strategy**: Leverage AI to generate engaging content ideas, hashtags, and call-to-actions based on the latest trends and platform-specific best practices.

## How it works:

1.  **User Input**: The workflow starts with a "Form Trigger" where users input a topic, optional keywords/hashtags, and a link for the social media post.
2.  **AI Content Generation**: The "Social Media Content Factory" node, powered by an AI language model (gpt-4o), crafts platform-specific content for LinkedIn, Instagram, Facebook, and X based on the user's input and predefined guidelines. It outputs structured content including post text, image suggestions, hashtags, and call-to-actions for each platform.
3.  **Content Review and Approval**: The workflow prepares an HTML email containing the generated content for each platform using another AI Agent. This email is sent for approval using a Gmail node with a "sendAndWait" operation.
4.  **Image Handling**: Simultaneously, an image is generated using the OpenAI node based on the caption of the Instagram post (the workflow also has optional form to use an alternative user image uploaded).
5.  **Post to Social Media**: Once the content is approved (via Gmail interaction), the workflow automatically posts the content to X, Facebook, Instagram (using Facebook Graph API), and LinkedIn. The workflow uses the result of the image creation to post to social media accounts.
6.  **Result Aggregation and Reporting**: The results from each social media platform are aggregated, and a summary report is generated using AI agents.
7.  **Notifications**: Finally, the workflow sends an email with the tabular HTML results and a Telegram message with the overall summary.

## Services:

*   OpenAI: For content and image generation.
*   Google Gemini: As alternative Language Model.
*   Gmail: For sending and awaiting content approval emails and sending results.
*   Facebook Graph API: For posting to Facebook and Instagram.
*   X (Twitter) API: For posting to X.
*   LinkedIn API: For posting to LinkedIn.
*   Telegram API: For sending result summaries.
*   SerpAPI: For using it as a Tool.
*   imgbb: For saving images.
*   Pollinations AI: For create images.

## Hashtags:

#n8n #automation #socialmedia #contentcreation #AI
