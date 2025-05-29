# AI Text-to-Image Generator Workflow

## Use Cases

1.  **Automated Content Creation:** Generate unique images based on text prompts for blog posts, social media content, or marketing campaigns.
2.  **Personalized Art Generation:** Allow users to create custom artwork from their ideas by providing text descriptions, offering a personalized art experience.
3.  **Rapid Prototyping and Visualization:** Quickly visualize concepts or ideas by generating images from textual descriptions, useful in design and product development.

## How it Works

This workflow automates the process of generating images from text prompts using the Fal.ai service.

1.  **Webhook**: Listens for incoming HTTP POST requests at the `/ai_text_to_image_generator` endpoint. The request body should contain a "prompt" field with the text description for the image.
2.  **NSFW Filter**: Receives the prompt from the webhook and filters the prompt for inappropriate content using AI moderation.
3.  **Submit Request**: Sends the prompt to Fal.ai's Flux model inference endpoint (`https://queue.fal.run/fal-ai/flux/schnell`) to generate an image. It submits the prompt within a JSON payload.
4.  **Fetch Status**: Polls the Fal.ai API (`https://queue.fal.run/fal-ai/flux/requests/{{ $json.request_id }}/status`) to check the status of the image generation request using the `request_id` received from the submission.
5.  **Is Ready?**: Checks if the status of the request is "COMPLETED". If yes, it proceeds to fetch the result. If not, it waits.
6.  **Wait**: Pauses the workflow for a specified amount of time (1 second) before checking the status again.
7.  **Fetch Result**: Once the image generation is complete, this node retrieves the generated image from the `response_url` provided in the status response.
8.  **Success**: Responds to the initial webhook request with the generated image URL in JSON format.
9.  **400 Error**: Responds to the initial webhook request with 400 error in case the content violates terms of use.

## Services

*   **Fal.ai**: A model inference and finetuning service dedicated to AI image and video.
*   **OpenAI (potentially via Langchain)**: Used to filter NSFW content.

## Hashtags

#n8n #automation #imagegeneration #AI #workflow
