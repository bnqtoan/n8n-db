# 👷‍♂️ Taxi Booking Worker

## Use cases:

- **Automated Taxi Booking:** Enables users to book taxis via a chat interface, streamlining the booking process and reducing the need for manual intervention.
- **Multi-Language Support:** Facilitates taxi bookings for users who speak different languages (English, Chinese, Japanese), providing a localized experience.
- **Calendar Integration:** Automatically creates events in Google Calendar for each booking, helping users keep track of their taxi reservations.

## How it works:

1.  The workflow is triggered either by a "Flow Trigger" or a "Test Trigger" (Langchain Chat Trigger).
2.  Input data is processed through "Input" or "Test Fields" nodes, preparing it for subsequent steps.
3.  The workflow checks if there is a booking by "If Not Zero" node, if not resets the session.
4.  A database query ("Booking" node) retrieves booking details based on the input.
5.  The "If Booking" node checks if a valid booking is found. If a booking is found, it proceeds; otherwise, it outputs an error message.
6.  If a booking exists, the workflow updates the booking status ("Set Open Booking" using Postgres), saves user memory ("Save User Memory" using Postgres), and creates an event in Google Calendar ("Create Event").
7.  After creating the event, the workflow syncs booking information with Google Calendar ("Sync Booking Google Cal" using Postgres).
8.  The workflow resets the session in Redis ("Reset Session").
9.  The workflow deletes provider number and route data from Redis.
10. The "Switch" node determines the user's language and sets a corresponding message.
11. Finally, a "Call Back" workflow is triggered and the Chat is finalized.

## Services:

-   **Google Calendar:** Used to create and manage booking events.
-   **PostgreSQL:** Used to store and manage booking data and user memory.
-   **Redis:** Used for session management, storing provider numbers, and route data.

## Hashtags:

#n8n #automation #taxiBooking #googleCalendar #postgres #redis
