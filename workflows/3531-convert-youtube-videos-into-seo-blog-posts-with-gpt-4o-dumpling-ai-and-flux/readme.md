# Convert YouTube Videos into SEO Blog Posts

## Use cases:

- **Content Repurposing:** Automatically convert YouTube video content into blog posts, expanding the reach of your content to different platforms.
- **SEO Optimization:** Generate SEO-optimized blog posts from video transcripts to improve search engine rankings and drive organic traffic to your website.
- **Content Creation Automation:** Streamline content creation by automating the process of transforming video content into written articles.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node, allowing for on-demand execution.
2.  **Set Variables:** Sets the YouTube video URL and recipient email address.
3.  **Get YouTube Transcript:** Retrieves the transcript of a specified YouTube video using the Dumpling AI API. This node requires a Dumpling AI account with the necessary credentials.
4.  **Generate Blog Post:** Uses the OpenAI node (GPT-4o) to generate a detailed SEO-optimized blog post from the YouTube transcript.  It structures the blog post with a title, description, image prompt, and content in JSON format.
5.  **Generate AI Image:** Leverages the Dumpling AI API to generate an image for the blog post using the `blogImagePrompt` from the previous step.
6.  **Markdown to HTML:** Converts the markdown formatted content from the blog post to HTML.
7.  **Download Image:** Downloads the image from the temporary URL returned by the Dumpling AI image generation API.
8.  **Send Email:** Sends the generated blog post content (title, description, and HTML content) and the downloaded image as an attachment to the specified recipient email address using the Gmail node.

## Services:

-   **YouTube:** Source of video content.
-   **Dumpling AI:** Used for transcript extraction and image generation.
-   **OpenAI:** Used for generating blog post content from transcript.
-   **Gmail:** Used to send the generated blog post via email.

## Hashtags:

#n8n #automation #contentrepurposing #SEO #blogging
