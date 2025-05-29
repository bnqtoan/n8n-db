# Interview Scheduler

## Use Cases

- **Automated Interview Scheduling:**  Allows candidates to schedule interviews directly through a chat interface, automating the process and reducing manual coordination.
- **AI-Powered Calendar Management:**  Integrates with Google Calendar to check availability and prevent double-booking, ensuring accurate scheduling.
- **Streamlined Candidate Experience:**  Provides a user-friendly and efficient scheduling experience, improving candidate satisfaction.

## How it Works

1.  **Chat Trigger:** The workflow is initiated when a candidate sends a message through a chat interface (e.g., a webhook).
2.  **AI Interview Scheduler:** An AI agent uses the OpenAI Chat Model to interact with the candidate. It asks for necessary information like email, phone number, and preferred date and time, while adhering to predefined rules (e.g., interview duration, time zone). It leverages memory for context using Window Buffer Memory.
3.  **Tools for Availabilty and Date checking:** The AI uses 2 tools:
    *   **Run Get Availability:** - to see the user's google calendar and determine 30 minutes availabilty. It generates timeslots for the next 7 days (weekdays, 9 AM to 5 PM EST). Free slots are determined by comparing generated slots with existing calendar events.
    *   **Check day names:** If the user refers to something like 'next tuesday' the AI uses this tool to determine the date.
4.  **Time Validation:**  If the user confirms a time, then the current date and time is checked against the google calendar times to ensure that the meeting can be booked.
5.  **Confirmation and Google Calendar Integration:** Once the AI agent gathers all required information, it outputs the data as JSON and extracts the relevant interview details, and automatically creates a Google Calendar event for the interview.
6.  **Final Response:** After a succesful booking, the workflow notifies the user with the appointment time.

## Services

-   **OpenAI:** Used for natural language understanding and generating responses in the chat interface.
-   **Google Calendar:** Used to check the interviewer's availability and create new interview events.

## Hashtags

#n8n #automation #interviewscheduling #AI #workflow
