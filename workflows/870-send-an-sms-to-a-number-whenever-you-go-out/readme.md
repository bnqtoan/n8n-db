# Send an SMS on Leaving Home

## Use cases:

- **Home Security:**  Receive an SMS notification when someone leaves home, enhancing security monitoring.
- **Family Awareness:** Keep track of when family members leave the house, providing peace of mind, especially for elderly or dependent relatives.
- **Office attendance record:** Automate attendance records for employees leaving the office after work hours.

## How it works:

This workflow is triggered by the "Pushcut Trigger" node, which listens for a specific action named "Leaving Home" from the Pushcut app on a mobile device.  When the action is triggered (e.g., when you physically leave a geofenced area), Pushcut sends a signal to n8n. The "Twilio" node then sends an SMS message to a predefined phone number. The content of the SMS includes the input data ({{$node["Pushcut Trigger"].json["input"]}}) from the Pushcut trigger, allowing for dynamic messages.

## Services:

- **Pushcut:**  A service for triggering actions based on location, time, or other events on iOS devices.
- **Twilio:**  A cloud communications platform that allows sending and receiving SMS messages.

## Hashtags:

#n8n #automation #SMS #Pushcut #Twilio
