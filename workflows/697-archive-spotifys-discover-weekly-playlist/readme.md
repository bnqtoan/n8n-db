# Example: Archive Spotify's Discover Weekly playlist

## Use cases:

- **Automatic Music Archiving:**  Automatically saves your "Discover Weekly" playlist to a designated archive playlist on Spotify every week, ensuring you never lose those curated tracks.
- **Playlist Backup:** Creates a backup of your "Discover Weekly" playlist in case it gets accidentally modified or deleted.
- **Personal Music Time Capsule:**  Builds a historical record of your weekly music discoveries, allowing you to revisit past recommendations and track your evolving taste over time.

## How it works:

This workflow automatically archives your Spotify "Discover Weekly" playlist to another playlist called "Discover Weekly Archive". Here's a breakdown:

1.  **Schedule Trigger:** The workflow starts every Monday at 8:00 AM.
2.  **Get Playlists:** Retrieves all your playlists from Spotify.
3.  **Find Archive Playlist & Find Weekly Playlist:** Filters the playlists to identify the "Discover Weekly Archive" and "Discover Weekly" playlists using IF nodes.
4.  **Merge:** Merges the results from the previous two filter nodes so that the workflow can access the archive and weekly playlist information.
5.  **Get Tracks:** Retrieves all tracks from the "Discover Weekly" playlist.
6.  **Save to Archive:** Adds each track from the "Discover Weekly" playlist to the "Discover Weekly Archive" playlist.

## Services:

-   Spotify API

## Hashtags:

#n8n #Spotify #Automation #Playlist #Music
