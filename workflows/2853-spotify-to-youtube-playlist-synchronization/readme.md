# Spotify to YouTube Playlist Synchronization

## Use cases:

- **Automatic Playlist Mirroring:** Maintain a YouTube playlist that automatically mirrors a Spotify playlist. Any additions, removals, or changes in the Spotify playlist are reflected in the YouTube playlist.
- **Music Discovery and Archiving:** Discover and archive music from Spotify on YouTube, ensuring a backup and an alternative platform for listening.
- **Content Curation:** Curate a YouTube playlist with content sourced from Spotify, enhancing the viewing experience with high-quality music content.

## How it works:

This workflow automates the synchronization of a Spotify playlist to a YouTube playlist. It consists of three main parts:

1.  **Spotify to Database Synchronization**: The workflow fetches tracks from a Spotify playlist and compares them against a Supabase database. New tracks are added to the database, while tracks removed from the Spotify playlist are marked for deletion in the database. The workflow is triggered to check if something changed in the spotify playlist every hour.
2.  **Matching Spotify Tracks to YouTube Videos**: Searches the youtube video for each track in the database in order to add the youtube_video_id. The workflow searches for youtube videos based on the title and the artist, and then compare the duration.
3.  **YouTube Maintenance**: The workflow checks whether a video has been removed from youtube, and updates the id in the database. Also delete all the musics from the youtube playlist.

The youtube_video_id that is not found is flagged as NOTFOUND.

## Services:

-   Spotify API: Retrieves playlist information and tracks.
-   YouTube API: Searches for videos, manages playlists, and adds/removes items.
-   Supabase: Stores and manages the music metadata and synchronization status.
-   Discord: Send a message when a music is added to the playlist, or that no match were found.

## Hashtags:

\#n8n #automation #spotify #youtube #playlistSync
