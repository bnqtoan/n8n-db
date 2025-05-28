# Dynamically Replace Images in Google Slides

## Use cases:

- **Automated Presentation Updates:** Dynamically update client logos or background images in Google Slides presentations based on data from external sources, such as a CRM or database.
- **Templated Slide Generation:** Generate customized slide decks by replacing placeholder images with specific visuals based on parameters like product IDs or customer segments.
- **Real-time Image Refresh:** Automatically refresh images in live presentations with the latest data visualizations or product shots from a designated image repository.

## How it works:

1.  **Webhook Trigger:** The workflow starts when it receives a POST request to the `/replace-image-in-slide` endpoint. The request body should contain the `presentation_id` (Google Slides presentation ID), `image_key` (unique identifier of the image to be replaced), and `image_url` (URL of the new image).
2.  **Parameter Validation:** The "Check if all params are provided" node verifies that the required parameters (`presentation_id`, `image_key`, and `image_url`) are present in the request body.
3.  **Error Handling:** If any of the required parameters are missing, the workflow executes the "Error Missing Fields" node, which sends a 500 error response with a JSON body indicating the missing fields.
4.  **Retrieve All Slide Elements:** If all parameters are present, the workflow retrieves all slide elements from the specified Google Slides presentation using the Google Slides API.
5.  **Retrieve matching Images ObjectIds:**  This node filters through all slide elements, find all images that match provided image key and extracts the objectId
6.  **Replace Image:**  This node calls the google slides API to replace the image and sets the alt text of the image.
7.  **Success Response:** The "Respond to Webhook" node sends a 200 success response with a JSON body containing a "Image replaced." message.

## Services:

-   Google Slides API
-   n8n

## Hashtags:

#n8n #GoogleSlides #Automation #ImageReplacement #Workflow
