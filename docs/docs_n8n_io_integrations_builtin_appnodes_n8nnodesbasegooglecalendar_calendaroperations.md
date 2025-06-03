[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/calendar-operations.md "Edit this page")

# Google Calendar Calendar operations[#](#google-calendar-calendar-operations "Permanent link")

Use this operation to check availability in a calendar in Google Calendar. Refer to [Google Calendar](../) for more information on the Google Calendar node itself.

## Availability[#](#availability "Permanent link")

Use this operation to check if a time-slot is available in a calendar.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Google Calendar credentials](../../../credentials/google/).
*   **Resource**: Select **Calendar**.
*   **Operation**: Select **Availability**.
*   **Calendar**: Choose a calendar you want to check against. Select **From list** to choose the title from the dropdown list or **By ID** to enter a calendar ID.
*   **Start Time**: The start time for the time-slot you want to check. By default, uses an expression evaluating to the current time (`{{ $now }}`).
*   **End Time**: The end time for the time-slot you want to check. By default, uses an expression evaluating to an hour from now (`{{ $now.plus(1, 'hour') }}`).

### Options[#](#options "Permanent link")

*   **Output Format**: Select the format for the availability information:
    *   **Availability**: Returns if there are already events overlapping with the given time slot or not.
    *   **Booked Slots**: Returns the booked slots.
    *   **RAW**: Returns the RAW data from the API.
*   **Timezone**: The timezone used in the response. By default, uses the n8n timezone.

Refer to the [Freebusy: query | Google Calendar](https://developers.google.com/calendar/api/v3/reference/freebusy/query) API documentation for more information.