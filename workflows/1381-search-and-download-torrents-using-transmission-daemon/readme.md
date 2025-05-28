# Automated Torrent Download via Telegram

## Use cases:

-   **Automated Movie Downloads:** When a user wants to download a specific movie, they can trigger the workflow via a Telegram message. The workflow automatically searches for the torrent, and if found, downloads it to a specified directory.
-   **Automated TV Show Downloads:** Similar to movies, users can specify a TV show title, and the workflow will search for available torrents and initiate the download process.
-   **Remote Torrent Management:** Users can remotely trigger torrent downloads without needing to directly interact with their torrent client's interface.

## How it works:

1.  **Webhook Trigger (Webhook):** The workflow starts when a POST request is sent to a specific webhook URL. This request contains the title of the film to search for in the `body.title` parameter.
2.  **Search for Torrent (SearchTorrent):** The `SearchTorrent` function uses the 'torrent-search-api' library to search for torrents based on the title received from the webhook. It searches on KickassTorrents and Rarbg and retrieves the top 5 results.
3.  **Check if Torrent is Found (IF):** The workflow checks if any torrents were found in the previous step using an IF node. If `found` is true (torrents were found), it proceeds to download the torrent; otherwise, it sends a "Torrent not found" message.
4.  **Start Download (Start download):**  This node attempts to add the first found torrent to Transmission, a torrent client, using its RPC API. It sends a POST request with the torrent's magnet link to the Transmission server with a predefined `X-Transmission-Session-Id`.
5.  **Handle Potential Session ID Error (IF2):** The Transmission API might return a 409 error if the `X-Transmission-Session-Id` is incorrect or outdated. This `IF2` node checks for this error.
6.  **Update Session ID and Retry (Start download new token):** If a 409 error is detected, this node extracts the new `X-Transmission-Session-Id` from the error response headers and retries the torrent addition request with the updated token.
7.  **Send Telegram Notification (Telegram1):** After successfully starting the download (either initially or after updating the token), a Telegram message is sent to the user to confirm that the download has started. The message includes the original film title from the webhook and the title of the torrent that is being downloaded.
8.  **Send "Not Found" Notification (Torrent not found):** If no torrents were found, a Telegram message is sent to the user to inform them that the specified film was not found.

## Services:

-   **Telegram:** Used for receiving user requests and sending notifications.
-   **Torrent Search API:** Used to search for torrents on various torrent trackers.
-   **Transmission:** A torrent client with an RPC API for remote control.

## Hashtags:

#n8n #automation #torrent #telegram #download
