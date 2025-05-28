# Google Calendar to Slack Status & Philips Hue

## Use cases:

- **Automated "Do Not Disturb" setup:** When a meeting or event starts in your Google Calendar, automatically update your Slack status to indicate you're busy and trigger a Philips Hue light to change color, signaling to others in your physical workspace that you're unavailable.
- **Context-aware Lighting:** Adjust Philips Hue lights based on the type of meeting in your Google Calendar (e.g., different light colors for "Leading," "Managing," or "Personal" events).
- **Dynamic Slack Status Updates:** Keep your Slack status current with your Google Calendar events, providing colleagues with real-time information about your availability and current activity.

## How it works:

1.  **Google Calendar Trigger:** The workflow starts when a Google Calendar event begins (`Event Started` node). It checks the specified calendar (`youremail@domain.com`) every 5 minutes.
2.  **Get Event Details:** Once an event starts, the `Google Calendar` node retrieves the full event details using the event ID.
3.  **Set Custom Color Code:** The `Set CalColor` function node uses the incoming `colorId` property from Google Calendar to assign a custom color label based on a switch statement.
4.  **Update Slack Status:** The `Slack - Status` node updates your Slack status with the event summary as the status text and a custom emoji based on the `calColor` value.
5.  **Switch Based on Calendar Type:** The `Switch` node directs the workflow based on the `calColor` value. It checks if `calColor` starts with "4dw_doing", "4dw_managing", or "4dw_leading" and routes the flow accordingly. If it starts with `4dw_living` it will take route 1, otherwise defaults to route 3
6.  **Control Philips Hue Lights:** Based on the switch outcome, one of the `Light - Busy`, `Light - Personal`, or `Light - Available` nodes makes an HTTP request to specific webhook URLs (`WEBHOOK1`, `WEBHOOK2`, `WEBHOOK3`) to control Philips Hue lights. These webhooks would need to be configured separately to interact with the Philips Hue API.

## Services:

-   Google Calendar
-   Slack
-   Philips Hue (via Webhooks)

## Hashtags:

#n8n #automation #googlecalendar #slack #philipshue
