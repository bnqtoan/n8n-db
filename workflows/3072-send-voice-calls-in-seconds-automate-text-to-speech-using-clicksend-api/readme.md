# Send TTS (Text-to-speech) voice calls

## Use cases:

*   **Appointment Reminders:** Automatically call clients or patients to remind them of upcoming appointments.
*   **Emergency Notifications:** Quickly send voice alerts to a list of phone numbers in case of an emergency.
*   **Delivery Notifications:** Inform customers about the status of their delivery.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits data through the "On form submission" node. This form captures the message body, recipient's phone number, desired voice (male/female), and language for the text-to-speech conversion.
2.  **Send Voice via API:** The "Send Voice" node then takes the data submitted in the form and sends it to the ClickSend API. It formulates an HTTP POST request to the ClickSend `/voice/send` endpoint, including the message body, recipient phone number, voice, and language. The workflow uses HTTP Basic Authentication with ClickSend using the credentials stored previously. ClickSend service converts the text to speech and makes a voice call to the specified number.

## Services:

*   [ClickSend](https://clicksend.com/): Used for sending voice calls using the text-to-speech (TTS) service.

## Hashtags:

#n8n #automation #voicecall #TTS #clicksend
