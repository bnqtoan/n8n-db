# Telegram to GitHub Release Trigger

## Use cases:

- Automatically create a new GitHub release when a specific command is sent to a Telegram bot. This is useful for streamlining the release process.
- Trigger the creation of a GitHub release by specifying the release tag in a Telegram message, allowing for release management directly from Telegram.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a new message is received by a Telegram bot. It listens for messages sent to the bot.
2.  **IF:** The workflow checks if the Telegram message text contains the `/deploy` command. This acts as a filter to ensure only specific messages trigger the release process.
3.  **Set:** If the `/deploy` command is present, this node extracts the version number from the Telegram message. It assumes the message format is like `/deploy <version_number>`.
4.  **GitHub:** Finally, the workflow creates a new release on a specified GitHub repository using the extracted version number as the release tag.

## Services:

-   Telegram
-   GitHub

## Hashtags:

#n8n #Telegram #GitHub #Automation #ReleaseManagement
