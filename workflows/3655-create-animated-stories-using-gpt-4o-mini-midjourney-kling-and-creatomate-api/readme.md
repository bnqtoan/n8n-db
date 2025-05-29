# Create Animated Stories using GPT-4o-mini, Midjourney, Kling and Creatomate API

## Use cases:

- **Children's Book Animation:** Automatically generate animated stories for children based on a consistent style, character, and situation. This can be used by educators or parents to create engaging content.
- **Social Media Content Creation:** Create short, engaging animated clips for social media platforms to promote products, services, or ideas. The workflow leverages AI to generate storyboards and animate them quickly.
- **Personalized Story Generation:** Allow users to input their own character, style, and situational keywords to generate personalized animated stories for entertainment or educational purposes.

## How it works:

1. **Basic Parameters:** The workflow starts by defining basic parameters like API keys, desired style, character description, and situational keywords using a "Set" node. These parameters provide a foundation for the story and visual elements.
2. **GPT-4o-mini Prompt Generation:** The workflow uses the "GPT-4o-mini Generate Image Scenario Prompt" node, which sends these parameters to the GPT-4o-mini model via an HTTP request.  GPT-4o-mini generates a short story divided into three sections, including a title and three prompts to generate the story visually.
3. **Midjourney Image Generation:** Using the prompts generated in step 2, the workflow sends each of the three prompts to the Midjourney API through the "Midjourney Generator of the First/Second/Third Image" nodes.  The API key is retrieved from the initial parameters.  These nodes trigger the creation of three distinct images.
4. **Image Status Verification:** The workflow then polls the Piapi.ai API using "Get Task of the First/Second/Third Image" nodes to check the status of each image generation task. The "Wait" nodes pause the execution until the image generation is complete or fails.
5. **Image URL Retrieval:** Once an image generation task is "completed", the corresponding "Get the First/Second/Third Image URL" node extracts the generated image URLs.
6. **Kling Video Generation:** The workflow now takes the three images and sends them to the Kling API through "Generate the First/Second/Third Video" nodes. The API generates short videos.
7. **Video Status Verification:** similar to image generation, the workflow checks the status using  "Get the First/Second/Third Video Task" nodes.
8. **Video URL Retrieval:** Once an video generation task is "completed", the corresponding "output1/output2/Get the Third Video URL" node extracts the generated video URLs.
9. **Final Video Combination:** The workflow then uses the Creatomate API to combine the three generated videos into a final animated story. The "Final Video Combination" node sends a POST request to Creatomate with the URLs of the three videos and the title from GPT-4o-mini to creat a final video. The API key is retrieved from the initial parameters.
10. **Output:** The final video URL is the output of the workflow.

## Services:

- **Piapi.ai API:** Used as a facilitator to call other services, namely Midjourney, Kling and GPT-4o-mini.
- **Midjourney API:** Generates images based on prompts.
- **GPT-4o-mini:** Generates the prompts that represent the story.
- **Kling:** Generate the videos based on the images.
- **Creatomate API:** Combines individual video clips into a final video.

## Hashtags:

#n8n #automation #animatedstories #AI #workflow
