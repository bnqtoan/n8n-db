# Whatsapp Flows Data Handler

## Use cases:

- **Appointment Scheduling via WhatsApp:** Allow users to book appointments through a WhatsApp chatbot. The workflow decrypts user input, processes the requested date and time, and responds with available slots.
- **Seat Selection for Events/Travel:** Enable users to select specific seats (e.g., for a concert or flight) within a WhatsApp conversation. The workflow extracts seat choices, validates availability, and confirms the selection.
- **Dynamic Chatbot Interactions:** Create a WhatsApp chatbot that adapts its behavior based on user input and screen context, providing a personalized and interactive experience.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a POST request is received at the `/webhook/flow` endpoint via the `Webhook1` node. This request contains encrypted data from WhatsApp Flows.
2.  **Data Preparation:** The `move to base64` node converts the encrypted data components (`encrypted_flow_data`, `encrypted_aes_key`, and `initial_vector`) from base64 strings to binary buffers.
3.  **Decryption:** The `Decryption Code` node decrypts the AES key using a private RSA key. Then, the decrypted AES key is used to decrypt the actual data payload, usually employing AES-GCM.  **Note:** You will need to insert your private key where indicated in the `Decryption Code` node.
4.  **JSON Parsing:** The `Json Parser` node extracts and transforms data from the decrypted payload, parsing key elements such as screen context, date, and flow token.
5.  **Conditional Routing:** The `Switch` node routes the workflow based on the extracted `screen` value (e.g., "APPOINTMENT", "DATE_SELECTION_SCREEN").
6.  **Data Extraction and Transformation:**
    -   For "APPOINTMENT" screen: The `Data Extraction Code` node groups appointment slots by date and returns a summary of available times. The `Encrypt Return` then encrypts the data before sending it back to the user.
    -   For "DATE_SELECTION_SCREEN" screen: The `Data Extraction Code1` node extracts available seats. The `Encrypt Return1` then encrypts the data before sending it back to the user.
7.  **Encryption** Both `Encrypt Return` and `Encrypt Return1` encrypt the returning data. The initial vector is inverted and the data is encrypted using AES-GCM. The authentication tag is appended to the encrypted response and the entire response is encoded in Base64.
8.  **Response:** Finally, the `Respond to Webhook` node (either `Respond to Webhook1` or `Respond to Webhook2`) sends the processed and **encrypted** data back to WhatsApp Flows as a plain text response, completing the interaction.

## Services:

-   WhatsApp Flows
-   Crypto (Node.js library for cryptographic operations)

## Hashtags:

#n8n #whatsapp #automation #encryption #chatbot
