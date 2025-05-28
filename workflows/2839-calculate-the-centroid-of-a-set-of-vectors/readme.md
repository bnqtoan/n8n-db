# Calculate the Centroid of a Set of Vectors

## Use cases:

1.  **Geographic Analysis:** Determine the average location (centroid) of a set of GPS coordinates.  This could be used to find the center point of a cluster of customers, incidents, or resources.
2.  **Image Processing:** Calculate the centroid of a group of feature points in an image.  This can be useful for object tracking or image registration.
3.  **Robotics and Path Planning:**  Find the center of mass of a set of points representing obstacles or targets in a robot's environment, aiding in path planning.

## How it works:

1.  **Receive Vectors (Webhook):** The workflow starts with a webhook that listens for a GET request at the `/centroid` endpoint. It expects an array of vectors passed as a query parameter named `vectors`.  Example: `https://your-n8n-instance/webhook/centroid?vectors=[[2,3,4],[4,5,6],[6,7,8]]`
2.  **Extract & Parse Vectors (Set):** The 'Extract & Parse Vectors' node extracts the `vectors` parameter from the query string of the GET request. It saves the content of the `vectors` query parameter to an array that will be use for the next steps.
3.  **Validate & Compute Centroid (Code):** This node validates that the input is a valid array of vectors (arrays of numbers) and that all vectors have the same dimension.  If the input is valid, it calculates the centroid by averaging each dimension across all vectors.  If there are errors, it returns an error message.
4.  **Return Centroid Response (Respond to Webhook):** The final step is to send the calculated centroid (or an error message) back to the client that made the original request via the webhook response.

## Services:

*   None (This workflow relies solely on n8n's built-in nodes and capabilities.)

## Hashtags:

#n8n #automation #webhook #centroid #vector
