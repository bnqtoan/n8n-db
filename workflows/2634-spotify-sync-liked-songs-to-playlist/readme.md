# Spotify Sync Liked Songs to Playlist

## Use cases:

- **Automated Playlist Maintenance:** Keep a Spotify playlist automatically synchronized with your liked songs, ensuring it always reflects your current music taste.
- **Curated Playlist Creation:** Effortlessly create and maintain playlists based on your liked songs for specific moods or genres.
- **Backup of Liked Songs:** Use a playlist as a backup or mirror of your liked songs, providing an easy way to recover your collection if needed.

## How it works:

The workflow automates the process of syncing your Spotify liked songs to a specified playlist.

1.  **Trigger:** The workflow starts either manually or on a schedule (default: every 24 hours).
2.  **Configuration:** The workflow retrieves the target playlist name from the "Edit set Vars" node (you **MUST** configure the `varplaylistto` variable with the name of your playlist). An internal time variable gets sets.
3.  **Data Retrieval:**
    *   Fetches all your liked songs from Spotify.
    *   Retrieves all playlists from your Spotify account.
4.  **Playlist Identification:** Filters the playlists to find the playlist matching the name specified in the "Edit set Vars" node. If a matching playlist is found, the playlist ID is stored.
5.  **Track Comparison:**
    *   Retrieves all tracks from the identified playlist.
    *   Compares the tracks in your liked songs with the tracks in the playlist.
6.  **Synchronization:**
    *   **Adding Missing Songs:** If there are liked songs not present in the playlist, it adds them to the playlist.
    *   **Removing Old Songs:** If there are songs in the playlist that are no longer in your liked songs, it removes them from the playlist.
7.  **Notification (Optional):** Sends a notification via Gotify (if configured) summarizing the changes made, including the number of songs added and removed, and the duration of the sync. The total amount of added and deleted songs are calculated. The notification is send to gotify.
8.  **Finishing:** The workflow ends, the internal time and the added / deleted songs gets caluclated and the summary will be send to gotify.

## Services:

*   Spotify API
*   Gotify (optional)

## Hashtags:

#n8n #spotify #automation #playlist #music
