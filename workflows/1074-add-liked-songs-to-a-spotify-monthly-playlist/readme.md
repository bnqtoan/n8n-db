# Monthly Spotify Playlist Automation

## Use cases:

- **Automatic Monthly Playlist Creation:** Automatically creates a new Spotify playlist at the beginning of each month with a name corresponding to the month and year (e.g., "October '24").
- **Database Synchronization:** Keeps a local database (NocoDB) synchronized with Spotify, tracking playlists and liked songs to avoid duplicates.
- **Liked Songs to Playlist Automation:** Adds newly liked songs to the current monthly playlist, ensuring your favorite new discoveries are always readily available.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule, such as every month.
2.  **Get current date:** Uses a `Code` node to determine the current month and year, formatting it into a playlist name (e.g., "October '24").
3.  **Get all user playlist:** Retrieves all existing playlists from your Spotify account using the `Spotify` node.
4.  **Check Playlist Existence (Spotify and NocoDB):** Checks if a playlist with the current month's name already exists in Spotify. If not, it checks if a corresponding playlist entry exists in NocoDB.
5.  **Create Playlist (if needed):** If the playlist doesn't exist in either Spotify or NocoDB, the workflow creates a new playlist in Spotify and a corresponding entry in NocoDB.
6.  **Fetch Liked Songs:** Retrieves your most recently liked tracks from Spotify using the `Spotify` node.
7.  **Check Track Existence (NocoDB):** For each liked track, the workflow checks if it is already saved in the NocoDB database.
8.  **Create Track Entry (if needed):** If the track isn't in NocoDB, a new entry is created, linking it to the current monthly playlist.
9.  **Fetch Current Monthly Playlist Tracks:** Retrieves all the songs in this month's Spotify playlist
10. **Compare Liked songs to the one in the current monthly playlist and add it** If the liked songs isn't in the current monthly playlist, the workflow adds the song.

## Services:

-   **Spotify:** For retrieving liked songs, creating playlists, and adding tracks.
-   **NocoDB:** For storing and checking playlist and track information to prevent duplicates.

## Hashtags:

#n8n #Spotify #Automation #Playlist #NocoDB
