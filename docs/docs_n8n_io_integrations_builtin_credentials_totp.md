[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/totp.md "Edit this page")

# TOTP credentials[#](#totp-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [TOTP](../../core-nodes/n8n-nodes-base.totp/)

## Prerequisites[#](#prerequisites "Permanent link")

Generate a TOTP **Secret** and **Label**.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Secret and label

## Related resources[#](#related-resources "Permanent link")

Time-based One-time Password (TOTP) is an algorithm that generates a one-time password (OTP) using the current time. Refer to [Google Authenticator | Key URI format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format) for more information.

## Using secret and label[#](#using-secret-and-label "Permanent link")

To configure this credential, you'll need:

*   A **Secret**: The secret key encoded in the QR code during authenticator setup. It's an arbitrary key value encoded in Base32, for example: `BVDRSBXQB2ZEL5HE`. Refer to [Google Authenticator Secret](https://github.com/google/google-authenticator/wiki/Key-Uri-Format#secret) for more information.
*   A **Label**: The identifier for the account. It contains an account name as a URI-encoded string. You can include prefixes to identify the provider or service managing the account. If you use prefixes, use a literal or url-encoded colon to separate the issuer prefix and the account name, for example: `GitHub:john-doe`. Refer to [Google Authenticator Label](https://github.com/google/google-authenticator/wiki/Key-Uri-Format#label) for more information.