# My Workflow

## Use cases:

- **Image Search Enhancement:** Automatically identify objects within images and index them in Elasticsearch, enabling users to search for images based on the objects they contain (e.g., search for "dog" in a collection of images).
- **Automated Image Tagging:** Automatically tag images with identified objects, improving image organization and discoverability.
- **Content Moderation:** Identify specific objects in images to flag potentially inappropriate content.

## How it works:

1. **Trigger:** The workflow is initiated manually with the "When clicking 'Test workflow'" node.
2. **Set Variables:** Sets predefined variables for the Cloudflare account ID, AI model, source image URL, and Elasticsearch index.  It's crucial to update the `CLOUDFLARE_ACCOUNT_ID` with your own account ID.
3. **Fetch Source Image:** Downloads an image from a specified URL using the HTTP Request node.
4. **Use Detr-Resnet-50 Object Classification:** Sends the image to Cloudflare Workers AI to identify objects within the image using the `detr-resnet-50` model.
5. **Split Out Results Only:** Splits the results from the AI model into individual items, with each item representing a detected object.
6. **Filter Score >= 0.9:** Filters the identified objects, keeping only those with a confidence score of 0.9 or higher.
7. **Fetch Source Image Again:** Downloads the original source image again, this time to prepare for cropping.
8. **Crop Object From Image:** Crops each identified object from the original image based on the bounding box coordinates provided by the AI model.
9. **Upload to Cloudinary:** Uploads the cropped object image to Cloudinary for storage and optimization.
10. **Create Docs In Elasticsearch:** Creates a document in Elasticsearch for each object, indexing its URL (from Cloudinary), source image URL, detected label, and metadata, so you can search by image.

## Services:

- **Cloudflare Workers AI:** Uses Cloudflare's AI service for object classification.
- **Cloudinary:** Uses Cloudinary for image storage and optimization.
- **Elasticsearch:** Uses Elasticsearch as a document store database.

## Hashtags:

#n8n #automation #imageprocessing #objectdetection #elasticsearch
