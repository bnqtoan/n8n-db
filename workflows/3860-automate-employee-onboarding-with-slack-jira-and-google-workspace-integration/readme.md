# OnboardAIgen - Slack x Jira x Drive Onboarding Automation Workflow

## Use cases:

- **Automated Onboarding:** Streamline the onboarding process for new hires by automatically creating Jira tasks, setting up Google Drive folders, and sending welcome messages.
- **Centralized Task Management:** Ensure all onboarding tasks are tracked and assigned appropriately, reducing the risk of missed steps or delays.
- **Improved New Hire Experience:** Provide a seamless and welcoming experience for new employees by automating initial setup and communication.

## How it works:

This workflow automates the onboarding process, triggered either by a new entry in a Google Sheet or a new user joining Slack. Here's a breakdown:

1.  **Trigger:**
    *   **Google Sheets Trigger:** Monitors a Google Sheet for new hire information.
    *   **Slack Trigger:** Activates when a new user joins the Slack workspace.

2.  **Data Extraction and Cleaning:**
    *   **Extract & Clean Hire Data / Extract New Hire Data:** Extracts relevant information about the new hire (name, email, role, etc.) from either Google Sheets or Slack.

3.  **Jira Task Creation:**
    *   **Jira Software:** Creates an onboarding epic in Jira.
    *   **If1:** Conditional logic to proceed if Jira epic creation is successful.
    *   **Subtask Manual Setting:** Defines sub-tasks manually to be created within Jira based on parent Jira ID.
    *   **Task Splitter Code / Task Splitter Code1:** Splits the defined tasks into individual items to be created as sub-tasks in Jira.
    *   **Create Sub-tasks on Jira / Create Sub-tasks for New Hire:** Creates the sub-tasks in Jira.
    *   **Aggregate / Aggregate1:** Aggregates the results of the Jira sub-task creation.
    *   **Merge:** Combines data from Google Sheets, Slack and Jira to pass it to the next stages.

4.  **Google Drive Setup:**
    *   **Get Full Name:** Extracts the full name of the new hire to use as the folder name.
    *   **Create Onboarding Folder on Drive:** Creates a new folder in Google Drive with the new hire's name.
    *   **Copy Onboarding File to New Folder on Drive:** Copies a template onboarding document to the new folder.
    *   **Share New Folder with New Hire's private email to start:** Shares the newly created folder with the new hire's email address.

5.  **Communication:**
    *   **Get New Jira Account Id:** Get the new hire's Jira account ID.
    *   **Read Sheet Data on Hire:** Retrieves data for the specific new hire.
    *   **Write Welcome Email here:** Constructs a personalized welcome email with links to Jira tasks and the Google Drive folder.
    *   **Gmail:** Sends the welcome email to the new hire.
    *   **DM new hire via Slack:** Sends a direct message to the new hire in Slack with a summary of their onboarding tasks and links.
    *   **Slack:** Sends a welcome message to a designated Slack channel.

6.  **Logging:**
    *   **Log "Onboarding started":** Logs the "Onboarding started" status and other info into Google Sheets.
    *   **Get Drive & Jira links:** Get created Drive Folder link, and Jira Epic Link
    *   **Log to Sheets:** Logs key information (employee name, Jira link, Drive link) to a Google Sheet for tracking.

## Services:

-   Google Sheets
-   Slack
-   Jira
-   Google Drive
-   Gmail

## Hashtags:

#n8n #automation #onboarding #hr #workflow
