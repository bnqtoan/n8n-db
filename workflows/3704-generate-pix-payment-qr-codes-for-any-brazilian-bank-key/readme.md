# PIX QR Code Generator for payments in Brazil

## Use cases:

- **Automated Payment Collection:** Generate QR codes for customers to make payments easily, especially useful for small businesses or individual sellers using PIX in Brazil.
- **Invoice Generation with QR Codes:** Integrate the workflow into an invoicing system to automatically include a PIX QR code on invoices for faster and more convenient payment processing.
- **Donation Platform:** Generate unique QR codes for each donation campaign, simplifying the donation process for contributors.

## How it works:

1.  **Trigger:** The workflow is initiated by the "Click Test" node, which is a manual trigger.
2.  **PixFieldSend:** The "PixFieldSend" node likely sets up the initial parameters needed for generating the PIX code (details of this node are missing in the provided JSON, requires further info).
3.  **Generate PIX:** The "Generate PIX" node (Code node) is expected to take the input from the previous node, process it, and format it according to the PIX specification for QR code generation.
4.  **QRCodePIX:** The "QRCodePIX" node is an HTTP Request node. It takes the generated PIX data and sends a request to an external service to create the QR code image (URL and method are missing in the provided JSON, requires further info).
5.  **PIXFields:** This Set node receives the response from the QR code generation service ("QRCodePIX") and might extract or format specific data points of the result.

## Services:

-   **PIX (Brazilian Instant Payment System):** This workflow is built around the PIX payment system.
-   **External QR Code Generation Service:** The workflow relies on an external service (accessed through the "QRCodePIX" HTTP Request node) to convert the PIX data into a QR code image.

## Hashtags:

#n8n #automation #PIX #QRCode #BrazilPayments
