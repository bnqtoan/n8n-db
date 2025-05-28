# YouTube to Spotify Playlist Sync

## Use cases:

-   **Automated Playlist Updates:** Automatically add songs from a YouTube playlist to a Spotify playlist, ensuring your Spotify playlist stays updated with your favorite YouTube music content.
-   **Cross-Platform Music Management:**  Manage your music across YouTube and Spotify without manually searching and adding tracks.
-   **Discover New Music:** Add the most recent music releases from a YouTube music channel that you follow to one of your playlists

## How it works:

1.  **Trigger:** The workflow starts when you manually click ‘Test workflow’.
2.  **Get Spotify Tracks:** Retrieves all tracks from a specified Spotify playlist.
3.  **Get YouTube Tracks:** Fetches all tracks from a specified YouTube playlist.
4.  **Loop Over YouTube Items:** Iterates through each track in the YouTube playlist.
5.  **Extract IDs:** Extracts the IDs of both spotify and youtube tracks
6.  **Compare Datasets:** Compares the extracted IDs to identify tracks that exist in the YouTube playlist but not in the Spotify playlist.
7.  **Add New Tracks to Spotify:** Adds the identified tracks to the specified Spotify playlist.

## Services:

-   YouTube
-   Spotify

## Hashtags:

#n8n #automation #spotify #youtube #playlistSync
