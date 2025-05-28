# Attendee Registration and Onboarding Workflow

## Use cases:

- **Automated Event Registration:** Streamlines the process of registering attendees for a conference or event. When a new registration is received, the workflow automatically adds the attendee to a spreadsheet, creates a user account in a chat platform, and sends a welcome email with login credentials and event details.
- **Session-Specific Channel Assignment:** Automatically assigns attendees to specific chat channels based on the sessions they've registered for, facilitating focused discussions and networking.
- **Personalized Attendee Experience:** Provides a personalized experience by sending welcome emails with tailored session information and login credentials for event platforms.

## How it works:

1.  **Typeform Trigger ("Attendee Registrations"):** The workflow starts when a new attendee registers through a Typeform form.
2.  **Google Sheets ("Add to Sheets"):** The attendee's registration data (name, email, etc.) is appended to a Google Sheet for record-keeping.
3.  **Mattermost ("Create Account"):** A new user account is created in Mattermost, using the attendee's email and a generated username/password.
4.  **Mattermost ("Add to team"):** Adds the user to the Mattermost team.
5.  **Function ("Array to Rows"):** Transforms the array of selected sessions into individual items for further processing.
6.  **Google Sheets ("Get Session Details"):** Retrieves session details from a Google Sheet, mapping session names to relevant data (e.g., Mattermost Channel ID, Google Calendar Event ID).
7.  **Merge ("Merge Data"):** Merges the data from "Array to Rows" and "Get Session Details" nodes based on the session name.
8.  **Mattermost ("Add to channels"):** Adds the newly created user to the Mattermost channels corresponding to the selected sessions.
9.  **Google Calendar ("Add to Event"):** Updates the Google Calendar events for the selected sessions, adding the attendee's email to the event's attendees list.
10. **Gmail ("Welcome Email"):** Sends a welcome email to the attendee, including their Mattermost login credentials, a list of the selected sessions, and Google Calendar event information.

## Services:

*   Typeform
*   Google Sheets
*   Mattermost
*   Google Calendar
*   Gmail

## Hashtags:

#n8n #automation #eventmanagement #attendeeonboarding #workflow
