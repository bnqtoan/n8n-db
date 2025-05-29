# 🔁 Copy all YouTube playlists from one channel to another

## Use cases:
- Backing up your YouTube playlists to another channel or account.
- Migrating playlists from an old YouTube channel to a new one.
- Creating a mirrored playlist collection across multiple YouTube channels you manage.

## How it works:
1.  The workflow starts with a "When clicking ‘Test workflow’" node, which triggers the workflow manually.
2.  "Get all playlists from origin channel" retrieves all playlists from the specified YouTube channel using the YouTube API.
3.  "Format fields properly" extracts the playlist ID and title from each playlist.
4.  "Loop over playlists" Split the playlists array into single items for further processing
5.  "Get playlist items from original playlist" retrieves all the videos contained in each playlist.
6.  "Remove private items" filters out any private videos from the playlist items.
7.  "Keep only the video id" extracts the video ID from each playlist item.
8.  "Create new playlist in the target channel" creates a new playlist on the target YouTube channel with the same title as the original.
9.  "Keep only the playlist id" extracts the playlist ID for the created playlist.
10. "Join the playlist and video id in the same item" creates and item joining video id and playlist id
11. "Add items to target playlist" adds each video to the newly created playlist on the target channel.

## Services:
- YouTube API

## Hashtags:
#n8n #youtube #automation #playlist #migration
