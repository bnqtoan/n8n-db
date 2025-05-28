# Upload video, create playlist and add video to playlist

## Use cases:

- **Automated Video Content Management:** Automatically upload new videos to YouTube, create a playlist, and add the uploaded video to the playlist, streamlining the content publishing process.
- **Educational Content Organization:** For educators, this workflow can be used to upload lecture videos, automatically create a course playlist, and add the video to the relevant playlist.
- **Marketing Campaign Automation:** Automate the process of uploading promotional videos, creating dedicated playlists for different campaigns, and adding videos to their respective playlists.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" manual trigger is activated.
2.  **Read Binary File:** The "Read Binary File" node reads the video file from the specified path.  The file path needs to be specified in the node.
3.  **Upload Video to YouTube:** The "YouTube" node uploads the video file (accessed via the `data` binary property) to YouTube. It requires the video's title, category ID, and region code.  The workflow will use "n8n" as title, "28" as category Id and "IN" as region code. The OAuth2 credentials for the YouTube API are used for authentication.
4.  **Create YouTube Playlist:** The "YouTube1" node creates a new playlist on YouTube. It also uses the OAuth2 credentials for authentication.  The workflow will use "n8n" as title.
5.  **Add Video to Playlist:** The "YouTube2" node adds the uploaded video (using the video ID obtained from the "YouTube" node's response) to the newly created playlist. The playlist ID needs to be specified in the node. OAuth2 credentials are used for authentication.

## Services:

*   YouTube API

## Hashtags:

#n8n #youtube #automation #video #playlist
