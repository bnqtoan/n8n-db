# Telegram channel to Readeck & Hoarder

## Use cases:

- **Automatic saving of links from a Telegram channel to Readeck and Hoarder:** The workflow automatically saves any link posted on a specified Telegram channel to both Readeck and Hoarder services for reading later and archiving, respectively.
- **Scheduled link archiving:** Set a schedule to periodically check the Telegram channel and save new links, ensuring that all shared resources are captured without manual intervention.
- **Centralized link management:** By connecting Telegram to Readeck and Hoarder, users can consolidate their link-saving activities in two dedicated platforms, making it easier to organize and access valuable information.

## How it works:

1.  **Schedule Trigger:** The workflow is initiated based on a defined schedule, such as hourly.
2.  **Telegram Get Updates:** Retrieves recent posts from a Telegram channel using the Telegram Bot API. It requires a Telegram Bot Token and Channel ID, which are defined as environment variables.
3.  **Extract and Filter Telegram Links:** Extracts URLs from the Telegram channel posts, filtering for messages containing hyperlinks.
4.  **Get existing Readeck & Hoarder Links:** The workflow retrieves previously saved links from both Readeck and Hoarder.
5.  **Filter New Links:** Compares the links obtained from the Telegram channel with the existing ones in Readeck and Hoarder, extracting only the new, unsaved links for each service.
6.  **Save Links to Readeck & Hoarder:** The new links are then sent to Readeck and Hoarder using HTTP Request nodes. These nodes use the respective service's API to create new bookmarks. Authentication is handled via API keys stored as environment variables.

## Services:

-   Telegram Bot API
-   Readeck
-   Hoarder

## Hashtags:

#n8n #automation #Telegram #Readeck #Hoarder
