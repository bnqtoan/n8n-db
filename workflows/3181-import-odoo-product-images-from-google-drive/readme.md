# Import Odoo Product Images from Google Drive

## Use cases:

- **Automated Product Image Updates:** Automatically update product images in Odoo from a designated Google Drive folder, ensuring that the online store or product catalog always displays the latest visuals.
- **Template Image Management:** Streamline the process of updating template images in Odoo, fetching them from Google Drive and automatically applying them to the corresponding template records.
- **Scheduled Image Synchronization:** Regularly synchronize product and template images between Google Drive and Odoo to maintain consistency across platforms.

## How it works:

1.  **Trigger:** The workflow is triggered either manually or on a schedule (every 10 minutes).
2.  **Find Files:** Searches a specified Google Drive folder ("input" folder in "Middleware" drive) for all files.
3.  **Filter Images:** Filters the files to include only those with ".png" or ".jpg" extensions, ensuring only image files are processed.
4.  **Decorate Images:** Extracts product model and SKU from the image filename (assuming a naming convention like `model_sku.png`).
5.  **Switch:** Routes the workflow based on the `model` field extracted from the image name ("template" or "product").
6.  **Find Templates/Products:** Searches Odoo for a product template or product with a `default_code` matching the SKU extracted from the image name.
7.  **Download Images Templates/Products:** Downloads the image file from Google Drive, storing the binary data.
8.  **Convert Base64 Images Templates/Products:** Convert the binary data to binary property for Odoo use.
9.  **Update Images Templates/Products:** Updates the corresponding product template or product record in Odoo with the downloaded image in various sizes (1920, 1024, 512, 256, 128), using the image_xxx fields.
10. **Search Old Images:** Checks if the image already exists in the "done" folder in "Middleware" drive
11. **Drop Old Images:** Deletes the old image in the "done" folder in "Middleware" drive
12. **Move Images:** Moves the processed image to a "done" folder in the specified Google Drive.
13. **Sum Images:** Summarizes the number of images moved.
14. **Announce:** Sends a message to Google Chat indicating the completion of the image import process, including the total number of images processed.

## Services:

-   Google Drive
-   Odoo
-   Google Chat

## Hashtags:

#n8n #automation #odoo #googleDrive #imageManagement
