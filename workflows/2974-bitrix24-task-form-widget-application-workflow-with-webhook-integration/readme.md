# Bitrix24 Task Form Widget Application Workflow with Webhook Integration

## Use cases:

1.  **Automatic Installation and Configuration:** Streamlines the installation process of a Bitrix24 application when a user installs it from the Bitrix24 marketplace, handling tasks like registering the application's placement within Bitrix24 (e.g., as a task view tab).
2.  **Task Data Display Widget:** Enables a custom widget within a Bitrix24 task view that fetches and displays task-specific data in a user-friendly format, enhancing task management.
3.  **Centralized Credential Management:** Securely manages and extracts necessary credentials (access tokens, refresh tokens, domain information) required for interacting with the Bitrix24 REST API.

## How it works:

1.  **Webhook Trigger ("Bitrix24 Handler"):** Listens for incoming HTTP POST requests to a specific webhook URL (`/bitrix24/widgethandler.php`) from Bitrix24. This is the entry point for events like app installation or task view requests.
2.  **Credential Extraction ("Extract Credentials"):** Extracts essential credentials and parameters (domain, access token, refresh token, etc.) from the incoming request's query parameters and body. Stores these credentials as variables for later use.
3.  **Event Type Check ("Check Event Type"):** Determines the type of event received (e.g., `ONAPPINSTALL` for app installation or `PLACEMENT` for task view) by inspecting the request body. Sets boolean flags (`isInstallation`, `isInstallationFinished`).
4.  **Installation Flow ("Is Installation?", "If Installation Finished?", "Register Placement", "Set Settings Data", "Save Installation Settings", "Installation Response", "Installation finished Response"):** If the event is an app installation:
    *   Checks if the installation is fully finished
    *   Registers the application's placement as a "TASK\_VIEW\_TAB" using the `placement.bind` REST API method.
    *   Saves the extracted credentials (access token, refresh token, etc.) to a file (`/data/files/hotline_files/widget-app-settings.json`) for persistent storage.
    *   Sends a response back to Bitrix24 to finalize the installation process.
5.  **Task View Flow ("Read Installation Settings", "Extract Installation Settings", "Process Settings", "Has Valid Settings?", "Get Task Data", "Format Task Data", "Task View Response", "Error Response"):** If the event is a task view request:
    *   Retrieves the saved credentials from the settings file.
    *   Merges setting to the request data
    *   Validates if the settings are valid.
    *   Fetches task data using the `tasks.task.get` REST API method, passing the task ID from the `PLACEMENT_OPTIONS`.
    *   Formats the task data into an HTML table.
    *   Sends an HTML response containing the formatted task data to be displayed within the Bitrix24 task view. If any error appears, sends an error response.

## Services:

*   Bitrix24 REST API

## Hashtags:

#n8n #Bitrix24 #automation #widget #taskmanagement
