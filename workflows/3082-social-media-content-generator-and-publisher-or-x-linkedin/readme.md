# Social Media Content Generator And Publisher | X, Linkedin

## Use cases:

- **Streamline Social Media Management:** Automatically generate and publish content to both X (Twitter) and LinkedIn from a single input, saving time and effort for social media managers.
- **Content Repurposing:** Quickly adapt a single topic into platform-specific posts, optimizing content for each social network's audience and format.
- **Consistent Brand Messaging:** Maintain a consistent brand presence across multiple platforms by automating the content creation and publishing process.

## How it works:

1.  **Receive Post Title:** The workflow starts with a form trigger that captures the desired post title.
2.  **Generate AI Content:** An AI agent (Langchain Agent node) takes the post title and generates content optimized for both LinkedIn and X (Twitter), including relevant hashtags. The Gemini Chat Model is being used to generate the content.
3.  **Format AI Output:** The generated content is then processed by a structured output parser (Langchain Output Parser Structured node) to format the content into a defined schema with separate posts, hashtags, and other relevant data for each platform (X and LinkedIn).
4.  **Post to X & Post to LinkedIn:** The formatted content is then sent to the respective social media platforms using the Twitter and LinkedIn nodes.
5.  **Append Linkedin And X Publishing Responses:** The responses from the X (Twitter) and LinkedIn API calls are combined into a single data structure.
6.  **Show Confirmation:** Finally, a form is displayed to confirm successful posting with links to the published posts on both platforms.

## Services:

-   X (Twitter)
-   LinkedIn
-   Google Gemini API

## Hashtags:

#n8n #automation #socialmedia #contentcreation #linkedin #x
