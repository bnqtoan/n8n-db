# Plex Automatic Throttler

## Use cases:

*   **Automatic Bandwidth Management:** When a Plex user starts streaming content remotely, the workflow can automatically throttle the qBittorrent download speed to ensure smooth streaming and prevent buffering.
*   **Intelligent Download Resumption:** When the Plex user pauses or stops the stream, the workflow automatically disables the throttle, allowing qBittorrent to resume downloading at full speed.
*   **Prioritize Local Network Traffic:** Avoid throttling when Plex streams are on the local network and only engage throttling when a remote user connects.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook node that listens for POST requests from Plex. The Plex Media Server sends these webhooks when specific events occur (e.g., play, pause, resume, stop).
2.  **Global Variables:** The workflow uses a "Set" node to store global variables. This includes connection information to the qBittorrent server: username, password, internal IP address, and port.
3.  **Check if Local:** This step checks if the streaming activity is on the local network by comparing the stream settings to the global variable of local setting.
4.  **Event Type Switch:** The "Switch" node analyzes the Plex webhook payload to determine the specific event type (play, pause, resume, stop).
5.  **Action Based on Event:**
    *   **Play/Resume:** If the stream starts or resumes, the workflow retrieves a cookie from qBittorrent, checks if the throttle is already enabled. If not, it enables the throttle on qBittorrent.
    *   **Pause/Stop:** If the stream pauses or stops, the workflow retrieves a cookie from qBittorrent, checks if the throttle is already enabled. If it is, it disables the throttle on qBittorrent.
6.  **qBittorrent API Interaction:** The workflow uses the HTTP Request node to interact with the qBittorrent Web API. It retrieves session cookies and then uses these cookies to toggle the speed limit mode.

## Services:

*   **Plex Media Server:** Sends webhook notifications about streaming activity.
*   **qBittorrent:** The torrent client whose download speed is being controlled.

## Hashtags:

#n8n #automation #Plex #qBittorrent #bandwidthmanagement
