# Discord Member Role Filtering and Saving Workflow

## Use cases:

1.  **Discord Community Management:** Automatically identify and extract Discord members with a specific role to perform actions like sending welcome messages, assigning permissions, or including them in specific announcements.
2.  **Member Data Backup:** Regularly export a list of Discord members with a particular role to a Google Sheet for record-keeping, analysis, or integration with other systems.
3.  **Targeted Campaigns:** Filter Discord members based on their role and use this data to trigger targeted marketing or engagement campaigns.

## How it works:

1.  **Trigger:** The workflow is manually triggered by clicking "Test workflow". Alternatively, a webhook can trigger the workflow.
2.  **Setup:** The "Setup: Edit this to get started" node requires user to set up:
    *   `Role ID`: The specific Discord role ID to filter members by.
    *   `Google Sheets URL`: The URL of the Google Sheet used to store and retrieve member IDs. Two sheets must exist on that URL, the first called "Last Member" and the second with any name.
    *   `Discord ID`: The ID of the Discord server (guild) to retrieve members from.
3.  **Get Last ID:** The "Get ID" node fetches the last processed member's ID from a Google Sheet named "Last Member".
4.  **Check for Existing ID:** Checks if there is a ID to process. If not, Get's the first 100 members, if it does, it gets the next 100 members after the last ID.
5.  **Get Members:** The "Get First 100 Members" and "Get next 100 Members after last ID" nodes retrieve members from the Discord server, either the first 100 members, or the next 100 members after the last ID, using the provided Discord ID.
6.  **Merge Members:** The "Merge" node combines the first and next 100 members in a single array.
7.  **Check for more members:** The "Check if we have more members left" node verifies if there are still members to be processed. If there are less than 100, it stops and moves to "We're done".
8.  **Delete Last ID:** The "Delete ID" node deletes the last ID entry from the Google Sheets, to avoid duplication on each run.
9.  **Save ID:** The "SaveID" node then saves the last member's ID from the "Merge" node into the "Last Member" Google Sheet, so it can keep track of who's been processed.
10. **Filter by Role:** The "Filter to only include members with role" node filters members based on the provided "Role ID" from the setup node.
11. **Send Response:** The "Send Response" sends all incoming data.
12. **End:** The "We're done" node ends the execution.

## Services:

*   Discord API
*   Google Sheets API

## Hashtags:

#n8n #discord #googlesheets #automation #membermanagement
