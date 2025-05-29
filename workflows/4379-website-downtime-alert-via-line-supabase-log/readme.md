# Website Uptime Monitor and Alert with LLM Summary

## Use cases:

- **Real-time Website Monitoring and Alerting:** Automatically checks website status at regular intervals and sends a LINE message if any site is down, allowing for immediate response to outages.
- **Summarized Downtime Reports with AI:** When a website goes down, an LLM generates a humorous summary of affected sites for the IT team, adding a lighthearted touch to critical alerts.
- **Downtime Data Logging:** Records downtime events in a Supabase database for historical analysis and reporting.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` that runs at a set interval (e.g., every minute).
2.  **Get Monitors:** It uses the `UptimeRobot` node to retrieve a list of monitored websites and their current status from Uptime Robot.
3.  **Filter Down Monitors:** A `Code` node filters the list, identifying websites that are either "May Be Down" (status 8) or "Down" (status 9), excluding a specific monitor with ID 798534759.  It formats a message including the date, time, and names of the affected sites.
4.  **If Down:** An `If` node checks if any servers are down (`server_down = 1`).
5.  **Data Logging (Supabase):** `Loop Over Monitors`, `Filter Status 9` and `Save to Supabase` nodes save websites that are down to Supabase database for historical tracking.
6.  **LLM Message Format:** If websites are down, the `LLM Message Format` node creates a prompt for an LLM to summarize the affected sites with a funny message.
7.  **OpenAI GPT-4o Mini:**  The `OpenAI GPT-4o Mini` node uses the specified prompt to generate a humorous message about the downtime.
8.  **Escape Newlines:**  A `Code` node escapes newline characters in the LLM-generated text to ensure proper formatting in LINE messages.
9.  **Send to LINE:** The `HTTP Request` node sends a LINE message containing the LLM-generated summary to a specified LINE group. The message includes the list of affected websites and the funny wish for the IT team.
10. **Wait 30 Min:** A `Wait` node pauses the workflow for 30 minutes to avoid sending redundant notifications if the issue persists.

## Services:

*   Uptime Robot
*   OpenAI
*   LINE
*   Supabase

## Hashtags:

#n8n #automation #uptime #monitoring #llm
