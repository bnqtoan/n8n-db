# Complete Guide to Setting Up and Generating TOTP Codes in n8n 🔐

## Use cases:

- **Two-Factor Authentication (2FA) Code Generation:** Generate TOTP codes for use in 2FA implementations, enhancing the security of logins and transactions.
- **Time-Based Access Control:** Implement time-based access restrictions by generating TOTP codes that are valid for a specific period.
- **Multi-Factor Authentication in Workflows:** Integrate TOTP generation into n8n workflows to add an extra layer of authentication for sensitive operations.

## How it works:

1.  The workflow is triggered manually using the "When clicking ‘Test workflow’" node.
2.  The "TOTP" node generates a Time-Based One-Time Password (TOTP) using the configured credentials (TOTP account). The generated code can then be used in subsequent nodes for authentication or other security-related tasks.

## Services:

-   None (besides the TOTP service within n8n)

## Hashtags:

#n8n #automation #TOTP #2FA #security
