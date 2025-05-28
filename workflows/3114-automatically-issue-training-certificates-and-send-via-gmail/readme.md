# My Workflow

## Use Cases

*   **Customer Onboarding:** Automatically generate personalized images with customer names and unique identifiers upon registration, then send them via email.
*   **Certificate Generation:** Create certificates with user-specific data (name, unique ID) and email them to users upon completion of a course or achievement of a milestone.
*   **Personalized Marketing:** Enhance marketing emails with dynamically generated images containing user-specific information, potentially improving engagement and conversion rates.

## How it Works

This workflow automates the process of retrieving customer data, generating personalized images, and sending them via email. Here's a breakdown:

1.  **Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2.  **Retrieve Customer Data:** The "Customer Datastore (n8n training)" node fetches customer information.
3.  **Extract Email and Name:** The "Get Email & Name" node extracts the customer's email address and name from the data.
4.  **Generate Unique Identifier:** The "Generate Crypto" node creates a unique identifier (UUID).
5.  **Load Base Image:** The "Load Image" node fetches a base image from a URL (likely requiring configuration within the node itself, details are missing from the JSON).
6.  **Add Text - Name and UUID:** The  "Get Info" node pass the image to "Write Text(name)" node which modifies the image by adding the customer's name and then using "Write Text(uuid)" node adds the UUID to the image. The exact parameters used to modify the images are not available in the JSON.
7.  **Send Email:** The "Send Email" node sends an email, presumably containing the personalized image as an attachment. It utilizes Gmail and requires appropriate credentials.

## Services

*   **n8n Training Customer Datastore (Likely a mock service or placeholder)**: A custom node used for retrieving customer data within the n8n training environment.
*   **Gmail:** Used to send the final email with the personalized image.
*   **HTTP Request:** Used to retrieve a source image via URL.

## Hashtags

#n8n #automation #imagegeneration #email #customization
