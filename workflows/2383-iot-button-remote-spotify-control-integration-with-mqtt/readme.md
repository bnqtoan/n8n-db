# IKEA Remote Spotify Controller

## Use cases:

- **Smart Home Music Control:** Control Spotify playback in your smart home using an IKEA 5-button remote, allowing for convenient volume adjustments, play/pause, and track skipping without needing a phone or voice assistant.
- **Dedicated Music Remote:** Repurpose an IKEA remote as a dedicated Spotify controller for a specific device, such as a smart speaker or computer, making it easy to manage music during work or leisure.
- **Customizable Music Actions:** Trigger custom Spotify actions (e.g., play a specific playlist, adjust volume to a preset level) with long presses or other button combinations on the IKEA remote, tailoring the remote's functionality to your specific listening preferences.

## How it works:

1.  **MQTT Trigger:** The workflow starts with an MQTT Trigger node that listens for messages from an IKEA 5-button remote (configured via Zigbee2MQTT) on the topic `zigbee2mqtt/MyIOTButton1234/action`.
2.  **Global Variables:** A "Set" node named "Globals" stores global variables such as the `target_spotify_playback_device_name` and `favorite_playlist_name` so they can be easily referenced throughout the workflow.
3. **Action Router:** A "Switch" node routes to different Spotify actions based on the MQTT message received from the remote.  The switch determines which button was pressed on the IKEA remote based on the `message` property within the JSON payload and branches accordingly.
4.  **Device Activation:** If the target device is not already playing, the workflow retrieves available Spotify devices via the "Spotify API - Get Available Devices" node and activates the target device, then selects and activates the designated playback device.
5.  **Spotify Actions:** Based on the button pressed on the remote, the workflow performs the following actions:
    -   **Volume Up:** Increases the volume by 5% (up to 100%).
    -   **Volume Down:** Decreases the volume by 5% (down to a minimum of 20%).
    -   **Play/Pause:** Toggles between playing and pausing the current track.
    -   **Custom Function 1 (brightness_up_hold):** Sets the volume to 80%, starts the "Discover Weekly" playlist, and then skips to the next song.
    -   **Custom Function 2 (brightness_down_hold):** Retrieves the user's playlists, filters the list to get the `favorite_playlist_name`, and then starts playing it.
    -   **Left Arrow:** goes to the previous track
    -   **Right Arrow:** goes to the next track

## Services:

-   Spotify API
-   MQTT (via Zigbee2MQTT)

## Hashtags:

#n8n #automation #spotify #smarthome #mqtt
