# Transform Image to Lego Style Using Line and Dall-E

## Use cases:

*   **Fun Image Transformation:** Users can send an image via Line and receive a Lego-style rendition back, adding a playful twist to their photos.
*   **Content Creation:** Artists or marketers can quickly generate unique, Lego-themed visuals for social media or other content.
*   **Personalized Gifts:** Create Lego-style versions of personal photos as unique and memorable gifts.

## How it works:

1.  **Receive a Line Webhook:** The workflow starts when a user sends an image to a Line bot. The webhook node listens for incoming POST requests on the specified path (`/lineimage`).
2.  **Receive Line Messages:** Retrieves the image content from the Line API using the message ID extracted from the webhook data.  It authenticates using a Line Bot token.
3.  **Creating a Prompt for Dall-E (Lego Style):** Uses the OpenAI (Dall-E) node to analyze the image and generate a suitable prompt for transforming it into a Lego-style image. This node leverages the GPT-4o-mini model. The image is passed as a base64 encoded string.
4.  **Creating an Image using Dall-E:** Takes the prompt generated and uses DALL-E to create a new image in a Lego style.
5.  **Send Back an Image through Line:** Sends the generated Lego-style image back to the user via the Line API as a reply to their original message. It uses the reply token from the initial webhook event and authenticates using a Line Bot token.

## Services:

*   Line API
*   OpenAI (Dall-E)

## Hashtags:

#n8n #automation #imageprocessing #linebot #openai
