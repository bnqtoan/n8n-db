# New Ticket Alerts to Teams

## Use cases:

- Automatically notify a dispatch team in Microsoft Teams when a new ticket is created in ConnectWise, ensuring prompt attention to incoming issues.
- Group similar tickets by company and site, providing a consolidated view of related issues in the Teams notification.
- Prevent duplicate notifications by checking a Redis database for previously sent ticket alerts.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule (every minute from 8 AM to 4 PM, Monday to Friday).
2.  **Get New Tickets:** An HTTP Request node fetches new tickets from ConnectWise based on specific status and board IDs. It retrieves tickets with "New", "New (email)", or "New (portal)" statuses from boards with IDs 25, 26, 1, or 28 and filters out child tickets.
3.  **Add Filterable Parameter:** The Code node transforms the `id` field to string and creates a new field `FilterOnThis` with the same id.
4.  **Query Database:** The Redis node checks if the ticket ID already exists in the Redis database.
5.  **Filter Out Tickets that have already been sent:** The Merge node compares the results from the HTTP Request and Redis nodes. If a ticket ID exists in Redis, it filters out that ticket to prevent duplicate notifications.
6.  **Combine like Companies:** The Code node groups the new tickets by `siteName` and `companyName`, concatenating ticket details (ID and summary) into a single string for each group.
7.  **Teams to Dispatch:** A Microsoft Teams node sends a message to a specified Teams channel, including the ticket type, concatenated ticket details, and company name.
8.  **Log in Redis:** The Redis node logs the ticket ID to prevent future duplicate notifications.

## Services:

-   ConnectWise: Used to fetch new service tickets via HTTP Request.
-   Redis: Used as a database to store processed ticket IDs and prevent duplicate notifications.
-   Microsoft Teams: Used to send alerts to a specific channel.

## Hashtags:

#n8n #automation #ConnectWise #MicrosoftTeams #ticketing
