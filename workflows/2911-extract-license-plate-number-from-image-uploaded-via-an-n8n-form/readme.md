# Image to License Plate Number

## Use Cases

*   **Automated Parking Systems:** Automatically extract license plate numbers from images captured at parking entrances or exits for billing and access control.
*   **Traffic Monitoring:** Extract license plate information from traffic camera images to monitor vehicle movement and identify potential traffic violations.
*   **Vehicle Inventory Management:** Use images of vehicles to quickly extract license plate numbers for inventory tracking and management in car dealerships or rental companies.

## How it Works

1.  **Form Trigger (FromTrigger):** The workflow starts when a user uploads an image through a form with the field "Image".
2.  **Settings (Settings):** Sets up parameters such as the LLM model and the prompt to extract the license plate number. The model is set to "openai/gpt-4o", and the prompt instructs the LLM to extract only the license plate characters without any additional text.
3.  **Basic LLM Chain (Basic LLM Chain):** Takes the image and the prompt from the previous steps and prepares them for the LLM (Large Language Model). It constructs the prompt with the image using the "HumanMessagePromptTemplate" node.
4.  **OpenRouter LLM (OpenRouter LLM):** Connects with an account to OpenRouter that uses the specified model to analyze the image based on the prompt and extract the license plate number.
5.  **Form Result Page (FormResultPage):** Displays the extracted license plate number in a user-friendly format on a completion page.

## Services

*   **OpenRouter:** A platform that provides access to various LLMs, including OpenAI's GPT models.

## Hashtags

#n8n #automation #licenseplate #imageprocessing #llm
