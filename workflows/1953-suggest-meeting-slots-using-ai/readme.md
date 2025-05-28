# Email Appointment Scheduler

## Use cases:

- **Automated Meeting Scheduling:** Automatically detect appointment requests in incoming emails, check calendar availability, and propose meeting times to the sender.
- **Intelligent Email Response:**  Generate personalized and context-aware email replies for scheduling meetings, saving time and improving communication efficiency.
- **Efficient Calendar Management:** Keep your calendar up-to-date by quickly processing appointment requests and avoiding manual scheduling conflicts.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a Gmail Trigger node that monitors a specified Gmail inbox for unread emails.
2.  **Classify appointment:**  The "Classify appointment" node uses a text classifier to determine if the incoming email is about scheduling a meeting or a call. It checks both the subject and snippet.
3.  **Agent:** Based on the email content, including sender, subject, and body, the "Agent" node utilizes an email scheduling assistant to propose an appropriate response. It considers the user's availability and aims to find specific meeting times, leaving a 15-minute buffer between meetings.
4.  **Google Calendar:** The "Google Calendar" node retrieves the user's calendar events for the current month, one day in the past, and one month in the future, to check availability.
5.  **Send reply:** This node send the response created by the "Agent" node
6.  **Mark as read:** After sending the reply, the original email is marked as read in Gmail.

## Services:

-   Gmail
-   Google Calendar
-   OpenAI

## Hashtags:

#n8n #automation #email #calendar #scheduling
