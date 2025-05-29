# Image-to-3D

## Use cases:

1.  **E-commerce Product Visualization:** Automatically convert 2D product images into 3D models for enhanced customer experience and product showcasing on e-commerce platforms.
2.  **Architectural Design Prototyping:** Generate quick 3D previews of architectural designs from 2D blueprints or sketches for faster iterations and client presentations.
3.  **Digital Asset Creation:** Create 3D models from 2D images for use in games, virtual reality, or augmented reality applications.

## How it works:

1.  **Google Sheets Input:** The workflow starts by fetching a new image URL from a designated Google Sheet using the "Get new image" node. The node filters the sheet to retrieve rows where the "3D RESULT" column is empty, meaning a 3D model hasn't been generated yet.
2.  **Image Data Setup:** The "Set data" node extracts the "IMAGE" column, setting it to the image variable.
3.  **3D Model Creation Request:** It sends this URL to the Fal.run API ("Create 3D Image" node), which uses a generative AI model to convert the 2D image into a 3D model.  The request includes parameters to adjust the quality of the image.
4.  **Status Monitoring:** The workflow then enters a loop to check the status of the 3D model generation. It waits 60 seconds ("Wait 60 sec." node) and queries the Fal.run API ("Get status" node) for the request status.
5.  **Completion Check:** The "Completed?" node checks if the model generation is complete. If not, it loops back to the wait and status check.
6.  **Result Retrieval:** Once the model is complete, the "Get Url 3D image" node retrieves the URL of the generated 3D model using the request ID.
7.  **File processing:** The "Get File 3D image" node get the file (.glb) from url.
8.  **Upload to Google Drive:** The "Upload 3D Image" node save the file into your Google Drive.
9.  **Google Sheets Update:** Finally, the workflow updates the original Google Sheet ("Update result" node) with the URL of the generated 3D model in the "3D RESULT" column, using the row number to map to the correct row.

## Services:

*   Google Sheets
*   Fal.run API
*   Google Drive

## Hashtags:

#n8n #automation #3Dmodeling #AI #imageprocessing
