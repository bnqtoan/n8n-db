# Telegram Facebook Interest Finder

## Use cases:

-   **Market Research**: Discover potential interests for targeted advertising campaigns on Facebook based on Telegram user input.
-   **Audience Building**: Generate lists of relevant interests for creating custom audiences in Facebook Ads Manager.
-   **Chatbot Integration**: Integrate this workflow into a Telegram chatbot to provide users with on-demand interest suggestions for Facebook advertising.

## How it works:

1.  **Get interest name**: The workflow starts with a Telegram Trigger node, listening for new messages in a specific Telegram chat. It's configured to watch for updates of type "message".
2.  **Check message contents**: The workflow then checks if the message originated from the specified Telegram group and if the message starts with the "#interest" hashtag.
3.  **Extract message**: A Code node extracts the message content from the Telegram message.
4.  **Split Message**: The message is splitted by code node to isolate the keyword after #interest.
5.  **Connect to Graph API**: The extracted keyword is used to query the Facebook Graph API for relevant ad interests. This node uses the `search?type=adinterest` endpoint to find interests matching the provided term.
6.  **Split Interests into a Table**: This node restructures the data received from the Facebook Graph API to be more easily consumed by the next node.
7.  **Get variables**: A Code node parses the Facebook Graph API response and extracts relevant information such as interest name, audience size, path, description, and topic.
8.  **Create a Spreadsheet**: The extracted data is converted into a CSV file using the Spreadsheet File node.
9.  **Send the Spreadsheet file**: Finally, the generated CSV file is sent back to the Telegram chat using the Telegram node.

## Services:

-   Telegram API
-   Facebook Graph API

## Hashtags:

#n8n #automation #facebookads #telegrambot #marketresearch
