# Team Activity Summarizer and Weekly Report Generator

## Use Cases

- **Team Performance Monitoring:** Automatically generate weekly reports summarizing team activity, highlighting achievements, challenges, and overall engagement within the team's communication channel.
- **Project Retrospectives:** Quickly recap key discussions, decisions, and outcomes from a project's communication history, facilitating effective retrospective meetings.
- **Onboarding New Team Members:** Provide new team members with a summarized overview of recent team activities and discussions to quickly get them up to speed.

## How it Works

This workflow automates the process of generating weekly team activity reports from a Slack channel. Here's a breakdown:

1.  **Fetch Slack Messages:** The workflow starts with a scheduled trigger that runs every Monday at 6 AM. It fetches all messages from the specified Slack channel for the past week.
2.  **Group by User and Extract Replies:** The messages are then grouped by user, and the workflow extracts replies to each message thread. This involves nested workflows to manage the complexity of looping through messages and their replies.
3.  **Summarize Threads:** AI is used to summarize each message thread.
4. **Generate Activity Reports for Each Team Member**
With our summarized threads which are grouped per user, we can aggregate them and give them to the AI again to generate a weekly report for the team member. This could include their wins, challenges, learnings or decisions - it really is up to you as to what the report looks like.
5. **Generate Final Report for Whole Team**
In this step, we go one level higher and aggregate all individual team member reports together into a big team report. In this way, the overview can group similar activities and generalise activities in a broader sense. The message output will also be shorter which some may find easier to digest.
6.  **Post Report to Slack:** Finally, the workflow posts the generated team activity report to the designated Slack channel.

## Services

-   **Slack:** Used to fetch channel messages and post the generated report.
-   **Google Gemini:** Used to summarize messages and create the team report.

## Hashtags

#n8n #slack #automation #teamreport #ai
