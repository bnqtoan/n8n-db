# Create a release and get all releases

## Use cases:

- **Automated Release Management:** Streamline the release process by automatically creating new releases in Sentry whenever a specific trigger occurs (e.g., code merge, scheduled event).
- **Release Tracking and Analysis:** Regularly fetch all releases from Sentry to monitor their status, version numbers, and other relevant details for reporting or analysis purposes.

## How it works:

This workflow automates the process of creating a new release in Sentry and then retrieving a list of all releases.

1.  **On clicking 'execute' (Manual Trigger):** The workflow starts when the "Execute Workflow" button is manually clicked in n8n.
2.  **Sentry.io (Create Release):** A new release is created in Sentry using the provided organization slug and project. The version of the release is set to "0.0.1".
3.  **Sentry.io1 (Get All Releases):** After creating the release, the workflow retrieves a list of all releases from Sentry within the specified organization. The `returnAll` parameter is set to `true`, ensuring all releases are fetched.

## Services:

-   Sentry.io

## Hashtags:

#n8n #automation #sentry #releaseManagement #workflow
