# Post to Wallabag

## Use cases:

*   **Automatically save starred articles from Tiny Tiny RSS (TTRSS) to Wallabag:** This workflow allows users to automatically archive articles they've starred in their TTRSS reader to their Wallabag instance for later reading.
*   **Scheduled archival of interesting links:** Users can schedule the workflow to run periodically, ensuring that all starred articles are regularly backed up to Wallabag without manual intervention.

## How it works:

1.  **Authentication with TTRSS:** The workflow begins by authenticating with the TTRSS API to obtain a session ID.
2.  **Fetch Starred Articles:** Using the session ID, the workflow retrieves a list of starred articles from TTRSS.
3.  **Authentication with Wallabag:** The workflow authenticates with the Wallabag API using client ID, client secret, username, and password to obtain an access token.
4.  **Process and Filter Articles:** The workflow processes the list of starred articles, comparing each article's ID to the ID of the last article saved. This uses a Function node to iterate the starred articles and prevent duplicates. It also updates a global static variable to store the ID of the most recent article. Only new articles are forwarded.
5.  **Conditional Check:** An IF node checks if the article ID is valid (not "NaN"). This handles the scenario where no new articles are found.
6.  **Post to Wallabag:** If the article is new, the workflow sends a POST request to the Wallabag API, saving the article's URL along with access token for authentication.

## Services:

*   **Tiny Tiny RSS (TTRSS):** A self-hosted RSS reader.
*   **Wallabag:** A self-hosted read-it-later application.

## Hashtags:

#n8n #TTRSS #Wallabag #Automation #ReadItLater
