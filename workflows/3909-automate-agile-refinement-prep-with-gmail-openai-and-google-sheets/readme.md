# My Workflow

## Use cases:

- **Automated Scrum Refinement Preparation:** This workflow automates the process of preparing for a scrum refinement meeting by gathering user stories, validating them against the Definition of Ready (DoR), and collecting feedback from various stakeholders.
- **Backlog Grooming and Prioritization:** It helps in backlog grooming by prioritizing user stories based on predefined criteria and flagging them for refinement based on business, technical, and scrum master feedback.
- **Streamlined Communication with Stakeholders:** The workflow facilitates communication by drafting emails for refinement meetings, sending notifications to stakeholders for approval, and creating drafts for manual adjustments.

## How it works:

1.  **Trigger:** The workflow is triggered manually or by a schedule.
2.  **Calendar Check:** Checks the Scrum Master's calendar for "Refinement Project A."
3.  **Data Retrieval:**
    *   Retrieves Definition of Ready (DoR) criteria and backlog links from Google Drive.
    *   Selects user stories ready for refinement and high-priority "To Do" stories from Google Sheets.
4.  **Data Joining:** Merges the selected user stories into a single list.
5.  **DoR Validation:** Loops through each user story and validates it against the DoR criteria using a Langchain Agent and OpenAI to check if the story meets the criteria.
6.  **Feedback Collection:**
    *   Gathers feedback from a Business Analyst, Development Team, and Scrum Master using Langchain Agents and OpenAI.
    *   Updates Google Sheets with the collected feedback.
7.  **Email Drafting:** Combines the validated and feedback-enriched stories. Drafts an email using OpenAI for the scrum master, asking for approval to send to the attendees.
8.  **Approval and Notification:**
    *   Sends an email to the Scrum Master to approve the drafted content.
    *   Based on the Scrum Master's approval, sends emails to attendees or creates a draft email for manual adjustment.
9.  **Error Handling:** If any error occurs during the process, an error email is sent.

## Services:

*   Google Calendar
*   Google Sheets
*   Google Drive
*   Gmail
*   Langchain Agent
*   OpenAI

## Hashtags:

#n8n #automation #scrum #refinement #agile
