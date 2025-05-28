# Spotify Discover Weekly Archiver

## Use cases:

- Automatically back up your Spotify "Discover Weekly" playlist to a separate archive playlist every week.
- Ensure that the archive playlist only contains unique tracks, preventing duplicates from appearing over time.
- Schedule the archiving process to run automatically without manual intervention.

## How it works:

1.  **Schedule Trigger (CRON):** The workflow starts automatically every Monday at 8:30 AM (as configured in the CRON node).
2.  **Get User's Playlists:** Retrieves all playlists owned by the user from Spotify.
3.  **Switch:** Filters the retrieved playlists to identify the "Discover Weekly" and "Discover Weekly Archive" playlists based on their names.  The workflow splits into two branches based on whether the playlist is the Discover Weekly (disc) or Archive (arch) playlist.
4.  **Get Discover Tracks:** Retrieves all the tracks from the "Discover Weekly" playlist.
5.  **Get Archive Tracks:** Retrieves all the tracks from the "Discover Weekly Archive" playlist.
6.  **Merge:** Compares the tracks from both playlists. It identifies tracks that are present in the "Discover Weekly" playlist but *not* in the "Discover Weekly Archive" playlist using the `Combine` mode and checking for non-matching tracks by `track.uri`.
7.  **Check if tracks to add is NOT empty:** Checks if there are any new tracks to add to the archive playlist.
8.  **Add tracks to Archive playlist:** Adds the new, unique tracks to the "Discover Weekly Archive" playlist.
9.  **Further actions (Sticky Note):**  Indicates a placeholder for adding additional nodes to perform further actions, like sending notifications, after archiving.

## Services:

-   Spotify API

## Hashtags:

#n8n #Spotify #Automation #Music #Playlist
