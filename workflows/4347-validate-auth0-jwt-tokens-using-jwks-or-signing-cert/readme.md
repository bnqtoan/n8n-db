# Validate Auth0 Tokens

## Use Cases

- **API Authentication:** Secure your APIs by validating Auth0 JWT tokens in incoming requests before processing them. This ensures that only authenticated and authorized users can access your resources.
- **Webhook Verification:** Verify the authenticity of webhooks received from external services by validating the Auth0 JWT tokens included in the headers.
- **Access Control:** Implement fine-grained access control by decoding the JWT payload and using the claims to determine the user's permissions and restrict access to specific functionalities or data.

## How it Works

This workflow demonstrates two methods for validating Auth0 JWT (JSON Web Token) tokens attached to incoming webhooks:

1.  **Using JWKS (JSON Web Key Set) URI:**
    *   A **Webhook** node listens for incoming HTTP requests.
    *   The **"Using JWK-RSA"** Code node extracts the JWT from the `Authorization` header.  It then uses the `jwks-rsa` library to fetch the public key from the JWKS URI provided by Auth0. The token is verified against this public key.
    *   If the token is valid, the workflow proceeds to the **"Continue with Request"** No-Op node and responds with a `200 OK` via the **"200 OK" Respond to Webhook** node, attaching the decoded JWT payload to the output.
    *   If the token is invalid, the "Using JWK-RSA" node throws an error that is caught and routed to the **"401 Unauthorized" Respond to Webhook** node, which returns a `401` error.

2.  **Using Public Signing Certificate:**
    *   A separate **Webhook** node listens for incoming HTTP requests.
    *   The **"Using Public Cert"** Code node extracts the JWT from the `Authorization` header. It verifies the token directly against the public signing certificate configured within the node.
    *   If the token is valid, the workflow proceeds to the **"Continue with Request1"** No-Op node and responds with a `200 OK` via the **"200 OK1" Respond to Webhook** node, attaching the decoded JWT payload to the output.
    *   If the token is invalid, the "Using Public Cert" node throws an error that is caught and routed to the **"401 Unauthorized1" Respond to Webhook** node, which returns a `401` error.

*   Both code nodes are configured to 'continue on error'. This routes errors (invalid token) to a 401 response, instead of stopping the workflow.

## Services

*   Auth0 (for JWT token generation and JWKS URI/Signing Certificate)

## Hashtags

#n8n #automation #Auth0 #JWT #authentication #APIsecurity
