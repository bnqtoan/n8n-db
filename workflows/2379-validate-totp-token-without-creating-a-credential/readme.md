# TOTP VALIDATION (WITHOUT CREATING CREDENTIAL)

## Use cases:

- **Two-Factor Authentication (2FA) Verification:** Validate a TOTP code entered by a user during login to ensure it matches the expected code generated from their secret key, enhancing account security.
- **Transaction Authorization:**  Verify TOTP codes before authorizing sensitive transactions, such as fund transfers or profile changes.
- **Access Control:** Integrate into systems that require time-based access codes for entry, like VPNs or secure rooms, by checking the validity of the provided TOTP.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  **Example Fields:** The "EXAMPLE FIELDS" node sets example values for `totp_secret_example` and `code_to_verify_example`. These values are for testing and should be replaced with actual data in a real-world scenario.
3.  **TOTP VALIDATION (Code Node):** The "TOTP VALIDATION" node contains a Python script that does the following:
    - Decodes the base32 encoded TOTP secret.
    - Generates a TOTP code based on the secret and the current time.
    - Verifies if the generated code matches the input code.
    - Returns a JSON object with a `status` field: `1` if the code is valid, `0` if it's invalid. **Note:** You'll need to modify lines 39 and 40 with your specific context.
4.  **IF CODE IS VALID (If Node):** The "IF CODE IS VALID" node checks the `status` field returned by the "TOTP VALIDATION" node.
    - If the `status` is `1` (valid), the workflow proceeds along the "true" branch.
    - If the `status` is `0` (invalid), the workflow proceeds along the "false" branch.

## Services:

-   None (This workflow relies solely on the n8n Code node and does not directly interact with any external services. However, a real implementation would pull the user's TOTP secret from a database or other storage.)

## Hashtags:

#n8n #TOTP #2FA #Authentication #Security
