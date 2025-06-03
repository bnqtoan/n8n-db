[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.crypto.md "Edit this page")

# Crypto[#](#crypto "Permanent link")

Use the Crypto node to encrypt data in workflows.

## Actions[#](#actions "Permanent link")

*   [**Generate** a random string](#generate-parameters)
*   [**Hash** a text or file](#hash-parameters) in a specified format
*   [**Hmac** a text or file](#hmac-parameters) in a specified format
*   [**Sign** a string](#sign-parameters) using a private key

## Node parameters[#](#node-parameters "Permanent link")

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

Node parameters depend on the action you select.

### Generate parameters[#](#generate-parameters "Permanent link")

*   **Property Name**: Enter the name of the property to write the random string to.
*   **Type**: Select the encoding type to use to generate the string. Choose from:
    *   **ASCII**
    *   **BASE64**
    *   **HEX**
    *   **UUID**

### Hash parameters[#](#hash-parameters "Permanent link")

*   **Type**: Select the hash type to use. Choose from:
    *   **MD5**
    *   **SHA256**
    *   **SHA3-256**
    *   **SHA3-384**
    *   **SHA3-512**
    *   **SHA385**
    *   **SHA512**
*   **Binary File**: Turn this parameter on if the data you want to hash is from a binary file.
    *   **Value**: If you turn off **Binary File**, enter the value you want to hash.
    *   **Binary Property Name**: If you turn on **Binary File**, enter the name of the binary property that contains the data you want to hash.
*   **Property Name**: Enter the name of the property you want to write the hash to.
*   **Encoding**: Select the encoding type to use. Choose from:
    *   **BASE64**
    *   **HEX**

### Hmac parameters[#](#hmac-parameters "Permanent link")

*   **Binary File**: Turn this parameter on if the data you want to encrypt is from a binary file.
    *   **Value**: If you turn off **Binary File**, enter the value you want to encrypt.
    *   **Binary Property Name**: If you turn on **Binary File**, enter the name of the binary property that contains the data you want to encrypt.
*   **Type**: Select the encryption type to use. Choose from:
    *   **MD5**
    *   **SHA256**
    *   **SHA3-256**
    *   **SHA3-384**
    *   **SHA3-512**
    *   **SHA385**
    *   **SHA512**
*   **Property Name**: Enter the name of the property you want to write the hash to.
*   **Secret**: Enter the secret or secret key used for decoding.
*   **Encoding**: Select the encoding type to use. Choose from:
    *   **BASE64**
    *   **HEX**

### Sign parameters[#](#sign-parameters "Permanent link")

*   **Value**: Enter the value you want to sign.
*   **Property Name**: Enter the name of the property you want to write the signed value to.
*   **Algorithm Name or ID**: Choose an algorithm name from the list or specify an ID using an [expression](../../../../code/expressions/).
*   **Encoding**: Select the encoding type to use. Choose from:
    *   **BASE64**
    *   **HEX**
*   **Private Key**: Enter a private key to use when signing the string.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Conversational Interviews with AI Agents and n8n Forms**

by Jimleuk

[View template details](https://n8n.io/workflows/2566-conversational-interviews-with-ai-agents-and-n8n-forms/)

**Analyze Crypto Markets with the AI-Powered CoinMarketCap Data Analyst**

by Don Jayamaha Jr

[View template details](https://n8n.io/workflows/3425-analyze-crypto-markets-with-the-ai-powered-coinmarketcap-data-analyst/)

**Send a ChatGPT email reply and save responses to Google Sheets**

by n8n Team

[View template details](https://n8n.io/workflows/1898-send-a-chatgpt-email-reply-and-save-responses-to-google-sheets/)

[Browse Crypto integration templates](https://n8n.io/integrations/crypto/), or [search all templates](https://n8n.io/workflows/)