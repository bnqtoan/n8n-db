# Image-Based Data Extraction API using Gemini AI

## Use cases:

- **Automated Invoice Processing:** Automatically extract key data such as invoice number, date, amount, and vendor details from scanned invoices or images of invoices, eliminating manual data entry.
- **Identity Card Data Extraction:** Extract information like name, date of birth, and ID number from images of identity cards (driver's licenses, passports, etc.) for KYC (Know Your Customer) or verification purposes.
- **Receipt Digitization:** Digitize receipts by extracting relevant information like purchase date, total amount, and merchant name to automate expense tracking and reporting.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a request is sent to the `/data-extractor` webhook endpoint. The request should include the `image_url`, `Requirement` and the `properties` that you want to be returned in a JSON format.
2.  **Get Image from URL:** The workflow retrieves the image from the URL provided in the webhook request body (`image_url`).
3.  **Transform image to base64:** Transform the image to base64 so Gemini API can process it
4.  **Call Gemini API:** The workflow sends the image (in base64 format) to the Gemini API (using the "gemini-2.0-flash-lite" model) along with specific extraction instructions. The instruction is pulled from the webhook request (`Requirement`). The expected response schema is dynamically created from the properties object sent in the Webhook request.
5.  **Edit fields to output required data alone:** The workflow extracts the relevant data from the Gemini API's response, extracting only the text part of the response, and parsing it as a JSON.
6.  **Respond to Webhook:** The workflow sends the extracted data back as a response to the webhook request.

## Services:

-   **Google Gemini API:** Used for image analysis and data extraction.

## Hashtags:

#n8n #automation #imageprocessing #dataextraction #geminiAI
