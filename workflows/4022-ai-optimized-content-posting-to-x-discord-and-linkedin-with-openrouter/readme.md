# BuzzBlast

## Use cases:

- **Content Repurposing:** Takes a single message and automatically tailors it for different social media platforms (X, Discord, LinkedIn) to maximize reach and engagement.
- **Social Media Management:** Streamlines social media posting by automating the content adaptation process, saving time and effort for social media managers.
- **Viral Campaign Generation:** Helps create viral content by using AI to optimize messages for each platform, increasing the likelihood of shares and engagement.

## How it works:

1.  **Chat Input Trigger:** Receives an initial chat message from a configured chat platform.
2.  **AI Content Optimizer:** Uses OpenRouter's AI models (specifically LLaMA-4) to optimize the input message. It detects the language of the input and generates platform-specific content in the same language, aiming for virality.
3.  **Output Parser:** Parses the AI-generated output into a structured JSON format, separating content for each platform (X, Discord, LinkedIn).
4.  **Split Platform Content:** Splits the structured JSON output into individual items for each platform, enabling routing to the appropriate social media node.
5.  **Route to Platform:** Routes the optimized content to the correct platform (X, Discord, or LinkedIn) based on the "platform" field in the JSON output.
6.  **Post to X/Discord/LinkedIn:** Posts the AI-optimized content to the respective social media platform using appropriate credentials and formatting.

## Services:

-   **OpenRouter:** Provides access to AI models for content optimization.
-   **X (Twitter):** Used for posting tweets.
-   **Discord:** Used for sending messages to Discord servers via webhooks.
-   **LinkedIn:** Used for sharing posts on LinkedIn.

## Hashtags:

#n8n #automation #socialmediamarketing #AI #contentcreation
