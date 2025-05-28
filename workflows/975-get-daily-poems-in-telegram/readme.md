# Daily poems in Telegram

## Use cases:

*   **Receive a daily dose of poetry:** Get a new poem delivered to your Telegram chat every day.
*   **Discover new poets and poems:** Expand your literary horizons with randomly selected poems.
*   **Share inspiring content:** Easily forward the daily poem to friends or groups to spread inspiration.

## How it works:

1.  **Scheduled Trigger (Cron):** The workflow starts automatically at 10:00 AM every day, as defined by the Cron node.
2.  **Fetch a Random Poem (HTTP Request):** The "HTTP Request" node retrieves a random poem from the Poemist API (`https://www.poemist.com/api/v1/randompoems`).
3.  **Translate the poem (LingvaNex):** The "LingvaNex" node translates the content of the poem to English (Great Britain).
4.  **Send Poem to Telegram (Telegram):** The "Telegram" node formats the poem's title, author, and content into a message and sends it to the specified Telegram chat ID. The message includes the poem's title, the poet's name, and the poem's content.

## Services:

*   [Poemist API](https://www.poemist.com/api/v1/randompoems): Used to retrieve random poems.
*   [Telegram API](https://core.telegram.org/bots/api): Used to send the poem to a Telegram chat.
*   [LingvaNex API](https://lingvanex.com/): Used to translate the poem.

## Hashtags:

#n8n #automation #telegram #poetry #daily
