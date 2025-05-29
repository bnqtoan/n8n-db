# Voice Receptionist for Appointment Management (tools)

## Use cases:
- **Automated Appointment Scheduling:** Handles incoming calls to schedule appointments without human intervention.
- **Rescheduling and Cancellation:** Allows callers to reschedule or cancel appointments via voice commands.
- **24/7 Availability:** Provides appointment booking services outside of regular business hours.

## How it works:
1.  **Receives Call:** The workflow triggers via a webhook when Vapi receives a call (`Getslot_tool`, `Bookslot_tool`, `Updateslots_tool`, `CancelSlots_tool`, `call_results`).
2.  **Extracts Arguments:** Extracts relevant information (name, email, start time, etc.) from the webhook payload using `Set` nodes like "Input Arguments".
3.  **Checks Availability (Get Slots):**  Checks for available time slots in Google Calendar using the `Google Calendar` node.
4.  **Book Appointment (Book Slot):** If the slot is available and the caller confirms, books the appointment in Google Calendar using the `Google Calendar` node.
5.  **Update Appointment (Update Slot):** To modify the appointment, workflow first checks the avalability with the help of Google Calender and then updates the event with the help of `Google Calender` node.
6.  **Cancel Appointment (Cancel Slot):** workflow removes the event from the calender with the help of `Google Calender` Node.
7.  **Airtable Logging:** Logs appointment details (start time, end time, status, etc.) in Airtable using the `Airtable` node.
8.  **Error Handling:** Includes `If` nodes to check for valid inputs (email, name, etc.) and sends appropriate error responses back to Vapi.
9.  **Call Results Logging**:  Call Results like transcript, recordingUrl, call.summary, cost will be saved in airtable using `Save all information` node.
10. **Returns Response:** Workflow will return a success/ failure message to vapi based on the status of the process.

## Services:
- Google Calendar
- Airtable
- Vapi

## Hashtags:
#n8n #automation #workflow #appointmentScheduling #voiceAI
