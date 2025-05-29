# Email mailbox as Todoist tasks

## Use cases:
- Automatically create tasks in Todoist from important emails (unread or starred) in Gmail.
- Get AI-powered suggestions for email replies and necessary actions directly within your Todoist tasks.
- Keep your inbox clean by automatically marking processed emails as read and closing corresponding Todoist tasks when emails are unstarred.

## How it works:

1.  **Trigger:** The workflow is triggered manually or by schedule, fetching unread and starred emails from your Gmail inbox.
2.  **Fetch Emails:** The "Get Unread From Inbox" and "Get Starred From Inbox" nodes retrieve emails based on their read status and whether they are starred. The "Mark As Read" and "Star" nodes mark emails as read and add a star label, respectively.
3.  **Merge Email Lists:** The "Merge Starred and Unread Messages" node combines the lists of unread and starred emails into a single list for processing.
4.  **Fetch Todoist Tasks:** The "Get Open Tasks" node retrieves open tasks from a specified Todoist project to avoid creating duplicates.
5.  **Enrich tasks with emails:** Enrich emails with existing tasks (node "Enrich Emails With Tasks") and enrich existing tasks with emails (node "Enrich Tasks with Emails")
6.  **AI-Powered Task Creation:** For each email without a matching Todoist task, the workflow uses "Get Full Message" to retrieve the full email content. This content, along with the subject, is passed to the "Summarize Message" node. The AI then generates a task name, description, proposed actions, and a suggested reply. The `OpenAI Chat Model` and `Structure Output Todoist Ready` nodes handle the communication with OpenAI and structure the response to be in correct format.
7.  **Create Task in Todoist:** If the AI provides a valid output, the "Create Todoist Task" node creates a new task in Todoist with the generated information.
8.  **Close Task** If email was unstarred, then close task, assuming that it's done.

## Services:

-   Gmail
-   OpenAI
-   Todoist

## Hashtags:

#n8n #gmail #todoist #automation #emailManagement
