# Onfleet Driver Signup Notification to Slack

## Use cases:

*   **Real-time Driver Onboarding:** Automatically notify the team in a dedicated Slack channel whenever a new driver signs up on Onfleet.
*   **Immediate Awareness:** Keep track of driver onboarding activity without manually checking the Onfleet dashboard.

## How it works:

This workflow is triggered when a new driver is created in Onfleet.  The "Onfleet Trigger" node listens for the `workerCreated` event. Once triggered, it sends a message to a specified Slack channel using the "Slack" node. The Slack message simply states "A new driver has signed up!".

## Services:

*   Onfleet
*   Slack

## Hashtags:

#n8n #Onfleet #Slack #Automation #DriverOnboarding
