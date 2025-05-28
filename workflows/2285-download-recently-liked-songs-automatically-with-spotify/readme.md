# Spotify Downloads Playlist Automation

## Use cases:

- **Automatic Playlist Management:** Automatically keeps a Spotify playlist named "Downloads" updated with your most recently liked songs, ensuring you always have your newest favorites readily available.
- **Offline Listening:** By keeping the "Downloads" playlist updated, you can easily download the playlist for offline listening, ensuring you always have music available even without an internet connection.
- **Storage Optimization:**  Limits the number of tracks in your "Downloads" playlist to a predefined amount (defaulting to 50), which helps to manage storage space on your device by removing the oldest liked tracks as you like new ones.

## How it works:

1.  **Trigger:** The workflow is triggered on a schedule (defaulting to daily), as defined in the "Schedule Trigger" node.
2.  **Globals:** Sets a global variable "download\_limit" which defines the maximum number of songs to keep in the "Downloads" playlist (default: 50).
3.  **Get All Playlists:** Retrieves all playlists from your Spotify account.
4.  **Check for "Downloads" Playlist:** Checks if a playlist named "Downloads" already exists.
    *   If it **does not exist**, it creates a new playlist named "Downloads".
    *   If it **exists**, it proceeds to aggregate all playlists by their `name` and `uri` to facilitate searching.
5.  **Get "Downloads" Playlist ID:** Retrieves the playlist ID of the "Downloads" playlist using a filter to match the playlist name.
6.  **Get Liked Tracks:** Retrieves your most recently liked tracks from Spotify, limited by the "download\_limit" global variable.
7.  **Filter New Tracks:** Compares the liked tracks with the existing tracks in the "Downloads" playlist, filtering out any tracks that are already present.
8.  **Add Tracks to Playlist:** Adds the newly liked tracks to the beginning of the "Downloads" playlist.
9.  **Remove Oldest Tracks:** If the number of tracks in the "Downloads" playlist exceeds the "download\_limit", it identifies and removes the oldest tracks to maintain the limit.

## Services:

-   Spotify API

## Hashtags:

#n8n #Spotify #Automation #PlaylistManagement #Music
