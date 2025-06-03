[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/jwt.md "Edit this page")

# JWT credentials[#](#jwt-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [JWT](../../core-nodes/n8n-nodes-base.jwt/)
*   [Webhook](../../core-nodes/n8n-nodes-base.webhook/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Passphrase: Signed with a secret with HMAC algorithm
*   Private key (PEM key): For use with [Private Key JWT](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authenticate-with-private-key-jwt) with RSA or ECDSA algorithm

## Related resources[#](#related-resources "Permanent link")

Refer to the [JSON Web Token spec](https://datatracker.ietf.org/doc/html/rfc7519) for more details.

For a more verbose introduction, refer to the [JWT website Introduction to JSON Web Tokens](https://jwt.io/introduction). Refer to [JSON Web Token (JWT) Signing Algorithms Overview](https://auth0.com/blog/json-web-token-signing-algorithms-overview/) for more information on selecting between the two types and the algorithms involved.

## Using Passphrase[#](#using-passphrase "Permanent link")

To configure this credential:

1.  Select the **Key Type** of **Passphrase**.
2.  Enter the Passphrase **Secret**
3.  Select the **Algorithm** used to sign the assertion. Refer to [Available algorithms](#available-algorithms) below for a list of supported algorithms.

## Using private key (PEM key)[#](#using-private-key-pem-key "Permanent link")

To configure this credential: 1. Select the **Key Type** of **PEM Key**. 2. A **Private Key**: Obtained from generating a Key Pair. Refer to [Generate RSA Key Pair](https://auth0.com/docs/secure/application-credentials/generate-rsa-key-pair) for an example. 3. A **Public Key**: Obtained from generating a Key Pair. Refer to [Generate RSA Key Pair](https://auth0.com/docs/secure/application-credentials/generate-rsa-key-pair) for an example. 4. Select the **Algorithm** used to sign the assertion. Refer to [Available algorithms](#available-algorithms) below for a list of supported algorithms.

## Available algorithms[#](#available-algorithms "Permanent link")

This n8n credential supports the following algorithms:

*   `HS256`
*   `HS384`
*   `HS512`
*   `RS256`
*   `RS384`
*   `RS512`
*   `ES256`
*   `ES384`
*   `ES512`
*   `PS256`
*   `PS384`
*   `PS512`
*   `none`