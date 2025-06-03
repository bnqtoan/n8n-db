[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.jwt.md "Edit this page")

# JWT[#](#jwt "Permanent link")

Work with JSON web tokens in your n8n workflows.

Credentials

You can find authentication information for this node [here](../../credentials/jwt/).

## Operations[#](#operations "Permanent link")

*   Decode
*   Sign
*   Verify

## Node parameters[#](#node-parameters "Permanent link")

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

*   **Credential to connect with**: Select or create a [JWT credential](../../credentials/jwt/) to connect with.
*   **Token**: Enter the token to **Verify** or **Decode**.
*   If you select the **Sign** operation, you'll also have this parameter:
    *   **Use JSON to Build Payload**: When turned on, the node uses JSON to build the claims. The selection here influences what appears in the Payload Claims section.

## Payload Claims[#](#payload-claims "Permanent link")

The node only displays payload claims if you select the **Sign** operation. What you see depends on what you select for **Use JSON to Build Payload**:

*   If you select **Use JSON to Build Payload**, this section displays a JSON editor where you can construct the claims.
*   If you don't select **Use JSON to Build Payload**, this section prompts you to **Add Claim**.

You can add the following claims.

### Audience[#](#audience "Permanent link")

The **Audience** or `aud` claim identifies the intended recipients of the JWT.

Refer to ["aud" (Audience) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3) for more information.

### Expires In[#](#expires-in "Permanent link")

The **Expires In** or `exp` claim identifies the time after which the JWT expires and must not be accepted for processing.

Refer to ["exp" (Expiration Time) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4) for more information.

### Issuer[#](#issuer "Permanent link")

The **Issuer** or `iss` claim identifies the principal that issued the JWT.

Refer to ["iss" (Issuer) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1) for more information.

### JWT ID[#](#jwt-id "Permanent link")

The **JWT ID** or `jti` claim provides a unique identifier for the JWT.

Refer to ["jti" (JWT ID) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7) for more information.

### Not Before[#](#not-before "Permanent link")

The **Not Before** or `nbf` claim identifies the time before which the JWT must not be accepted for processing.

Refer to ["nbf" (Not Before) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.5) for more information.

### Subject[#](#subject "Permanent link")

The **Subject** or `sub` claim identifies the principal that's the subject of the JWT.

Refer to ["sub" (Subject) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.2) for more information.

## Node options[#](#node-options "Permanent link")

### Decode node options[#](#decode-node-options "Permanent link")

The **Return Additional Info** toggle controls how much information the node returns.

When turned on, the node returns the complete decoded token with information about the header and signature. When turned off, the node only returns the payload.

### Sign node options[#](#sign-node-options "Permanent link")

Use the **Override Algorithm** control to select the algorithm to use for verifying the token. This algorithm will override the algorithm selected in the credentials.

### Verify node options[#](#verify-node-options "Permanent link")

This operation includes several node options:

*   **Return Additional Info**: This toggle controls how much information the node returns. When turned on, the node returns the complete decoded token with information about the header and signature. When turned off, the node only returns the payload.
*   **Ignore Expiration**: This toggle controls whether the node should ignore the token's expiration time claim (`exp`). Refer to ["exp" (Expiration Time) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4) for more information.
*   **Ignore Not Before Claim**: This toggle controls whether to ignore the token's not before claim (`nbf`). Refer to ["nbf" (Not Before) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.5) for more information.
*   **Clock Tolerance**: Enter the number of seconds to tolerate when checking the `nbf` and `exp` claims. This allows you to deal with small clock differences among different servers. Refer to ["exp" (Expiration Time) Claim](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4) for more information.
*   **Override Algorithm**: The algorithm to use for verifying the token. This algorithm will override the algorithm selected in the credentials.

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse JWT integration templates](https://n8n.io/integrations/jwt/), or [search all templates](https://n8n.io/workflows/)