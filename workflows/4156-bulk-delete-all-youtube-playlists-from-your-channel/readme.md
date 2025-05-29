# 🧹 Delete all playlists from a YouTube channel

## Use cases:

-   **YouTube Channel Management:** Regularly clean up and remove outdated or irrelevant playlists from a YouTube channel.
-   **Account Transition:** Prepare a YouTube channel for a new owner or content direction by deleting all existing playlists.
-   **Content Restructuring:** Remove all playlists to reorganize and categorize content more effectively.

## How it works:

The workflow starts with a manual trigger, initiated by clicking "Test workflow." It then proceeds as follows:

1.  **When clicking ‘Test workflow’**: This node triggers the workflow execution.
2.  **Get all playlists**: This YouTube node retrieves all playlists from the connected YouTube channel using the provided credentials. It fetches the 'id' of each playlist.
3.  **Remove playlist**: This YouTube node iterates through each playlist ID obtained in the previous step and deletes the corresponding playlist from the YouTube channel.

**🚨 BE CAREFUL: EXECUTING THIS WORKFLOW CAUSES IRREVERSIBLE ACTIONS: YOU CANNOT RECOVER THE DELETED PLAYLISTS**

## Services:

-   YouTube API

## Hashtags:

#n8n #YouTube #Automation #PlaylistManagement #ContentCleanup
