# Turn on a light and set its brightness

## Use cases:

*   **Remote Light Control:** Turn on and set the brightness of a Philips Hue light remotely, for example, when you're away from home and want to simulate occupancy.
*   **Scheduled Ambiance Setting:** Integrate this workflow into a schedule to automatically adjust the brightness of a light at specific times of the day.
*   **Event-Triggered Lighting:** Trigger the light to turn on and set a specific brightness based on an external event, like receiving an email or a calendar notification.

## How it works:

1.  The workflow starts with a "On clicking 'execute'" node, which is manually triggered.
2.  The "Philips Hue" node then executes, targeting the light with ID "123".
3.  The "Philips Hue" node will turn on the light and set its brightness (`bri`) to 90.

## Services:

*   Philips Hue API

## Hashtags:

#n8n #PhilipsHue #Automation #LightingControl #SmartHome
