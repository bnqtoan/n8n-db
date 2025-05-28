# Sign Up Workflow

## Use cases

- **Automated User Onboarding:** Automatically create new user entries in a Notion database when they sign up through a webhook.
- **User Semester Assignment:** Automatically assigns a user to the current semester in a Notion database upon sign-up, ensuring accurate record-keeping.
- **Database Synchronization:** Keeps user data in sync between a signup form (via webhook) and a Notion database, including updating semester affiliations.

## How it works

1.  **Webhook Trigger (Sign Up):** The workflow starts when a user submits their information (name and email) via a POST request to the `/sign-up` webhook. The webhook uses basic authentication.
2.  **Extract Data (Extract Name and Email):** Extracts the "name" and "email" fields from the webhook's JSON payload and sets them as variables for subsequent nodes.
3.  **Check if user exists (Merge & Query for User):** Queries the Notion database named "Oasis Hub Production" to check if a user with the provided email already exists.
4.  **Conditional Branching (If user exists):**
    *   **If User Exists (True branch):** If a user with the provided email already exists, fetch user details from Notion for additional processing.
    *   **If User Does Not Exist (False branch):** If a user with the provided email does not exist, a new user entry is created in the Notion database.
5.  **Create User (Create User):** Creates a new page in the Notion database "Oasis Hub Production", populating the "Name" and "Email" properties using the extracted values.
6.  **Fetch Current Semester (Query Current Semester):** Queries another Notion database named "Oasis Hub Production" to determine the ID of the current semester.
7.  **Extract Semester ID (Select Semester ID):** Extracts the ID of the current semester from the Notion query results.
8.  **Prepare Semester IDs (Concatenate Semester IDs):** Combines the current semester ID with any existing semester IDs associated with the user in Notion.
9.  **Update User with Semester (Update Semester for User):** Updates the user's Notion database entry with the combined semester IDs, establishing the relationship between the user and the current semester.

## Services

*   Notion
*   HTTP Webhooks

## Hashtags

#n8n #automation #notion #webhook #useronboarding
