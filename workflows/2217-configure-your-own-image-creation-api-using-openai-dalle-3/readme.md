# Image Generation API

## Use cases:

*   **On-Demand Image Generation:** Generate images based on user-provided text prompts via a web browser. This could be used to quickly create visuals for presentations, social media, or brainstorming sessions.
*   **Content Creation Tool:** Integrate this workflow into a larger content creation pipeline to automatically generate images for blog posts, articles, or marketing materials based on dynamically generated prompts.
*   **Rapid Prototyping:** Quickly visualize ideas by generating images from text descriptions, aiding in the design and prototyping process for various projects.

## How it works:

1.  The workflow starts with a **Webhook** node, which listens for incoming HTTP requests at a specified URL. The URL path is `970dd3c6-de83-46fd-9038-33c470571390`.
2.  The user constructs a URL by appending a text prompt to the Webhook URL using the `?input=` parameter (URL encoding spaces as `%20`). For example: `your_webhook_url?input=A%20futuristic%20cityscape`.
3.  The Webhook node receives the request and passes the `input` query parameter (the text prompt) to the **OpenAI** node.
4.  The **OpenAI** node uses the text prompt to generate an image.
5.  The generated image is then sent to the **Respond to Webhook** node, which returns the image in binary format as the HTTP response.
6.  The user sees the generated image displayed in their web browser.

## Services:

*   **OpenAI:** Used for generating images from text prompts.

## Hashtags:

#n8n #automation #imagegeneration #openai #webhook
