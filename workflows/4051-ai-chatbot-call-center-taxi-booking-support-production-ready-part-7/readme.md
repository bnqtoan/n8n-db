# 🫶 Taxi Booking Support

## Use cases:

*   **Automatic Booking Cancellation:** Automatically identify and cancel taxi bookings that have been on hold for too long (e.g., 10 minutes) without confirmation, freeing up resources and improving customer experience.
*   **Callback Scheduling:** Schedule callbacks to customers whose bookings are about to expire, offering assistance and preventing potential service disruptions.
*   **AI-Powered Support:** Use an AI agent to analyze booking statuses and determine appropriate actions, such as cancellation or callback, based on predefined rules and logic.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` that runs every 5 minutes.
2.  **Open Hold Booking:** It queries a PostgreSQL database (`Open Hold Booking`) to find taxi bookings that have been on hold for more than 5 minutes.
3.  **Booking:** The data from the database is then passed to a `Set` node named "Booking", possibly for formatting or further processing.
4.  **AI Agent:** The booking information is sent to an AI agent (`AI Agent`), which analyzes the booking status and determines the next course of action. The AI agent uses a large language model (`xAI @grok-2-1212`) for natural language understanding and decision-making.
5.  **Status Switch:** A `Status Switch` node then directs the workflow based on the AI agent's output.
6.  **Expired Conditionals:** There are two `If` nodes (`If Open Expired`, `If Hold Expired`). One checks if an "Open" booking has expired (TTL 10m) and the other check if a "Hold" booking has expired (TTL 5m).
7.  **Cancellation and Callbacks:** If the booking has expired, the workflow either:
    *   Cancels the booking by updating the PostgreSQL database (`Set Cancel Booking`) and deleting the Google Calendar event (`Delete Event`).
    *   Schedules a callback to the customer via the `Call Back` workflow.

## Services:

*   **PostgreSQL:** Used for storing and managing taxi booking data.
*   **xAI Grok:** Large language model for the AI agent to provide booking support.
*   **Google Calendar:** Used for managing and deleting booking events.

## Hashtags:

#n8n #automation #taxi #booking #support
