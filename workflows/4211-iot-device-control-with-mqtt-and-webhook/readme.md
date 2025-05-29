# IOT control via MQTT and webhook

## Use cases:

*   **Remote Control of Devices:** Users can control devices (e.g., turning on/off lights, fans, or other appliances) connected to an ESP32 microcontroller from a web interface.
*   **Home Automation:** Integrate this workflow into a larger home automation system to trigger actions based on user input from a custom web page.
*   **DIY IoT Projects:** Easily manage and control custom IoT projects that require remote control via a web interface and MQTT communication.

## How it works:

1.  **Webhook Trigger ("IOT control Webhook "):** The workflow is initiated when a webhook receives data from a web page (likely an IoT control panel). The webhook listens for requests on the `/pin-control` path.
2.  **Set Node ("Set data for MQTT message payload"):** The `value` parameter from the webhook's query string is extracted and assigned to a new field called `pin`. This prepares the data to be sent as a message payload. The node is configured to only keep the data it sets and discard any other incoming data.
3.  **MQTT Publish ("MQTT Publish Topic Node"):** The `pin` value from the previous step is used as the message and published to the MQTT topic `pin-control`. This message is then sent to the ESP32 microcontroller to control a GPIO pin based on the received value ("on" or "off").

## Services:

*   **MQTT:**  Used for communication with the ESP32 microcontroller.
*   **Web server:**  A web server is needed to serve the web page with the "on" or "off" button that triggers the webhook.

## Hashtags:

#n8n #MQTT #IoT #Automation #Webhook
