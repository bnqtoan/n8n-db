# Bubble Data Access

## Use cases:

*   **Retrieve User Data from Bubble:** Fetch user profiles or specific user details from a Bubble.io application for use in other n8n workflows or external systems.
*   **Scheduled Data Synchronization:** Regularly extract data from Bubble to create backups or synchronize with other databases.
*   **Trigger Actions Based on Bubble Data:** Use the retrieved data to trigger actions in other applications, such as sending personalized emails or updating CRM records.

## How it works:

1.  The workflow is manually triggered by clicking the "Execute" button in n8n.
2.  The "HTTP Request" node sends a GET request to the specified Bubble.io API endpoint (`https://n8n-lessons.bubbleapps.io/version-test/api/1.1/obj/user`).
3.  The request uses Header Authentication with the credential `Bubble n8n Lessons Token` for authorization.
4.  The "HTTP Request" node retrieves data from the Bubble.io application. The response, containing the user data, can then be used by subsequent nodes in a larger workflow (not defined in this JSON).

## Services:

*   Bubble.io

## Hashtags:

#n8n #Bubble #API #DataExtraction #Automation
