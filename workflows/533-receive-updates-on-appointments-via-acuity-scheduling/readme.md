# Acuity Scheduling Appointment Trigger

## Use cases:
- Automatically send a welcome email to clients after they schedule an appointment through Acuity Scheduling.
- Create a task in a project management tool (e.g., Asana, Trello) for each new appointment to ensure proper preparation.
- Log new appointments in a Google Sheet for reporting and tracking purposes.

## How it works:
This workflow is triggered when a new appointment is scheduled in Acuity Scheduling. The `Acuity Scheduling Trigger` node listens for the `appointment.scheduled` event.  Upon receiving this event, the workflow will execute any connected nodes (not present in this example but can be easily added).

## Services:
- Acuity Scheduling

## Hashtags:
#n8n #automation #AcuityScheduling #appointments #webhook
