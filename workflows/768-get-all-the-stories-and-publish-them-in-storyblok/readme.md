# Get all the stories starting with `release` and publish them

## Use cases:
*   **Automated Release Publishing:** Automatically publishes all Storyblok stories related to a new release, saving time and ensuring consistency.
*   **Scheduled Content Deployment:** Can be adapted to publish content based on specific naming conventions, facilitating scheduled deployments or content pushes.

## How it works:
1.  **Manual Trigger:** The workflow starts when manually triggered.
2.  **Get Stories from Storyblok:** The `Storyblok` node retrieves all stories from Storyblok (space ID 96940) whose names start with "release" using the Storyblok Management API.
3.  **Publish Stories:** The `Storyblok1` node then publishes each of the retrieved stories using the Storyblok Management API, using the `id` field from the previous node.

## Services:
*   Storyblok

## Hashtags:
#n8n #Storyblok #Automation #ContentManagement #Publishing
