# Create a new member, update the information of the member, create a note and a post for the member in Orbit

## Use cases:

- **Community Management:** Automatically create or update member profiles in Orbit when a new user joins a platform like GitHub, streamlining onboarding and community tracking.
- **Content Promotion:** When a member publishes a blog post or article, automatically create a note and a post within Orbit to highlight their contribution and increase engagement.
- **Member Data Enrichment:** Enhance existing member profiles in Orbit by automatically adding tags or updating information based on external triggers or data sources.

## How it works:

1.  **Trigger:** The workflow starts manually "On clicking 'execute'".
2.  **Upsert Member in Orbit:** The "Orbit" node attempts to create or update a member's profile in Orbit based on their GitHub username. It uses the `upsert` operation with the `github` source and looks up the member by their username.
3.  **Update Member Information:** The "Orbit1" node updates the member information on Orbit, specifically adding tags to the member's profile.
4.  **Create a Note:** The "Orbit2" node creates a note for the member in Orbit. The content of the note is currently empty, as the `note` parameter is not populated.
5.  **Create a Post:** The "Orbit3" node creates a post for the member in Orbit, linking to a predefined URL (a blog post about sending SMS with n8n).

## Services:

-   Orbit

## Hashtags:

#n8n #Orbit #CommunityManagement #Automation #MemberEngagement
