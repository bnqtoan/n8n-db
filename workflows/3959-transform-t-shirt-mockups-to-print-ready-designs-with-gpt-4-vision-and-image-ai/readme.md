# Redesign

## Use cases:

- **T-shirt Design Enhancement:** Automatically refine user-submitted T-shirt designs by analyzing existing artwork and generating improved prompts for AI image generation.
- **Artistic Style Transfer:** Take an existing image and transfer its key elements into a new design with enhanced visual and artistic qualities, suitable for various merchandise.
- **Iterative Design Improvement:** Allow users to submit initial design concepts, which are then automatically processed to create progressively refined versions through AI-driven prompt generation.

## How it works:

1.  **Chat Message Trigger:** The workflow starts when a chat message is received via the "When chat message received" node.
2.  **Check if Message contains an image URL:** The workflow verifies whether the chat message starts with "https://". If it does, it proceeds down one path; if not it ends.
3.  **Analyze Image using OpenAI:** The OpenAI node analyzes the image provided via URL.
4.  **AI Agent Prompt Generation:** The AI Agent node creates a refined T-shirt design prompt, based on the image analysis using OpenAI.
5.  **Clean Prompt Output with Code:** The Code node cleans and formats the generated prompt to ensure it is JSON-safe and suitable for image generation APIs. It escapes special characters and removes unwanted formatting.
6.  **Generate New T-Shirt Design:** The OpenAI1 node generates a new T-shirt design based on the cleaned prompt, using OpenAI's image generation capabilities.

## Services:

-   OpenAI: Used for image analysis, and new image generation based on a given prompt.

## Hashtags:

#n8n #automation #AI #tshirtdesign #imagegeneration
