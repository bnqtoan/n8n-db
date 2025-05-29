# Validate Seatable Webhooks with HMAC SHA256 Authentication

## Use cases:

- **Securely receive data from Seatable:**  Ensures that incoming webhook requests from Seatable are authentic and haven't been tampered with, protecting your application from malicious data.
- **Trigger automated processes based on verified Seatable events:**  Initiate workflows only when a Seatable webhook is validated, preventing unauthorized access or execution of actions.
- **Maintain data integrity and security:**  Validates the origin and content of the webhook data before processing it, ensuring the reliability of your n8n workflows.

## How it works:

1.  **Seatable Webhook:** Listens for incoming POST requests on a specified path (`s0m3-d4nd0m-1d`).  The raw request body is captured.
2.  **Calculate sha256:** Calculates an HMAC SHA256 hash of the raw request body using a secret key (which you need to configure in the node).
3.  **hash matches:**  Compares the calculated SHA256 hash with the `x-seatable-signature` header value from the incoming request (after removing the `sha256=` prefix).
4.  **If the hashes match:**
    *   **200:** Responds with an HTTP 200 OK status to Seatable, indicating successful validation.
    *   **Add nodes for processing:**  This placeholder node indicates where you should connect your subsequent workflow logic to process the validated Seatable data.
5.  **If the hashes do not match:**
    *   **403:** Responds with an HTTP 403 Forbidden status, indicating that the webhook is not valid.

## Services:

-   Seatable

## Hashtags:

#n8n #Seatable #Webhook #HMAC #SHA256 #Authentication #Security
