# Basic PDF Digital Sign Service

## Use Cases

- **Secure document signing:** Automate the process of digitally signing PDF documents for legal or compliance purposes.
- **Certificate generation for internal use:**  Generate self-signed certificates for testing or internal application security.
- **Automated document workflow:** Integrate digital signatures into existing document workflows, such as contract approvals or invoice processing.

## How it Works

This workflow provides a basic digital signing service for PDF documents. It handles certificate generation, PDF signing, and file uploads/downloads.

1.  **API Endpoints:** The workflow exposes two API endpoints, `/docu-digi-sign` (POST) and `/docu-download` (GET).
2.  **Request Processing:** The initial `API POST Endpoint` node receives requests and routes them based on the `method` parameter in the request body using a `Switch Operation` node.
    *   **Upload:**  If `method` is "upload", the workflow further checks the `uploadType` (pdfDoc or signKey). It validates the uploaded file data and saves the file to disk (`/data/files/`).
    *   **Key Generation:** If `method` is "genKey", it validates the key generation parameters (subjectCN, issuerCN, serialNumber, validFrom, validTo, password) and then generates a self-signed certificate using the `Generate Keys` node, saving the generated keys to disk.
    *   **PDF Signing:** If `method` is "signPdf", it validates the PDF signing parameters (inputPdf, pfxFile, pfxPassword) and signs the specified PDF document using the specified PFX certificate.
    *   **Download:** If `method` is "download", prepare file name to download.
3.  **Validation:** Each operation (“genKey”, “signPdf”, “upload”) has a dedicated "Validate" code node that check for the required parameters to allow the operation.
4.  **File Handling:** It uses `Convert To File` and `Read/Write File` nodes for file operations.
5.  **Response:** Finally, the workflow prepares a success or error response with details and returns it via `POST Success Response` and `POST Error Response`. The download file action is managed by `GET Respond to Webhook`.

## Services

-   **node-forge:** Used for cryptographic operations like key and certificate generation.
-   **@signpdf/signpdf:** Used for signing PDF documents.
-   **@signpdf/signer-p12:** Used for P12 signing PDF documents.

## Hashtags

#n8n #automation #pdf #digitalsignature #certificate #pfx
