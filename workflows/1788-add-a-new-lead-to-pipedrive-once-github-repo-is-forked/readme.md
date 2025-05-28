# Github Fork to Pipedrive Lead Creation

## Use cases:

*   **Lead Generation:** Automatically create leads in Pipedrive when someone forks a specific GitHub repository.
*   **Track Engagement:** Monitor repository forks and associate them with Pipedrive contacts for better engagement tracking.
*   **Personalized Outreach:** Identify potential customers or collaborators based on their interest in your GitHub projects.

## How it works:

1.  **GitHub Trigger (On fork):** The workflow starts when someone forks a specified GitHub repository.
2.  **Get Github user information:** Get the forkee user information.
3.  **Search forkee in Pipedrive by email:** It searches for the person by the forkee email.
4.  **If person exists (person exists):** Checks if the email exist in pipedrive.
5.  **Create person:** If the person doesn't exist it creates a new person with name and email.
6.  **Set person Id:** Saves the Pipedrive Person Id.
7.  **Create lead:** Creates a new lead in Pipedrive, associating it with the forking user. The lead title includes the repository name and the forker's username.
8.  **Create note with github url:** Adds a note to the lead in Pipedrive, containing the GitHub user's profile URL.

## Services:

*   GitHub
*   Pipedrive

## Hashtags:

#n8n #GitHub #Pipedrive #Automation #LeadGeneration
