# Optimise images uploaded to GDrive

## Use cases:

- **Automated Image Optimization for Websites:** Automatically optimize images uploaded to a specific Google Drive folder, reducing file sizes and improving website loading times.
- **Content Creation Workflow:** Streamline the process of creating marketing materials by automatically optimizing images as they are added to a shared Google Drive folder, saving time and bandwidth.
- **Archiving and Storage Optimization:** Reduce storage costs and improve data management by automatically optimizing image files stored in Google Drive for archival purposes.

## How it works:

This workflow automates the process of optimizing images uploaded to a specific Google Drive folder using TinyPNG. Here's how it works:

1.  **Check GDrive for new images:** The workflow starts with a Google Drive Trigger node that monitors a specified folder for newly created image files.
2.  **Download image:** Once a new image is detected, the Google Drive node downloads the image data.
3.  **Optimise - Send image to TinyPNG:** The image data is then sent to the TinyPNG API, which optimizes the image by reducing its file size. The "Authorization" header needs to be set with a TinyPNG API key.
4.  **Get optimised image from tinyPNG:** The workflow retrieves the optimized image from the URL provided in the TinyPNG API response.
5.  **Google Drive:** Finally, the optimized image is uploaded to a specified folder in Google Drive, where it overwrites the original image.

## Services:

-   Google Drive
-   TinyPNG API

## Hashtags:

#n8n #automation #googleDrive #imageOptimization #tinyPNG
