# Monthly Spotify Track Archiving and Playlist Classification

## Use cases:
1.  **Automated Monthly Music Archiving:** Automatically archive your liked Spotify tracks and playlist details to a Google Sheet each month for personal record-keeping.
2.  **Intelligent Playlist Categorization:** Use AI (Claude 3.5) to analyze your tracks and suggest which playlists they should be added to, based on track characteristics and playlist descriptions.
3.  **Personalized Music Organization:** Streamline the process of keeping your Spotify playlists up-to-date with music that fits the vibe, making your listening experience more enjoyable.

## How it works:
1.  **Trigger:** The workflow starts on a monthly schedule using the "Monthly Trigger" node.
2.  **Retrieve Playlists and Tracks:** "Get Playlist" and "Get Tracks" nodes fetch your Spotify playlists and liked tracks, respectively. The "Filter my playlist" node filters the playlists to only include those owned by 'Arnaud'.
3.  **Extract and Prepare Data:** The "Retrieve relevant info" node extracts key details from each track (name, artist, album, etc.). The extracted track information is batched to 100 items in "Batch preparation" to retrieve audio features efficiently from Spotify API. The same happen for playlists with "Playlists informations" node
4.  **Fetch Audio Features:** "Get Track details" uses the Spotify API to retrieve audio features (danceability, energy, tempo, etc.) for each track.
5.  **Combine Track Information:** The "Merge" node combines the extracted track details with the audio features obtained from Spotify.
6.  **Check for Existing Tracks:** "Get logged tracks" reads previously logged tracks from a Google Sheet. The "Excluding logged tracks" node filters out tracks that are already logged to prevent duplicates. And same process for the playlist.
7.  **Log New Tracks:** "Log new tracks" node appends the new track data to your Google Sheet.
8.  **AI Classification Preparation:** "Classify new tracks" node prepares data for classification and aggregate the tracks by 200 to "Aggregate by 200 tracks" for AI classification by Claude 3.5.
9.  **AI Classification:**  "Basic LLM Chain - AI Classification" uses Anthropic's Claude 3.5 Chat Model to analyze the tracks and assign them to your existing playlists. It uses playlist name and description as context to classify each track in the appropriate playlists.
10. **Update Spotify Playlists:** The "Split Out1" node splits the output of the classification to filter empty array and update the spotify playlist with "Spotify" node. The tracks are added to the appropriate playlist according to the AI classification.

## Services:
*   Spotify API
*   Google Sheets
*   Anthropic API (Claude 3.5)

## Hashtags:
#n8n #Spotify #Automation #MusicManagement #AIPlaylist
