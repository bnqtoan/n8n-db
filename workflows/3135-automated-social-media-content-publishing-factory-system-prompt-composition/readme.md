# ✨🩷Automated Social Media Content Publishing Factory + System Prompt Composition

## Use cases:

1.  **Content creation for multiple platforms:** Automatically generate and tailor content for various social media platforms like X (Twitter), Instagram, Facebook, LinkedIn, Threads, and YouTube Shorts from a single user prompt.
2.  **Streamlined social media management:** Simplify the process of scheduling and publishing content by automating content creation, approval, and posting across different platforms.
3.  **Brand consistency and compliance:** Ensure consistent brand voice and adherence to platform-specific guidelines by dynamically pulling system prompts and schemas from external sources (Google Docs).

## How it works:

1.  **Trigger:** The workflow is initiated either by receiving a chat message ("When chat message received" node) or by another workflow ("When Executed by Another Workflow" node).
2.  **Prompt Routing:** Based on the user's input via chat, the "Social Media Router Agent" determines the appropriate social media platform (e.g., X-Twitter, Instagram) for content creation.
3.  **External Configuration:** System prompts and output schemas specific to each platform are fetched from external Google Docs ("Social Media System Prompt" and "Social Media Schema" nodes).
4.  **Dynamic Prompt Composition:** The "Compose Prompt & Schema" node combines the user prompt, system prompt, and platform-specific schema to create a context-aware prompt for the LLM.
5.  **Content Generation:** The "Social Media Content Creator" node uses an LLM (e.g., gpt-4o-mini) with a web search tool to generate the social media content based on the composed prompt.
6.  **Image Generation:** The "pollinations.ai1" node leverages an AI image generation service to create a visual asset corresponding to the generated content.
7.  **Approval Workflow (Optional):** The generated content and image are sent via Gmail ("Gmail User for Approval" node) for approval before proceeding to publishing.
8.  **Platform-Specific Publishing:** Based on the "Social Media Publishing Router", the workflow branches to the appropriate platform-specific nodes (e.g., "X Post", "Instagram Image", "Facebook Post", "LinkedIn Post") to publish the content.
9.  **Archiving (Optional):** The generated image and social media post are saved to Google Drive for future use and reference.

## Services:

*   **Google Docs:** For storing and retrieving system prompts and content schemas.
*   **OpenAI:** For generating social media content using LLMs.
*   **pollinations.ai / imgbb.com:** For generating and hosting images.
*   **X (Twitter) API:** For publishing posts on Twitter.
*   **Facebook Graph API:** For publishing posts and media on Facebook and Instagram.
*   **LinkedIn API:** For publishing posts on LinkedIn.
*   **Gmail:** For sending approval requests and notifications.
*   **Telegram:** For sending workflow status messages.
*   **SerpAPI:** For web search to provide the language model current information

## Hashtags:

#n8n #automation #socialmedia #contentcreation #AI
