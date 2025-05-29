# 3D Figurine Orthographic Views with Midjourney and GPT-4o-Image API

## Use cases:

-   **Concept Art Creation:** Automatically generate turnaround sheets (front, side, back views) of 3D figurine concepts based on text prompts for artists and designers.
-   **Toy Design Prototyping:** Streamline the process of visualizing potential toy designs by creating orthographic views from a single Midjourney-generated image.
-   **Character Design Reference:** Quickly produce reference sheets for 3D modelers and animators, depicting characters from multiple angles.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Midjourney Image Generation:** Sends a prompt to the Midjourney API (via piapi.ai) to generate an image of a 3D figurine using the "Midjourney Generator" node.
3.  **Retrieve Task ID:** Extracts the `task_id` from the Midjourney API response.
4.  **Poll for Image URL:** Repeatedly checks the status of the Midjourney task using the "Get Midjourney URL" node until it is "completed". The "Verify URL Acquisition" node determines whether the task is complete.
5.  **Wait if Not Complete:** If the task is not complete, the "Wait for Generation" node pauses the workflow and then retries polling.
6.  **Get Random Image URL:** Takes the `temporary_image_urls` from the `output` of Midjourney's result, and randomly takes one url from the array as the initial image for the 3D view conversion.
7.  **Generate 3-View Image:** Uses the GPT-4o-Image API to create a 3-view orthographic projection (front, side, back) of the generated image.
8.  **Extract Image URL from GPT-4o Response:** Since the reponse are chunked as stream data, use Javascript code to combine all the chunks, and use regex matching to extract the image url.
9.  **Final Output:** If the image url is successfully extracted, the image url will be returned; otherwise, re-generate a 3-view image.

## Services:

-   Midjourney API (via piapi.ai)
-   GPT-4o-Image API (via piapi.ai)

## Hashtags:

#n8n #automation #midjourney #GPT4o #3Dfigurine #orthographicViews
