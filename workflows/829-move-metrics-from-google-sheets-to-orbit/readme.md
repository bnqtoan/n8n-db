# Moving metrics from Google Sheets to Orbit

## Use cases:

*   **Centralize community data:** Automatically update Orbit with member information (name, location, tags, t-shirt size) and activities from Google Sheets.
*   **Track community engagement:** Populate Orbit with activities performed by community members, linking back to the original activity source.
*   **Streamline member onboarding:** Simplify the process of adding new members to Orbit by automating data transfer from a Google Sheet.

## How it works:

1.  **Get Members:** The workflow starts by fetching member data (Name, GitHub Username, T-Shirt Size, Location, Tags) from a Google Sheet named "Members."
2.  **Add Members:** This node upserts (updates or inserts) member information into Orbit. It uses the GitHub username as the primary identifier and adds or updates the member's name, t-shirt size, location, and tags.
3.  **Get Activities:** For each member, the workflow searches for their activities in another Google Sheet named "Activities" based on the GitHub username. It uses a lookup operation to find corresponding activity records. The "sheetId" is dynamically retrieved from "Get Members" node.
4.  **Get all members:** Retrieves all members from Orbit.
5.  **Merge:** Merge the activities with member to perform the mapping and ensure the id existence.
6.  **Add Activities:** Finally, the workflow adds the activities to Orbit, linking them to the corresponding member. The activity title and link are extracted from the Google Sheet, and the description is taken from the merged data.

## Services:

*   Google Sheets
*   Orbit

## Hashtags:

#n8n #automation #googleSheets #orbit #communityManagement
