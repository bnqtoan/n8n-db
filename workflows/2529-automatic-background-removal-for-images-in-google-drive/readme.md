# Remove Advanced Background from Google Drive Images

## Use cases:

- **E-commerce Product Photos:** Automatically remove backgrounds from product images stored in Google Drive, creating clean, professional visuals for online stores.
- **Marketing Material Creation:** Streamline the process of generating marketing assets by automatically removing backgrounds from images of people or objects.
- **Profile Picture Generation:** Allow users to upload images to a Google Drive folder and automatically generate profile pictures with transparent or solid-color backgrounds.

## How it works:

1.  **Watch for new images:** The workflow starts by monitoring a specified Google Drive folder for newly created image files using the "Watch for new images" node.
2.  **Download Image:** When a new image is detected, it is downloaded from Google Drive using the "Download Image" node.
3.  **Get Image Size:** The "Get Image Size" node determines the dimensions of the downloaded image.
4.  **Split Out:** Splits the Geometry parameters into multiple items.
5.  **Configuration:** The "Config" node sets various parameters like the PhotoRoom API key, background color, padding, output size, input file name, and the destination Google Drive folder URL.
6.  **Merge:** Combines the image data with the configuration settings.
7.  **Loop all over your images:** Splits the incoming data into batches.
8.  **Check which output size method is used:** The "If" node checks if the user wants to keep the original size.
9.  **Remove background:** The workflow calls the PhotoRoom API to remove the background from the image and add padding, using either the original image size or the specified fixed output size in the "Config" node.
10. **Upload Picture to Google Drive:** The processed image (with the background removed) is then uploaded back to a specified Google Drive folder using the "Upload Picture to Google Drive" node.

## Services:

-   Google Drive
-   PhotoRoom API

## Hashtags:

#n8n #automation #googleDrive #imageProcessing #backgroundRemoval
