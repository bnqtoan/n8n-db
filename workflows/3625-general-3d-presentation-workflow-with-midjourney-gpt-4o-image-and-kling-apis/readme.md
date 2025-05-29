# General 3D Presentation

## Use Cases

- **Product Showcase:** Automatically generate 360° spinning videos for e-commerce to showcase product details from all angles.
- **Character Design Presentation:** Create engaging videos of character designs for animation, gaming, or marketing purposes.
- **Art and Sculpture Display:** Produce visually appealing videos of 3D art pieces or sculptures for online galleries or portfolios.

## How it Works

This workflow automates the creation of 3D presentation videos using the PiAPI and OpenAI APIs. Here's a breakdown:

1.  **Trigger:** The workflow starts when you manually click 'Test workflow'.
2.  **Initial Prompt:** A `POST` request is sent to the PiAPI `/task` endpoint with a Midjourney model to generate an image based on a detailed prompt describing a chibi-style character.
3.  **Midjourney Image Generation:** The workflow polls the PiAPI `/task/{task_id}` endpoint until the Midjourney image generation is complete.
4.  **GPT-4o Image Enhancement:** Once the Midjourney image is generated, its URL is extracted.  This URL is then sent to OpenAI's GPT-4o model with a prompt to convert the image into a detailed 3D figurine.
5.  **Kling Video Generation:** The resulting 3D figurine image URL from GPT-4o is used to generate a spinning video using the Kling model via another `POST` request to the PiAPI `/task` endpoint. The prompt specifies an anime character rotating to showcase 3D details.
6.  **Kling Video Status Check:** The workflow polls the PiAPI `/task/{task_id}` endpoint to check the video generation status.
7.  **Final Video Retrieval:** Once the video generation is complete, the workflow extracts the final video URL (with and without watermark) from the PiAPI response.

## Services

-   **PiAPI:** Used for image and video generation tasks (Midjourney and Kling models).
-   **OpenAI (GPT-4o):** Used for converting the initial image into a 3D figurine representation.

## Hashtags

#n8n #automation #3Dmodeling #videogeneration #PiAPI #GPT4o
