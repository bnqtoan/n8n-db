[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.totp.md "Edit this page")

# TOTP[#](#totp "Permanent link")

The TOTP node provides a way to generate a TOTP (time-based one-time password).

Credentials

Refer to [TOTP credentials](../../credentials/totp/) for guidance on setting up authentication.

## Node parameters[#](#node-parameters "Permanent link")

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

Configure this node with these parameters.

### Credential to connect with[#](#credential-to-connect-with "Permanent link")

Select or create a [TOTP credential](../../credentials/totp/) for the node to use.

### Operation[#](#operation "Permanent link")

**Generate Secret** is the only operation currently supported.

## Node options[#](#node-options "Permanent link")

Use these **Options** to further configure the node.

### Algorithm[#](#algorithm "Permanent link")

Select the HMAC hashing algorithm to use. Default is SHA1.

### Digits[#](#digits "Permanent link")

Enter the number of digits in the generated code. Default is `6`.

### Period[#](#period "Permanent link")

Enter how many seconds the TOTP is valid for. Default is `30`.

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse TOTP integration templates](https://n8n.io/integrations/totp/), or [search all templates](https://n8n.io/workflows/)