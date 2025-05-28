## n8n Workflow Readme

**Use cases:**

*   **Dynamic Image Generation for Social Media:** Automatically create images with text overlays based on data received from a webhook, suitable for sharing updates or announcements on social media platforms.
*   **Personalized Meme Creation:** Generate memes with dynamic text content sourced from webhooks, allowing for personalized and timely reactions to events or trends.

**How it works:**

1.  The workflow starts with a **Webhook** node that listens for incoming HTTP requests on the `/test` path. It extracts the `name` query parameter from the request.
2.  The **Read File URL** node fetches an image from a publicly accessible URL.
3.  The **Edit Image** node overlays text on the downloaded image. The text includes a dynamic variable that uses the `name` parameter captured by the webhook node (e.g., "They found the killer it was John!"). The text's font size, position, and line length are pre-configured.
4.  The final modified image data (binary data of the new image) will be returned to the webhook.

**Services:**

*   [needpix.com](https://www.needpix.com): A website that provides downloadable images.

**Hashtags:**

#n8n #automation #imageprocessing #webhook #dynamicimage
