# Product Photography Automation with OpenAI

## Use cases:

- **Automated Product Photography Generation:** Automatically generate professional-looking product photos using AI, saving time and resources on traditional photoshoots.
- **E-commerce Product Listing Enhancement:** Quickly create compelling product images for online stores, improving visual appeal and potentially increasing sales.
- **A/B Testing of Product Visuals:** Generate multiple variations of product photos with different styles and prompts to test which visuals perform best with target audiences.

## How it works:

1.  **Read Image URLs from Google Sheets:** The workflow starts by fetching product image URLs from a specified Google Sheet.
2.  **Download Images:** For each URL, the workflow downloads the corresponding image.
3.  **Analyze Images:** The downloaded image is analyzed using the OpenAI API (gpt-4o-mini) to determine the content of the image and generate a short description.
4.  **Product Photography Prompt:** The image description is used to generate an enhanced prompt for product photography, including instructions for realism, lighting, model positioning, and cinematic effects for the OpenAI image editor.
5.  **Send Image with Prompt to OpenAI:** The original image and the generated prompt are sent to the OpenAI API (gpt-image-1) to edit the image and generate professional product photography.
6.  **Convert Base64 to File:** The base64 response from the OpenAI API is converted into a file format (binary data).
7.  **Upload to Drive:** The generated image file is uploaded to a specified folder in Google Drive.
8.  **Insert Image URL in Table:** The Google Drive link of the uploaded image, the Image-URL and the prompt used are then inserted into a new column of the Google Sheet, along with the original Image URL for reference.

## Services:

-   **Google Sheets:** Used to store product image URLs and the output image URLs.
-   **OpenAI API (gpt-4o-mini):** Used to analyze the existing images and generate a short description for product photography prompt creation.
-   **OpenAI API (gpt-image-1):** Used to generate edited professional product photography.
-   **Google Drive:** Used to store the generated product images.

## Hashtags:

#n8n #automation #productphotography #openai #googlesheets
