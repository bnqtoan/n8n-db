# n8n Workflow: Fetching User Data from Facebook Graph API

This workflow retrieves a user's first and last name from the Facebook Graph API.

## Use cases:

*   **User Onboarding:** Retrieve basic user information during a signup process or initial connection to a Facebook application.
*   **Data Enrichment:** Enhance existing user profiles in a CRM or database with Facebook profile data.
*   **Personalized Marketing:** Use first and last names to personalize marketing communications or content.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "On clicking 'execute'" node. This initiates the workflow.
2.  **Facebook Graph API Request:** The "Facebook Graph API" node then sends a request to the Facebook Graph API to retrieve the `first_name` and `last_name` for the user associated with the configured credentials.
3.  **Output:** The workflow outputs the retrieved data (first name and last name).

## Services:

*   Facebook Graph API

## Hashtags:

#n8n #FacebookAPI #Automation #UserData #GraphAPI
