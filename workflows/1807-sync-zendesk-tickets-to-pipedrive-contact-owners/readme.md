# Zendesk to Pipedrive Comment Sync

## Use cases:

*   **Centralized Communication History:** Automatically add Zendesk ticket comments as notes in Pipedrive, giving sales and customer success teams a complete view of customer interactions in one place.
*   **Improved Collaboration:** Ensure that all relevant customer information, including support conversations, is readily available in Pipedrive for better team collaboration.
*   **Proactive Customer Engagement:** Enable sales teams to proactively address customer concerns identified in Zendesk tickets, leading to stronger customer relationships.

## How it works:

1.  **Trigger:** The workflow is triggered daily at 9:00 AM using a Cron node.
2.  **Get Last Execution Timestamp:** Retrieves the timestamp of the last successful workflow execution using static data.
3.  **Get Updated Zendesk Tickets:** Fetches Zendesk tickets that have been updated since the last execution timestamp using the Zendesk node.
4.  **Filter Email Channels:** Filters tickets, only including those where the communication channel is email.
5.  **Set Search Email:** Sets the "SearchEmail" field to the email address from the ticket.
6.  **Remove Duplicate Emails:** Removes duplicate email addresses to optimize the Pipedrive search.
7.  **Search for Person in Pipedrive:** Searches for a person in Pipedrive based on the email address.
8.  **Rename and Keep Fields:** Renames the Pipedrive ID to "PipeDrivePersonId" and primary email and keeps only those two fields.
9.  **Add Pipedrive Person ID to Zendesk Ticket:** Merges the Pipedrive person ID with the corresponding Zendesk ticket data.
10. **Check if Pipedrive Person ID is Found:** Checks if the Pipedrive Person ID was found or not.
11. **Get Zendesk Ticket Comments:** Retrieves all comments for each Zendesk ticket using the HTTP Request node and the Zendesk API.
12. **Add Comments to Tickets:** Merges the Zendesk ticket data with the retrieved comments.
13. **Process comments per ticket:** Splits the comments to seperate Items for processing.
14. **Split comments to seperate items:** Splits each comment into an individual item for processing.
15. **New Comment Check:** Checks if the Zendesk comment timestamp is newer than the last execution timestamp.
16. **Add Comment to Pipedrive:** Adds the Zendesk comment as a note to the corresponding person in Pipedrive.
17. **Check Processing Done:** Checks if all tickets have been processed, setting the new timestamp when everything is done.
18. **Set New Last Execution Timestamp:** After processing all tickets and comments, it updates the static data with the current timestamp for the next execution.

## Services:

*   Zendesk API
*   Pipedrive API

## Hashtags:

#n8n #automation #zendesk #pipedrive #crm
