# N8N Español - NocodeBot

## Use cases

*   **No-Code Tool Information Retrieval:** Users can query the bot for information about specific no-code tools by typing their names. The bot then retrieves the description of the tool from a database (Strapi) and presents it to the user.
*   **Multilingual Support:** The bot automatically translates the tool descriptions into the user's language based on their Telegram language settings.
*   **Welcome Message and Guidance:** New users receive a welcome message with instructions on how to use the bot and examples of available tools to query.

## How it works

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **Welcome Message Check:** The `Saludos-IF` node checks if the message is "/start". If it is, it sends a welcome message via the `S-Telegram2` node.
3.  **HTTP Request (Strapi Data Retrieval):** If the message is not "/start", the `HTTP Request` node sends a request to a Strapi CMS to retrieve data about a No-Code tool. The tool's name is extracted from the user's message.
4.  **Image Delivery:** The `Telegram1` node takes the image URL of the tool and send it to the user.
5.  **Translation:** The `Execute Command` node executes a translation command to translate the tool's description into the user's language (detected from Telegram settings).
6.  **Telegram Response:** Finally, the `Telegram` node sends a formatted message containing the tool's name (in uppercase) and the translated description to the user.

## Services

*   **Telegram:** Used as the primary interface for user interaction and bot communication.
*   **Strapi:** Used as a backend CMS to store and retrieve information about No-Code tools.
*   **Translation service (Likely Google Translate via command line):** Used to translate the descriptions of the No-Code tools.

## Hashtags

#n8n #automation #nocode #telegrambot #translation
