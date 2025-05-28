# GoToWebinar Management Workflow

## Use cases:

- **Automated Webinar Series Setup:** Automatically create a series of webinars with predefined times and subjects, then update their descriptions for each session.
- **Webinar Information Synchronization:** Keep webinar details consistent across multiple platforms by automatically updating webinar descriptions and other information.
- **Dynamic Webinar Scheduling:** Schedule and update webinar details based on triggers from other systems, allowing for event-driven webinar management.

## How it works:

This workflow automates the creation and updating of webinars in GoToWebinar.

1.  **GoToWebinar (Create):** The workflow starts by creating a new webinar in GoToWebinar. It defines the webinar subject ("Getting started with n8n") and sets the start and end times.
2.  **GoToWebinar1 (Update):** Next, the created webinar is updated using the `webinarKey` obtained from the previous node.  The description of the webinar is updated to "Get started with n8n and create your first automation workflow".
3.  **GoToWebinar2 (Retrieve):** Finally, the workflow retrieves details of the updated webinar using `webinarKey` from the "GoToWebinar1" node. This may be used to confirm the changes and/or for other tasks.

## Services:

-   GoToWebinar

## Hashtags:

#n8n #GoToWebinar #Automation #WebinarManagement #EventAutomation
