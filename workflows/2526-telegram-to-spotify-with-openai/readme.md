# Play with Spotify from Telegram

## Use cases:

- **Effortless Music Control:** Users can control their Spotify playback directly from Telegram, adding songs, skipping tracks, and resuming playback without switching apps.
- **AI-Powered Music Discovery:** If a user can't recall the exact song title or artist, they can describe it in Telegram, leveraging AI to identify the track for addition to their Spotify queue.
- **Real-time Feedback:** The workflow provides immediate feedback in Telegram, notifying users about the currently playing song or if a requested song is not found.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **OpenAI - Ask about a track:** The message is sent to OpenAI to extract the artist and song name. If the user provides a description instead of the exact name, AI will attempt to identify the song.
3.  **Search track:** The extracted or identified artist and song name are used to search for the track on Spotify.
4.  **If:** Checks if the song was found on Spotify.
    *   If found:
        *   **Add song:** The song is added to the user's Spotify queue.
        *   **Next Song:** Skips to the next song in the queue.
        *   **Resume play:** Resumes Spotify playback.
        *   **Currently Playing:** Gets the currently playing song information.
        *   **Define Now Playing:** Format a now playing message
    *   If not found:
        *   **Not found error message:** A "Song not found" error message is generated.
5.  **Message parser:** Format the error message or the "Now Playing" information.
6.  **Merge:** Merges messages from Telegram Trigger with messages from the search or error cases to answer back to the user from the same chat.
7.  **Return message to Telegram:** Finally, a message is sent back to the user in Telegram, confirming the action or displaying an error.

## Services:

-   Telegram API
-   OpenAI API
-   Spotify API

## Hashtags:

#n8n #automation #Telegram #Spotify #OpenAI
