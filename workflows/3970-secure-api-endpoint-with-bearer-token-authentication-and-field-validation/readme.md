# Secure Webhook

## Use cases:

- **API Endpoint Security:** Secure your API endpoints by validating incoming requests with a Bearer token and ensuring required fields are present.
- **Form Submission Validation:** Protect your form submissions by validating the presence of required fields, preventing incomplete or malicious data from being processed.
- **3rd-Party Service Integration:** Securely integrate with third-party services by authenticating requests and validating the incoming data structure.

## How it works:

1.  **Webhook:** Receives incoming POST requests at the specified path (`/secure-webhook`).
2.  **Configuration:** Defines the expected Bearer token (`config.bearerToken`) and the required fields in the request body (`config.requiredFields`). The bearer token is "123".
3.  **Check Authorization Header:** Verifies the `Authorization` header against the configured Bearer token.
4.  **Has required fields?:** Checks if the request body contains all the fields specified in `config.requiredFields`.
5.  **Check Valid Request:** uses result from **Has required fields?**
6.  **Error Handling:**
    -   `401 Unauthorized`: Returns a `401` error if the Bearer token is missing or invalid.
    -   `400 Bad Request`: Returns a `400` error if any required fields are missing from the request body.
7.  **Add workflow nodes here:** Here you can add workflow nodes to process the request.
8.  **Create Response:** Creates a JSON response.
9.  **200 OK:** Returns a `200 OK` response with a success message if the request is valid and all required fields are present.

## Services:

- None (relies on n8n's built-in nodes and functionality)

## Hashtags:

#n8n #webhook #security #authentication #validation
